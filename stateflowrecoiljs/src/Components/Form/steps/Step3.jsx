import React from "react";
import { useRecoilState } from "recoil";
import { FormCurrentStepAtom, FormDataAtom } from "../../atoms/form";

const Step3 = () => {
  const [form, setForm] = useRecoilState(FormDataAtom);
  const [formStep, setFormStep] = useRecoilState(FormCurrentStepAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        autoFocus
        placeholder="Enter valid email"
        required={true}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
        value={form.email}
      />
      <button type="submit">REGISTER</button>
      <button onClick={() => setFormStep(formStep - 1)}>BACK</button>
    </form>
  );
};

export default Step3;
