import { cva } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link, { type LinkProps } from "next/link";

const classes = cva("", {
  variants: {
    variant: {
      primary:
        "relative overflow-hidden py-3 px-8 rounded-full flex gap-4 w-fit items-center justify-center text-white bg-gradient-to-r from-[#084d5e] to-[#0b748e] focus:ring-2 focus:ring-[#0b748e] focus:ring-offset-2 focus:outline-none transition-all duration-300 ease-out shadow-lg hover:shadow-xl active:shadow-inner transform hover:-translate-y-0.5 active:translate-y-0",
      secondary:
        "relative py-3 px-8 rounded-full text-white bg-white border border-gray-200 border-opacity-10 hover:bg-opacity-20 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none transition-all bg-opacity-20  duration-300 ease-out shadow-md hover:shadow-lg active:shadow-inner transform hover:-translate-y-0.5 active:translate-y-0 backdrop-filter backdrop-blur-sm",
    },
  },
});

type ButtonProps = {
  variant: "primary" | "secondary";
  href?: string;
} & Omit<LinkProps, "href"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

function Button(props: ButtonProps) {
  const { variant, className, href, onClick, ...otherProps } = props;

  const combinedClasses = `${classes({ variant })} ${className || ""}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...otherProps}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      onClick={onClick}
      {...(otherProps as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {props.children}
    </button>
  );
}

export default Button;
