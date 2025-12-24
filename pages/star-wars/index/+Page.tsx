import { useData } from "vike-react/useData";
import type { Data } from "./+data.js";

export default function Page() {
  const { movies } = useData<Data>();
  return (
    <div className="pt-32 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <h1>Star Wars Movies</h1>
      <ol>
        {movies.map(({ id, title, release_date }) => (
          <li key={id}>
            <a href={`/star-wars/${id}`}>{title}</a> ({release_date})
          </li>
        ))}
      </ol>
      <p>
        Source: <a href="https://brillout.github.io/star-wars">brillout.github.io/star-wars</a>.
      </p>
    </div>
  );
}
