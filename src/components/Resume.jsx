import React, { useState } from "react";
import ScreenHeading from "./ScreenHeading";
// import ScrollService from "./ScrollService";
// import Animations from "./Animations";
import "./Resume.css";
// import index from "react-typical";

export default function Resume() {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});


  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 50 },
    { skill: "React JS", ratingPercentage: 40 },
    { skill: "Java", ratingPercentage: 30 },
    { skill: "C++", ratingPercentage: 30 },
    { skill: "Delphi", ratingPercentage: 50 },
    { skill: "Express JS", ratingPercentage: 30 },
    { skill: "Node JS", ratingPercentage: 30 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "PHP", ratingPercentage: 20 },
    { skill: "CSS", ratingPercentage: 40 },
  ];

  const resumeDetails = [
    <div className="resume-screen-container mt-3 text-lg" key="education">
      <ResumeHeading
        heading={"Belarusian State University of Informatics and Radioelectronics"}
        subHeading={"Faculty of Computer Systems and Networks"}
        fromDate={"2021"}
        toDate={"2025"}
      />

      <ResumeHeading
        heading={"RSSchool"}
        subHeading={"Сourse"}
        fromDate={"2021"}
        toDate={"2021"}
      />
    </div>,


    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container mt-3 text-lg"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container mt-3 text-lg" key="interests">
      <ResumeHeading
        heading="Sport"
        description="I can never compromise on my love for sports. Sport is the best stress reliever for me. I enjoy browsing through sports news websites and following my favorite athletes on social media."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        {/* <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}

        /> */}
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };
  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  return (
    <div
      className="resume-container screen-container fade-in "
      id={"12"}
    >
      <div className="resume-content">
        <div className="resume-card text-2xl font-semibold">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};
