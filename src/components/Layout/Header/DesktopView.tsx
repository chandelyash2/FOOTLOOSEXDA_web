import { PrimaryButton, ButtonVariant } from "@/components/common/Button/PrimaryButton";
import { navList } from "@/constants/header";
import Link from "next/link";
import React from "react";

export const DesktopView = () => {
  return (
    <div className="hidden lg:flex justify-between bg-transparent  w-full items-center">
      <Link href="/" className="text-xl">HodoTheWanderer</Link>
      <ul className="flex gap-[52px] text-lg">
        {navList.map((item) => (
          <li key={item.name}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <PrimaryButton label="Get Started" variant={ButtonVariant.primary} />
      </div>
    </div>
  );
};
