import { Link } from "react-router-dom";
import nfImage from "../../assets/images/404_2.png";

const NotFound = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse md:w-[85%] mx-auto md:items-center justify-center ">
            <img
                src={nfImage}
                alt="$04 Not Found Image"
                className=" w-[80%] md:w-[50%] object-contain mx-auto "
            />
            <div className=" bg-slate-800 drop-shadow-lg w-[80%] mx-auto p-5 flex flex-col gap-3 ">
                <h2 className="text-3xl font-bold">Sorry</h2>
                <h2 className="text-xl font-medium">
                    {" "}
                    The page you were looking for is currently unavailable!{" "}
                </h2>
                <Link
                    to={".."}
                    className="text-lg px-5 py-2 rounded-sm bg-slate-500 text-center md:w-fit"
                >
                    {" "}
                    Go Back{" "}
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
