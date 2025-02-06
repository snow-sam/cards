import { InputHTMLAttributes, ElementType } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    icon?: ElementType;
  };
  
export const Input: React.FC<InputProps> = ({ icon: Icon, label, className, ...props }) => {
    return (
      <div className='flex gap-4 items-center text-color3 border border-color2 rounded-xl py-2.5 px-4'>
        {Icon && <div className="w-fit"><Icon size={16} /></div>}
        <div className='flex flex-col'>
          {label && <span className='text-xs text-color2 font-semibold'>{label}</span>}
          <input
            {...props}
            className={`text-3 text-base bg-transparent outline-hidden aspect-hidden ${className || ''}`}
          >
          </input>
        </div>
      </div>
    );
  };