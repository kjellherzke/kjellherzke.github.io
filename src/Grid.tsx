import { useMemo } from "react";

export interface GridListItem {
  id: string;
  color: string;
}

export default function Grid({ list }: { list: GridListItem[] }) {
  return useMemo(
    () => (
      <div className="grid grid-cols-2 gap-4">
        {list.map((tech) => (
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
