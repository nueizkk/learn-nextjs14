import Link from 'next/link';
import styles from '../styles/movie.module.css';

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  return (
    <Link prefetch href={`/movies/${id}`} className={styles.movie}>
      <img src={poster_path} alt={title} />
      <span>{title}</span>
    </Link>
  );
}
