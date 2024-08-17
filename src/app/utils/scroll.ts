import { MouseEvent } from "react";

export const detectScroll = (event: MouseEvent, targetId: string) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  const heroHeight = document.getElementById("home")?.offsetHeight;

  if (targetElement && heroHeight) {
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
      top: targetPosition + (targetId === "home" ? 0 : heroHeight) + 20,
      behavior: "smooth",
    });
  }
};
