// import type { ApiClient } from './httpClient';
// import type { GetState } from '../../container/types';

// const apiClients: Record<string, ApiClient> = {};



// // const isGetState = (getStateOrSelectedServer: GetState | ServerWithId): getStateOrSelectedServer is GetState =>
// //   typeof getStateOrSelectedServer === 'function';
// // const getSelectedServerFromState = (getState: GetState): ServerWithId => {
// //   const { selectedServer } = getState();
// //   if (!hasServerData(selectedServer)) {
// //     throw new Error('There\'s no selected server or it is not found');
// //   }

// //   return selectedServer;
// // };

// export const buildApiClient = (httpClient: ApiClient) => (getStateOrSelectedServer: GetState | ServerWithId) => {
//   const { url: baseUrl, apiKey } = isGetState(getStateOrSelectedServer)
//     ? getSelectedServerFromState(getStateOrSelectedServer)
//     : getStateOrSelectedServer;
//   const serverKey = `${apiKey}_${baseUrl}`;

//   const apiClient = apiClients[serverKey] ?? new ShlinkApiClient(httpClient, { apiKey, baseUrl });
//   apiClients[serverKey] = apiClient;

//   return apiClient;
// };

// export type ShlinkApiClientBuilder = ReturnType<typeof buildApiClient>;
