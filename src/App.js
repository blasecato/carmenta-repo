import React from 'react';
import logo from "./assets/image/logo-c.png";
import video from "./assets/image/paisaje.mp4";

import { useInView } from "react-intersection-observer"

import reloj from "./assets/image/reloj.PNG";
import cuadros from "./assets/image/cuadros.PNG";
import chaleco from "./assets/image/chaleco.PNG";

import face from "./assets/image/face-white.PNG";
import inst from "./assets/image/instagram.PNG";
import int from "./assets/image/int.PNG";

import avatar from "./assets/image/avatar.jpg";

import logo1 from "./assets/image/logo1.png";
import logo2 from "./assets/image/logo2.png";
import logo3 from "./assets/image/logo3.png";
import logo4 from "./assets/image/logo4.png";
import logo5 from "./assets/image/logo5.png";
import logo6 from "./assets/image/logo6.png";
import logo7 from "./assets/image/logo7.png";


export const App = () => {
  const [sectionTeam, inSectionTeam] = useInView({ threshold: 0 })
  const [sectionAlliances, inSectionAlliances] = useInView({ threshold: 0 })
  const [sectionTouch, inSectionTouch] = useInView({ threshold: 0 })
  const [sectionFooter, inSectionFooter] = useInView({ threshold: 0 })
 
  return (
    <body className="App">
      <header class="Header">
        <nav class="columns is-mobile Header__topBar is-gapless">
          <div class="column">
            <img src={logo} alt="./" className="logo"/>
          </div>
          <div class="column">
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </nav>
      </header>

      <div class="Home__banner">
        <div className="gradient"/>
        <video src={video} autoplay className="video"/>
        <div class="container">
          <h1>
            Unleash the potential of your ideas.
          </h1>
        </div>
      </div>


      <div data-aos="fade-up"  class="Home__about">
        <div class="container">
          <h1 class="title">About Us</h1>
          <p class="paragraph">
          We partner with companies, from startups to large corporations, to transform ideas into successful businesses. We leverage our expertise in VC investing, investment banking, tech development, and our extensive network to boost entrepreneurial and intrapreneurial ventures in LATAM.  
           </p>
          <div class="content--cards">
            <div class="card">
              <img src={reloj} alt="./"/>
              <p>Development of business models & monetization schemes</p>
            </div>
            <div class="card">
              <img src={chaleco} alt="./"/>
              <p>tech development and product management</p>
            </div>
            <div class="card">
              <img src={cuadros} alt="./"/>
              <p>MVPs and proofs of concept</p>
            </div>
            <div class="card">
              <img src={chaleco} alt="./"/>
              <p>administrative back'office services</p>
            </div>
            <div class="card">
              <img src={cuadros} alt="./"/>
              <p>financial modeling, budgeting, and fundraising strategies</p>
            </div>
            <div class="card">
              <img src={reloj} alt="./"/>
              <p>KPIs definition and tracking</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ------------------------------------------------------------------------------------- --> */}
      <div ref={sectionTeam} class={`Home__team ${inSectionTeam && "animate__animated animate__delay-1s animate__fadeIn"}`}>
        <div class="container">
          <h1 class="title">The Team</h1>
          <h3 class="paragraph">Trend setters, market booster, this is our Team!</h3>
          <div class="Home__team--photo">
            <div class="people">
              <img src={avatar} alt="./"/>
              <p>Juan Sebastián Ortiz</p>
              <span>Co-founder</span>
            </div>
            <div class="people">
            <img src={avatar} alt="./"/>
              <p>Juan Sebastián Ortiz</p>
              <span>Co-founder</span>
            </div>
            <div class="people">
            <img src={avatar} alt="./"/>
              <p>Juan Sebastián Ortiz</p>
              <span>Co-founder</span>
            </div>
            <div class="people">
            <img src={avatar} alt="./"/>
              <p>Juan Sebastián Ortiz</p>
              <span>Co-founder</span>
            </div>
            <div class="people">
            <img src={avatar} alt="./"/>
              <p>Juan Sebastián Ortiz</p>
              <span>Co-founder</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ------------------------------------------------------------------------------------- --> */}
      <div ref={sectionAlliances} class={`Home__Alliances ${inSectionAlliances && "animate__animated animate__delay-1s animate__fadeIn"}`}>
        <div class="container">
          <h1 class="title">Alliances</h1>
          <div class="cont-photo">
            <img src={logo2} alt="./"/>
            <img src={logo3} alt="./"/>
            <img src={logo4} alt="./"/>
            <img src={logo5} alt="./"/>
          </div>
          <h1 class="title">Our portfolio</h1>
          <div class="cont-photo">
            <img src={logo7} alt="./"/>
            <img src={logo6} alt="./"/>
            <img src={logo1} alt="./"/>

          </div>
        </div>
      </div>
      {/* <!-- ------------------------------------------------------------------------------------- --> */}
      <div ref={sectionTouch} class={`Home__touch ${inSectionTouch && "animate__animated animate__delay-1s animate__fadeIn"}`}>
        <div class="container">
          <h1 class="title">Get in touch with us</h1>
          <button>Contact Us</button>
        </div>
      </div>

      {/* <!-- ------------------------------------------------------------------------------------- --> */}
      <div ref={sectionFooter} class={`site-info footer ${inSectionFooter && "animate__animated animate__delay-1s animate__fadeIn"}`}>
        <div class="container">
          <div class="box-left">
            <ul class="list">
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
            <p>
              © 2021 Carmenta Labs
					</p>
          </div>
          <div class="networks">
            <img src={face} alt="./"/>
            <img src={inst} alt="./"/>
            <img src={int} alt="./"/>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
