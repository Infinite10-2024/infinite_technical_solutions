import { MouseEvent } from "react";

export const scrollTo = (event: MouseEvent, targetId: string) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
