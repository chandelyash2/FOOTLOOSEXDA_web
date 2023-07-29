import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className=" max-w-[90vw] lg:max-w-[70vw] px-[15px] py-[33px] m-auto">{children}</div>;
};

export default Container;
