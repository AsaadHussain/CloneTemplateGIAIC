import Image from "next/image";
import Header from "@/app/header/page";


export default function Home() {
  return (
    <div className="main">
      <Header></Header>
      <div className="firstSec">
        <div className="leftSec">
          <div className="text">
            <h1 className="title1">
              PROJECT
            </h1>
            <h1 className="title2">
              Lorum
            </h1>
          </div>
          <div className="buttons">
            <button className="buttonArrow">&larr;</button>
            <button className="buttonArrow"><i className="fa-solid fa-arrow-right-long"></i></button> 
          </div>
        </div>
        <div className="rightSec">

        </div>
      </div>
    </div>
  );
}
