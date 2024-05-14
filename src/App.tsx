import { GridRepo, GridRepoAuto, GridTech } from "./Grid";

function App() {
  return (
    <div className="w-full h-screen flex justify-center py-3">
      <div className="w-3/4">
        <div className="flex items-center justify-between mb-12">
          <img className="w-9" src="/profile-pic.svg" />
          <a
            href="https://github.com/kjellherzke"
            className="rounded-full button"
          >
            <img className="w-5" src="/icons/github.svg" />
          </a>
        </div>
        <h1 className="text-3xl font-bold">Kjell,</h1>
        <h2 className="text-3xl">full-stack developer</h2>
        <h3 className="mt-4 mb-12">
          As a programmer I enjoy building and architecturing software, using
          these <a href="#technologies">technologies</a>.
        </h3>
        {/*<h4 className="border-b text-xl pb-1 mb-3 border-b-slate text-secondary">
          Projects
        </h4> */}
        {/*
        <GridTech
          data={[
            {
              id: "typescript",
              color: "#004c7f",
            },
            {
              id: "node",
              color: "#00ee00",
            },
          ]}
        />*/}
        <h4 className="border-b text-xl pb-2 mb-6 border-b-slate text-secondary">
          Projects
        </h4>
        <GridRepoAuto />
      </div>
    </div>
  );
}

export default App;
