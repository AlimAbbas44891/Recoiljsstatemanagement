import React from "react";
import { useRecoilState } from "recoil";
import { FormCurrentStepAtom, FormDataAtom } from "../../atoms/form";

const Step3 = () => {
  const [form, setForm] = useRecoilState(FormDataAtom);
  const [formStep, setFormStep] = useRecoilState(FormCurrentStepAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        placeholder="Enter valid email"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
        value={form.email}
      />
      <button type="submit">Continue</button>
      <button onClick={() => setFormStep(formStep - 1)}>Back</button>
    </form>
  );
};

export default Step3;
