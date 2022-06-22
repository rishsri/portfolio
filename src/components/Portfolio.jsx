import React from "react";
import Ricky from "../assets/portfolio/91MteSqsrJL.jpg";
import Movie from "../assets/portfolio/movie.jpg";
import CovidTracker from "../assets/portfolio/covidTracker.png";
import flipkart from "../assets/portfolio/flipkart.png";
import amazon from "../assets/portfolio/amazon.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Ricky,
      demo: "https://main--rococo-douhua-09202b.netlify.app/",
      github: "https://github.com/rishsri/rickyandmorty",
    },
    {
      id: 2,
      src: Movie,
      demo: "https://entertainmentweb.herokuapp.com/",
      github: "https://github.com/rishsri/EntertainmentApp_react",
    },
    {
      id: 3,
      src: CovidTracker,
      github:
        "https://github.com/rishsri/Live-covid-19-tracker/tree/master/covid-19/src",
      demo: "https://covidworldwidecounter.herokuapp.com/",
    },

    {
      id: 4,
      src: flipkart,
      github: "https://github.com/rishsri/flipkart-clone-mern",
    },
    {
      id: 1,
      src: amazon,
      github: "https://github.com/rishsri/Amazon-Clone",
    },
  ];

  const handleCLick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                style={{ height: "150px", width: "100%" }}
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                {!demo || github == null ? null : (
                  <button
                    target="_blank"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={(e) => handleCLick(demo)}
                  >
                    Demo
                  </button>
                )}
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={(e) => handleLink(github)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
