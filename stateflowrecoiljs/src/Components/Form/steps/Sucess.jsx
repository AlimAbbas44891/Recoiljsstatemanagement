import React from "react";
import { useRecoilValue } from "recoil";
import { FormCurrentStepAtom, FormDataAtom } from "../../atoms/form";

const Sucess = () => {
  const formValue = useRecoilValue(FormDataAtom);
  return (
    <form>
      <div className="success-step">
        <h3>Registration successful!!</h3>
        <p>
          <span>Name:</span>
          {formValue.name}
        </p>
        <p>
          <span>Mobile number:</span>
          {formValue.mobileNumber}
        </p>
        <p>
          <span>Email:</span>
          {formValue.email}
        </p>
      </div>
    </form>
  );
};

export default Sucess;
