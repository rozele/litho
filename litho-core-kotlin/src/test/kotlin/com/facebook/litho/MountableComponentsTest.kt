/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.litho

import android.content.Context
import android.graphics.Color
import android.graphics.drawable.ColorDrawable
import android.graphics.drawable.Drawable
import android.view.View
import android.widget.EditText
import android.widget.FrameLayout
import android.widget.TextView
import com.facebook.litho.accessibility.ImportantForAccessibility
import com.facebook.litho.accessibility.accessibilityRole
import com.facebook.litho.accessibility.accessibilityRoleDescription
import com.facebook.litho.accessibility.contentDescription
import com.facebook.litho.accessibility.importantForAccessibility
import com.facebook.litho.accessibility.onInitializeAccessibilityNodeInfo
import com.facebook.litho.accessibility.onPopulateAccessibilityNode
import com.facebook.litho.animated.alpha
import com.facebook.litho.config.ComponentsConfiguration
import com.facebook.litho.core.height
import com.facebook.litho.core.heightPercent
import com.facebook.litho.core.margin
import com.facebook.litho.core.width
import com.facebook.litho.core.widthPercent
import com.facebook.litho.flexbox.flex
import com.facebook.litho.testing.LithoViewRule
import com.facebook.litho.testing.exactly
import com.facebook.litho.testing.match
import com.facebook.litho.testing.testrunner.LithoLocalTestRunConfiguration
import com.facebook.litho.testing.testrunner.LithoTestRunner
import com.facebook.litho.view.focusable
import com.facebook.litho.view.onClick
import com.facebook.litho.view.viewTag
import com.facebook.litho.visibility.onInvisible
import com.facebook.litho.visibility.onVisible
import com.facebook.litho.widget.LithoScrollView
import com.facebook.rendercore.ContentAllocator
import com.facebook.rendercore.LayoutContext
import com.facebook.rendercore.MeasureResult
import com.facebook.rendercore.Mountable
import com.facebook.rendercore.RenderUnit.DelegateBinder.createDelegateBinder
import com.facebook.rendercore.testing.ViewAssertions
import com.facebook.yoga.YogaEdge
import java.util.concurrent.atomic.AtomicBoolean
import java.util.concurrent.atomic.AtomicReference
import org.assertj.core.api.Assertions.assertThat
import org.junit.Rule
import org.junit.Test
import org.junit.rules.ExpectedException
import org.junit.runner.RunWith
import org.junit.runners.model.FrameworkMethod
import org.mockito.kotlin.mock
import org.mockito.kotlin.times
import org.robolectric.annotation.LooperMode

@LooperMode(LooperMode.Mode.LEGACY)
@RunWith(LithoTestRunner::class)
@LithoTestRunner.LocalConfigurations(NonLithoMountableTestRunConfig::class)
class MountableComponentsTest {

  @Rule @JvmField val lithoViewRule = LithoViewRule()
  @Rule @JvmField val expectedException = ExpectedException.none()

  @Test
  fun `should render mountable component`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val root =
        Column.create(c)
            .child(
                Wrapper.create(c)
                    .widthPx(100)
                    .heightPx(100)
                    .delegate(TestViewMountableComponent(TextView(c.androidContext), steps))
                    .paddingPx(YogaEdge.ALL, 20)
                    .backgroundColor(Color.LTGRAY)
                    .border(
                        Border.create(c)
                            .widthPx(YogaEdge.ALL, 5)
                            .color(YogaEdge.ALL, Color.BLACK)
                            .build()))
            .build()

