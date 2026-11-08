"use strict";

(() => {
  const buttons = [...document.querySelectorAll("[data-preview]")];
  const error = document.getElementById("preview-error");
  const previews = buttons.map((button) => ({
    button,
    audio: document.getElementById(button.dataset.preview),
  }));

  for (const { button, audio } of previews) {
    const update = () => {
      const playing = !audio.paused && !audio.ended;
      button.setAttribute("aria-pressed", String(playing));
      button.textContent = playing ? "Stop" : "Preview";
      button.setAttribute("aria-label", `${button.textContent} ${button.dataset.preview.replace(/^notes-/, "")}`);
    };
    audio.addEventListener("play", update);
    audio.addEventListener("pause", update);
    audio.addEventListener("ended", update);
    button.addEventListener("click", async () => {
      error.hidden = true;
      const wasPlaying = !audio.paused && !audio.ended;
      // Reset all samples so every preview starts at the beginning.
      for (const other of previews) {
        other.audio.pause();
        other.audio.currentTime = 0;
      }
      if (wasPlaying) return;
      try {
        await audio.play();
      } catch (failure) {
        // Switching samples can interrupt an earlier pending play request.
        if (failure.name !== "AbortError") error.hidden = false;
        update();
      }
    });
    audio.hidden = true;
    button.hidden = false;
  }
})();
