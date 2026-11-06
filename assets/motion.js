"use strict";

// Keep all content visible; animate a portrait row only when it enters view.
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
if ("IntersectionObserver" in window && !motionPreference.matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (motionPreference.matches) continue;
      entry.target.querySelectorAll(".position-holder").forEach((portrait, index) => {
        portrait.animate(
          [{opacity: .3, transform: "translateY(8px)"}, {opacity: 1, transform: "translateY(0)"}],
          {duration: 420, delay: Math.min(index * 45, 180), easing: "cubic-bezier(.2,.7,.2,1)"}
        );
      });
    }
  }, {threshold: .12});
  document.querySelectorAll("main > section:not(#taxonomy) .position-holders").forEach(row => observer.observe(row));
}

// A preference change also stops animations that are already running.
motionPreference.addEventListener("change", event => {
  if (event.matches) document.getAnimations().forEach(animation => animation.cancel());
});
