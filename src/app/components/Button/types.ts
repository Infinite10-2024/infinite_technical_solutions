import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  type?: "primary" | "secondary" | "outlined" | "outlined-contrast";
  size?: "icon" | "full";
}
