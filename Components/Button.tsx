import { cva } from "class-variance-authority";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link, { LinkProps } from "next/link";

const classes = cva("", {
  variants: {
    variant: {
      primary: "text-text-50 py-3 px-5 rounded-full border border-white bg-white hover:bg-opacity-80 active:bg-opacity-35 active:text-text-950 transition duration-300",
      secondary: "text-text-950 py-3 px-5 rounded-full border border-white bg-opacity-0 bg-white hover:bg-opacity-25 active:bg-opacity-90 active:text-text-50 transition duration-300",
      dark_primary: "text-white py-3 px-5 w-fit text-nowrap rounded-full border border-background-50 bg-background-50 hover:bg-opacity-80 active:bg-opacity-35 active:text-text-950 transition duration-300",
      dark_secondary: "text-text-950 py-3 px-5 rounded-full border border-white bg-opacity-0 bg-white hover:bg-opacity-25 active:bg-opacity-90 active:text-text-50 transition duration-300",
    },
  },
});

type ButtonProps = {
  variant: "primary" | "secondary" | "dark_primary" | "dark_secondary";
  href?: string; // Make href optional
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
