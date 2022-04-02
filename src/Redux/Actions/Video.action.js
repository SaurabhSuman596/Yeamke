import {
  HOME_VIDEO_FAIL,
  HOME_VIDEO_REQUEST,
  HOME_VIDEO_SUCCESS,
  RELATED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS,
  SEARCH_VIDEO_FAIL,
} from "../ActionType";
import request from "../../api";

export const getPopularVideo = () => async (dispatch) => {
  try {
    dispatch({
      type: HOME_VIDEO_REQUEST,
    });
    const { data } = await request.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken: "",
      },
    });

    dispatch({
      type: HOME_VIDEO_SUCCESS,
      payload: {
        videos: data.items,
        nextPageTocken: data.nextPageToken,
        category: "all",
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

// this for specific keyword

export const getKeywordVideo = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEO_REQUEST,
    });
    const { data } = await request.get("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        pageToken: getState().homeVideo.nextPageToken,
        q: keyword,
        type: "video",
      },
    });

    dispatch({
      type: HOME_VIDEO_SUCCESS,
      payload: {
        videos: data.items,
        nextPageTocken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

// this is for the related video

export const getRelatedVideo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RELATED_VIDEO_REQUEST,
    });
    const { data } = await request.get("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        type: "video",
        relatedToVideoId: id,
      },
    });

    dispatch({
      type: RELATED_VIDEO_SUCCESS,
      payload: {
        videos: data.items,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: RELATED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

// search
export const getSearchVideo = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SEARCH_VIDEO_REQUEST,
    });
    const { data } = await request.get("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        q: keyword,
        type: "video",
      },
    });

    dispatch({
      type: SEARCH_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SEARCH_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

// dispatch({
//   type: RELATED_VIDEO_SUCCESS,
//   payload: {
//     videos: data.items,
//   },
// });
// } catch (error) {
// console.log(error.message);
