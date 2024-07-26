export const scrollTo = (event: MouseEvent, targetId: string, offsetPixels: number = 280) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top;
    window.scrollTo({
      top: targetPosition - offsetPixels,
      behavior: "smooth",
    });
  }
};
