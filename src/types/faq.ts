/*
 * faq.ts
 *     Created: 2024-09-24T00:06:30-04:00
 *    Modified: 2024-09-24T00:06:30-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */

import { AddressableResource } from "./addressable-resource";

export class Faq implements AddressableResource {
  number!: number;
  id!: number;
  question!: string;
  answer!: string;
  get uri(): string {
    return `/api/vnext/faqs/${this.id}`;
  }
}

export type Faqs = Array<Faq> & {
  uri: "/api/v1/instance/faqs";
} & AddressableResource;
