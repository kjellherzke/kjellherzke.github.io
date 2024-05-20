import { useEffect, useMemo, useState } from "react";
import { metaProjects } from "./meta";

function ProjectsList() {
  return (
    <div id="projects">
      {useMemo(
        () =>
          metaProjects.map((p, i) => (
            <div
              key={i}
              className="mb-6 hover:bg-secondary hover:bg-opacity-10 p-3 hover:cursor-pointer rounded-xl"
            >
              <p className="font-semibold">{p.title}</p>
              <p className="text-secondary">{p.description}</p>
            </div>
          )),
        [],
      )}
    </div>
  );
}

function NavigationLinks({ links }: { links: string[] }) {
  const [activeLink, setActiveLink] = useState(window.location.hash.substr(1));

  useEffect(() => {
    const handleHashChange = () =>
      setActiveLink(window.location.hash.substr(1));
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className="mt-20 mb-96">
      <ul>
        {useMemo(
          () =>
            links.map((l, i) => (
              <li key={i}>
                <a
                  className={`flex group items-center${activeLink == l || (!activeLink && i == 0) ? " active" : ""}`}
                  href={"#" + l}
                >
                  <span className="bg-secondary transition-all inline-block w-12 mr-4 h-[1px]"></span>
                  <span className="text-secondary transition-all">
                    {l.replace("-", " ")}
                  </span>
                </a>
              </li>
            )),
          [activeLink, links],
        )}
      </ul>
    </nav>
  );
}

function AvailabilityInfo() {
  const [isAvailable, setAvailable] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/kjellherzke")
      .then((res) => res.json())
      .then((res) => setAvailable(res?.hireable));
  }, []);

  return isAvailable ? (
    <div className="flex space-x-2 items-center">
      <svg
        className="w-3 h-3 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="currentColor" />
      </svg>
      <span>Available</span>
    </div>
  ) : (
    <div className="flex space-x-2 items-center">
      <svg
        className="w-3 h-3 text-red-500"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="currentColor" />
      </svg>
      <span>Unavailable</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex px-72 pt-32 justify-between w-full h-full">
      <div>
        <h1 className="text-5xl font-bold">kjell herzke</h1>
        <h2 className="text-2xl font-bold text-secondary mb-4">
          software developer
        </h2>
        <h3 className="mb-4 font-semibold w-[28rem]">
          I build robust and scalable software solutions that streamline
          operations and enhance user experiences.
        </h3>
        <div className="flex space-x-8 items-center">
          <button className="bg-white rounded-full text-black px-4 py-2 shadow-[0_15px_60px_-10px_rgba(255,255,255,0.7)] hover:scale-105 transition-all">
            Get in touch
          </button>
          <AvailabilityInfo />
        </div>
        <NavigationLinks links={["about-me", "socials", "projects"]} />
        {/*<div className="flex items-center">
          <span className="text-secondary font-semibold">made in Germany</span>
        </div>*/}
      </div>
      <div className="w-[38rem]">
        <p
          id="about-me"
          className="text-secondary mb-12 hover:bg-secondary hover:bg-opacity-10 p-3 hover:cursor-pointer rounded-xl"
        >
          In 2020, my coding odyssey started with{" "}
          <span className="text-primary">Minecraft plugins</span>, propelling me
          into the thrilling realm of software development and culminating in
          the creation of custom{" "}
          <span className="text-primary">full-stack applications</span>. From
          there, I embarked on building a range of open-source projects,
          including a <span className="text-primary">web-based game</span>, an{" "}
          <span className="text-primary">online streaming platform</span>, and a{" "}
          <span className="text-primary">social networking site</span>.
        </p>
        <div
          id="socials"
          className="flex items-center space-x-4 mb-12 text-secondary font-semibold hover:bg-secondary hover:bg-opacity-10 p-3 rounded-xl"
        >
          <span>Find more about on</span>
          <a href="https://github.com/kjellherzke">
            <svg
              className="text-secondary w-6"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z"></path>
            </svg>
          </a>
        </div>
        <ProjectsList />
      </div>
    </div>
  );
}
