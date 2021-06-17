import React from "react";
import data from "../data/data.json";

export default function About() {
  return (
    <div className="ml-3 mt-6 md:ml-44">
      <h1 className="mb-3 text-2xl md:text-3xl">
        {`<`} About Me {`/>`}
      </h1>
      <p className="max-w-4xl pr-3">{data.aboutme}</p>
    </div>
  );
}
