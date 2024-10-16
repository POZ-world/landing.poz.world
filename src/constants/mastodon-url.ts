/* 
 * mastodon-url.ts
 *     Created: 2024-09-25T14:25:48-04:00
 *    Modified: 2024-09-25T14:25:48-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */

/**
 * The URL for the Mastodon instance, sourced from the environment variable `REACT_APP_MASTODON_URL`.
 * 
 * @constant {string} MASTODON_URL
 */
const MASTODON_URL = process.env.REACT_APP_MASTODON_URL;

export default MASTODON_URL;

console.log(`MASTODON_URL: ${MASTODON_URL}`);