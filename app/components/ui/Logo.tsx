import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" width={77} height={56} alt="Digifly logo text" />
    </Link>
  );
};

export default Logo;
