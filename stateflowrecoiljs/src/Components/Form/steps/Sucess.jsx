import React from "react";
import { useRecoilState } from "recoil";
import { FormCurrentStepAtom, FormDataAtom } from "../../atoms/form";

const Sucess = () => {
  const [form, setForm] = useRecoilState(FormDataAtom);
  const [formStep, setFormStep] = useRecoilState(FormCurrentStepAtom);

  return (
    <form>
      <div className="success-step">
        <h3>Registration successful!</h3>
        <p>
          <span>Name:</span>
          {form.name}
        </p>
        <p>
          <span>Mobile number:</span>
          {form.mobileNumber}
        </p>
        <p>
          <span>Address:</span>
          {form.email}
        </p>
      </div>
    </form>
  );
};

export default Sucess;
