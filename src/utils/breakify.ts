import elements from "../consts/elements";

export const breakify = (text: string) => {
  let brokenText = {
    pre: "",
    rest: "",
  };
  for (let i = 0; i < text.length; i++) {
    const charSlice = text.slice(0, i + 1);
    if (elements.includes(charSlice)) {
      brokenText.pre = charSlice;
    } else {
      brokenText.rest = text.slice(i, text.length);
      break;
    }
  }
  return brokenText;
};
