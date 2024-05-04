import { breakify } from "../../utils/breakify";
import HeroText from "../HeroText";

interface IHeroTextGroupProps {
  firstName: string;
  lastName: string;
}

const HeroTextGroup = ({ firstName, lastName }: IHeroTextGroupProps) => {
  const firstNameObj = breakify(firstName);
  const lastNameObj = breakify(lastName);
  return (
    <section>
      <HeroText highlighted={firstNameObj.pre} rest={firstNameObj.rest} />
      <HeroText highlighted={lastNameObj.pre} rest={lastNameObj.rest} />
    </section>
  );
};

export default HeroTextGroup;
