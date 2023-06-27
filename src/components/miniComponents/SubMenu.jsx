import React from "react";
import { BsHeartFill, BsBookmarkFill, BsPlayFill } from "react-icons/bs";
import IconBtn from "./IconBtn";
import Modal from "./Modal";

const SubMenu = () => {
  return (
    <section className="flex items-center gap-3">
      <IconBtn icon={<BsHeartFill />} tooltip={"Favorite"} />
      <IconBtn icon={<BsBookmarkFill />} tooltip={"Save"} />
    </section>
  );
};

export default SubMenu;