    val testView = lithoViewRule.render { root }
    testView.lithoView.unmountAllItems()

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT,
            LifecycleStep.ON_UNMOUNT)
  }

  @Test
  fun `width, height, focusable, viewTag styles respected when set`() {
    val testComponent =
        TestViewMountableComponent(
            TextView(lithoViewRule.context.androidContext),
            style = Style.width(667.px).height(668.px).focusable(true).viewTag("test_view_tag"))

    val testView = lithoViewRule.render { testComponent }

    assertThat(testView.lithoView.childCount).isEqualTo(1)
    val realTestView = testView.lithoView.getChildAt(0)

    ViewAssertions.assertThat(realTestView).matches(match<TextView> { bounds(0, 0, 667, 668) })

    assertThat(realTestView.isFocusable).isTrue()

    testView.findViewWithTag("test_view_tag")
  }

  @Test
  fun `width, height, focusable, viewTag styles respected when updated`() {

    val testView =
        lithoViewRule.render {
          TestViewMountableComponent(
              TextView(lithoViewRule.context.androidContext),
              style = Style.width(667.px).height(668.px).focusable(true).viewTag("test_view_tag"),
          )
        }

    assertThat(testView.lithoView.childCount).isEqualTo(1)
    val realTestView = testView.lithoView.getChildAt(0)

    ViewAssertions.assertThat(realTestView).matches(match<TextView> { bounds(0, 0, 667, 668) })

    assertThat(realTestView.isFocusable).isTrue

    testView.findViewWithTag("test_view_tag")

    lithoViewRule.render(lithoView = testView.lithoView) {
      TestViewMountableComponent(
          TextView(lithoViewRule.context.androidContext),
          style = Style.width(667.px).height(668.px).focusable(false).viewTag("new_test_view_tag"),
      )
    }

    assertThat(testView.lithoView.childCount).isEqualTo(1)
    val newRealTestView = testView.lithoView.getChildAt(0)

    assertThat(newRealTestView.isFocusable).isFalse

    testView.findViewWithTag("new_test_view_tag")
  }

  @Test
  fun `onClick event is dispatched when set`() {
    val wasClicked = AtomicBoolean(false)

    val testComponent =
        TestViewMountableComponent(
            TextView(lithoViewRule.context.androidContext),
            style =
                Style.width(667.px).height(668.px).focusable(true).viewTag("click_me").onClick {
                  wasClicked.set(true)
                })

    val testView = lithoViewRule.render { testComponent }

    assertThat(wasClicked.get()).isFalse()
    testView.findViewWithTag("click_me").performClick()
    assertThat(wasClicked.get()).isTrue()
  }

  @Test
  fun `onVisible event is fired when set`() {
    val eventFired = AtomicBoolean(false)

    val testComponent =
        TestViewMountableComponent(
            TextView(lithoViewRule.context.androidContext),
            style =
                Style.width(667.px).height(668.px).focusable(true).viewTag("click_me").onVisible {
                  eventFired.set(true)
                })

    lithoViewRule.render { testComponent }

    assertThat(eventFired.get()).isTrue()
  }

  @Test
  fun `widthPercent and heightPercent is respected when set`() {
    val testComponent =
        TestViewMountableComponent(
            TextView(lithoViewRule.context.androidContext),
            style = Style.heightPercent(50f).widthPercent(50f))

    val testView =
        lithoViewRule.render {
          Row(style = Style.width(100.px).height(100.px)) { child(testComponent) }
        }

    assertThat(testView.lithoView.childCount).isEqualTo(1)
    val realTestView = testView.lithoView.getChildAt(0)

    ViewAssertions.assertThat(realTestView).matches(match<TextView> { bounds(0, 0, 50, 50) })
  }

  @Test
  fun `dynamic alpha is respected when set`() {
    val alpha = 0.5f
    val alphaDV: DynamicValue<Float> = DynamicValue<Float>(alpha)

    val testComponent =
        TestViewMountableComponent(
            TextView(lithoViewRule.context.androidContext),
            style = Style.width(100.px).height(100.px).alpha(alphaDV))

    val testView = lithoViewRule.render { testComponent }

    assertThat(testView.lithoView.alpha).isEqualTo(alpha)

    alphaDV.set(1f)
    assertThat(testView.lithoView.alpha).isEqualTo(1f)

    alphaDV.set(0.7f)
    assertThat(testView.lithoView.alpha).isEqualTo(0.7f)
  }

  @Test
  fun `updating the state in mountable takes effect`() {
    lateinit var stateRef: AtomicReference<String>

    class TestComponent(val view: View) : MountableComponent() {
      override fun MountableComponentScope.render(): MountableRenderResult {
        val testState: State<String> = useState { "initial" }
        stateRef = AtomicReference(testState.value)
        return MountableRenderResult(
            ViewMountable(view = view, updateState = { testState.update { s -> s + "_" + it } }),
            style = null)
      }
    }

    lithoViewRule.render { TestComponent(TextView(lithoViewRule.context.androidContext)) }

    lithoViewRule.idle()

    assertThat(stateRef.get())
        .describedAs("String state is updated")
        .isEqualTo("initial_createContent_mount")
  }

  @Test
  fun `should not remeasure same mountable if size specs match`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)
    val component =
        TestViewMountableComponent(
            view = view,
            steps = steps,
            style = Style.width(100.px).height(100.px),
        )

    val testView = lithoViewRule.render { Column.create(c).child(component).build() }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT)

    steps.clear()

    lithoViewRule.render(lithoView = testView.lithoView) {
      Column.create(c).child(component).build()
    }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.SHOULD_UPDATE,
            LifecycleStep.ON_UNMOUNT,
            LifecycleStep.ON_MOUNT)
  }

  @Test
  fun `should not remeasure same mountable if size specs match with non exact size`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)
    val component =
        TestViewMountableComponent(
            view = view,
            steps = steps,
            style = Style.width(100.px).flex(grow = 1f),
        )

    val testView = lithoViewRule.render { Column.create(c).child(component).build() }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT)

    steps.clear()

    lithoViewRule.render(lithoView = testView.lithoView) {
      Column.create(c).child(component).build()
    }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.SHOULD_UPDATE,
            LifecycleStep.ON_UNMOUNT,
            LifecycleStep.ON_MOUNT)
  }

  @Test
  fun `should remeasure mountable if properties have changed`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)

    val testView =
        lithoViewRule.render {
          Column.create(c)
              .child(
                  TestViewMountableComponent(
                      identity = 0,
                      view = view,
                      steps = steps,
                      style = Style.width(100.px).flex(grow = 1f),
                  ))
              .build()
        }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT)

    steps.clear()

    lithoViewRule.render(lithoView = testView.lithoView) {
      Column.create(c)
          .child(
              TestViewMountableComponent(
                  identity = 1,
                  view = view,
                  steps = steps,
                  style = Style.width(100.px).flex(grow = 1f),
              ))
          .build()
    }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.SHOULD_UPDATE,
            LifecycleStep.ON_UNMOUNT,
            LifecycleStep.ON_MOUNT)
  }

  @Test
  fun `should remeasure mountable if size specs change`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)
    val component = TestViewMountableComponent(identity = 0, view = view, steps = steps)

    val testView = lithoViewRule.render(widthPx = 800, heightPx = 600) { component }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT)

    steps.clear()

    lithoViewRule.render(lithoView = testView.lithoView, widthPx = 1920, heightPx = 1080) {
      component
    }

    if (ComponentsConfiguration.isResolveAndLayoutFuturesSplitEnabled) {
      assertThat(LifecycleStep.getSteps(steps))
          .containsExactly(
              LifecycleStep.ON_MEASURE,
              LifecycleStep.SHOULD_UPDATE,
              LifecycleStep.ON_UNMOUNT,
              LifecycleStep.ON_MOUNT)
    } else {
      assertThat(LifecycleStep.getSteps(steps))
          .containsExactly(
              LifecycleStep.RENDER,
              LifecycleStep.ON_MEASURE,
              LifecycleStep.SHOULD_UPDATE,
              LifecycleStep.ON_UNMOUNT,
              LifecycleStep.ON_MOUNT)
    }
  }

  @Test
  fun `same instance should be equivalent`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)
    val component = TestViewMountableComponent(identity = 0, view = view, steps = steps)

    assertThat(component.isEquivalentTo(component)).isTrue
    assertThat(component.isEquivalentTo(component, true)).isTrue
  }

  @Test
  fun `components with same prop values should be equivalent`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)
    val a = TestViewMountableComponent(identity = 0, view = view, steps = steps)
    val b = TestViewMountableComponent(identity = 0, view = view, steps = steps)
    assertThat(a.isEquivalentTo(b)).isTrue
    assertThat(a.isEquivalentTo(b, true)).isTrue
  }

  @Test
  fun `components with different prop values should not be equivalent`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)
    val a = TestViewMountableComponent(identity = 0, view = view, steps = steps)
    val b = TestViewMountableComponent(identity = 1, view = view, steps = steps)

    assertThat(a.isEquivalentTo(b)).isFalse
    assertThat(a.isEquivalentTo(b, true)).isFalse
  }

  @Test
  fun `components with different style values should not be equivalent`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)
    val a =
        TestViewMountableComponent(
            identity = 0,
            view = view,
            steps = steps,
            style = Style.width(100.px).height(100.px), /* 100 here */
        )

    val b =
        TestViewMountableComponent(
            identity = 0,
            view = view,
            steps = steps,
            style = Style.width(200.px).height(200.px), /* 200 here */
        )

    assertThat(a.isEquivalentTo(b, true)).isFalse
  }

  @Test
  fun `when a11y props are set on style it should set them on the rendered content`() {
    val eventHandler: EventHandler<OnInitializeAccessibilityNodeInfoEvent> = mock()
    val onPopulateAccessibilityNodeHandler: EventHandler<OnPopulateAccessibilityNodeEvent> = mock()

    val component =
        TestViewMountableComponent(
            EditText(lithoViewRule.context.androidContext),
            style =
                Style.accessibilityRole(AccessibilityRole.EDIT_TEXT)
                    .accessibilityRoleDescription("Accessibility Test")
                    .contentDescription("Accessibility Test")
                    .importantForAccessibility(ImportantForAccessibility.YES)
                    .onInitializeAccessibilityNodeInfo { eventHandler }
                    .onPopulateAccessibilityNode { onPopulateAccessibilityNodeHandler })

    // verify that info is set on the LithoView where possible, otherwise on LithoNode
    val testView = lithoViewRule.render { component }
    val node = testView.currentRootNode?.node
    val nodeInfo = node?.nodeInfo
    assertThat(nodeInfo?.accessibilityRole).isEqualTo(AccessibilityRole.EDIT_TEXT)
    assertThat(nodeInfo?.accessibilityRoleDescription).isEqualTo("Accessibility Test")
    assertThat(testView.lithoView.getChildAt(0).contentDescription).isEqualTo("Accessibility Test")
    assertThat(testView.lithoView.getChildAt(0).importantForAccessibility)
        .isEqualTo(View.IMPORTANT_FOR_ACCESSIBILITY_YES)
    assertThat(nodeInfo?.onInitializeAccessibilityNodeInfoHandler).isNotNull
    assertThat(nodeInfo?.onPopulateAccessibilityNodeHandler).isNotNull
  }

  @Test
  fun `TestDrawableMountableComponent has IMAGE accessibility role by default but overriding it works`() {
    val component1 =
        TestDrawableMountableComponent(
            drawable = ColorDrawable(Color.RED), style = Style.width(100.px).height(100.px))

    val testView1 = lithoViewRule.render { component1 }
    val node1 = testView1.currentRootNode?.node
    val nodeInfo1 = node1?.nodeInfo
    assertThat(nodeInfo1?.accessibilityRole).isEqualTo(AccessibilityRole.IMAGE)

    val component2 =
        TestDrawableMountableComponent(
            drawable = ColorDrawable(Color.RED),
            style =
                Style.width(100.px)
                    .height(100.px)
                    .accessibilityRole(AccessibilityRole.IMAGE_BUTTON))

    val testView2 = lithoViewRule.render { component2 }
    val node2 = testView2.currentRootNode?.node
    val nodeInfo2 = node2?.nodeInfo
    assertThat(nodeInfo2?.accessibilityRole).isEqualTo(AccessibilityRole.IMAGE_BUTTON)
  }

  @Test
  fun `when dynamic value is set it should update the content`() {
    val tag = DynamicValue<Any?>("0")
    val root =
        TestViewMountableComponent(
            EditText(lithoViewRule.context.androidContext),
            dynamicTag = tag,
            style = Style.width(100.px).height(100.px))

    val test = lithoViewRule.render { root }

    test.findViewWithTag("0")

    tag.set("1")

    test.findViewWithTag("1")
  }

  @Test
  fun `when component with dynamic value is unmounted it should unbind the dynamic value`() {
    val tag = DynamicValue<Any?>("0")
    val root =
        TestViewMountableComponent(
            EditText(lithoViewRule.context.androidContext),
            dynamicTag = tag,
            style = Style.width(100.px).height(100.px))

    val test = lithoViewRule.render { root }

    val view = test.findViewWithTag("0")

    test.lithoView.setComponentTree(null, true)

    assertThat(tag.numberOfListeners).isEqualTo(0)

    tag.set("1")

    // tag should be set to default value
    assertThat(view.tag).isEqualTo("default_value")
  }

  @Test
  fun `when new dynamic value is set it should unbind the old dynamic value`() {
    val tag1 = DynamicValue<Any?>("0")
    val root1 =
        TestViewMountableComponent(
            EditText(lithoViewRule.context.androidContext),
            dynamicTag = tag1,
            style = Style.width(100.px).height(100.px))

    val test = lithoViewRule.render { root1 }

    test.findViewWithTag("0")

    tag1.set("1")

    test.findViewWithTag("1")

    assertThat(tag1.numberOfListeners).isEqualTo(1)

    val tag2 = DynamicValue<Any?>("2")
    val root2 =
        TestViewMountableComponent(
            EditText(lithoViewRule.context.androidContext),
            dynamicTag = tag2,
            style = Style.width(100.px).height(100.px))

    test.setRoot(root2)

    assertThat(tag1.numberOfListeners).isEqualTo(0)

    // should have view with new tag
    val view = test.findViewWithTag("2")

    // set new tag using the old dynamic value
    tag1.set("3")

    // the above should not work, the tag should not change
    assertThat(view.tag).isEqualTo("2")

    // set the new tag using the new dynamic value
    tag2.set("3")

    // the above should work, the tag should change
    assertThat(view.tag).isEqualTo("3")

    assertThat(tag2.numberOfListeners).isEqualTo(1)
  }

  @Test
  fun `when same dynamic value is used on different components it should update the content for all instances`() {
    val c = lithoViewRule.context
    val tag = DynamicValue<Any?>("0")
    val root =
        Column.create(c)
            .child(
                TestViewMountableComponent(
                    EditText(lithoViewRule.context.androidContext),
                    dynamicTag = tag,
                    style = Style.width(100.px).height(100.px)))
            .child(
                TestViewMountableComponent(
                    EditText(lithoViewRule.context.androidContext),
                    dynamicTag = tag,
                    style = Style.width(100.px).height(100.px)))
            .build()

    val test = lithoViewRule.render { root }

    val lithoView = test.lithoView
    val child0 = lithoView.getChildAt(0)
    val child1 = lithoView.getChildAt(1)

    assertThat(child0.tag).isEqualTo("0")
    assertThat(child1.tag).isEqualTo("0")

    tag.set("1")

    assertThat(child0.tag).isEqualTo("1")
    assertThat(child1.tag).isEqualTo("1")
  }

  @Test
  fun `when same component with dynamic value is used multiple times it should update the content for all instances`() {
    val c = lithoViewRule.context
    val tag = DynamicValue<Any?>("0")
    val component =
        TestViewMountableComponent(
            EditText(lithoViewRule.context.androidContext),
            dynamicTag = tag,
            style = Style.width(100.px).height(100.px))
    val root = Column.create(c).child(component).child(component).build()

    val test = lithoViewRule.render { root }

    val lithoView = test.lithoView
    val child0 = lithoView.getChildAt(0)
    val child1 = lithoView.getChildAt(1)

    assertThat(child0.tag).isEqualTo("0")
    assertThat(child1.tag).isEqualTo("0")

    tag.set("1")

    assertThat(child0.tag).isEqualTo("1")
    assertThat(child1.tag).isEqualTo("1")
  }

  fun `Mountable that renders tree host notifies them about visibility bounds changes`() {
    val steps = mutableListOf<LifecycleStep.StepInfo>()

    val component =
        TestVerticalScrollComponent(
            child =
                TestViewMountableComponent(
                    TextView(lithoViewRule.context.androidContext),
                    steps = steps,
                    style =
                        Style.width(100.px).height(100.px).margin(top = 50.px).onVisible {
                          steps.add(LifecycleStep.StepInfo(LifecycleStep.ON_EVENT_VISIBLE))
                        }),
            style = Style.width(100.px).height(100.px),
        )

    // Create a FrameLayout 100x100
    val parent = FrameLayout(lithoViewRule.context.androidContext)
    parent.measure(exactly(1080), exactly(100))
    parent.layout(0, 0, 1080, 100)

    // Add a new LithoView to that FrameLayout
    val testView = lithoViewRule.createTestLithoView()
    parent.addView(testView.lithoView)

    // Render the component
    lithoViewRule.render(testView.lithoView) { component }

    // Since everything is in the view port everything should mount
    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT,
            LifecycleStep.ON_EVENT_VISIBLE,
        )
    steps.clear()

    // should unmount if the component is outside of the visible rect due to the 55px offset
    testView.lithoView.offsetTopAndBottom(55) // 55 offset from top; the item is 50 offset from top
    assertThat(LifecycleStep.getSteps(steps)).containsExactly(LifecycleStep.ON_UNMOUNT)
    steps.clear()

    // should not do anything when no items cross over the view port
    testView.lithoView.offsetTopAndBottom(5) // 55 + 5 = 60 offset from top
    assertThat(LifecycleStep.getSteps(steps)).isEmpty()
    steps.clear()

    // should mount the inner item back when it is back in the view port
    testView.lithoView.offsetTopAndBottom(-20) // 60 - 20 = 40 offset from top
    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.ON_MOUNT,
            LifecycleStep.ON_EVENT_VISIBLE,
        )
  }

  @Test
  fun `Mountable that is excluded from incremental mount is setting this value properly`() {
    val steps = mutableListOf<LifecycleStep.StepInfo>()

    val component =
        TestViewMountableComponent(
            TextView(lithoViewRule.context.androidContext),
            excludeFromIncrementalMount = true,
            steps = steps,
            style =
                Style.width(100.px)
                    .height(100.px)
                    .margin(top = 50.px)
                    .onVisible { steps.add(LifecycleStep.StepInfo(LifecycleStep.ON_EVENT_VISIBLE)) }
                    .onInvisible {
                      steps.add(LifecycleStep.StepInfo(LifecycleStep.ON_EVENT_INVISIBLE))
                    })

    // Create a FrameLayout 100x100
    val parent = FrameLayout(lithoViewRule.context.androidContext)
    parent.measure(exactly(1080), exactly(100))
    parent.layout(0, 0, 1080, 100)

    // Add a new LithoView to that FrameLayout
    val testView = lithoViewRule.createTestLithoView()
    parent.addView(testView.lithoView)
    testView.lithoView
    // Render the component
    lithoViewRule.render(testView.lithoView) { component }

    // Since everything is in the view port everything should mount
    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT,
            LifecycleStep.ON_EVENT_VISIBLE,
        )
    steps.clear()

    // should not unmount if the component is outside of the visible rect due to the 55px offset
    testView.lithoView.offsetTopAndBottom(55) // 55 offset from top; the item is 50 offset from top
    assertThat(LifecycleStep.getSteps(steps)).containsExactly(LifecycleStep.ON_EVENT_INVISIBLE)
    steps.clear()

    // should not do anything when no items cross over the view port
    testView.lithoView.offsetTopAndBottom(5) // 55 + 5 = 60 offset from top
    assertThat(LifecycleStep.getSteps(steps)).isEmpty()
    steps.clear()

    // should trigger visibility event when the component is back in the view port
    testView.lithoView.offsetTopAndBottom(-20) // 60 - 20 = 40 offset from top
    assertThat(LifecycleStep.getSteps(steps)).containsExactly(LifecycleStep.ON_EVENT_VISIBLE)
  }

  @Test
  fun `Mountable that is not excluded from incremental mount by default is setting this value properly`() {
    val steps = mutableListOf<LifecycleStep.StepInfo>()

    val component =
        TestViewMountableComponent(
            TextView(lithoViewRule.context.androidContext),
            steps = steps,
            style =
                Style.width(100.px)
                    .height(100.px)
                    .margin(top = 50.px)
                    .onVisible { steps.add(LifecycleStep.StepInfo(LifecycleStep.ON_EVENT_VISIBLE)) }
                    .onInvisible {
                      steps.add(LifecycleStep.StepInfo(LifecycleStep.ON_EVENT_INVISIBLE))
                    })

    // Create a FrameLayout 100x100
    val parent = FrameLayout(lithoViewRule.context.androidContext)
    parent.measure(exactly(1080), exactly(100))
    parent.layout(0, 0, 1080, 100)

    // Add a new LithoView to that FrameLayout
    val testView = lithoViewRule.createTestLithoView()
    parent.addView(testView.lithoView)
    testView.lithoView
    // Render the component
    lithoViewRule.render(testView.lithoView) { component }

    // Since everything is in the view port everything should mount
    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT,
            LifecycleStep.ON_EVENT_VISIBLE,
        )
    steps.clear()

    // should unmount if the component is outside of the visible rect due to the 55px offset
    testView.lithoView.offsetTopAndBottom(55) // 55 offset from top; the item is 50 offset from top
    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(LifecycleStep.ON_UNMOUNT, LifecycleStep.ON_EVENT_INVISIBLE)
    steps.clear()

    // should not do anything when no items cross over the view port
    testView.lithoView.offsetTopAndBottom(5) // 55 + 5 = 60 offset from top
    assertThat(LifecycleStep.getSteps(steps)).isEmpty()
    steps.clear()

    // should mount back and trigger visibility event when the component is back in the view port
    testView.lithoView.offsetTopAndBottom(-20) // 60 - 20 = 40 offset from top
    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(LifecycleStep.ON_MOUNT, LifecycleStep.ON_EVENT_VISIBLE)
  }

  @Test
  fun `Mountable that sets that is not excluded from incremental mount is setting this value properly`() {
    val steps = mutableListOf<LifecycleStep.StepInfo>()

    val component =
        TestViewMountableComponent(
            TextView(lithoViewRule.context.androidContext),
            excludeFromIncrementalMount = false,
            steps = steps,
            style =
                Style.width(100.px)
                    .height(100.px)
                    .margin(top = 50.px)
                    .onVisible { steps.add(LifecycleStep.StepInfo(LifecycleStep.ON_EVENT_VISIBLE)) }
                    .onInvisible {
                      steps.add(LifecycleStep.StepInfo(LifecycleStep.ON_EVENT_INVISIBLE))
                    })

    // Create a FrameLayout 100x100
    val parent = FrameLayout(lithoViewRule.context.androidContext)
    parent.measure(exactly(1080), exactly(100))
    parent.layout(0, 0, 1080, 100)

    // Add a new LithoView to that FrameLayout
    val testView = lithoViewRule.createTestLithoView()
    parent.addView(testView.lithoView)
    testView.lithoView
    // Render the component
    lithoViewRule.render(testView.lithoView) { component }

    // Since everything is in the view port everything should mount
    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT,
            LifecycleStep.ON_EVENT_VISIBLE,
        )
    steps.clear()

    // should unmount if the component is outside of the visible rect due to the 55px offset
    testView.lithoView.offsetTopAndBottom(55) // 55 offset from top; the item is 50 offset from top
    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(LifecycleStep.ON_UNMOUNT, LifecycleStep.ON_EVENT_INVISIBLE)
    steps.clear()

    // should not do anything when no items cross over the view port
    testView.lithoView.offsetTopAndBottom(5) // 55 + 5 = 60 offset from top
    assertThat(LifecycleStep.getSteps(steps)).isEmpty()
    steps.clear()

    // should mount back and trigger visibility event when the component is back in the view port
    testView.lithoView.offsetTopAndBottom(-20) // 60 - 20 = 40 offset from top
    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(LifecycleStep.ON_MOUNT, LifecycleStep.ON_EVENT_VISIBLE)
  }
}

