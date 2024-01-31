import React from "react";
import Button from "../../../components/common/Button/Button";

const Name = ({ onNext }) => {
  return (
    <div>
      <h1>Name</h1>
      <Button onClick={onNext} />
    </div>
  );
};

export default Name;
