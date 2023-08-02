import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Contact = () => {
    const [model, setModel] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const canSave = [formData.name, formData.email, formData.message].every(
        Boolean
    );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (canSave) {
            setFormData({ name: "", email: "", message: "" });
            setModel(false);
            //alert("Message has been sent!");
            //console.log(formData);
        }
    };
    return (
        <section>
            <button
                onClick={() => setModel(true)}
                className="px-5 py-2 text-lg rounded-sm bg-red-900 hover:bg-red-700 duration-200"
            >
                {" "}
                Contact Us{" "}
            </button>
            <div
                className={` model ${
                    model ? " scale-100" : " scale-0"
                } fixed w-full h-full top-0 left-0 bg-black/40 z-10 flex items-center justify-center p-5 md:p-0 duration-300 `}
            >
                <div className=" max-w-xl w-full bg-white rounded-sm p-3 text-black">
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-800">
                        <h2 className="text-xl font-semibold">Contact Form</h2>
                        <button onClick={() => setModel(false)}>
                            <RxCross1 className="text-2xl" />
                        </button>
                    </div>
                    <form
                        action="#"
                        onSubmit={handleSubmit}
                        className="text-left"
                    >
                        <div className="mb-3">
                            <label
                                htmlFor="name"
                                className="font-medium mb-1 inline-block"
                            >
                                Name{" "}
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="outline-none h-10 w-full rounded-sm px-2 bg-gray-400 focus:bg-gray-300 duration-150"
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="email"
                                className="font-medium mb-1 inline-block"
                            >
                                Email{" "}
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="outline-none h-10 w-full rounded-sm px-2 bg-gray-400 focus:bg-gray-300 duration-150"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="message"
                                className="font-medium mb-1 inline-block"
                            >
                                Message{" "}
                            </label>
                            <textarea
                                type="text"
                                name="message"
                                id="message"
                                rows={6}
                                className="outline-none w-full rounded-sm p-2 bg-gray-400 focus:bg-gray-300 duration-150"
                                value={formData.message}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                        <button
                            className={`px-3 py-1 text-lg rounded-sm ${
                                canSave
                                    ? "bg-blue-800 hover:bg-blue-700"
                                    : "bg-gray-700"
                            }  duration-200 text-white`}
                            disabled={!canSave}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
