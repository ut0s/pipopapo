"use strict";

// Keep sound previews from playing over one another.
const previews = [...document.querySelectorAll("audio")];
for (const preview of previews) {
  preview.volume = 0.65;
  preview.addEventListener("play", () => {
    for (const other of previews) {
      if (other !== preview) other.pause();
    }
  });
}
