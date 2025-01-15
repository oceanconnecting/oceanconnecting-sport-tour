import { cva } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";
import Link, { LinkProps } from "next/link";

const classes = cva('', {
  variants: {
    variant: {
      primary: 'text-text-50 py-3 px-5 rounded-full border border-white bg-white hover:bg-opacity-80 active:bg-opacity-35 active:text-text-950 transition duration-300',
      secondary: 'text-text-950 py-3 px-5 rounded-full border border-white bg-opacity-0 bg-white hover:bg-opacity-25 active:bg-opacity-90 active:text-text-50 transition duration-300',
      dark_primary: 'text-white py-3 px-5 w-fit text-nowrap rounded-full border border-background-50 bg-background-50 hover:bg-opacity-80 active:bg-opacity-35 active:text-text-950 transition duration-300',
      dark_secondary: 'text-text-950 py-3 px-5 rounded-full border border-white bg-opacity-0 bg-white hover:bg-opacity-25 active:bg-opacity-90 active:text-text-50 transition duration-300',
    },
  },
});

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'dark_primary' | 'dark_secondary';
  href: string; // Ensure href is required
} & Omit<LinkProps, 'href'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

function Button(props: ButtonProps) {
  const { variant, className, href, ...otherProps } = props;

  if (!href) {
    console.error("The `href` prop is required for the Button component.");
    return null; // Prevent rendering without a valid href
  }

  return (
    <Link
      href={href}
      className={`${classes({ variant })} ${className || ''}`}
      {...otherProps}
    >
      {props.children}
    </Link>
  );
}

export default Button;
