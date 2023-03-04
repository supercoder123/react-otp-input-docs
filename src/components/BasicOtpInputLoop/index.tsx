import React  from "react";
import { useOtpInput } from "react-otp-input-hook";

export const BasicOTPComponentLoop = ({ onChange }: { onChange: (val: string) => void }) => {
  const { inputs } = useOtpInput({
    numberOfInputs: 5,
    onInputValueChange: onChange,
    defaultInlineStyles: {
        height: '40px',
        width: '40px',
        margin: '0 5px',
        textAlign: 'center',
        fontSize: '20px'
    },
    placeholder: '-'
  });

  return (
    <>
      {inputs.map((input, i) => {
        return <input required key={i} {...input} />;
      })}
    </>
  );
};