import React, { useState } from "react";
import { UserName, Profile } from "../Steps/index";
const steps = {
  1: UserName,
  2: Profile,
};

const Activate = () => {
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

export default Activate;
