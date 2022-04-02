import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRelatedVideo } from "../../Redux/Actions/Video.action";
import "./VideoScreen.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function VideoScreen() {
  const [video_id, setVideoid] = useState("");
  const { id } = useParams();
  const { videoId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRelatedVideo(id));
    id ? setVideoid(id) : setVideoid(videoId);
  }, [dispatch, id, videoId]);

  const { videos } = useSelector((state) => state.relatedVideo);

  return (
    <div className="videoscreen">
      <iframe
        src={`https://www.youtube.com/embed/${video_id}`}
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"
        frameborder="0"
        title="Mujhe Sajan k "
        className="videoscreen__iframe"
      ></iframe>

      <div className="videoScreenRelated">
        <h1>Related Video</h1>
        <div className="videoScreenRelatedvideo">
          {videos
            .filter((video) => video.snippet)
            .map((video) => {
              return (
                <div key={video.id.videoId} className="videoScreenReltedVideo">
                  <LazyLoadImage
                    onClick={() => setVideoid(video.id.videoId)}
                    src={video.snippet.thumbnails.medium.url}
                    alt=""
                    className="videoScreen__image"
                  />
                  <p className="videoScreen_title">{video.snippet.title}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default VideoScreen;