class TestViewMountableComponent(
    val view: View,
    val steps: MutableList<LifecycleStep.StepInfo>? = null,
    val identity: Int = 0,
    val dynamicTag: DynamicValue<Any?>? = null,
    val excludeFromIncrementalMount: Boolean? = null,
    val style: Style? = null
) : MountableComponent() {

  override fun MountableComponentScope.render(): MountableRenderResult {

    steps?.add(LifecycleStep.StepInfo(LifecycleStep.RENDER))

    excludeFromIncrementalMount?.let { excludeFromIncrementalMount(excludeFromIncrementalMount) }

    // using tag for convenience of tests
    dynamicTag?.let { dynamicTag.bindTo("default_value", View::setTag) }

    return MountableRenderResult(
        if (NonLithoMountableTestRunConfig.shouldUseNonLithoViewMountable) {
          NonLithoViewMountable(identity, view, steps)
        } else {
          ViewMountable(identity, view, steps)
        },
        style)
  }
}

open class ViewMountable(
    open val id: Int = 0,
    open val view: View,
    open val steps: MutableList<LifecycleStep.StepInfo>? = null,
    open val updateState: ((String) -> Unit)? = null,
    open val shouldUpdate: Boolean = true,
) : SimpleMountable<View>(RenderType.VIEW) {

  override fun createContent(context: Context): View {
    updateState?.invoke("createContent")
    steps?.add(LifecycleStep.StepInfo(LifecycleStep.ON_CREATE_MOUNT_CONTENT))
    return view
  }

  override fun MeasureScope.measure(widthSpec: Int, heightSpec: Int): MeasureResult {
    steps?.add(LifecycleStep.StepInfo(LifecycleStep.ON_MEASURE))
    val width =
        if (SizeSpec.getMode(widthSpec) == SizeSpec.EXACTLY) {
          SizeSpec.getSize(widthSpec)
        } else {
          100
        }

    val height =
        if (SizeSpec.getMode(heightSpec) == SizeSpec.EXACTLY) {
          SizeSpec.getSize(heightSpec)
        } else {
          100
        }

    return MeasureResult(width, height, TestLayoutData(width, height))
  }

  override fun mount(c: Context, content: View, layoutData: Any?) {
    updateState?.invoke("mount")
    steps?.add(LifecycleStep.StepInfo(LifecycleStep.ON_MOUNT))
    layoutData as TestLayoutData
  }

  override fun unmount(c: Context, content: View, layoutData: Any?) {
    steps?.add(LifecycleStep.StepInfo(LifecycleStep.ON_UNMOUNT))
    layoutData as TestLayoutData
  }

  override fun shouldUpdate(
      newMountable: SimpleMountable<View>,
      currentLayoutData: Any?,
      nextLayoutData: Any?
  ): Boolean {
    steps?.add(LifecycleStep.StepInfo(LifecycleStep.SHOULD_UPDATE))
    return shouldUpdate
  }
}

