/* 
 * rule.ts
 *     Created: 2024-09-24T00:40:45-04:00
 *    Modified: 2024-09-24T00:40:45-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */

export type Rule = {
    id: number;
    text: string;
    hint: string;
};

export type Rules = Rule[];