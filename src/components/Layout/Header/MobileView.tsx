import Link from "next/link";
import React from "react";
import Image from "next/image";
import { navList } from "@/constants/header";
import {
  ButtonVariant,
  PrimaryButton,
} from "@/components/common/Button/PrimaryButton";
export const MobileView = () => {
  const [hamBurgerActive, setHamburgerActive] = React.useState(false);
  return (
    <div className="flex justify-between lg:hidden items-center">
      <Link href="/">HodoTheWanderer</Link>
      <div onClick={() => setHamburgerActive((prev) => !prev)}>
        {!hamBurgerActive && (
          <Image
            src="/img/Hamburger.png"
            alt="hamburger"
            width={20}
            height={20}
          />
        )}
      </div>
      {hamBurgerActive && (
        <div className="absolute top-0 left-0 bg-primary h-screen w-full p-9 flex flex-col gap-10">
          <div className="flex justify-between ">
            <Link href="/">FootlooseXda</Link>
            <div onClick={() => setHamburgerActive((prev) => !prev)}>
              <Image src="/img/Close.png" alt="close" width={20} height={20} />
            </div>
          </div>
          <div className="flex flex-col gap-10 ">
            <ul className="flex flex-col gap-[22px] text-lg">
              {navList.map((item) => (
                <li key={item.name}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div>
              <PrimaryButton
                label="Get Started"
                variant={ButtonVariant.primary}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
