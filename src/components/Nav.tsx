import NavElement from "./NavElements";

const Nav = () => {
  return (
    <nav className=" flex gap-5 px-10 py-5 border-b text-sm font-medium">
      <NavElement link="" name="Home" />
      <NavElement link="superHeroes" name="Traditional Super Heroes" />
      <NavElement link="RQsuperHeroes" name="RQ Super Heroes" />
      <NavElement link="parallelQueries" name="Parallel Queries" />
      <NavElement
        link="DynamicParallelQueries"
        name="Dynamic Parallel Queries"
      />
    </nav>
  );
};

export default Nav;
