import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/video/videoSlice";
import videosReducer from "../features/videos/videosSlice";
import relatedVideosReducer from "../features/relatedVideos/relatedVideosSlice";
import tagsReducer from "../features/tags/tagsSlice";
import filterReducer from "../features/filter/filterSlice";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = configureStore({
  reducer: {
    video: videoReducer,
    videos: videosReducer,
    relatedVideos: relatedVideosReducer,
    tags: tagsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});
