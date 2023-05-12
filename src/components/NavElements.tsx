import { Link } from "react-router-dom";

type NavElementsProps = {
  link: string;
  name: string;
};

const NavElement = ({ link, name }: NavElementsProps) => {
  return (
    <Link to={`/${link}`}>
      <p className=" hover:underline">{name}</p>
    </Link>
  );
};

export default NavElement;
