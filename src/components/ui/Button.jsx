/** @format */

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as analytics from "../../utils/analytics";

const Button = ({
  children,
  variant = "primary",
  className,
  onClick,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 border text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold cursor-pointer";

  const variants = {
    primary:
      "bg-gold text-white border-transparent hover:bg-gold-light shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline:
      "bg-transparent text-charcoal border-charcoal/20 hover:border-gold hover:text-gold",
    ghost:
      "bg-transparent text-charcoal hover:bg-gold/10 hover:text-gold border-transparent",
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
      className={twMerge(baseStyles, variants[variant], className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
