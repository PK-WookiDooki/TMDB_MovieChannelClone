import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NLink from "../links/NLink";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import SearchInput from "../input/SearchInput";
import Account from "../account/Account";
import { useDispatch } from "react-redux";
import { setKeyword } from "../../features/services/moviesSlice";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");

  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // console.log(searchedMovies);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      return nav("/");
    }
    nav("search");
    handleMenu();
    dispatch(setKeyword(search));
    setSearch("");
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="bg-slate-800 drop-shadow-md shadow-md sticky top-0 z-10 ">
      <div className="w-[85%] mx-auto py-5 flex flex-row items-center justify-between">
        {/* brand title */}
        <h2 className="text-xl font-semibold z-[5]">
          <Link to={"/"}> PK-MovieChannel </Link>
        </h2>
        {/* navigation links */}
        <nav className=" hidden font-medium lg:flex items-center gap-5 text-gray-300 hover:text-white ">
          <NLink path={"/"} title={"Home"} />
          <NLink path={"/about"} title={"About Us"} />
          <NLink path={"/contact"} title={"Contact"} />
        </nav>

        {/* search box */}
        <div className=" hidden lg:flex items-center gap-3 ">
          <SearchInput
            value={search}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <Account />
        </div>

        {/* this's a background when menu is activated */}
        <div
          className={` ${
            menu ? "block lg:hidden" : "hidden"
          }  fixed h-screen top-0 left-0 bg-black/40 w-full z-[3]`}
        ></div>

        <div className="lg:hidden">
          {/* menu trigger button */}
          <button onClick={handleMenu} className={`text-2xl `}>
            <RxHamburgerMenu />
          </button>

          {/* menu for small devices */}
          <div
            className={` flex-col fixed h-screen top-0 right-0 w-52 bg-gray-200 ${
              menu ? "flex lg:hidden" : "hidden "
            }  gap-5 duration-300 py-5 z-20  text-black`}
          >
            <button
              onClick={handleMenu}
              className="text-2xl self-end mr-[42px] mt-[2px]"
            >
              <RxCross1 />
            </button>
            <div className="flex flex-1 flex-col px-3 gap-3">
              <div className="flex flex-col font-medium gap-3">
                <NLink path={"/"} title={"Home"} sm={true} />
                <NLink path={"/about"} title={"About Us"} sm={true} />
                <NLink path={"/contact"} title={"Contact"} sm={true} />
              </div>
              <SearchInput
                value={search}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                sm={true}
              />
              <div className="mt-auto">
                <Account sm={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
