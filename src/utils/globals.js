// --- DOM Shortcuts section ---
export const $ = (sel) => document.querySelector(sel);

// --- Constants section ---
export const KEY = "sumFlowItems";

// --- Math Utilities section ---
// Returns a random integer between min and max (inclusive)
export const randInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// --- DOM Utilities section ---
// Clears the inner HTML of an element
export const clearElement = (el) => (el.innerHTML = "");

// Toggles the "hidden" class of an element
export const toggleHidden = (el) => el?.classList.toggle("hidden");

// --- Rendering Core section ---
// Root app container
export const app = $("#app");

// Renders HTML content into the root app container
export const template = (html) => (app.innerHTML = html);

// Main render function (used by all views)
export function render(viewFn) {
  clearElement(app);
  viewFn();
}
