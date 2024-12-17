import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SUSE } from "next/font/google";

const suse = SUSE();

const Logo = () => {
  return (
    <h1
      className={cn(
        suse.className,
        "text-5xl font-extrabold bg-gradient-to-r from-[#6765F1] to-[#EA51A0] bg-clip-text text-transparent cursor-pointer hover:scale-125 transition-transform duration-300"
      )}
    >
      <Link href="/">EngenMe</Link>
    </h1>
  );
};

export default Logo;
