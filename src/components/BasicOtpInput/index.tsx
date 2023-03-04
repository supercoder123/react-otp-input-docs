import React, { useEffect }  from "react";
import { useOtpInput } from "react-otp-input-hook";

export const BasicOTPComponent = ({ onChange, clearFields }: { onChange: (val: string) => void, clearFields: boolean }) => {
  const { register, clear } = useOtpInput({
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

  useEffect(() => {
    if (clearFields) {
      clear();
    }
  }, [clearFields])
  

  const defaultOptions = { required: true };

  return (
    <>
      <input {...register("digit-1", defaultOptions)} />
      <input {...register("digit-2", defaultOptions)} />
      <input {...register("digit-3", defaultOptions)} />
      <input {...register("digit-4", defaultOptions)} />
      <input {...register("digit-5", defaultOptions)} />
    </>
  );
};