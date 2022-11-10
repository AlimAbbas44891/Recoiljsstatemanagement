import { atom } from "recoil";

export const FormCurrentStepAtom = atom({
  key: "FormCurrentStepAtom",
  default: 1,
});

export const FormDataAtom = atom({
  key: "FormDataAtom",
  default: {
    name: "",
    mobileNumber: "",
    email: "",
  },
});
