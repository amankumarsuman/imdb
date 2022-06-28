import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../singleContent/SingleContent";

function FeaturedToday() {
  const [featured, setFeatured] = useState([]);
  const fetchFeatured = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data);
    setFeatured(data.results);
  };

  useEffect(() => {
    fetchFeatured();
  }, []);
  return (
    <>
      <div>
        <span className="pageTitle">Featured Today</span>
        <div className="featured">
          {featured &&
            featured.map((item) => (
              <>
                <SingleContent
                  key={item.id}
                  id={item.id}
                  poster={item.poster_path}
                  title={item.title || item.name}
                  date={item.first_air_date || item.release_date}
                  media_type={item.media_type}
                  rating={item.vote_average}
                />
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default FeaturedToday;
