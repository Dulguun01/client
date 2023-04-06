import { IMovie } from "@/interfaces/movie";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const Index: FC = () => {
  const [movies, setMovies] = useState<IMovie | undefined>();
  const { query } = useRouter();
  const { _id } = query;
  useEffect(() => {
    if (_id) {
      fetch("http://localhost:7070/api/movies/" + _id)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data);
        });
    }
  }, [_id]);
  if (!movies) return <h1>Movie not FOund</h1>;

  return (
    <>
      <div className="bg-slate-100 min-h-screen sm:container sm:mx-auto">
        <div className="bg-white">
          <div className=" grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
            <div className="col-span-1"> {movies.title}</div>
            <div className="col-span-2">
              <div>{movies.title}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
