import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const tm = (...inputs) => {
  return twMerge(clsx(inputs))
}
