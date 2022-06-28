import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../singleContent/SingleContent";
function Movies() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumberOfPages] = useState();
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );
    console.log("data", data);
    setContent(data.results);
    setNumberOfPages(data.total_pages);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <span className="pageTitle">Movies</span>
      <div className="featured">
        {content &&
          content.map((item) => (
            <>
              <SingleContent
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                media_type="movie"
                rating={item.vote_average}
              />
            </>
          ))}
      </div>
    </div>
  );
}

export default Movies;
