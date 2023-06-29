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

  const mobileNav = (
    <div
      className={`flex flex-col fixed h-screen top-0 right-0 w-60 bg-gray-200 transform ${
        menu ? " translate-x-0 " : " translate-x-[400px]  "
      } lg:hidden gap-5 duration-300 py-[22px] z-10 text-black`}
    >
      <button onClick={handleMenu} className="text-2xl ml-4 mt-[2px] w-fit">
        <RxCross1 />
      </button>
      <div className="flex flex-1 flex-col px-4 gap-3">
        <div className="flex flex-col font-medium gap-3">
          <NLink
            handleChange={handleMenu}
            path={"/"}
            title={"Home"}
            sm={true}
          />
          <NLink
            handleChange={handleMenu}
            path={"movies"}
            title={"Movies"}
            sm={true}
          />
          <NLink
            handleChange={handleMenu}
            path={"tv"}
            title={"Series"}
            sm={true}
          />
          <NLink
            handleChange={handleMenu}
            path={"about"}
            title={"About Us"}
            sm={true}
          />
          <NLink
            handleChange={handleMenu}
            path={"contact"}
            title={"Contact"}
            sm={true}
          />
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
  );

  return (
    <div className="sticky top-0 z-10">
      <section className="bg-slate-800 drop-shadow-md shadow-md">
        <nav className="w-[85%] mx-auto py-5 flex items-center justify-between">
          {/* brand title */}
          <h2 onClick={handleMenu} className="text-xl font-semibold z-[5]">
            <Link to={"/"}> PK-MovieChannel </Link>
          </h2>

          {/* navigation links */}
          <ul className=" hidden font-medium lg:flex items-center gap-5 text-gray-300 hover:text-white ">
            <NLink path={"/"} title={"Home"} />
            <NLink path={"movies"} title={"Movies"} />
            <NLink path={"tv"} title={"Series"} />
            <NLink path={"about"} title={"About Us"} />
            <NLink path={"contact"} title={"Contact"} />
          </ul>

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

          {/* menu trigger button */}
          <button onClick={handleMenu} className={`text-2xl lg:hidden `}>
            <RxHamburgerMenu />
          </button>

          {/* className={` flex-col fixed h-screen top-0 right-0 w-60 bg-gray-200 ${
            menu ? "flex lg:hidden" : "hidden "
          }  gap-5 duration-300 py-[22px] z-20  text-black`} */}
        </nav>
      </section>
      {/* menu for small devices */}
      {mobileNav}
    </div>
  );
};

export default Navbar;
