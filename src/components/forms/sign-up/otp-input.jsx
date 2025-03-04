import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import React from "react";

const OTPInput = ({ otp, setOtp }) => {
  return (
    <InputOTP maxLength={6} value={otp} onChange={(otp) => setOtp(otp)}>
      <div className="flex gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            <InputOTPSlot index={index}  />
          </div>
        ))}
      </div>
    </InputOTP>
  );
};

export default OTPInput;
