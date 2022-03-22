import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-end justify-between flex-wrap p-6">
      <div className="flex items-end flex-shrink-0 mr-6">
        {/* Logo here */}
        <span className="font-heading text-5xl tracking-tight">Samaha</span>
      </div>
      <div className="block md:hidden">
        <button className="flex items-end px-3 py-2 border first-line:rounded">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full hidden flex-grow md:flex md:items-end md:w-auto">
        <div className="font-heading text-sm flex md:flex-grow md:justify-end">
          <a
            href="#directory"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Directory
          </a>
          <a
            href="#projects"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Projects
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Our Story
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
