import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto  py-6 flex items-center text-white">
      <img
        className="w-24"
        src="https://assets-global.website-files.com/6024cb0edb66de5e830d3665/60343177940d0b566d3991b7_og.png"
      />
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Culture"].map((elem, index) => (
          <a className="text-sm flex items-center gap-1" href="#">
            {index === 1 && (
              <span
                style={{ boxShadow: "0 0 0.50em #00FF19" }}
                className="inline-block w-1 h-1 bg-green-500 rounded-full"
              ></span>
            )}
            {elem}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
