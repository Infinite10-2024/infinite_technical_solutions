import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function useParallax(value: MotionValue, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
