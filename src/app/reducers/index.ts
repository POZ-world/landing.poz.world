import { combineReducers } from "@reduxjs/toolkit";
import type { IContainer } from "bottlejs";
import { appUpdatesReducer } from "./appUpdates";

export const initReducers = (container: IContainer) =>
  combineReducers({
    appUpdated: appUpdatesReducer,
  });