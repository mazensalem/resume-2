import Arrow from "../svgs/arrow";
import { useState, useEffect } from "react";
import get_the_next from "../functions/get_the_next_pointer";
import get_the_back from "../functions/get_the_back_pointer";

let is_first_render_next = true;
let is_second_move_next = false;
let is_first_render_back = true;
let is_second_move_back = false;

let is_first_render_desktop_next = true;
let is_second_move_desktop_next = false;
let is_first_render_desktop_back = true;
let is_second_move_desktop_back = false;

export default function Portfolio() {
  const [animation_next_style, setanimation_next_style] = useState(
    "opacity-0 -right-1/4"
  );
  const [animation_current_style, setanimation_current_style] =
    useState("opacity-100");
  const [animation_back_style, setanimation_back_style] = useState(
    "opacity-0 -left-1/4"
  );
  const [pos_current, setpos_current] = useState(
    "left-2/4 transform -translate-x-2/4"
  );

  const [animation_next_desktop, setanimation_next_desktop] = useState(
    "transition-all duration-2000 opacity-0 -right-1/4"
  );
  const [animation_back_desktop, setanimation_back_desktop] = useState(
    "transition-all duration-2000 opacity-0 -left-1/4"
  );
  const [animation_mid_desktop, setanimation_mid_desktop] = useState(
    "transition-all duration-2000 -left-0"
  );
  const [animation_end_desktop, setanimation_end_desktop] = useState(
    "transition-all duration-2000 -left-0"
  );
  const [animation_start_desktop, setanimation_start_desktop] = useState(
    "transition-all duration-2000 -left-0"
  );
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
  const [pointer, setPointer] = useState(1);
  const [isdetatlishidden, setisdetatishidden] = useState("opacity-0");
  const [isdetatlishiddendesktop1, setisdetatlishiddendesktop1] =
    useState("opacity-0");
  const [isdetatlishiddendesktop2, setisdetatlishiddendesktop2] =
    useState("opacity-0");
  const [isdetatlishiddendesktop3, setisdetatlishiddendesktop3] =
    useState("opacity-0");

  useEffect(() => {
    if (is_first_render_next) {
      is_first_render_next = false;
    } else {
      setTimeout(() => {
        if (!is_second_move_next) {
          is_second_move_next = true;
          setPointer(get_the_next(pointer, data.length - 1));
          setanimation_next_style(
            "transition-none duration-0 opacity-0 -right-1/4"
          );
          setanimation_current_style("transition-none duration-0 opacity-100");
          setpos_current("left-2/4 transform -translate-x-2/4");
        } else {
          is_second_move_next = false;
        }
      }, 2000);
    }
  }, [animation_next_style]);

  useEffect(() => {
    if (is_first_render_back) {
      is_first_render_back = false;
    } else {
      setTimeout(() => {
        if (!is_second_move_back) {
          is_second_move_back = true;
          setPointer(get_the_back(pointer, data.length - 1));
          setanimation_back_style(
            "transition-none duration-0 opacity-0 -left-1/4"
          );
          setanimation_current_style("transition-none duration-0 opacity-100");
          setpos_current("left-2/4 transform -translate-x-2/4");
        } else {
          is_second_move_back = false;
        }
      }, 2000);
    }
  }, [animation_back_style]);

  useEffect(() => {
    if (is_first_render_desktop_next) {
      is_first_render_desktop_next = false;
    } else {
      setTimeout(() => {
        if (!is_second_move_desktop_next) {
          is_second_move_desktop_next = true;
          setPointer(get_the_next(pointer, data.length - 1));
          setanimation_next_desktop("opacity-0 -right-1/4");
          setanimation_mid_desktop("-left-0");
          setanimation_end_desktop("-left-0");
        } else {
          is_second_move_desktop_next = false;
        }
      }, 2000);
    }
  }, [animation_next_desktop]);

  useEffect(() => {
    if (is_first_render_desktop_back) {
      is_first_render_desktop_back = false;
    } else {
      setTimeout(() => {
        if (!is_second_move_desktop_back) {
          is_second_move_desktop_back = true;
          setPointer(get_the_back(pointer, data.length - 1));
          setanimation_back_desktop("opacity-0 -left-1/4");
          setanimation_mid_desktop("left-0");
          setanimation_start_desktop("left-0");
        } else {
          is_second_move_desktop_back = false;
        }
      }, 2000);
    }
  }, [animation_back_desktop]);

  return (
    <div className="ml-3 md:ml-44 mt-6 pb-9">
      {/* Main Title */}
      <h1 className="mb-3 text-2xl md:text-3xl">Some past project</h1>
      {/* Main Content */}
      <div className="items-center flex justify-between pr-1">
        {/* Moble Arrow */}
        <div
          onClick={() => {
            setanimation_back_style(
              "transition-all duration-2000 opacity-100 left-2/4 transform -translate-x-2/4"
            );
            setanimation_current_style(
              "transition-all duration-2000 opacity-0"
            );
            setpos_current("transition-all duration-2000 left-full");
          }}
          className="md:hidden z-20 w-10 h-10 rotate-90 opacity-50 cursor-pointer hover:opacity-100 transform mt-5"
        >
          <Arrow />
        </div>
        {/* Desktop Arrow */}
        <div
          onClick={() => {
            setanimation_back_desktop(
              "transition-all duration-2000 opacity-100 left-0"
            );
            setanimation_mid_desktop("transition-all duration-2000 left-1/3");
            setanimation_start_desktop("transition-all duration-2000 left-1/3");
          }}
          className="hidden md:block z-40 w-10 h-10 rotate-90 opacity-50 cursor-pointer hover:opacity-100 transform mt-5"
        >
          <Arrow />
        </div>

        {/* Content */}
        <div className="w-9/6 h-40 relative text-center">
          {/* Back */}
          <div className="inline-block md:hidden">
            <div
              className={`absolute ${animation_back_style} rounded-md h-full bg-red-400 top-0 z-10`}
            >
              <img
                src="./project.jpg"
                alt="img"
                className="rounded-md h-full w-full"
              />
            </div>
          </div>
          {/* current */}
          <div
            onMouseEnter={() => {
              setisdetatishidden("opacity-100");
            }}
            onMouseLeave={() => {
              setisdetatishidden("opacity-0");
            }}
            className={`md:hidden inline-block ${animation_current_style}`}
          >
            <div
              className={`${isdetatlishidden} ${pos_current} absolute transition-all duration-500 bg-gray-200 top-0 rounded-md w-2/4 h-full z-30`}
            >
              <span className="text-2xl inline-block absolute top-1/4 left-2/4 transform -translate-x-2/4">
                {data[pointer].title}
              </span>
              <span className="inline-block absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-lg mt-1">
                {data[pointer].description}
              </span>
              <a
                target="blank"
                href={data[pointer].url}
                className="bg-gray-700 absolute top-2/3 left-2/4 transform -translate-x-2/4 px-4 p-1 rounded-md inline-block text-xl"
              >
                go
              </a>
            </div>
            <div
              className={`absolute ${pos_current} w-2/4 h-full bg-red-400 top-0 z-20`}
            >
              <img
                src="./project.jpg"
                alt="img"
                className="rounded-md h-full w-full"
              />
            </div>
          </div>
          {/* next */}
          <div className="inline-block md:hidden">
            <div
              className={`${animation_next_style} rounded-md absolute h-full bg-red-400 top-0 z-10`}
            >
              <img
                src="./project.jpg"
                alt="img"
                className="rounded-md h-full w-full"
              />
            </div>
          </div>

          {/* Desktop Cards */}
          <div className="hidden relative h-full w-full md:flex md:justify-around md:items-center">
            {/* Back Desktop */}
            <div
              className={`absolute z-30 w-1/3 top-2/4 transform -translate-y-2/4 ${animation_back_desktop}`}
            >
              <div>
                <img src="./project.jpg" alt="image" className="rounded-md" />
              </div>
            </div>

            {/* Active Desktop */}
            <div
              onMouseEnter={() => {
                setisdetatlishiddendesktop1("opacity-100");
              }}
              onMouseLeave={() => {
                setisdetatlishiddendesktop1("opacity-0");
              }}
              className={`z-10 relative mr-3 ${animation_start_desktop}`}
            >
              <div
                className={`${isdetatlishiddendesktop1} transition duration-500 absolute rounded-md top-0 w-full h-full bg-gray-200`}
              >
                <span className="text-lg change_text:text-2xl inline-block absolute top-1 change_text:top-1/4 left-2/4 transform -translate-x-2/4">
                  {data[pointer].title}
                </span>
                <span className="inline-block absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-sm change_text:text-lg change_text:mt-1">
                  {data[pointer].description}
                </span>
                <a
                  target="blank"
                  href={data[pointer].url}
                  className="bg-gray-700 absolute top-2/3 left-2/4 transform -translate-x-2/4 px-4 change_text:p-1 rounded-md inline-block text-base change_text:text-xl"
                >
                  go
                </a>
              </div>
              <div>
                <img src="./project.jpg" alt="image" className="rounded-md" />
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setisdetatlishiddendesktop2("opacity-100");
              }}
              onMouseLeave={() => {
                setisdetatlishiddendesktop2("opacity-0");
              }}
              className={`z-20 relative mr-3 ${animation_mid_desktop}`}
            >
              <div
                className={`${isdetatlishiddendesktop2} transition duration-500 absolute rounded-md top-0 w-full h-full bg-gray-200`}
              >
                <span className="text-lg change_text:text-2xl inline-block absolute top-1 change_text:top-1/4 left-2/4 transform -translate-x-2/4">
                  {data[get_the_next(pointer, data.length - 1)].title}
                </span>
                <span className="inline-block absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-sm change_text:text-lg change_text:mt-1">
                  {data[get_the_next(pointer, data.length - 1)].description}
                </span>
                <a
                  target="blank"
                  href={data[get_the_next(pointer, data.length - 1)].url}
                  className="bg-gray-700 absolute top-2/3 left-2/4 transform -translate-x-2/4 px-4 change_text:p-1 rounded-md inline-block text-base change_text:text-xl"
                >
                  go
                </a>
              </div>
              <div>
                <img src="./project.jpg" alt="image" className="rounded-md" />
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setisdetatlishiddendesktop3("opacity-100");
              }}
              onMouseLeave={() => {
                setisdetatlishiddendesktop3("opacity-0");
              }}
              className={`z-10 relative ${animation_end_desktop}`}
            >
              <div
                className={`${isdetatlishiddendesktop3} transition duration-500 absolute rounded-md top-0 w-full h-full bg-gray-200`}
              >
                <span className="text-lg change_text:text-2xl inline-block absolute top-1 change_text:top-1/4 left-2/4 transform -translate-x-2/4">
                  {
                    data[
                      get_the_next(
                        get_the_next(pointer, data.length - 1),
                        data.length - 1
                      )
                    ].title
                  }
                </span>
                <span className="inline-block absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-sm change_text:text-lg change_text:mt-1">
                  {
                    data[
                      get_the_next(
                        get_the_next(pointer, data.length - 1),
                        data.length - 1
                      )
                    ].description
                  }
                </span>
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
                  className="bg-gray-700 absolute top-2/3 left-2/4 transform -translate-x-2/4 px-4 change_text:p-1 rounded-md inline-block text-base change_text:text-xl"
                >
                  go
                </a>
              </div>
              <div>
                <img src="./project.jpg" alt="image" className="rounded-md" />
              </div>
            </div>

            {/* Next Desktop */}
            <div
              className={`absolute w-1/3 top-2/4 transform -translate-y-2/4 ${animation_next_desktop}`}
            >
              <div>
                <img src="./project.jpg" alt="image" className="rounded-md" />
              </div>
            </div>
          </div>
        </div>

        {/* Moble Arrow */}
        <div
          onClick={() => {
            setanimation_next_style(
              "transition-all duration-2000 opacity-100 right-2/4 transform translate-x-2/4"
            );
            setanimation_current_style(
              "transition-all duration-2000 opacity-0 -left-1/4"
            );
            setpos_current(
              "transition-all duration-2000 left-0 transform translate-x-0"
            );
          }}
          className="md:hidden z-20 w-10 h-10 -rotate-90 opacity-50 cursor-pointer hover:opacity-100 transform mt-5"
        >
          <Arrow />
        </div>
        {/* Desktop Arrow */}
        <div
          onClick={() => {
            setanimation_next_desktop(
              "transition-all duration-2000 opacity-100 right-0"
            );
            setanimation_mid_desktop("transition-all duration-2000 -left-1/3");
            setanimation_end_desktop("transition-all duration-2000 -left-1/3");
          }}
          className="hidden md:block z-20 w-10 h-10 -rotate-90 opacity-50 cursor-pointer hover:opacity-100 transform mt-5"
        >
          <Arrow />
        </div>
      </div>
    </div>
  );
}
