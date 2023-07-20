import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </>
  );
};

export default Header;
