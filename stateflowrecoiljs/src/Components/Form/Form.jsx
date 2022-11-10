import React from "react";
import { useRecoilValue } from "recoil";
import { FormCurrentStepAtom } from "../atoms/form";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Sucess from "./steps/Sucess";

const Form = () => {
  const formStep = useRecoilValue(FormCurrentStepAtom);
  return (
    <div className="Main Form">
      {formStep === 1 ? (
        <Step1 />
      ) : formStep === 2 ? (
        <Step2 />
      ) : formStep === 3 ? (
        <Step3 />
      ) : formStep === 4 ? (
        <Sucess />
      ) : null}
    </div>
  );
};

export default Form;
