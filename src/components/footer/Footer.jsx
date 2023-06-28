import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-5 py-10 flex items-center justify-center bg-slate-900 mt-auto">
      <div className="text-center">
        <h2 className="text-lg mb-2">
          {" "}
          PK-MovieChannel inspire by{" "}
          <Link
            to={"https://www.themoviedb.org/"}
            className="text-lg font-semibold text-sky-200 underline"
          >
            {" "}
            TMDB{" "}
          </Link>{" "}
        </h2>
        <p className="text-sm">
          {" "}
          ©{new Date().getFullYear()}, Built with ReactJS & Tailwind CSS!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
