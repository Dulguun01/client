import { IMovie } from "@/interfaces/movie";
import { GetStaticPropsContext } from "next";
import { FC, useState } from "react";

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:7070/api/movies/ids");
  const data = await response.json();
  const paths = data.map((_id: string) => ({
    paths: {
      _id,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const response = await fetch(
    `http://localhost:7070/api/movies/${params?._id}`
  );
  const data = await response.json();
  return {
    props: { data },
  };
};

interface Props {
  data: IMovie;
}

const Index: FC<Props> = ({ data }) => {
  const [movies, setMovies] = useState<IMovie | undefined>(data);

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
