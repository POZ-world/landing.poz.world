/* 
 * rule.ts
 *     Created: 2024-09-24T00:40:45-04:00
 *    Modified: 2024-09-24T00:40:45-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */

import { AddressableResource } from "./addressable-resource";

export class Rule implements AddressableResource {
  id!: number;
  text!: string;
  hint!: string;
  get uri(): string { return `/admin/rules/${this.id}`; }
}

export type Rules = Array<Rule> & {
  uri: "/api/v1/instance/rules";
} & AddressableResource; 
