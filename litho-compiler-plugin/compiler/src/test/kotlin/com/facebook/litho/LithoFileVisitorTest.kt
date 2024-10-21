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

import com.tschuchort.compiletesting.CompilationResult
import com.tschuchort.compiletesting.KotlinCompilation
import com.tschuchort.compiletesting.PluginOption
import com.tschuchort.compiletesting.SourceFile
import org.assertj.core.api.Assertions.assertThat
import org.jetbrains.kotlin.compiler.plugin.ExperimentalCompilerApi
import org.junit.Test

/** Tests for [LithoFileVisitor] */
@OptIn(ExperimentalCompilerApi::class)
class LithoFileVisitorTest {

  @Test
  fun test_litho_file_visitor_passing() {
    // language = kotlin
    val file =
        """            
      fun main() {}
      """
            .trimMargin()

    val result = compile(SourceFile.kotlin("Test.kt", file))

    assertThat(result.exitCode).isEqualTo(KotlinCompilation.ExitCode.OK)
  }

  @Test
  fun test_litho_file_visitor_failing() {
    // language = kotlin
    val file =
        """            
      fun test() {}
      
      fun main() {
        test()
      }
      """
            .trimMargin()

    val result = compile(SourceFile.kotlin("Test.kt", file))

    assertThat(result.exitCode).isEqualTo(KotlinCompilation.ExitCode.COMPILATION_ERROR)
    assertThat(result.messages).contains("Litho: Test function called")
  }

  private fun compile(code: SourceFile): CompilationResult {
    val compilationResult =
        KotlinCompilation()
            .apply {
              sources = listOf(code)
              compilerPluginRegistrars = listOf(LithoComponentRegistrar())
              messageOutputStream = System.out
              commandLineProcessors = listOf(LithoCommandLineProcessor())
              pluginOptions = listOf(PluginOption("com.facebook.litho.compiler", "enabled", "true"))
              languageVersion = "1.9"
              supportsK2 = false
            }
            .compile()

    return compilationResult
  }
}
