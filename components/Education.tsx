import { useState } from "react";
import Arrow from "../svgs/arrow";
import get_the_next from "../functions/get_the_next_pointer";

export default function Experience() {
  const data = [
    {
      id: 1,
      degree: "degree-1",
      university_name: "university-name-1",
      date: "0000/0000",
    },
    {
      id: 2,
      degree: "degree-2",
      university_name: "university-name-2",
      date: "0000/0000",
    },
    {
      id: 3,
      degree: "degree-3",
      university_name: "university-name-3",
      date: "0000/0000",
    },
  ];
  const [pointer, setPointer] = useState(0);
  return (
    <>
      <div className="mt-6 md:mt-12 ml-3 text-2xl mb-2 md:float-left md:ml-44">
        Education
      </div>
      <div className="flex justify-between mx-3 md:mt-3">
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
            <div className="text-2xl text-center">{data[pointer].degree}</div>
            <div className="text-center">{data[pointer].university_name}</div>
            <div className="text-center mt-2 italic">{data[pointer].date}</div>
          </div>

          <div className="hidden md:block bg-gray-200 md:w-2/5 w-4/6 rounded-md">
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
