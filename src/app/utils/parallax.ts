import { MotionValue, useTransform } from "framer-motion";

export function useParallax(value: MotionValue, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function useReverseParallax(value: MotionValue, distance: number) {
  return useTransform(value, [1, 0], [-distance, distance]);
}
