import React from 'react';

const Input = ({name,label,value,id,type,error,onChange}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                className="form-control"
                value={value}
                id={id}
                name={name}
                type={type}
                onChange={onChange}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}
 
export default Input;