import { NavLink } from "react-router-dom";
import { cn } from "../../features/utils";
import "./link.css";

const NLink = ({ path, title, handleChange }) => {
    return (
        <NavLink
            onClick={handleChange}
            to={path}
            className={({ isActive }) =>
                cn(
                    "text-gray-500 font-medium md:hover:text-white hover:text-black duration-200",
                    {
                        "md:text-white text-black": isActive,
                    }
                )
            }
        >
            {title}
        </NavLink>
    );
};

export default NLink;
