import { cva } from "class-variance-authority";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link, { LinkProps } from "next/link";

const classes = cva("", {
  variants: {
    variant: {
      primary:
        "text-text-50 py-3 flex justify-center px-8 rounded-full focus:ring-2 ring-primary-400/50 items-center gap-3 text-text-50 bg-primary-500 active:bg-primary-400 hover:bg-primary-600 transition duration-300",
      secondary:
        "text-text-50 py-3 justify-center flex px-8 rounded-full border border-white/20 backdrop-blur-md focus:ring-2 ring-primary-400/50 text-white bg-white/10 active:bg-white/20 hover:bg-transparent transition duration-300",
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
