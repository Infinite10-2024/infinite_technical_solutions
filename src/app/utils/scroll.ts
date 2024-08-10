import { MouseEvent } from "react";

export const scrollTo = (
  event: MouseEvent,
  targetId: string,
  offsetPixels: number = 270
) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  const heroHeight = document.getElementById("home")?.offsetHeight;
  const partnersHeight = document.getElementById("partners")?.offsetHeight;

  if (targetElement && heroHeight && partnersHeight) {
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
      top: targetPosition + (targetId === "home" ? 0 : heroHeight) + 20,
      behavior: "smooth",
    });
  }
  console.log(targetId);
  console.log(targetElement);
  console.log(targetElement?.offsetTop);
  console.log(targetElement?.getBoundingClientRect().top);
};
