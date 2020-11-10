import React from "react";
import "./Password.css";
function PasswordStrength(props) {
  const hasNumber = (value) => {
    return new RegExp(/[0-9]/).test(value);
  };

  const hasMixed = (value) => {
    return new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value);
  };

  const hasSpecial = (value) => {
    return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
  };

  const strengthColor = (count) => {
    if (count < 2) return "Too short";

    if (count < 3) return "Weak";

    if (count < 4) return "Fair";

    if (count < 5) return "Strong";

    if (count < 6) return "Very Strong";
  };

  const strengthIndicator = (value) => {
    let strengths = 0;

    if (value.length > 5) strengths++;

    if (value.length > 7) strengths++;

    if (hasNumber(value)) strengths++;

    if (hasSpecial(value)) strengths++;

    if (hasMixed(value)) strengths++;

    return strengths;
  };

  const strength = strengthIndicator(props.password);
  const color = strengthColor(strength);
  const pick = (data) =>
    data === "Too short"
      ? "5"
      : data === "Weak"
      ? "35"
      : data === "Fair"
      ? "50"
      : data === "Strong"
      ? "75"
      : data === "Very Strong"
      ? "100"
      : 0;
  const back = (data) =>
    data === "Too short"
      ? "danger"
      : data === "Weak"
      ? "danger"
      : data === "Fair"
      ? "primary"
      : data === "Strong"
      ? "info"
      : data === "Very Strong"
      ? "success"
      : "danger";
  return (
    <>
      {props.password && (
        <label className="password-strength-meter-label ">
          <>
            <div className="progress" style={{ width: "100%" }}>
              <div
                class={`progress-bar  bg-${back(color)}`}
                role="progressbar"
                style={{ width: `${pick(color)}%` }}
                aria-valuenow={pick(color)}
                aria-valuemax="100"
              ></div>
            </div>
            <span className="password-input text-left">
              Password strength:{" "}
              <strong className={`password - input text-${back(color)}`}>
                {" "}
                {color}{" "}
              </strong>
            </span>{" "}
          </>
        </label>
      )}
    </>
  );
}

export default PasswordStrength;
