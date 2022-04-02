import {
  HOME_VIDEO_FAIL,
  HOME_VIDEO_REQUEST,
  HOME_VIDEO_SUCCESS,
  RELATED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  SEARCH_VIDEO_FAIL,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS,
} from "../ActionType";

export const homeVideoReducer = (
  state = {
    videos: [],
    loading: true,
    nextPageToken: null,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VIDEO_SUCCESS:
      return {
        ...state,
        videos: payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };
    case HOME_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case HOME_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export const relatedVideoReducer = (
  state = {
    videos: [],
    loading: true,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case RELATED_VIDEO_SUCCESS:
      return {
        ...state,
        videos: payload.videos,
        loading: false,
      };
    case RELATED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case RELATED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export const searchdVideoReducer = (
  state = {
    videos: [],
    loading: true,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case SEARCH_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SEARCH_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
