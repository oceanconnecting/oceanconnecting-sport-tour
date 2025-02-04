import { cva } from "class-variance-authority";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link, { LinkProps } from "next/link";

const classes = cva("", {
  variants: {
    variant: {
      primary: "text-text-50 py-3 flex justify-center px-8 rounded-2xl shadow-md active:shadow-none border-primary-600 focus:ring-2 ring-primary-400/50 text-white bg-primary-500 active:bg-primary-300 hover:bg-primary-400 transition duration-300",
      secondary: "text-text-50 py-3 justify-center flex px-8 rounded-2xl border border-transparent hover:border-white/20 active:shadow-none focus:ring-2 ring-primary-400/50 text-white bg-white/10 active:bg-white/20 hover:bg-transparent transition duration-300",
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
