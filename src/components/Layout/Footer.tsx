import Link from "next/link";
import React from "react";
import Container from "../common/Container";
import { navList } from "@/constants/header";

const Footer = () => {
  return (
    <footer className="relative bottom-0">
      <Container>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <Link href="/" className="text-primary text-xl font-bold">
              FootlooseXda
            </Link>
            <ul className="hidden lg:flex gap-[52px] text-lg">
              {navList.map((item) => (
                <li key={item.name}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <hr className="w-full" />
          <div className=" flex items-center flex-row justify-between">
            <span>All rights reserved © 2023</span>
            <ul className="flex gap-2 text-lg">
              {navList.map((item) => (
                <li key={item.name}>
                  <Link href="">a</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
