import React, { lazy, Suspense, useContext } from 'react';
import * as T from '../../components/organism/Typography';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../../context/MovieContext';
import { PATHS } from '../../router/paths';
import ContentLoading from '../../components/molecules/ContentLoading';
import { StyledWatchlistPage } from './style';
const MoviesGridDiv = lazy(() =>
  import('../../components/molecules/MoviesGridDiv')
);
const MovieCard = lazy(() => import('../../components/molecules/MovieCard'));

const WatchlistPage = () => {
  const { movies, watchlist, toggleWatchlist } = useContext(MovieContext);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(PATHS.MOVIES.VIEW.replace(':id', id));
  };

  return (
    <StyledWatchlistPage>
      <T.H1>Your Watchlist</T.H1>
      <Suspense fallback={<ContentLoading size={50} LoadingText />}>
        <MoviesGridDiv>
          {watchlist.map((id) => {
            const movie = movies.find((movie) => movie.id === id);
            return (
              <MovieCard
                key={id}
                movie={movie}
                toggleWatchlist={toggleWatchlist}
                isWatchlisted={true}
                handleClick={handleClick}
              />
            );
          })}
        </MoviesGridDiv>
      </Suspense>
    </StyledWatchlistPage>
  );
};

export default WatchlistPage;
