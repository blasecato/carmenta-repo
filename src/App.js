import React from 'react';
import logo from "./assets/image/logo-c.png";
import video from "./assets/image/video.mp4";

import { useInView } from "react-intersection-observer"

import Slider from "react-slick";

import ima1 from "./assets/image/1.png";
import ima2 from "./assets/image/2.png";
import ima3 from "./assets/image/3.png";
import ima4 from "./assets/image/4.png";
import ima5 from "./assets/image/5.png";
import ima6 from "./assets/image/6.png";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 1000,
    // cssEase: "linear"
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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

      <div class="Home__banner" id="banner">
        <div className="gradient" />
        {/* <video src={video} autoplay className="video" /> */}
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
          <img src={logo} alt="./" className="logo" />
          <h1>
            Unleash the potential of your ideas
          </h1>
        </div>
      </div>


      <div class="Home__about" id="about">
        <div class="container">
          <h1 class="title">About Us</h1>
          <p class="paragraph">
            We partner with companies, from startups to large corporations, to transform ideas into successful businesses. We leverage our expertise in VC investing, investment banking, tech development, and our extensive network to boost entrepreneurial and intrapreneurial ventures in LATAM
           </p>
          <div ref={sectionTeam}></div>
          <div class={`content--cards ${inSectionTeam && "animate__animated animate__fadeInUp"}`}>
            <a href="https://www.flaticon.com/free-icon/data-management_2920249?term=technology&page=1&position=3&page=1&position=3&related_id=2920249&origin=style" class="card">
              <img src={ima1} alt="./" />
              <p>Tech development and product management</p>
            </a>
            <a href="https://www.flaticon.com/free-icon/earnings_4144763?term=monetization&page=1&position=5&page=1&position=5&related_id=4144763&origin=style" class="card">
              <img src={ima2} alt="./" />
              <p>Development of business models and monetization schemes</p>
            </a>
            <a href="https://www.flaticon.com/free-icon/box_3010731?term=product&page=1&position=2&page=1&position=2&related_id=3010731&origin=style" class="card">
              <img src={ima3} alt="./" />
              <p>MVPs and proofs of concept</p>
            </a>
            <a href="https://www.flaticon.com/free-icon/agenda_3921361?term=administration&page=1&position=12&page=1&position=12&related_id=3921361&origin=style" class="card">
              <img src={ima4} alt="./" />
              <p>Administrative back office services</p>
            </a>
            <a href="https://www.flaticon.com/free-icon/money_631180?term=finance&page=1&position=2&page=1&position=2&related_id=631180&origin=style" class="card">
              <img src={ima5} alt="./" />
              <p>Financial modeling, budgeting, and fundraising strategies</p>
            </a>
            <a href="https://www.flaticon.com/free-icon/statistics_4263456?term=graphs&page=1&position=1&page=1&position=1&related_id=4263456&origin=style" class="card">
              <img src={ima6} alt="./" />
              <p>KPIs definition and tracking</p>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- ------------------------------------------------------------------------------------- --> */}
      <div ref={sectionTeam2}></div>
      <div class={`Home__team ${inSectionTeam2 && "animate__animated animate__fadeInUp"}`} id="team">
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
      <div id="alliances" class={`Home__Alliances ${inSectionAlliances && "animate__animated animate__fadeInUp"}`}>
        <div class="container">
          <h1 class="title">Alliances</h1>
          <div class="cont-photo">
            <a href="./">
              <img src={logo3} alt="./" />
            </a>
            <a href="./https://uvirtual.unisabana.edu.co/?utm_source=google&utm_medium=cpc&utm_adgroup=103793025545&utm_campaign=10556128072&utm_content=449377718528&utm_term=&matchtype=b&network=g&device=c&devicemodel=&placement=&target=&adposition=&feeditemid=&gclid=CjwKCAiAmrOBBhA0EiwArn3mfDUiQ79e6i7lxKL4FKfDpPPdjGTrKup1lQGZbhMWWTDOSVTlnOgmuhoCgvsQAvD_BwE">
              <img src={logo4} alt="./" />
            </a>
            <a href="./https://uniandes.edu.co/">
              <img src={logo5} alt="./" />
            </a>
            <a href="./https://www.cesa.edu.co/">
              <img src={logo6} alt="./" />
            </a>
          </div>
          <h1 class="title">Our Entrepreneurs</h1>
          <div class="cont-car">
            <Slider {...settings}>
              <a href="https://poetri-landing.web.app/">
                <img src={logo7} alt="./" />
              </a>
              <a href="https://mercadodelcampo.co/">
                <img src={logo2} alt="./" />
              </a>
              <a href="./">
                <img src={logo1} alt="./" />
              </a>
              <a href="https://www.movii.com.co/en/home/">
              <img src={logo8} alt="./" />
              </a>
              <div className="double">
                <a href="https://www.ruedaz.com.co/home">
                  <img src={logo10} alt="./" />
                </a>
                <a href="http://parking.net.co/es/ ">
                <img src={logo11} alt="./" />
                </a>
              </div>
              
              <a href="https://neivor.com/">
                <img src={logo9} alt="./" />
              </a>
            </Slider>
          </div>
        </div>
      </div>
      {/* <!-- ------------------------------------------------------------------------------------- --> */}
      <div ref={sectionTouch}></div>
      <div class={`Home__touch ${inSectionTouch && "animate__animated animate__fadeInUp"}`} id="touch">
        <div class="container">
          <h1 class="title">Get in touch</h1>
          <button onClick={contactUs}>Contact Us</button>
        </div>
      </div>

      {/* <!-- ------------------------------------------------------------------------------------- --> */}
      <div ref={sectionFooter}></div>
      <div class={`site-info footer ${inSectionFooter && "animate__animated animate__fadeInUp"}`}>
        <div class="container">
          <div class="box-left">
            <ul class="list">
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#team">TEAM</a>
              </li>
              <li>
                <a href="#touch">CONTACT</a>
              </li>
            </ul>
            <p>
              © 2021 Carmenta Labs
					</p>
          </div>
          <div class="networks">
            <a href="https://www.linkedin.com/company/carmenta-ventures/about/">
              <img src={int} alt="./" />
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
