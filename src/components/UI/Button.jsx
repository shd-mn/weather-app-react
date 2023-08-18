import React from 'react';

const Button = ({ children, type = 'button', ...rest }) => {
    return (
        <button type={type} {...rest}>
            {children}
        </button>
    );
};

export default Button;
