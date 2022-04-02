import React, { useEffect } from "react";
import "./HomeVideo.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getKeywordVideo } from "../../Redux/Actions/Video.action";
import { LazyLoadImage } from "react-lazy-load-image-component";

function HomeVideo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKeywordVideo("motivetion"));
  }, [dispatch]);

  const { videos } = useSelector((state) => state.homeVideo);

  const history = useNavigate();

  return (
    <div className="homeVideo">
      <>
        <h1>
          Popular <span>Motivational</span> Video
        </h1>
        <div className="homeVideo__videoCard">
          {videos.map((video) => (
            <div
              key={video.id.videoId}
              onClick={() => {
                history(`/video/${video.id.videoId}`);
              }}
              className="homeVideo__card"
            >
              <LazyLoadImage
                src={video.snippet.thumbnails.medium.url}
                alt=""
                width="320px"
                height="100px"
                className="homeVideo__img"
              />
              <p className="homeVideo_videoTitle">{video.snippet.title}</p>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}

export default HomeVideo;
