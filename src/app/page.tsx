
import Header from "@/app/header/page";
import '@/app/globals.css';

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
              <button className="buttonArrow">&rarr;</button>
              <hr className="line"/>
            </div>
            <div className="date">
              <p>01&emsp;/&emsp;02</p>
            </div>
          </div>
          <div className="rightSec">
            <div className="imgBuild">
              <img src="/Rectangle 6.png" alt="" className="_imgBuild" />
              <button className="buttonImg">VIEW PROJECT &rarr;</button>
            </div>
          </div>
        </div>
    </div>
  );
}
