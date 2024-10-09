/* 
 * fields.ts
 *     Created: 2024-09-18T05:25:52-04:00
 *    Modified: 2024-09-18T05:25:52-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */

import { apiRequestGet } from '../api';
import { Account } from '@poz-world/poz.world/mastodon/models/account';
import { ApiProfileFieldJSON, createProfileField, ProfileFields } from '../types/profile-fields';
import { createAccountFromServerJSON } from '@poz-world/poz.world/mastodon/models/account';
import { ApiAccountJSON } from '@poz-world/poz.world/mastodon/api_types/accounts';
import fetch from '../lib/api-fetch';
export const apiGetFieldTemplates = async () =>
{
  let fieldTemplates = (await fetch<ProfileFields>(
    "/api/vnext/fields/templates.json",
    {} as ProfileFields
  )) as ApiProfileFieldJSON[];
  return (fieldTemplates.map(createProfileField)) as ProfileFields;
}

export const apiGetAccount = async (id: string) =>
  (await apiRequestGet<ApiAccountJSON[]>(`v1/accounts/${id}`, {})).map(createAccountFromServerJSON).pop();

export async function apiGetCurrentUserAccount(): Promise<Account> {
  return (await apiGetAccount(window.currentlyLoggedInUserId || '')) as Account;
}

declare global {
  interface Window {
    currentlyLoggedInUserId: string;
  }
}