import { NavLink } from "react-router-dom";
import "./link.css";

const NLink = ({ path, title, sm, handleChange }) => {
  return (
    <NavLink
      onClick={handleChange}
      to={path}
      className={` nav-link py-1 ${
        sm
          ? "text-slate-600 hover:text-slate-900 border-l-4 border-transparent px-2 hover:border-black hover:bg-black/30"
          : "text-slate-300 hover:text-white border-b-2 border-transparent hover:border-white"
      }   `}
    >
      {title}
    </NavLink>
  );
};

export default NLink;
