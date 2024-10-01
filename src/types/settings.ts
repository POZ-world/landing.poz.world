/* 
 * privacy-policy.ts
 *     Created: 2024-09-24T05:34:39-04:00
 *    Modified: 2024-09-24T05:34:39-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */ 
import { Setting } from './setting';

export type PrivacyPolicy = Setting & {
    src: '/api/vnext/settings/site_privacy_policy';
}

export type ExtendedDescription = Setting & {
    src: '/api/vnext/settings/site_extended_description';
}

export type Description = Setting & {
    src: '/api/vnext/settings/site_description';
}

export type TermsOfService = Setting & {
    src: '/api/vnext/settings/site_terms';
}