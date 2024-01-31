import React, { useState } from "react";
import { Otp, PhoneEmail } from "../Steps/index";
const steps = {
  1: PhoneEmail,
  2: Otp,
};

const Authenticate = () => {
  const [step, setStep] = useState(1);
  const CurrentStep = steps[step];
  function onNext() {
    setStep(step + 1);
  }
  return (
    <div>
      <CurrentStep onNext={onNext} />
    </div>
  );
};

export default Authenticate;
