import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-[#ffff0045] py-4">
      <section className="container-t flex items-center gap-40 max-[1030px]:flex-col max-[1030px]:gap-10 max-[1030px]:justify-center">
        <Link
          to="/"
          className="inline-block font-extrabold text-2xl max-[600px]:text-xl text-green-600 font-mono tracking-tighter"
        >
          Tasty Trails
        </Link>
        <nav>
          <ul className=" font-serif text-[#444] text-sm font-medium flex items-center gap-10 max-[600px]:gap-5 max-[400px]:gap-2">
            <li>
              <NavLink to="/" className="px-4 py-1.5 max-[400px]:px-2.5">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="products" className="px-4 py-1.5 max-[400px]:px-2.5">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className="px-4 py-1.5 max-[400px]:px-2.5">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="newsletter"
                className="px-4 py-1.5 max-[400px]:px-2.5"
              >
                Newsletter
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}
export default Navbar
