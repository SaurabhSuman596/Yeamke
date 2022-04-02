import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchVideo } from "../../Redux/Actions/Video.action";
import { useParams, useNavigate } from "react-router-dom";
import "./SearchVideoScreen.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SearchVideoScreen() {
  const [videoId, setVideoId] = useState("");

  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSearchVideo(id));
  }, [id, dispatch]);

  const { videos } = useSelector((state) => state.searchVideo);

  return (
    <div className="searchVideoScreen">
      <div className="searchVideo__All">
        {videos.map((video) => {
          return (
            <div
              className="searchVideo__card"
              onClick={() => {
                setVideoId(video.id.videoId);
                console.log(videoId);
                navigate(`/video/${video.id.videoId}`);
              }}
            >
              <LazyLoadImage
                src={video.snippet.thumbnails.medium.url}
                alt=""
                className="searchVideo__image"
              />
              <p className="videoScarch__title">{video.snippet.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchVideoScreen;
