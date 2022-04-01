import React from "react";

const ErrorMessage = ({children}) => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show container"
      role="alert"
      style={{ width: "35%", maxWidth: "100%" }}
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default ErrorMessage;
