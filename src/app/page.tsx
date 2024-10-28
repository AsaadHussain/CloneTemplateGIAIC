
import Header from "@/app/header/page";
import Footer from "./footer/page";
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
            <hr className="line" />
          </div>
          <div className="date">
            <p>01&emsp;/&emsp;02</p>
          </div>
        </div>
        <div className="rightSec">
          <div className="imgBuild">
            <img src="/Rectangle 6.png" alt="" className="_imgBuild" />
            <button className="buttonImg">VIEW PROJECT <span>&rarr;</span></button>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="secondSec">
        <div className="secSecDiv">
          <div className="imageSec">
            <div className="div1">
              <img src="/Rectangle 8.png" alt="" className="img1" />
              <img src="/Rectangle 10.png" alt="" className="img2" />
            </div>
            <img src="/Rectangle 9.png" alt="" className="img3" />
          </div>
          <div className="textSec">
            <h2 className="titleSec2">About</h2>
            <p className="paraSec2"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt, et laudantium voluptatibus labore sit fuga autem debitis dolore sed
              dignissimos nobis quas libero aspernatur at nulla? Eum sit molestiae ex quae
              reprehenderit ab repellendus corrupti architecto fugiat dolorem cum quasi,
              similique esse omnis aliquid quibusdam cumque commodi illum, saepe vitae temporibus!
              Delectus, eius magnam?</p>
            <button className="buttonImg buttonReg">READ MORE <span>&rarr;</span></button>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="thirdSec">
        <div className="headingSec3">
          <h2>Main Focus/Mission Statement</h2>
        </div>
        <div className="paraSec3">
          <div className="para1Sec3">
            <p className="number">1</p>
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Corporis dolores asperiores dolorem sed incidunt.</p>
          </div>
          <div className="para1Sec3">
            <p className="number">2</p>
            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Impedit beatae veniam quaerat exercitationem esse, magnam fugiat iure vero sit
              in! Ullam, repellat.</p>
          </div>
        </div>
      </div>
      {/* sec 4 */}
      <div className="fourSec">
        <div className="headingSec3">
          <h2>Our Projects</h2>
        </div>
        <div className="imgSec4">
          <div className="imageSec4Div">
            <div className="imageDivS4">
              <img src="/Rectangle 12.png" alt="" className="img1S4" />
              <div className="textIDS4">
                <h2 className="titleTIDS4">Sample Project</h2>
                <p>VIEW MORE <span>&rarr;</span></p>
              </div>
            </div>
            <img src="/image 15.png" alt="" className="img2S4" />
          </div>
          <div className="imageSec4Div">
            <img src="/image 16.png" alt="" className="img3S4" />
            <img src="/image 17.png" alt="" className="img4S4" />
            <img src="/image 18.png" alt="" className="img5S4" />
          </div>
        </div>
        <div className="buttonSec4">
          <button className="buttonImg buttonReg button3">ALL PROJECTS <span>&rarr;</span></button>
        </div>
      </div>
      {/* form section */}
      <div className="formDiv">
        <div className="headingSec3">
          <h2>Contact Us</h2>
        </div>
        <div className="form-img">
          <div className="formSec">
            <form action="" className="formFormS">
              <input type="text" placeholder="Name" className="input1" />
              <input type="number" placeholder="Phone Number*" className="input1" />
              <input type="email" placeholder="E-mail*" className="input1" />
              <input type="text" placeholder="Interested In" className="input1" />
              <textarea placeholder="Message*" className="input2"></textarea>
            </form>
          </div>
          <div className="imgSecForm">
            <img src="/image 12.png" alt="" className="imgForm" />
          </div>
        </div>
        <div className="">
          <button className="buttonImg buttonReg button3">SEND EMAIL <span>&rarr;</span></button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
