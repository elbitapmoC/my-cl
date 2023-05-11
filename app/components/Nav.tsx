import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-center py-6 gap-12 sm:px-6 lg:px-8 items-center">
      {/* <Link href="/visualize">Data Vis</Link> */}
      <Link href="/">
        <Image
          alt="Logo"
          height="48"
          width="48"
          className="w-auto h-auto float-logo"
          src="/images/logo.svg"
        />
      </Link>
      {/* <Link href="/practice">Practice Test</Link> */}
    </nav>
  );
};

export default Nav;
