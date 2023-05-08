import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className=" flex gap-5 px-10 py-5 border-b text-sm font-medium">
        <Link to='/'><p>Home</p></Link>
        <Link to='/superHeroes'><p>Traditional Super Heroes</p></Link>
        <Link to='/RQsuperHeroes'><p>RQ Super Heroes</p></Link>
    </nav>
  )
}

export default Nav