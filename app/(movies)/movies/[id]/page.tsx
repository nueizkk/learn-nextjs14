import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

interface IParams {
  params: { id: string };
}

export async function generateMetadata(props: IParams) {
  const movie = await getMovie(props.params.id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail(props: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={props.params.id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={props.params.id} />
      </Suspense>
    </div>
  );
}
