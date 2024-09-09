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

package com.facebook.rendercore.testing;

import com.facebook.infer.annotation.Nullsafe;
import com.facebook.rendercore.LayoutContext;
import com.facebook.rendercore.LayoutResult;
import com.facebook.rendercore.Node;

@Nullsafe(Nullsafe.Mode.LOCAL)
public class LayoutResultWrappingNode implements Node {

  private final LayoutResult mLayoutResult;

  public LayoutResultWrappingNode(LayoutResult layoutResult) {
    mLayoutResult = layoutResult;
  }

  @Override
  public LayoutResult calculateLayout(LayoutContext context, int widthSpec, int heightSpec) {
    return mLayoutResult;
  }
}
