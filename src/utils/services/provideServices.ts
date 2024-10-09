import { useTimeoutToggle } from '@shlinkio/shlink-frontend-kit';
import type Bottle from 'bottlejs';
import { LocalStorage } from './LocalStorage';

export const provideServices = (bottle: Bottle) => {
  bottle.constant('localStorage', window.localStorage);
  bottle.service('Storage', LocalStorage, 'localStorage');

  bottle.serviceFactory('useTimeoutToggle', () => useTimeoutToggle);
};
