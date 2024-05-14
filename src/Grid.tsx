import { useEffect, useMemo, useState } from "react";

export interface GridTechItem {
  id: string;
  color: string;
}

export function GridTech({ data }: { data: GridTechItem[] }) {
  return useMemo(
    () => (
      <div className="grid grid-cols-2 gap-4">
        {data.map((tech) => (
          <button className="flex space-x-2 items-center ">
            <div
              style={{ backgroundColor: tech.color + "30" }}
              className="rounded-xl p-2.5"
            >
              <img className="w-5 text-primary" src={`/icons/${tech.id}.svg`} />
            </div>
            <p className="text-sm">
              {tech.id.charAt(0).toUpperCase() + tech.id.slice(1)}
            </p>
          </button>
        ))}
      </div>
    ),
    [],
  );
}

interface GridRepoRelevantItem {
  archived: boolean;
  pushed_at: string;
  created_at: string;
  forks_count: number;
  stargazers_count: number;
  html_url: string;
  name: string;
  description: string;
}

export function GridRepoAuto() {
  const [data, setData] = useState<GridRepoRelevantItem[]>([]);
  useEffect(() => {
    fetch("https://api.github.com/users/kjellherzke/repos")
      .then((res) => res.json())
      .then((data) =>
        setData(
          data.sort(
            (d1: GridRepoRelevantItem, d2: GridRepoRelevantItem) =>
              new Date(d2.pushed_at).getTime() -
              new Date(d1.pushed_at).getTime(),
          ),
        ),
      );
  }, []);
  return <GridRepo data={data} />;
}

export function GridRepo({ data }: { data: GridRepoRelevantItem[] }) {
  return (
    <div className="grid gap-4">
      {data.map((repo) => (
        <a href={repo.html_url} className="button !p-4">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">{repo.name}</p>
            <div className="flex space-x-3 items-center">
              <div className="flex items-center text-yellow-600 space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <span>{repo.stargazers_count}</span>
              </div>

              <div className="flex items-center text-yellow-600 space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-3 h-3"
                  viewBox="0 0 32 32"
                >
                  <path d="M2.016 26.016q0-1.92 1.088-3.456t2.912-2.176v-8.736q-1.792-.608-2.912-2.144T2.016 6.016q0-2.496 1.728-4.256T8 0t4.256 1.76 1.76 4.256q0 1.92-1.12 3.488t-2.88 2.144v4.736Q11.008 16 12 16h8q.832 0 1.408-.576t.608-1.408v-.352q-1.792-.608-2.912-2.176t-1.088-3.456q0-2.496 1.728-4.256T24 2.016t4.256 1.76 1.76 4.256q0 1.92-1.12 3.456t-2.88 2.176v.352q0 2.496-1.76 4.256T20 20.032h-8q-.864 0-1.44.608 1.536.736 2.496 2.176t.96 3.2q0 2.496-1.76 4.256T8 32.032t-4.256-1.76-1.728-4.256zm4 0q0 .832.576 1.44T8 28.032t1.408-.576.608-1.44-.608-1.408T8 24.032t-1.408.576-.576 1.408zm0-20q0 .832.576 1.44T8 8.032t1.408-.576.608-1.44-.608-1.408T8 4.032t-1.408.576-.576 1.408zm16 2.016q0 .832.576 1.408t1.408.576 1.408-.576.608-1.408-.608-1.408T24 6.016t-1.408.608-.576 1.408z"></path>
                </svg>
                <span>{repo.forks_count}</span>
              </div>
            </div>
          </div>
          <p>{repo.description ?? "- no description given -"}</p>
          <p className="text-secondary mt-2 text-right">
            Updated on {new Date(repo.pushed_at).toISOString().slice(0, 10)}
          </p>
        </a>
      ))}
    </div>
  );
}
