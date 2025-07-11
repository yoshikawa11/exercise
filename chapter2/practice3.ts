document.querySelectorAll(".special-button").forEach((button) => {
  // この行では button は Element 型
  if (button instanceof HTMLButtonElement) {
    // この行では button は HTMLButtonElement 型
    button.disabled = true;
  }
});
