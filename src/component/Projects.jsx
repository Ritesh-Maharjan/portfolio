import React from "react";
import { project } from "../data";

const Projects = () => {
  return (
    <div id="project">
      <div className="flex items-center justify-center flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
        <h1 className="my-5 text-white text-xl md:text-3xl font-semibold">
          Apps that I have built
        </h1>
        <p className="w-[90vw] md:w-[50vw] text-center text-md">
          These are some of the projects that I have worked on and have learnt
          various things along the way. If you have any feedback or like what
          you see please do not hesitate to reach out to me.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 w-[90vw] m-auto mt-10">
        {project.map((el) => {
          return (
            <div
              key={el.id}
              className="w-full md:w-[40vw] h-full overflow-hidden"
            >
              <div>
                <img
                  src={el.img}
                  alt="project"
                  className="w-full h-[300px]  object-center"
                />
              </div>
              <div className="text-white mt-3">
                <div className="flex gap-4">
                  <a
                    href={el.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border-1 px-3 py-2 bg-gray-800 hover:bg-white hover:text-gray-800"
                  >
                    Github
                  </a>
                  {el.title !== "portfolio" && (
                    <a
                      href={el.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border-1 px-6 py-2 bg-gray-800 hover:bg-white hover:text-gray-800"
                    >
                      Live
                    </a>
                  )}
                  {el.video && (
                    <a
                      href={el.video}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border-1 px-6 py-2 bg-gray-800 hover:bg-white hover:text-gray-800"
                    >
                      Video
                    </a>
                  )}
                </div>
                <p className="my-4 h-[20%]">{el.desc}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 italic font-medium">
                <h2 className=" md:text-xl text-red-800 ">Technologies Used: </h2>
                {el.technologiesUsed.map((tech,index) => {
                  return <span key={index}>{tech}</span>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