class TestDrawableMountableComponent(val drawable: Drawable, val style: Style? = null) :
    MountableComponent() {

  override fun MountableComponentScope.render(): MountableRenderResult {
    return MountableRenderResult(
        DrawableMountable(drawable), Style.accessibilityRole(AccessibilityRole.IMAGE) + style)
  }
}

class DrawableMountable(
    val drawable: Drawable,
) : SimpleMountable<Drawable>(RenderType.DRAWABLE) {

  override fun createContent(context: Context): Drawable {
    return drawable
  }

  override fun MeasureScope.measure(widthSpec: Int, heightSpec: Int): MeasureResult {
    val width =
        if (SizeSpec.getMode(widthSpec) == SizeSpec.EXACTLY) {
          SizeSpec.getSize(widthSpec)
        } else {
          100
        }

    val height =
        if (SizeSpec.getMode(heightSpec) == SizeSpec.EXACTLY) {
          SizeSpec.getSize(heightSpec)
        } else {
          100
        }

    return MeasureResult(width, height, TestLayoutData(width, height))
  }

  override fun mount(c: Context, content: Drawable, layoutData: Any?) {
    layoutData as TestLayoutData
  }

  override fun unmount(c: Context, content: Drawable, layoutData: Any?) {
    layoutData as TestLayoutData
  }

  override fun shouldUpdate(
      newMountable: SimpleMountable<Drawable>,
      currentLayoutData: Any?,
      nextLayoutData: Any?
  ): Boolean {
    newMountable as DrawableMountable
    return true
  }
}

