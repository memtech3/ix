/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  selected: number = 0;

  render() {
    return (
      <Host>
        <ix-tabs selected={this.selected} placement="top">
          <ix-tab-item>tab1</ix-tab-item>
          <ix-tab-item>tab2</ix-tab-item>
          <ix-tab-item>tab3</ix-tab-item>
          <ix-tab-item>tab3</ix-tab-item>
          <ix-tab-item>tab3</ix-tab-item>
          <ix-tab-item>tab3</ix-tab-item>
          <ix-tab-item>tab3</ix-tab-item>
          <ix-tab-item>tab3</ix-tab-item>
          <ix-tab-item>tab3</ix-tab-item>
          <ix-tab-item>tab3</ix-tab-item>
          <ix-tab-item>tab3</ix-tab-item>
          <ix-tab-item>tab3</ix-tab-item>
          <ix-tab-item>tab3</ix-tab-item>
          <ix-tab-item>tab3</ix-tab-item>
          <ix-tab-item>tab3</ix-tab-item>
          <ix-tab-item>tab3</ix-tab-item>
        </ix-tabs>
      </Host>
    );
  }
}
