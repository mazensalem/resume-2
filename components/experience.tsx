import { useState } from "react";
import Arrow from "../svgs/arrow";
import get_the_next from "../functions/get_the_next_pointer";

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
  return (
    <>
      <div className="mt-6 md:mt-12 ml-3 text-2xl mb-2 md:float-left md:ml-44">
        Experience
      </div>
      <div className="flex justify-between mx-3 md:mt-6">
        {pointer === 0 || (
          <div
            onClick={() => {
              setPointer(pointer - 1);
            }}
            className="md:hidden w-10 h-10 rotate-90 opacity-50 active:opacity-100 transform mt-5"
          >
            <Arrow />
          </div>
        )}
        <div className="flex justify-around w-full">
          <div className="bg-gray-200 md:w-2/5 w-4/6 rounded-md">
            <div className="text-2xl text-center">
              {data[pointer].job_title}
            </div>
            <div className="text-center">
              {data[pointer].company_name}/{data[pointer].location}/
              {data[pointer].date}
            </div>
            <div className="text-center mt-4">{data[pointer].description}</div>
          </div>

          <div className="hidden md:block bg-gray-200 md:w-2/5 w-4/6 rounded-md">
            <div className="text-2xl text-center">
              {data[get_the_next(pointer, data.length - 1)].job_title}
            </div>
            <div className="text-center">
              {data[get_the_next(pointer, data.length - 1)].company_name}/
              {data[get_the_next(pointer, data.length - 1)].location}/
              {data[get_the_next(pointer, data.length - 1)].date}
            </div>
            <div className="text-center mt-4">
              {data[get_the_next(pointer, data.length - 1)].description}
            </div>
          </div>
        </div>
        {pointer === data.length - 1 || (
          <div
            onClick={() => {
              setPointer(pointer + 1);
            }}
            className="md:hidden w-10 h-10 -rotate-90 opacity-50 active:opacity-100 transform mt-5"
          >
            <Arrow />
          </div>
        )}
        <div
          onClick={() => {
            setPointer(get_the_next(pointer, data.length - 1));
          }}
          className="hidden md:block w-10 h-10 -rotate-90 opacity-50 active:opacity-100 transform mt-5"
        >
          <Arrow />
        </div>
      </div>
    </>
  );
}
