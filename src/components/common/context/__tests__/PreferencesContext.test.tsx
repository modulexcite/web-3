/* Pi-hole: A black hole for Internet advertisements
 * (c) 2019 Pi-hole, LLC (https://pi-hole.net)
 * Network-wide ad blocking via your own hardware.
 *
 * Web Interface
 * React context object tests
 *
 * This file is copyright under the latest version of the EUPL.
 * Please see LICENSE file for your rights under this license. */

import {
  defaultPreferences,
  loadInitialPreferences,
  WEB_PREFERENCES_STORAGE_KEY
} from "../PreferencesContext";

it("loads the default preferences if none are cached", () => {
  const preferences = loadInitialPreferences();

  expect(preferences).toEqual(defaultPreferences);
});

it("loads the cached preferences when available", () => {
  const expectedPreferences: ApiPreferences = {
    language: "testLang",
    layout: "boxed"
  };

  localStorage.setItem(
    WEB_PREFERENCES_STORAGE_KEY,
    JSON.stringify(expectedPreferences)
  );

  const actualPreferences = loadInitialPreferences();

  expect(actualPreferences).toEqual(expectedPreferences);
});
