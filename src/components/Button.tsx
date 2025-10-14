import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className, children, variant, iconAfter, ...rest } = props;
  return (
    <button
      className={twMerge(
        "h-12 mt-2 px-6 py-3 rounded-full text-lg tracking-wider cursor-none border-2 border-terciar/80 uppercase inline-flex items-center justify-center gap-2 transition-all duration-300 group/button",
        variant === "primary" && "bg-terciar/80 hover:text-accent-foreground",
        variant === "secondary" &&
          "hover:bg-terciar hover:text-accent-foreground",
        variant === "text" && "h-auto px-0 border-transparent",
        className
      )}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
