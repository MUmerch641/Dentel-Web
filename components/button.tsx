"use client"

import { cn } from "@/lib/utils"
import type React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    primary: "bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200",
    secondary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200",
    outline: "border-2 border-blue-600 bg-transparent text-blue-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white hover:shadow-lg transition-all duration-200",
    ghost: "bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800 transition-all duration-200",
  }

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-base",
    lg: "h-12 px-6 text-base",
  }

  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
}
