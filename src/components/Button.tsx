import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'bg-primary text-white hover:bg-primary/90 focus:ring-primary/50':
            variant === 'primary',
          'bg-white text-primary border border-primary hover:bg-gray-50 focus:ring-primary/50':
            variant === 'secondary',
        },
        className,
      )}
      {...props}
      aria-label={props['aria-label'] || 'Button'}
      tabIndex={0}
    >
      {children}
    </button>
  );
};

export default Button;
