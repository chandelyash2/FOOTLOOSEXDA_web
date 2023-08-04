import Link from "next/link";
import React from "react";
import Container from "../common/Container";
import { navList, socialIconsList } from "@/constants/header";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bottom-0">
      <Container>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <Link href="/" className="text-primary text-xl font-bold">
              HodoTheWanderer
            </Link>
            <ul className="hidden lg:flex gap-[52px] text-lg ">
              {navList.map((item) => (
                <li key={item.name} className="text-primary text-sm">
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <hr className="w-full" />
          <div className="  flex text-center flex-row justify-between">
            <span className="text-[#869EA6]"> All rights reserved © 2023</span>
            <ul className="flex gap-2 text-sma">
              {socialIconsList.map((item) => (
                <li key={item.src}>
                  <Link href="">
                    <Image src={item.src} width={20} height={20} alt="social" />
                  </Link>
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
