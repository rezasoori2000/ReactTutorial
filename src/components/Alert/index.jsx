import React from 'react';

const Alert = (message, messageType, children) =>{

return (
<div className={`alert alert-${messageType}`}>
    {message? message : children}
</div>
);
};

export default Alert;