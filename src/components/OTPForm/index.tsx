import React from "react";
import { useOtpInput } from "react-otp-input-hook";
import "./styles.css";

export const OTPForm = () => {
  const { register, value, inputs } = useOtpInput({
    placeholder: "-",
    numberOfInputs: 5,
  });
  

  return (
    <div>
      <form
        className="basic-otp-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert(value);
        }}
      >
        <div className="otp">
          {inputs.map((input, i) => {
            return <input required key={i} {...input} />;
          })}
        </div>

        <button type="submit">Submit</button>
      </form>

      <div>Value: {value}</div>
    </div>
  );
};