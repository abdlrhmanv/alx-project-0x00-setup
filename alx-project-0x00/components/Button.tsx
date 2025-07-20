import { ButtonProps } from '@/interfaces';

const sizeClasses = {
  small: 'text-sm py-1 px-3',
  medium: 'text-base py-2 px-4',
  large: 'text-lg py-3 px-6',
};

const shapeClasses = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = 'medium',
  shape = 'rounded-md',
  className = '',
}) => {
  return (
    <button
      className={`
        ${sizeClasses[size]} 
        ${shapeClasses[shape]} 
        bg-blue-600 text-white hover:bg-blue-700 transition 
        ${className}
      `}
    >
      {title}
    </button>
  );
};

export default Button;