import React from "react";

const About = () => {
  return (
    <div className="h-[55vh] lg:h-[70vh] flex" id="about">
      <div className="flex-1 flex flex-col mx-10 justify-center ">
        <h1 className="my-2 text-xl font-semibold text-white tracking-wider lg:text-3xl">
          Hi, I'm Ritesh. <br />I love to build amazing apps.
        </h1>
        <p className="my-9">
          I like building apps and solving problems. I am a fast learner and am
          always looking forward to develop my skills whether it be techinical
          or interpersonal. I am currently looking for web dev jobs.
        </p>
        <div className="flex">
          <a href="#contact" className="rounded-md py-1 px-2 md:py-2 md:px-10 mr-4 text-white bg-green-500">
            Hire me!!
          </a>
          <a href="#project" className="rounded-md py-1 px-2 md:py-2 md:px-10 bg-gray-800">
            See my Projects
          </a>
        </div>
      </div>
      <div className="hidden md:block flex-1">
        <img src="/coding.svg" alt="background" className="object-cover " />
      </div>
    </div>
  );
};

export default About;
