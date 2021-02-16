import React from 'react';
import logo from "./assets/image/logo-c.png";
import video from "./assets/image/video.mp4";

import { useInView } from "react-intersection-observer"

import reloj from "./assets/image/reloj.PNG";
import cuadros from "./assets/image/cuadros.PNG";
import chaleco from "./assets/image/chaleco.PNG";

import int from "./assets/image/int.PNG";

import avatar from "./assets/image/avatar.jpg";
import avatar1 from "./assets/image/avatar1.PNG";
import avatar2 from "./assets/image/avatar2.PNG";
import avatar3 from "./assets/image/avatar3.PNG";
import avatar4 from "./assets/image/avatar4.PNG";
import avatar5 from "./assets/image/avatar5.PNG";

import logo1 from "./assets/image/logo1.png";
import logo2 from "./assets/image/logo2.png";
import logo3 from "./assets/image/logo9.png";
import logo4 from "./assets/image/logo4.png";
import logo5 from "./assets/image/logo5.png";
import logo6 from "./assets/image/logo6.png";
import logo7 from "./assets/image/logo7.png";

import logo8 from "./assets/image/movi.png";
import logo9 from "./assets/image/neivor.png";
import logo10 from "./assets/image/logo10.png";
import logo11 from "./assets/image/logo11.png";

import ReactPlayer from "react-player"


