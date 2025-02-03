type Project = {
  title: string;
  description: string;
  year: number;
  link: string;
};
export default function Projects({ projects }: { projects: Project }) {
    return (
        <div>
            <div>{projects.title}</div>
            <div>{projects.description}</div>
            <div>{projects.year}</div>
        </div>
  )
}
