import Phone from "../svgs/phone";
import Email from "../svgs/email";
import Github from "../svgs/github";
import data from "../data/data.json";

export default function Sidebar() {
  return (
    <div className="hidden text-3xl md:flex flex-col items-center justify-between w-20 h-52 bg-gray-500 fixed left-0 top-40">
      <div className="p-0 m-0 leading-5">{`{`}</div>
      <a
        href={`tel:${data.phone}`}
        className="w-6 h-6 text-gray-400 hover:fill-current cursor-pointer"
      >
        <Phone />
      </a>
      <a
        href={`mailto:${data.email}`}
        className="w-6 h-6 text-gray-400 hover:fill-current cursor-pointer"
      >
        <Email />
      </a>
      <a
        href={data.github}
        target="blank"
        className="w-6 h-6 text-gray-400 hover:fill-current cursor-pointer"
      >
        <Github />
      </a>
      <div>{`}`}</div>
    </div>
  );
}
