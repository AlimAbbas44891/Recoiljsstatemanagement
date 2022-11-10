import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { FormCurrentStepAtom, FormDataAtom } from "../../atoms/form";
import { mobileNumberLength } from "../../selectors/form";

const Step2 = () => {
  const [form, setForm] = useRecoilState(FormDataAtom);
  const [formStep, setFormStep] = useRecoilState(FormCurrentStepAtom);
  const lengthOfMobileNumber = useRecoilValue(mobileNumberLength);

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        placeholder="Enter your mobile number (10 digits)"
        onChange={(e) =>
          setForm({
            ...form,
            mobileNumber: e.target.value,
          })
        }
        value={form.mobileNumber}
      />
      {lengthOfMobileNumber === 10 ? (
        <p className="success-message">Mobile number is valid</p>
      ) : null}
      <button
        type="submit"
        disabled={lengthOfMobileNumber === 10 ? false : true}
      >
        NEXT
      </button>
      <button onClick={() => setFormStep(formStep - 1)}>Back</button>
    </form>
  );
};

export default Step2;
