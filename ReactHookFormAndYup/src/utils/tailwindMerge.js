import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const tailwindMerge = (...inputs) => {
  return twMerge(clsx(inputs))
}
