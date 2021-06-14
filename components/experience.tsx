import { useState, useEffect } from "react";
import Arrow from "../svgs/arrow";
import get_the_next from "../functions/get_the_next_pointer";
import get_the_back from "../functions/get_the_back_pointer";

let is_first_render_next = true;
let is_first_render_back = true;
let is_first_render_desktop = true;
let is_second_move_next = false;
let is_second_move_back = false;
let is_second_move_desktop = false;

export default function Experience() {
  const data = [
    {
      id: 1,
      job_title: "job-title-1",
      company_name: "company-1",
      location: "location-1",
      date: "0000/0000",
      description: "description-1",
    },
    {
      id: 2,
      job_title: "job-title-2",
      company_name: "company-2",
      location: "location-2",
      date: "0000/0000",
      description: "description-2",
    },
    {
      id: 3,
      job_title: "job-title-3",
      company_name: "company-3",
      location: "location-3",
      date: "0000/0000",
      description: "description-3",
    },
  ];
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
            "duration-0 opacity-0 transform translate-x-2/4"
          );
          setanimation_current_style(
            "duration-0 opacity-100 transform translate-x-0"
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
            "duration-0 opacity-100 transform translate-x-0"
          );
          setanimation_back_style(
            "duration-0 opacity-0 transform -translate-x-2/4"
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
          set_animation_desktop_style("duration-0 right-0");
          set_animation_desktop_next_style(
            "duration-0 opacity-0 translate-x-2/4"
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
        Experience
      </div>
      {/* Main body */}
      <div className="flex justify-between mx-3 md:mt-6">
        {/* arrow */}
        <div
          onClick={() => {
            setanimation_current_style("opacity-0 translate-x-2/4 transform");
            setanimation_back_style("opacity-100 transform translate-x-0");
          }}
          className="md:hidden z-20 w-10 h-10 rotate-90 opacity-50 cursor-pointer hover:opacity-100 transform mt-5"
        >
          <Arrow />
        </div>
        {/* Cards */}
        <div className="flex relative justify-around md:justify-between w-full">
          {/* Back Card */}
          <div
            className={`bg-gray-200 md:hidden w-4/6 rounded-md transition absolute z-10 duration-2000 ${animation_back_style}`}
          >
            {/* Header */}
            <div className="text-2xl text-center">
              {data[get_the_back(pointer, data.length - 1)].job_title}
            </div>
            {/* Body */}
            <div className="text-center">
              {data[get_the_back(pointer, data.length - 1)].company_name}/
              {data[get_the_back(pointer, data.length - 1)].location}/
              {data[get_the_back(pointer, data.length - 1)].date}
            </div>
            {/* footer */}
            <div className="text-center mt-4">
              {data[get_the_back(pointer, data.length - 1)].description}
            </div>
          </div>
          {/* Active Card */}
          <div
            className={`bg-gray-200 md:w-2/5 w-4/6 rounded-md transition duration-2000 ${animation_current_style}`}
          >
            {/* Header */}
            <div className="text-2xl text-center">
              {data[pointer].job_title}
            </div>
            {/* Body */}
            <div className="text-center">
              {data[pointer].company_name}/{data[pointer].location}/
              {data[pointer].date}
            </div>
            {/* footer */}
            <div className="text-center mt-4">{data[pointer].description}</div>
          </div>
          {/* Next Card */}
          <div
            className={`bg-gray-200 md:hidden w-4/6 rounded-md transition absolute duration-2000 ${animation_next_style}`}
          >
            {/* Header */}
            <div className="text-2xl text-center">
              {data[get_the_next(pointer, data.length - 1)].job_title}
            </div>
            {/* Body */}
            <div className="text-center">
              {data[get_the_next(pointer, data.length - 1)].company_name}/
              {data[get_the_next(pointer, data.length - 1)].location}/
              {data[get_the_next(pointer, data.length - 1)].date}
            </div>
            {/* footer */}
            <div className="text-center mt-4">
              {data[get_the_next(pointer, data.length - 1)].description}
            </div>
          </div>

          {/* Desktop extra Card */}
          <div
            className={`hidden md:block absolute bg-gray-200 md:w-2/5 w-4/6 rounded-md transform transition-all duration-2000 ${animation_desktop_style}`}
          >
            {/* header */}
            <div className="text-2xl text-center">
              {data[get_the_next(pointer, data.length - 1)].job_title}
            </div>
            {/* body */}
            <div className="text-center">
              {data[get_the_next(pointer, data.length - 1)].company_name}/
              {data[get_the_next(pointer, data.length - 1)].location}/
              {data[get_the_next(pointer, data.length - 1)].date}
            </div>
            {/* footer */}
            <div className="text-center mt-4">
              {data[get_the_next(pointer, data.length - 1)].description}
            </div>
          </div>
          {/* Desktop Card Next */}
          <div
            className={`hidden md:block bg-gray-200 md:w-2/5 w-4/6 rounded-md transition-all absolute right-0 duration-2000 transform ${animation_desktop_next_style}`}
          >
            {/* header */}
            <div className="text-2xl text-center">
              {
                data[
                  get_the_next(
                    get_the_next(pointer, data.length - 1),
                    data.length - 1
                  )
                ].job_title
              }
            </div>
            {/* body */}
            <div className="text-center">
              {
                data[
                  get_the_next(
                    get_the_next(pointer, data.length - 1),
                    data.length - 1
                  )
                ].company_name
              }
              /
              {
                data[
                  get_the_next(
                    get_the_next(pointer, data.length - 1),
                    data.length - 1
                  )
                ].location
              }
              /
              {
                data[
                  get_the_next(
                    get_the_next(pointer, data.length - 1),
                    data.length - 1
                  )
                ].date
              }
            </div>
            {/* footer */}
            <div className="text-center mt-4">
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
        </div>

        {/* arrow */}
        <div
          onClick={() => {
            setanimation_current_style("opacity-0 -translate-x-2/4 transform");
            setanimation_next_style("opacity-100 transform translate-x-0");
          }}
          className="md:hidden w-10 h-10 -rotate-90 opacity-50 cursor-pointer hover:opacity-100 transform mt-5"
        >
          <Arrow />
        </div>
        {/* Desktop arrow */}
        <div
          onClick={() => {
            set_animation_desktop_next_style("opacity-100 translate-x-0");
            set_animation_desktop_style("right-full translate-x-full");
          }}
          className="hidden md:block md:ml-6 w-10 h-10 -rotate-90 opacity-50 cursor-pointer hover:opacity-100 transform mt-5"
        >
          <Arrow />
        </div>
      </div>
    </>
  );
}
