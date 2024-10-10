// import { configureStore } from '@reduxjs/toolkit';
// import type { IContainer } from 'bottlejs';
// import type { RLSOptions } from 'redux-localstorage-simple';
// import { load, save } from 'redux-localstorage-simple';
// import { initReducers } from '../reducers';
// import { migrateDeprecatedSettings } from '../settings/helpers';
// import type { ShlinkState } from './types';

// const isProduction = process.env.NODE_ENV === 'production';
// const localStorageConfig: RLSOptions = {
//   states: ['settings', 'servers'],
//   namespace: 'shlink',
//   namespaceSeparator: '.',
//   debounce: 300,
// };
// const preloadedState = migrateDeprecatedSettings(load(localStorageConfig) as ShlinkState);

// export const setUpStore = (container: IContainer) => configureStore({
//   devTools: !isProduction,
//   reducer: initReducers(container),
//   preloadedState,
//   middleware: (defaultMiddlewaresIncludingReduxThunk) =>
//     defaultMiddlewaresIncludingReduxThunk({ immutableCheck: false, serializableCheck: false }) // State is too big for these
//       .concat(save(localStorageConfig)),
// });
// 