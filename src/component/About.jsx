import React from "react";

const About = () => {
  return (
    <div className=" h-[70vh] flex">
      <div className="flex-1 flex flex-col mx-10 justify-center">
        <h1 className="text-3xl my-2 font-semibold text-white tracking-wider">
          Hi, I'm Ritesh. <br />I love to build amazing apps.
        </h1>
        <p className="my-9">I like building apps and solving problems. I am a fast learner and am always looking forward to develop my skills whether it be techinical or interpersonal. I am currently looking for web dev jobs.</p>
        <div className="">
          <button className="rounded-md py-2 px-10 mr-4 text-white bg-green-500">Hire me!!</button>
          <button className="rounded-md py-2 px-5 bg-gray-800">See my Projects</button>
        </div>
      </div>
      <div className="flex-1">
        <img src="/coding.svg" alt="background" className="object-cover " />
      </div>
    </div>
  );
};

export default About;