import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <fieldset className="form-group">
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px', marginLeft:'20px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </fieldset>
  );
};