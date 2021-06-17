import data from "../data/data.json";
export default function Skills() {
  return (
    <div className="ml-3 mt-6 md:ml-44">
      <div className="mb-3 text-2xl md:text-3xl">
        {`<`} Skills {`/>`}
      </div>
      <div>
        {data.skills.map((skill) => (
          <div className="mt-3 relative">
            <div className="md:inline-block md:text-xl">{skill.title}</div>
            <div className="relative md:float-right md:w-3/4 md:mr-4">
              <div className="border border-black h-5 ml-4 mr-10 rounded-xl"></div>
              <div
                style={{ width: `${skill.prcent - 9}%` }}
                className="absolute top-0 left-0 bg-black h-5 ml-4 rounded-xl"
              ></div>
            </div>
            <div className="absolute right-2 md:right-4 bottom-0 md:bottom-2">
              {skill.prcent}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
