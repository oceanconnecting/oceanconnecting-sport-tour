import { ButtonHTMLAttributes, Children } from "react";
import { cva } from "class-variance-authority";

const classes = cva('', {
  variants: {
    variant: {
      primary: 'text-text-50 py-3 px-5 rounded-full border border-white bg-white hover:bg-opacity-80 active:bg-opacity-35 active:text-text-950 transition duration-300',
      secondary: 'text-text-950 py-3 px-5 rounded-full border border-white bg-opacity-0 bg-white hover:bg-opacity-25 active:bg-opacity-90 active:text-text-50 transition duration-300',
    },
  },
});

function Button(props: { variant: 'primary' | 'secondary' } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { variant, className, ...otherProps } = props;

  return (
    <button
      className={`${classes({ variant })} ${className || ''}`}
      {...otherProps}
    >
      {props.children}
    </button>
  );
}

export default Button;
