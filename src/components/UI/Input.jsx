import React from 'react';

const Input = ({ type = 'text', ...rest }) => {
    return <input type={type} {...rest} />;
};

export default Input;