export const App = () => {
  const [sectionTeam, inSectionTeam] = useInView({ threshold: 0 })
  const [sectionTeam2, inSectionTeam2] = useInView({ threshold: 0 })
  const [sectionAlliances, inSectionAlliances] = useInView({ threshold: 0 })
  const [sectionTouch, inSectionTouch] = useInView({ threshold: 0 })
  const [sectionFooter, inSectionFooter] = useInView({ threshold: 0 })

  const contactUs = () => {
    window.location.href = "mailto:laura@carmentalabs.com"; 
  }

  return (
    <body className="App">
      <header class="Header">
        <nav class="container columns is-mobile Header__topBar is-gapless">
          <div class="column">
            <img src={logo} alt="./" className="logo" />
          </div>
          <div class="column">
            <ul>
              <li><a href="#banner">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#team">TEAM</a></li>
              <li><a href="#alliances">CONTACT</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <div  class="Home__banner" id="banner">
        <div className="gradient" />
        <video src={video} autoplay className="video" />

        <ReactPlayer
          id={"1"}
          url={video}
          className="video"
          playing={true}
          onEnded={true}
          controls={false}
          loop={true}
          muted
          playsInline
          config={{
            file: {
              attributes: {
                muted: true,
                playsInline: true
              },
            },
          }}
        />

        <div class="container">
          <h1>
            Unleash the potential of your ideas
          </h1>
        </div>
      </div>


      <div data-aos="fade-up" class="Home__about" id="about">
        <div class="container">
          <h1 class="title">About Us</h1>
          <p class="paragraph">
            We partner with companies, from startups to large corporations, to transform ideas into successful businesses. We leverage our expertise in VC investing, investment banking, tech development, and our extensive network to boost entrepreneurial and intrapreneurial ventures in LATAM
           </p>
           <div ref={sectionTeam}></div>
          <div class={`content--cards ${inSectionTeam && "animate__animated animate__fadeInUp"}`}>
            <div class="card">
              <img src={reloj} alt="./" />
              <p>Development of business models & monetization schemes</p>
            </div>
            <div class="card">
              <img src={chaleco} alt="./" />
              <p>Tech development and product management</p>
            </div>
            <div class="card">
              <img src={cuadros} alt="./" />
              <p>MVPs and proofs of concept</p>
            </div>
            <div class="card">
              <img src={chaleco} alt="./" />
              <p>Administrative back'office services</p>
            </div>
            <div class="card">
              <img src={cuadros} alt="./" />
              <p>Financial modeling, budgeting, and fundraising strategies</p>
            </div>
            <div class="card">
              <img src={reloj} alt="./" />
              <p>KPIs definition and tracking</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ------------------------------------------------------------------------------------- --> */}
      <div ref={sectionTeam2}></div>
      <div  class={`Home__team ${inSectionTeam2 && "animate__animated animate__fadeInUp"}`} id="team">
        <div class="container">
          <h1 class="title">Our Team</h1>
          <h3 class="paragraph">Trend setters, market booster, this is our Team!</h3>
          <div class="Home__team--photo">
            <a href="https://www.linkedin.com/in/juansortiz/?originalSubdomain=co" class="people people-top">
              <img src={avatar1} alt="./" />
              <p>Juan Sebastián Ortiz</p>
              <span>Co-founder</span>
            </a>
            <a href="https://www.linkedin.com/in/boris-ram%C3%ADrez-barrera-47b16981/?originalSubdomain=co" class="people people-top">
              <img src={avatar2} alt="./" />
              <p>Boris Ramirez</p>
              <span>Co-founder</span>
            </a>
            <a href="https://www.linkedin.com/in/laurarobu/?challengeId=AQEPW59EoS_c2AAAAXeRUfGGpI2udPU5LSTCwRI5Xp3dOl3Jfgyl1_9hlegiBv1JDb7J6dba7DtwineVhLenhD0IAEBmeg2rHQ&submissionId=a13cbe7f-28b5-6216-6bea-16dfedab443d&originalSubdomain=ca" class="people people-top">
              <img src={avatar3} alt="./" />
              <p>Laura Robu</p>
              <span>Head of Business Operations</span>
            </a>
            {/*<a href="https://www.linkedin.com/in/pablon17/?originalSubdomain=co" class="people">
              <img src={avatar4} alt="./" />
              <p>Pablo Navarro</p>
              <span>Advisor</span>
            </a>
            <a href="https://www.linkedin.com/in/eduardo-van-meerbeke-85194234/?originalSubdomain=co" class="people">
              <img src={avatar5} alt="./" />
              <p>Eduardo Van Meerbeke</p>
              <span>Advisor</span>
            </a>*/}
          </div>
        </div>
      </div>
      {/* <!-- ------------------------------------------------------------------------------------- --> */}
      <div ref={sectionAlliances}></div>
      <div id="alliances"  class={`Home__Alliances ${inSectionAlliances && "animate__animated animate__fadeInUp"}`}>
        <div class="container">
          <h1 class="title">Alliances</h1>
          <div class="cont-photo">
            <a href="./">
              <img src={logo3} alt="./" />
            </a>
            <a href="./">
              <img src={logo4} alt="./" />
            </a>
            <a href="./">
              <img src={logo5} alt="./" />
            </a>
            <a href="./">
              <img src={logo6} alt="./" />
            </a>
          </div>
          <h1 class="title">Our Entrepreneurs</h1>
          <div class="cont-photo">
            <a href="./">
              <img src={logo7} alt="https://poetri-landing.web.app/" />
            </a>
            <a href="./">
              <img src={logo2} alt="https://mercadodelcampo.co/" />
            </a>
            <a href="./">
              <img src={logo1} alt="./" />
            </a>
            <a href="./">
              <img src={logo8} alt="./" />
            </a>
            <a href="./">
              <img src={logo9} alt="./" />
            </a>
            <a href="./">
              <img src={logo10} alt="./" />
            </a>
            <a href="./">
              <img src={logo11} alt="./" />
            </a>
          </div>
        </div>
      </div>
      {/* <!-- ------------------------------------------------------------------------------------- --> */}
      <div ref={sectionTouch}></div>
      <div  class={`Home__touch ${inSectionTouch && "animate__animated animate__fadeInUp"}`} id="touch">
        <div class="container">
          <h1 class="title">Get in touch</h1>
          <button onClick={contactUs}>Contact Us</button>
        </div>
      </div>

      {/* <!-- ------------------------------------------------------------------------------------- --> */}
      <div ref={sectionFooter}></div>
      <div  class={`site-info footer ${inSectionFooter && "animate__animated animate__fadeInUp"}`}>
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
            <img src={int} alt="./" />
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
