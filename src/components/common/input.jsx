import React from "react";

// const Input = ({ name, value, onChange, type, error, lable }) => {
//   return (
//     <div className="from-group m-2">
//       <label htmlFor={name}>{lable}</label>
//       <input
//         value={value}
//         onChange={onChange}
//         id={name}
//         name={name}
//         type={type}
//         className="form-control"
//       />
//       {error && <div className="alert alert-danger">{error}</div>}
//     </div>
//   );
// };

// above and below codes are similar

const Input = ({ name, error, lable, ...rest }) => {
  return (
    <div className="from-group m-2">
      <label htmlFor={name}>{lable}</label>
      <input {...rest} id={name} name={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
