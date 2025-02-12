"use client";
import React, { useEffect, useState } from "react";
import "../_css/Hero.css";
import PublicIcon from "@mui/icons-material/Public";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import WorkIcon from "@mui/icons-material/Work";
import BadgeIcon from "@mui/icons-material/Badge";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const Hero = () => {
  const [startCounting, setStartCounting] = useState(false);
  const [activeTab, setActiveTab] = useState("job");
  const [showSearchBox, setShowSearchBox] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
    });

    setTimeout(() => {
      setStartCounting(true);
    }, 1500);

    setTimeout(() => {
      setShowSearchBox(true);
    }, 1000);
  }, []);

  return (
    <div className="bg_hero">
      <div className="bg_color">
        <h1 className="hero_h1" data-aos="fade-up">
          Welcome to Gala Rentals
        </h1>
        <p className="content" data-aos="fade-up">
          Revolutionizing Fashion in India
          <br />
          <br />
          “Own the Moment, Not the Outfit.”

        </p>

        <div className="hero_stats" data-aos="fade-up">
          <div className="stats_1">
            <PublicIcon className="hero_img" sx={{ fontSize: "4rem" }} />
            <div className="hero_figure">
              <h2 className="data">
                {startCounting && <CountUp start={1} end={46} duration={3} />}
              </h2>
              <p>Countries</p>
            </div>
          </div>
          <div className="stats_1">
            <LocationCityIcon className="hero_img" sx={{ fontSize: "4rem" }} />
            <div className="hero_figure">
              <h2 className="data">
                {startCounting && <CountUp start={1} end={450} duration={3} />}
              </h2>
              <p>Products</p>
            </div>
          </div>
          <div className="stats_1">
            <BadgeIcon className="hero_img" sx={{ fontSize: "3.7rem" }} />
            <div className="hero_figure">
              <h2 className="data">
                {startCounting && <CountUp start={1} end={80000} duration={3} />}
              </h2>
              <p>Active Customers</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
