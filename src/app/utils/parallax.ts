import { MotionValue, useTransform } from "framer-motion";

export function useParallax(value: MotionValue, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
