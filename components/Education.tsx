import { useState, useEffect } from "react";
import Arrow from "../svgs/arrow";
import get_the_next from "../functions/get_the_next_pointer";
import get_the_back from "../functions/get_the_back_pointer";
import rowdata from "../data/data.json";

let is_first_render_next = true;
let is_first_render_back = true;
let is_first_render_desktop = true;
let is_second_move_next = false;
let is_second_move_back = false;
let is_second_move_desktop = false;

export default function Experience() {
  const data = rowdata.education;
  const [pointer, setPointer] = useState(0);
  const [animation_back_style, setanimation_back_style] = useState(
    "opacity-0 transform -translate-x-2/4"
  );
  const [animation_current_style, setanimation_current_style] = useState("");
  const [animation_next_style, setanimation_next_style] = useState(
    "opacity-0 transform translate-x-2/4"
  );
  const [animation_desktop_next_style, set_animation_desktop_next_style] =
    useState("opacity-0 translate-x-2/4");
  const [animation_desktop_style, set_animation_desktop_style] =
    useState("right-0");
  // get next effect
  useEffect(() => {
    if (is_first_render_next) {
      is_first_render_next = false;
    } else {
      setTimeout(() => {
        if (!is_second_move_next) {
          is_second_move_next = true;
          setanimation_next_style(
            "transition-none duration-0 opacity-0 transform translate-x-2/4"
          );
          setanimation_current_style(
            "transition-none duration-0 opacity-100 transform translate-x-0"
          );
          setPointer(get_the_next(pointer, data.length - 1));
        } else {
          is_second_move_next = false;
        }
      }, 2000);
    }
  }, [animation_next_style]);

  // get back effect
  useEffect(() => {
    if (is_first_render_back) {
      is_first_render_back = false;
    } else {
      setTimeout(() => {
        if (!is_second_move_back) {
          is_second_move_back = true;
          setanimation_current_style(
            "transition-none duration-0 opacity-100 transform translate-x-0"
          );
          setanimation_back_style(
            "transition-none duration-0 opacity-0 transform -translate-x-2/4"
          );
          setPointer(get_the_back(pointer, data.length - 1));
        } else {
          is_second_move_back = false;
        }
      }, 2000);
    }
  }, [animation_back_style]);

  // get desktop effect
  useEffect(() => {
    if (is_first_render_desktop) {
      is_first_render_desktop = false;
    } else {
      setTimeout(() => {
        if (!is_second_move_desktop) {
          is_second_move_desktop = true;
          set_animation_desktop_style("transition-none duration-0 right-0");
          set_animation_desktop_next_style(
            "transition-none duration-0 opacity-0 translate-x-2/4"
          );
          setPointer(get_the_next(pointer, data.length - 1));
        } else {
          is_second_move_desktop = false;
        }
      }, 2000);
    }
  }, [animation_desktop_next_style]);

  return (
    <>
      {/* Main title */}
      <div className="mt-6 md:mr-6 md:mt-12 ml-3 text-2xl mb-2 md:float-left md:ml-44">
        {`<`}Education{`/>`}
      </div>
      {/* Main Body */}
      <div className="flex justify-between mx-3 md:mt-3">
        {/* Arrow */}
        <div
          onClick={() => {
            setanimation_current_style(
              "transition-all duration-2000 opacity-0 translate-x-2/4 transform"
            );
            setanimation_back_style(
              "transition-all duration-2000 opacity-100 transform translate-x-0"
            );
          }}
          className="md:hidden z-20 w-10 h-10 rotate-90 opacity-50 cursor-pointer hover:opacity-100 transform mt-5"
        >
          <Arrow />
        </div>

        {/* Content */}
        <div className="flex relative justify-around md:justify-between w-full">
          {/* Back Card */}
          <div
            className={`cursor-default bg-gray-200 md:hidden w-4/6 rounded-md absolute z-10 ${animation_back_style}`}
          >
            <div className="text-2xl text-center">
              {data[get_the_back(pointer, data.length - 1)].degree}
            </div>
            <div className="text-center">
              {data[get_the_back(pointer, data.length - 1)].university_name}
            </div>
            <div className="text-center mt-2 italic">
              {data[get_the_back(pointer, data.length - 1)].date}
            </div>
          </div>
          {/* Current Card */}
          <div
            className={`z-20 bg-gray-200 md:w-2/5 w-4/6 rounded-md ${animation_current_style}`}
          >
            <div className="text-2xl text-center">{data[pointer].degree}</div>
            <div className="text-center">{data[pointer].university_name}</div>
            <div className="text-center mt-2 italic">{data[pointer].date}</div>
          </div>
          {/* Next Card */}
          <div
            className={`z-10 cursor-default bg-gray-200 md:hidden w-4/6 rounded-md absolute ${animation_next_style}`}
          >
            <div className="text-2xl text-center">
              {data[get_the_next(pointer, data.length - 1)].degree}
            </div>
            <div className="text-center">
              {data[get_the_next(pointer, data.length - 1)].university_name}
            </div>
            <div className="text-center mt-2 italic">
              {data[get_the_next(pointer, data.length - 1)].date}
            </div>
          </div>

          {/* Desktop Card */}
          <div
            className={`z-30 hidden md:block absolute bg-gray-200 md:w-2/5 w-4/6 rounded-md transform ${animation_desktop_style}`}
          >
            <div className="text-2xl text-center">
              {data[get_the_next(pointer, data.length - 1)].degree}
            </div>
            <div className="text-center">
              {data[get_the_next(pointer, data.length - 1)].university_name}
            </div>
            <div className="text-center mt-2 italic">
              {data[get_the_next(pointer, data.length - 1)].date}
            </div>
          </div>
          {/* Desktop Next Card */}
          <div
            className={`hidden md:block bg-gray-200 md:w-2/5 w-4/6 rounded-md absolute right-0 transform ${animation_desktop_next_style}`}
          >
            <div className="text-2xl text-center">
              {
                data[
                  get_the_next(
                    get_the_next(pointer, data.length - 1),
                    data.length - 1
                  )
                ].degree
              }
            </div>
            <div className="text-center">
              {
                data[
                  get_the_next(
                    get_the_next(pointer, data.length - 1),
                    data.length - 1
                  )
                ].university_name
              }
            </div>
            <div className="text-center mt-2 italic">
              {
                data[
                  get_the_next(
                    get_the_next(pointer, data.length - 1),
                    data.length - 1
                  )
                ].date
              }
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div
          onClick={() => {
            setanimation_current_style(
              "transition-all duration-2000 opacity-0 -translate-x-2/4 transform"
            );
            setanimation_next_style(
              "transition-all duration-2000 opacity-100 transform translate-x-0"
            );
          }}
          className="z-20 md:hidden w-10 h-10 -rotate-90 opacity-50 cursor-pointer hover:opacity-100 transform mt-5"
        >
          <Arrow />
        </div>
        {/* Desktop Arrow */}
        <div
          onClick={() => {
            set_animation_desktop_next_style(
              "transition-all duration-2000 opacity-100 translate-x-0"
            );
            set_animation_desktop_style(
              "transition-all duration-2000 right-full translate-x-full"
            );
          }}
          className="hidden md:block md:ml-6 w-10 h-10 -rotate-90 opacity-50 cursor-pointer hover:opacity-100 transform mt-5"
        >
          <Arrow />
        </div>
      </div>
    </>
  );
}
