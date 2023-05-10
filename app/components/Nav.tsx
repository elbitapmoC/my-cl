import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav
      className="
      flex
      flex-col
      justify-center
      py-6
      sm:px-6
      lg:px-8
      items-center"
    >
      <Link href="./">
        <Image
          alt="Logo"
          height="48"
          width="48"
          className="w-auto h-auto float-logo"
          src="/images/logo.svg"
        />
      </Link>
    </nav>
  );
};

export default Nav;
