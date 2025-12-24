import { useData } from "vike-react/useData";
import type { Data } from "./+data.js";

export default function Page() {
  const { movie } = useData<Data>();
  return (
    <div className="pt-32 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <h1>{movie.title}</h1>
      Release Date: {movie.release_date}
      <br />
      Director: {movie.director}
      <br />
      Producer: {movie.producer}
    </div>
  );
}
