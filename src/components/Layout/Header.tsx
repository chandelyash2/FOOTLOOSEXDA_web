import React, { useState } from "react";
import Container from "../common/Container";
import { DesktopView } from "./Header/DesktopView";
import { MobileView } from "./Header/MobileView";

const Header = () => {
  return (
    <header className="absolute top-0 w-full z-50">
      <Container>
        <DesktopView />
        <MobileView />
      </Container>
    </header>
  );
};

export default Header;
