/* 
 * privacy-policy.ts
 *     Created: 2024-09-24T05:34:39-04:00
 *    Modified: 2024-09-24T05:34:39-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */ 
import { Setting } from './setting';

/**
 * Represents the privacy policy settings for the site.
 * 
 * @type {PrivacyPolicy}
 * @extends Setting
 * 
 * @property {string} src - The API endpoint for the site's privacy policy settings.
 */
export type PrivacyPolicy = Setting & {
    src: '/api/vnext/settings/site_privacy_policy';
}

/**
 * Represents an extended description setting that includes additional properties from the Setting type.
 * 
 * @type {ExtendedDescription}
 * @extends {Setting} 
 * @extends {AddressableResource}
 * 
 * @property {string} src - The source URL for the site extended description setting.
 */
export type ExtendedDescription = Setting & {
    uri: '/api/vnext/settings/site_extended_description';
} & AddressableResource;

/**
 * Represents a description setting for the site.
 * 
 * This type extends the `Setting` type and includes an additional `src` property
 * that points to the API endpoint for the site description.
 * 
 * @type {Description}
 * 
 * @property {string} src - The API endpoint for the site description.
 * 
 * @extends {Setting}
 * @extends {AddressableResource}
 */
export type Description = Setting & {
  uri: "/api/vnext/settings/site_description";
} & AddressableResource;

/**
 * Represents the Terms of Service settings.
 * 
 * This type extends the `Setting` type and includes an additional property `src`.
 * The `src` property is a string that points to the API endpoint for site terms.
 * 
 * @type {TermsOfService}
 * @extends {Setting}
 * @extends {AddressableResource}
 * @property {string} src - The API endpoint for site terms.
 */
export type TermsOfService = Setting & {
  uri: "/api/vnext/settings/site_terms";
} & AddressableResource;