class NonLithoViewMountable(
    val identity: Int = 0,
    val view: View,
    val steps: MutableList<LifecycleStep.StepInfo>? = null,
    val shouldUpdate: Boolean = true
) : Mountable<View>(RenderType.VIEW) {

  init {
    addMountBinder(
        createDelegateBinder(
            this,
            object : Binder<NonLithoViewMountable, View> {
              override fun shouldUpdate(
                  currentModel: NonLithoViewMountable,
                  newModel: NonLithoViewMountable,
                  currentLayoutData: Any?,
                  nextLayoutData: Any?
              ): Boolean {
                steps?.add(LifecycleStep.StepInfo(LifecycleStep.SHOULD_UPDATE))
                currentLayoutData as TestLayoutData
                nextLayoutData as TestLayoutData
                return shouldUpdate
              }

              override fun bind(
                  context: Context?,
                  content: View?,
                  model: NonLithoViewMountable?,
                  layoutData: Any?
              ) {
                steps?.add(LifecycleStep.StepInfo(LifecycleStep.ON_MOUNT))
                layoutData as TestLayoutData
              }

              override fun unbind(
                  context: Context?,
                  content: View?,
                  model: NonLithoViewMountable?,
                  layoutData: Any?
              ) {
                steps?.add(LifecycleStep.StepInfo(LifecycleStep.ON_UNMOUNT))
                layoutData as TestLayoutData
              }
            }))
  }

  override fun measure(
      context: LayoutContext<*>,
      widthSpec: Int,
      heightSpec: Int,
      previousLayoutData: Any?
  ): MeasureResult {
    steps?.add(LifecycleStep.StepInfo(LifecycleStep.ON_MEASURE))
    val width =
        if (SizeSpec.getMode(widthSpec) == SizeSpec.EXACTLY) {
          SizeSpec.getSize(widthSpec)
        } else {
          100
        }

    val height =
        if (SizeSpec.getMode(heightSpec) == SizeSpec.EXACTLY) {
          SizeSpec.getSize(heightSpec)
        } else {
          100
        }

    return MeasureResult(width, height, TestLayoutData(width, height))
  }

  override fun getContentAllocator(): ContentAllocator<View> {
    return ContentAllocator {
      steps?.add(LifecycleStep.StepInfo(LifecycleStep.ON_CREATE_MOUNT_CONTENT))
      view
    }
  }
}

