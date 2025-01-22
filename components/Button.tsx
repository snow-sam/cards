import React, { ButtonHTMLAttributes, ElementType } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: ElementType;
};

export const Button: React.FC<ButtonProps> = ({ icon: Icon, children, className, ...props }) => {
    return (
        <button
            {...props}
            className={`bg-color4 text-color1 rounded-xl py-2.5 ${className || ''}`}
        >
            {Icon && <Icon className="icon" />}
            {children}
        </button>
    );
};