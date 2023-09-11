import React from "react";
import Link from "next/link";
import Logo from "./logo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-transparent sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
          <Logo />

            <ul className="ml-auto hidden md:flex gap-x-6 text-red-500 text-base ">
              <li>
                <Link href="/our-story">
                  <p><u>Our Story</u></p>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <p><u>Team</u></p>
                </Link>
              </li>
              <li>
                <Link href="/donate">
                  <p><u>Donate</u></p>
                </Link>
              </li>
            </ul>
            <div className="hidden md:block">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
