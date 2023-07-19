/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Listen, State } from '@stencil/core';

@Component({
  tag: 'ix-form-field',
  styleUrl: 'form-field.scss',
  shadow: true,
})
export class FormField {
  @Element() hostElement!: HTMLIxFormFieldElement;

  @State() type: string = 'text';
  @State() value: any;
  @State() touched = false;

  private observer: MutationObserver;
  private inputElement: HTMLInputElement;

  private bindBlur = this.onInputBlur.bind(this);

  componentDidLoad() {
    this.observer = new MutationObserver((r) => {
      this.checkFormFields();
    });
    this.observer.observe(this.hostElement, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    });

    setTimeout(() => this.checkFormFields());
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private checkFormFields() {
    this.inputElement = this.hostElement.querySelector('input');
    this.inputElement.removeEventListener('blur', this.bindBlur);
    this.inputElement.addEventListener('blur', this.bindBlur);

    const inputName = this.inputElement.name;
    const labelElement = this.hostElement.querySelector(
      `label[for="${inputName}"]`
    );

    this.type = this.inputElement.type;
  }

  @Listen('input')
  @Listen('change')
  onValueChange(e: InputEvent) {
    if ('value' in e.target) {
      this.value = e.target.value;
    }
  }

  onInputBlur() {
    console.log('input blur');
    this.touched = this.hasValue;
  }

  onClick() {
    this.touched = true;
    setTimeout(() => this.inputElement.focus());
  }

  get hasValue() {
    if (!this.value) {
      return false;
    }

    if (typeof this.value === 'string') {
      return this.value !== '';
    }

    return this.value;
  }

  render() {
    return (
      <Host
        class={{
          [`form-field-${this.type}`]: true,
          touched: this.touched,
        }}
        onClick={() => this.onClick()}
      >
        <div class={'field-value'}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
