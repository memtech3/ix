/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`
    <ix-message-bar type="danger"></ix-message-bar>
  `);
  const element = page.locator('ix-message-bar ');
  await expect(element).toHaveClass(/hydrated/);
});

test('should close message', async ({ mount, page }) => {
  await mount(`
    <ix-message-bar></ix-message-bar>
  `);
  const element = page.locator('ix-message-bar ');
  const closeButton = element.locator('ix-icon-button');

  await expect(element).toBeVisible();
  await closeButton.click({ force: true });
  await page.waitForTimeout(1000);
  await expect(element).not.toBeVisible();
});

test('should close message but prevent default', async ({ mount, page }) => {
  await mount(`
    <ix-message-bar></ix-message-bar>
  `);
  const element = page.locator('ix-message-bar ');
  const closeButton = element.locator('ix-icon-button');

  await element.evaluate((elm) => {
    elm.addEventListener('closedChange', (e) => e.preventDefault());
  });

  await expect(element).toBeVisible();
  await closeButton.click({ force: true });
  await page.waitForTimeout(1000);
  await expect(element).toBeVisible();
});
