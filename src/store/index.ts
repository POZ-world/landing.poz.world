import type { RLSOptions } from "redux-localstorage-simple";
import {
  Account,
  Rule,
  FAQ,
  TermsOfService,
  PrivacyPolicy,
  ProfileFields,
  LandingDirectory,
} from "../types";
import { IContainer } from "bottlejs";
import { configureStore } from "@reduxjs/toolkit";
import { load, save } from "redux-localstorage-simple";
import { initReducers } from "src/app/reducers";

export type AppState = {
  currentUser?: Account;
  rules?: Rule[];
  faqs?: FAQ[];
  termsOfService?: TermsOfService;
  privacyPolicy?: PrivacyPolicy;
  profileFields?: ProfileFields;
  landingDirectory?: LandingDirectory;
  appUpdated: boolean;
};

const localStorageConfig: RLSOptions = {
  states: ["currentUser", "rules", "faqs", "tos", "privacy", "fields", "landing", "appUpdated"],
  namespace: "poz.world",
  namespaceSeparator: "/",
  debounce: 300,
};

const preloadedState = load(localStorageConfig) as AppState;

export const setUpStore = (container: IContainer) =>
  configureStore({
    devTools: false,
    reducer: initReducers(container), // Assuming initReducers is a function that takes container as an argument
    preloadedState,
  });