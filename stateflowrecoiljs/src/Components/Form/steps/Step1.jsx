import React from "react";
import { useRecoilState } from "recoil";
import { FormCurrentStepAtom, FormDataAtom } from "../../atoms/form";

const Step1 = () => {
  const [form, setForm] = useRecoilState(FormDataAtom);
  const [formStep, setFormStep] = useRecoilState(FormCurrentStepAtom);

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        placeholder="Enter your name"
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
        value={form.name}
      />
      <button type="submit">NEXT</button>
    </form>
  );
};

export default Step1;
