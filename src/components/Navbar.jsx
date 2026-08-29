import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyles = ({ isActive }) =>
    `underline underline-offset-4 decoration
   transition-all duration-300 ease-in-out
   ${
     isActive
       ? " text-[#5FAF68] decoration-[#5FAF68]"
       : "decoration-transparent text-[#25352A] hover:decoration-[#25352A] hover:text-[#25352A]"
   }`;
  return (
    <nav className="sticky top-0 z-10 flex justify-between items-center px-8 py-5 bg-[#FFFDF7] border-b border-[#E3EDE3]">
      <span className="text-2xl uppercase font-bold tracking-wider font-crimson text-[#25352A]">
        Soma
      </span>
      <ul className="flex gap-5 uppercase text-sm">
        <li>
          <NavLink to="/" className={linkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/notes" className={linkStyles}>
            Notes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
