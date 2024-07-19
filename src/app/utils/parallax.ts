import { MotionValue, useTransform } from "framer-motion";

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [1, 0], [-distance, distance]);
}
