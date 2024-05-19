import { useMemo } from "react";

interface ProjectInfo {
  title: string;
  description: string;
  from: string;
  to: string;
}

const projects: ProjectInfo[] = [
  {
    title: "Online Streaming Platform ",
    description:
      "PWA Streaming Website using OAuth and MongoDB, using NextJS, Zod and TailwindCSS, written in Typescript, focusing on performance and user accessibility.",
    from: "2023",
    to: "2023",
  },
  {
    title: "Social Network Platform",
    description:
      "Dynamic full-stack application, using NextJS and MySQL, targeting User Experience",
    from: "2022",
    to: "2022",
  },
  {
    title: "Client-side Web Game",
    description:
      "Incremental hacking game, including a self-programmed operating system interface, focusing on architectural software design, powered by React and Typescript",
    from: "2023",
    to: "now",
  },
];

function TabProjects() {
  const projectsDOM = useMemo(
    () =>
      projects.map((p) => (
        <div className="mb-5">
          <div className="flex justify-between space-x-10">
            <p className="w-44 border-r border-r-stone-800">
              {p.from} - {p.to}
            </p>
            <div className="w-full">
              <h5 className="text-xl font-semibold mb-2">{p.title}</h5>
              <p>{p.description}</p>
            </div>
          </div>
        </div>
      )),
    [],
  );

  return (
    <div className="w-full">
      <h4 className="text-xl font-semibold mb-4 underline">projects</h4>
      {projectsDOM}
    </div>
  );
}

function TabAboutMe() {
  return (
    <div className="w-full mb-24">
      {/* Important margin-bottom for right design */}
      <h4 className="text-xl font-semibold mb-4 underline">about me</h4>
      <h3 className="mb-7">
        I am Kjell Herzke, a Full Stack Developer blending creativity with
        scalability to bring visually stunning and high-performing digital
        solutions to life, combining my technical expertise with a keen interest
        to drive innovation in projects.
      </h3>
      <div className="flex space-x-1 items-center">
        <button className="px-4 py-2 mr-2 bg-white text-black rounded-full">
          Get in touch
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-green-500"
        >
          <circle r="6" cx="12" cy="12" fill="currentColor" />
        </svg>
        <span>Available</span>
      </div>
    </div>
  );
}

/* function TabSkills() {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-4 underline">skills</h3>
      <p>- not implemented yet -</p>
    </div>
  );
} */

export default function App() {
  return (
    <div className="px-10 py-4">
      <div className="flex justify-between items-center">
        <span className="underline">kjell.herzke</span>
        {/* <img src="/favicon.svg" className="w-6 h-6" /> */}
        <div className="flex space-x-1 items-center">
          <a
            href="https://github.com/kjellherzke"
            target="_blank"
            aria-label="Github profile"
          >
            <img src="/icons/github.svg" className="w-6" alt="Github" />
          </a>
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mt-[13rem] md:mt-[18rem] mb-4">
        kjell herzke
      </h1>
      <h2 className="text-2xl md:text-4xl font-medium w-[40rem] mb-[10rem] md:mb-[18rem]">
        fullstack software developer
      </h2>
      <div className="flex flex-col-reverse md:flex-row justify-between space-x-0 space-y-16 md:space-x-16 md:space-y-0 w-full">
        <TabProjects />
        <div className="w-full">
          <TabAboutMe />
          {/* <TabSkills /> */}
        </div>
      </div>
    </div>
  );
}
