import { selector } from "recoil";
import { FormDataAtom } from "../atoms/form";

export const mobileNumberLength = selector({
  key: "mobileNumberLength",
  get: ({ get }) => {
    const form = get(FormDataAtom);
    const lengthOfMobileNumber = form.mobileNumber.length;
    return lengthOfMobileNumber;
  },
});
