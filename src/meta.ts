interface MetaInfo {
  title: string;
  description: string;
  from?: string;
  to?: string;
}

export const metaProjects: MetaInfo[] = [
  {
    title: "Online Streaming Platform",
    description:
      "Develop a Progressive Web Application (PWA) streaming website utilizing OAuth for authentication and MongoDB for database management. Leverage Next.js for server-side rendering, Zod for schema validation, and TailwindCSS for styling. Ensure the application is written in TypeScript, prioritizing both performance and user accessibility.",
    from: "2023",
    to: "2023",
  },
  {
    title: "Social Network Platform",
    description:
      "Create a dynamic full-stack application leveraging Next.js and MySQL, designed with a strong focus on enhancing user experience and user accessibility.",
    from: "2022",
    to: "2022",
  },
  {
    title: "Client-side Web Game",
    description:
      "Develop an engaging incremental hacking game featuring a custom-built operating system interface, emphasizing architectural software design principles. Utilize React and TypeScript to create a robust and scalable application framework.",
    from: "2023",
    to: "now",
  },
];
