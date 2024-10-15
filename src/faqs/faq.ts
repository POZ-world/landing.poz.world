/*
 * faq.ts
 *     Created: 2024-09-24T00:06:30-04:00
 *    Modified: 2024-09-24T00:06:30-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */

import { AddressableResource } from "@/types/addressable-resource";
import { Constructable, Constructor } from "@/types/constructor";
import { marked } from "marked";

export type ApiFAQJson = {
  number: number;
  id: number;
  question: string;
  answer: string;
};

export type FAQ = AddressableResource &
  ApiFAQJson & {
    answerHtml: string;
  };

export function FAQ({ number, id, question, answer }: ApiFAQJson): FAQ {
  return {
    number,
    id,
    question,
    answer,
    answerHtml: marked(answer) as string,
    uri: `/api/v1/instance/faqs/${id}`,
  };
}

// type FAQsConstructor<FAQs> = Constructor<FAQs>;
interface FAQsConstructor extends Constructor<FAQs, FAQ[]> {}

export type FAQs = AddressableResource & Array<FAQ> & FAQsConstructor;

class FAQsImpl
  extends Array<FAQ>
  implements AddressableResource//, FAQsConstructor
{
  uri: string = "/api/v1/instance/faqs";
}

export const FAQs = (...faqs: FAQ[]): FAQs => new FAQsImpl(...faqs);

// export const FAQs: FAQsType = {
//   new(...faqs: FAQ[]):FAQsType {
//     let faqsImpl = Object.assign(faqs, {
//       uri: "/api/v1/instance/faqs",
//     }) as FAQsType;
//     return faqsImpl;
//   },
// };
