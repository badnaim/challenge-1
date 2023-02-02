import React from "react";
import "../../styles/comp.css";

export default function PageBtn({ btnName, btnClass }) {
  console.log(btnName);
  return <button className={btnClass}>{btnName}</button>;
}
