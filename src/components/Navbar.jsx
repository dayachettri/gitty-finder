import { FaGithub } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto flex justify-between">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <NavLink to="." className="text-lg font-bold align-middle">
            Gitty Finder
          </NavLink>
        </div>
        <div className="flex px-2 mx-2 ">
          <div className="flex gap-3">
            <NavLink
              to="."
              className={({ isActive }) =>
                isActive
                  ? 'btn btn-ghost btn-sm rounded-btn border-solid border-white border-2'
                  : 'btn btn-ghost btn-sm rounded-btn'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive
                  ? 'btn btn-ghost btn-sm rounded-btn border-solid border-white border-2'
                  : 'btn btn-ghost btn-sm rounded-btn'
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
