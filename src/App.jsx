import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
//import { Features } from './components/features'
import { About } from "./components/about";
import { Services } from "./components/services";
//import { Gallery } from './components/gallery'
//import { Testimonials } from './components/testimonials'
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import CookieConsent from "react-cookie-consent";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/*<Features data={landingPageData.Features} >*/}
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      {/*
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      */}
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      <CookieConsent
        location="bottom"
        buttonText="I agree"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#eee", color: "#000" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        <span style={{ fontSize: 12 }}>
          This website uses cookies to enhance the user experience.
        </span>
      </CookieConsent>
    </div>
  );
};

export default App;
