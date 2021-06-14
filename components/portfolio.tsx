import Arrow from "../svgs/arrow";
import { useState } from "react";
import get_the_next from "../functions/get_the_next_pointer";
import get_the_back from "../functions/get_the_back_pointer";

export default function Portfolio() {
  const data = [
    {
      id: 1,
      img: "https://www.google.com.sa/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      title: "project1",
      description: "description1",
      url: "url1",
    },
    {
      id: 2,
      img: "img2",
      title: "project2",
      description: "description2",
      url: "url2",
    },
    {
      id: 3,
      img: "img3",
      title: "project3",
      description: "description3",
      url: "url3",
    },
  ];
  const [pointer, setPointer] = useState(0);
  return (
    <div className="ml-3 md:ml-44 mt-6 pb-9">
      {/* Main Title */}
      <h1 className="mb-3 text-2xl md:text-3xl">Some past project</h1>
      {/* Main Content */}
      <div className="items-center flex justify-between pr-1">
        {/* Moble Arrow */}
        <div
          onClick={() => {
            setPointer(get_the_back(pointer, data.length - 1));
          }}
          className="w-10 h-10 rotate-90 opacity-50 cursor-pointer hover:opacity-100 transform mt-5"
        >
          <Arrow />
        </div>
        {/* Content */}
        <div className="md:w-full w-4/6 space-x-3 rounded-md flex justify-between">
          {/* 1 */}
          {/* Back */}
          <div className="opacity-100 group duration-2000 transition-all absolute transform -translate-x-0 m-auto max-w-xs md:max-w-sm">
            <div className="hidden bg-gray-200 rounded-md w-full h-full absolute top-0 z-10 group-hover:block">
              <div>
                <div className="text-2xl inline-block absolute top-1/4 left-2/4 transform -translate-x-2/4">
                  {data[pointer].title}
                </div>
                <div className="inline-block absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-lg mt-1">
                  {data[pointer].description}
                </div>
              </div>
              <div className="bg-gray-700 absolute top-2/3 left-2/4 transform -translate-x-2/4 px-4 p-1 rounded-md inline-block text-xl">
                <a target="blank" href={data[pointer].url}>
                  go
                </a>
              </div>
            </div>
            <div className="z-20 w-full h-full">
              <img
                src="https://react-projects.netlify.app/static/08bf90aceb26f1f62e1ad3c5bd7aab91/25b0a/ScreenShot2020-09-27at12.02.45PM.webp"
                alt="img"
                className="rounded-md"
              />
            </div>
          </div>
          {/* Current */}
          <div className="group relative duration-2000 transition-all m-auto max-w-xs md:max-w-sm">
            <div className="hidden bg-gray-200 rounded-md w-full h-full absolute top-0 z-10 group-hover:block">
              <div>
                <div className="text-2xl inline-block absolute top-1/4 left-2/4 transform -translate-x-2/4">
                  {data[pointer].title}
                </div>
                <div className="inline-block absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-lg mt-1">
                  {data[pointer].description}
                </div>
              </div>
              <div className="bg-gray-700 absolute top-2/3 left-2/4 transform -translate-x-2/4 px-4 p-1 rounded-md inline-block text-xl">
                <a target="blank" href={data[pointer].url}>
                  go
                </a>
              </div>
            </div>
            <div className="z-20 w-full h-full">
              <img
                src="https://react-projects.netlify.app/static/08bf90aceb26f1f62e1ad3c5bd7aab91/25b0a/ScreenShot2020-09-27at12.02.45PM.webp"
                alt="img"
                className="rounded-md"
              />
            </div>
          </div>
          {/* Next */}
          <div className="opacity-50 group duration-2000 transition-all absolute transform translate-x-3/4 m-auto max-w-xs md:max-w-sm">
            <div className="hidden bg-gray-200 rounded-md w-full h-full absolute top-0 z-10 group-hover:block">
              <div>
                <div className="text-2xl inline-block absolute top-1/4 left-2/4 transform -translate-x-2/4">
                  {data[pointer].title}
                </div>
                <div className="inline-block absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-lg mt-1">
                  {data[pointer].description}
                </div>
              </div>
              <div className="bg-gray-700 absolute top-2/3 left-2/4 transform -translate-x-2/4 px-4 p-1 rounded-md inline-block text-xl">
                <a target="blank" href={data[pointer].url}>
                  go
                </a>
              </div>
            </div>
            <div className="z-20 w-full h-full">
              <img
                src="https://react-projects.netlify.app/static/08bf90aceb26f1f62e1ad3c5bd7aab91/25b0a/ScreenShot2020-09-27at12.02.45PM.webp"
                alt="img"
                className="rounded-md"
              />
            </div>
          </div>

          {/*
          2
          <div className="group relative m-auto max-w-xs md:max-w-sm hidden md:block">
            <div className="hidden bg-gray-200 rounded-md w-full h-full absolute top-0 z-10 group-hover:block">
              <div>
                <div className="text-2xl inline-block absolute top-1/4 left-2/4 transform -translate-x-2/4">
                  {data[get_the_next(pointer, data.length - 1)].title}
                </div>
                <div className="inline-block absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-lg mt-1">
                  {data[get_the_next(pointer, data.length - 1)].description}
                </div>
              </div>
              <div className="bg-gray-700 absolute top-2/3 left-2/4 transform -translate-x-2/4 px-4 p-1 rounded-md inline-block text-xl">
                <a
                  target="blank"
                  href={data[get_the_next(pointer, data.length - 1)].url}
                >
                  go
                </a>
              </div>
            </div>
            <div className="z-20 w-full h-full">
              <img
                src="https://react-projects.netlify.app/static/08bf90aceb26f1f62e1ad3c5bd7aab91/25b0a/ScreenShot2020-09-27at12.02.45PM.webp"
                alt="img"
                className="rounded-md"
              />
            </div>
          </div>
          {/* 3
          <div className="group relative m-auto max-w-xs md:max-w-sm hidden md:block">
            <div className="hidden bg-gray-200 rounded-md w-full h-full absolute top-0 z-10 group-hover:block">
              <div>
                <div className="text-2xl inline-block absolute top-1/4 left-2/4 transform -translate-x-2/4">
                  {
                    data[
                      get_the_next(
                        get_the_next(pointer, data.length - 1),
                        data.length - 1
                      )
                    ].title
                  }
                </div>
                <div className="inline-block absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-lg mt-1">
                  {
                    data[
                      get_the_next(
                        get_the_next(pointer, data.length - 1),
                        data.length - 1
                      )
                    ].description
                  }
                </div>
              </div>
              <div className="bg-gray-700 absolute top-2/3 left-2/4 transform -translate-x-2/4 px-4 p-1 rounded-md inline-block text-xl">
                <a
                  target="blank"
                  href={
                    data[
                      get_the_next(
                        get_the_next(pointer, data.length - 1),
                        data.length - 1
                      )
                    ].url
                  }
                >
                  go
                </a>
              </div>
            </div>
            <div className="z-20 w-full h-full">
              <img
                src="https://react-projects.netlify.app/static/08bf90aceb26f1f62e1ad3c5bd7aab91/25b0a/ScreenShot2020-09-27at12.02.45PM.webp"
                alt="img"
                className="rounded-md"
              />
            </div>
          </div> 
          */}
        </div>
        {/* Moble Arrow */}
        <div
          onClick={() => {
            setPointer(get_the_next(pointer, data.length - 1));
          }}
          className="w-10 h-10 -rotate-90 opacity-50 cursor-pointer hover:opacity-100 transform mt-5"
        >
          <Arrow />
        </div>
      </div>
    </div>
  );
}
