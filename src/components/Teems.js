import React from "react";

export default function Teems({ bgCol, fontS }) {
  console.log(bgCol, fontS);
  return (
    <h1 className={` ${bgCol} ${fontS} text-white`}>Welcome teems component</h1>
  );
}
