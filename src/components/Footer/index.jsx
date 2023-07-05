import React from "react";
import Description from "./Description";
import Columns from "./Сolumns";
import Subscription from "./Subscription";
import SocialMedia from "./SocialMedia";
import { navigation, about, support } from "./ColumnsList";

const Footer = () => {
  return (
    <>
      <div className="flex w-full max-w-[1160px] m-auto justify-between mb-[100px]">
        <Description />
        <Columns col={navigation} />
        <Columns col={about} />
        <Columns col={support} />
        <Subscription />
      </div>
      <SocialMedia />
    </>
  );
};

export default Footer;
