import React from "react";

interface IHeroTextProps {
  highlighted: string;
  rest: string;
}

const HeroText = ({ highlighted, rest }: IHeroTextProps) => {
  return (
    <h1 className="text-9xl flex items-center justify-center">
      <mark className="p-2">{highlighted}</mark>
      {rest}
    </h1>
  );
};

export default HeroText;
