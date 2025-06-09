import React from "react";
import "./RegisterForm.css";

function RegisterForm() {
  return (
    <div className="register-content">
      <div className="register-form-container">
        <div className="form-field">
          <div className="field-label">
            <div className="label-text">Name</div>
          </div>
          <div className="input-container">
            <div className="input-placeholder">name</div>
          </div>
        </div>

        <div className="form-field">
          <div className="field-label">
            <div className="label-text">Email</div>
          </div>
          <div className="input-container">
            <div className="input-placeholder">email</div>
          </div>
        </div>

        <div className="form-field">
          <div className="field-label">
            <div className="label-text">Password</div>
          </div>
          <div className="input-container">
            <div className="input-placeholder">password</div>
          </div>
        </div>

        <div className="register-buttons">
          <div className="register-btn">
            <div className="btn-text">Register</div>
          </div>
        </div>

        <div className="login-link-section">
          <div className="login-link-container">
            <div className="login-link-text">
              <span className="already-registered">Already registered? </span>
              <span className="login-link">Login here</span>
            </div>
          </div>
        </div>
      </div>

      <div className="register-text-section">
        <div className="register-title">Register</div>
        <div className="register-description-container">
          <div className="register-description">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
