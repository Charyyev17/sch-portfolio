import React from "react";

type Props = {};

function BackToTop({}: Props) {
  return (
    <a className="" href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img
            className="h-10 w-10 rounded-full filter bg-[#F7AB0A]/80 cursor-pointer hover:animate-bounce"
            src="https://cdn.onlinewebfonts.com/svg/img_121556.png"
            alt=""
          />
        </div>
      </footer>
    </a>
  );
}

export default BackToTop;
