import '@testing-library/jest-dom/vitest';

// jsdom does not implement this API by default, but components call it.
window.HTMLElement.prototype.scrollIntoView = vi.fn();
