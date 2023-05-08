'use client';

type Props = React.ButtonHTMLAttributes<HTMLElement>;

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="bg-white py-3 rounded hover:bg-black hover:text-white transition-colors"
    >
      {children}
    </button>
  );
};

export default Button;
