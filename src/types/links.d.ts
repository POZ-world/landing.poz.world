/* 
 * links.ts
 *     Created: 2024-09-27T22:50:21-04:00
 *    Modified: 2024-09-27T22:50:22-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */

export type Links = Link[];
export type Link = { url: string, description?: string, label: string, target?: string, className?: string };
