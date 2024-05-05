import elements from "../consts/elements";

export const breakify = (text: string) => {
  let brokenText = {
    pre: "",
    rest: "",
  };
  let brokenIndex;
  for (let i = 0; i < text.length; i++) {
    const charSlice = text.slice(0, i + 1);
    if (elements.includes(charSlice)) {
      brokenText.pre = charSlice;
      brokenIndex = i + 1;
    }
  }
  brokenText.rest = brokenIndex ? text.slice(brokenIndex, text.length) : text;
  return brokenText;
};
