import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Account = ({ sm }) => {
  const [menu, setMenu] = useState(false);

  //   useEffect(() => {
  //     window.addEventListener("click", () => {
  //       if (menu) {
  //         setMenu(false);
  //       } else {
  //         setMenu(menu);
  //       }
  //     });
  //   }, [menu]);

  const handleAccountMenu = () => {
    setMenu(!menu);
  };

  return (
    <section className="relative select-none">
      <div
        onClick={handleAccountMenu}
        className={`h-9 w-full min-w-max px-3 rounded-sm
     flex items-center justify-center cursor-pointer bg-slate-900 text-white  `}
      >
        <h2>Wooki Dooki</h2>
      </div>

      {/* pop up menu options when name box is clicked */}
      <div
        className={` ${menu ? "flex" : "hidden"}  ${
          sm ? "bottom-10 w-full" : " top-10 min-w-max"
        } absolute bg-white rounded-sm text-black text-sm  flex-col p-1  right-0 drop-shadow-lg shadow-inner`}
      >
        <Link
          onClick={() => setMenu(false)}
          className="h-10 px-2 flex items-center rounded-sm hover:bg-slate-700 hover:text-white"
          to={"/change_password"}
        >
          {" "}
          Change Password{" "}
        </Link>
        <Link
          onClick={() => setMenu(false)}
          className="h-10 px-2 flex items-center rounded-sm hover:bg-slate-700 hover:text-white"
          to={"/sign_in"}
        >
          {" "}
          Sign In{" "}
        </Link>
        <Link
          onClick={() => setMenu(false)}
          className="h-10 px-2 flex items-center rounded-sm hover:bg-slate-700 hover:text-white"
          to={"/login"}
        >
          {" "}
          Login{" "}
        </Link>
      </div>
    </section>
  );
};

export default Account;
