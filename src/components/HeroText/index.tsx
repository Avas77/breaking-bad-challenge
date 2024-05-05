import React from "react";

interface IHeroTextProps {
  highlighted: string;
  rest: string;
}

const HeroText = ({ highlighted, rest }: IHeroTextProps) => {
  return (
    <h1 className="text-8xl flex items-center justify-center font-bold">
      {highlighted && (
        <mark className="p-2 bg-primary text-white">{highlighted}</mark>
      )}
      {rest}
    </h1>
  );
};

export default HeroText;
