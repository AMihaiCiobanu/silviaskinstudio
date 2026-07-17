/** @format */

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as analytics from "../../utils/analytics";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium uppercase rounded-soft border transition-colors duration-500 ease-luxe cursor-pointer";

  const sizes = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.18em]",
    md: "px-8 py-3.5 text-[11px] tracking-[0.2em]",
    lg: "px-10 py-4 text-xs tracking-[0.22em]",
  };

  // Gold is a mid-luminance colour: only charcoal text clears WCAG AA on it.
  const variants = {
    primary:
      "bg-gold text-charcoal border-gold hover:bg-gold-dark hover:border-gold-dark",
    outline:
      "fill-sweep bg-transparent text-charcoal border-charcoal/25 hover:border-gold hover:text-charcoal",
    ghost: "bg-transparent text-charcoal border-transparent hover:text-gold",
  };

  const handleClick = (e) => {
    // Track analytics if data-analytics prop is provided
    if (props["data-analytics"]) {
      analytics.event({
        action: "click",
        category: "Button",
        label: `Book - ${props["data-analytics"]}`,
      });
    }
    // Call original onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, sizes[size], variants[variant]), className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