class TestVerticalScrollComponent(
    val child: Component,
    val style: Style? = null,
) : MountableComponent() {

  override fun MountableComponentScope.render(): MountableRenderResult {

    val componentTree = useState { ComponentTree.createNestedComponentTree(context, child).build() }

    return MountableRenderResult(
        TestVerticalScrollMountable(
            component = child,
            componentTree = componentTree.value,
        ),
        style)
  }
}

internal class TestVerticalScrollMountable(
    val component: Component,
    val componentTree: ComponentTree,
) : SimpleMountable<LithoScrollView>(RenderType.VIEW) {

  override fun doesMountRenderTreeHosts(): Boolean = true

  override fun createContent(context: Context): LithoScrollView = LithoScrollView(context)

  override fun MeasureScope.measure(widthSpec: Int, heightSpec: Int): MeasureResult {
    return MeasureResult(100, 100)
  }

  override fun mount(c: Context, content: LithoScrollView, layoutData: Any?) {
    content.isVerticalScrollBarEnabled = true
    content.mount(
        componentTree,
        LithoScrollView.ScrollPosition(0),
        null,
    )
  }

  override fun unmount(c: Context, content: LithoScrollView, layoutData: Any?) = Unit
}

class TestLayoutData(val width: Int, val height: Int)

class NonLithoMountableTestRunConfig : LithoLocalTestRunConfiguration {

  companion object {
    var shouldUseNonLithoViewMountable: Boolean = false
  }

  val defaultValue = shouldUseNonLithoViewMountable

  override fun beforeTest(method: FrameworkMethod?) {
    shouldUseNonLithoViewMountable = !defaultValue
  }

  override fun afterTest(method: FrameworkMethod?) {
    shouldUseNonLithoViewMountable = defaultValue
  }
}