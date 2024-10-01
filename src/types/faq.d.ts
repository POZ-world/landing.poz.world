/* 
 * faq.ts
 *     Created: 2024-09-24T00:06:30-04:00
 *    Modified: 2024-09-24T00:06:30-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */

export type Faq = {
    number: number;
    id: number;
    question: string;
    answer: string;
};

export type Faqs = Faq[];   