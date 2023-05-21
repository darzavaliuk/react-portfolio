import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "04" },
    { text: "Companies Work", count: "00" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2 flex flex-col items-center justify-center">
            <div className="text-gray-300 my-3 flex flex-col items-center justify-center">
              <p className=" leading-7 w-11/12 mx-auto ">
                Hello, my name is <span className="text-cyan-600">Darya</span> and I am a <span className="text-cyan-600">full-stack trainee</span> web developer. <br></br>
                <br></br>
                I have a passion for coding and creating websites that are both functional and visually appealing.
                My goal is to become a proficient <span className="text-cyan-600">full-stack developer</span> and contribute to the development of innovative web applications.
                <br></br><br></br>I am a quick learner, a good communicator, and a problem solver. I enjoy working in a team and believe that collaboration is key to building great products. I am always looking for new challenges and opportunities to learn and grow as a developer.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          {/* <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
