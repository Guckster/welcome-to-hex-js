import React from 'react';

const Alert = (props) => {

    const {text} = props;

    return (
        <div className="alert alert-danger" role="alert">
            {text}
        </div>
    )
};

export default Alert;