/* 
 * state-tuple.ts
 *     Created: 2024-09-27T12:21:27-04:00
 *    Modified: 2024-09-27T12:21:27-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */
import { Dispatch, SetStateAction } from "react";

export type StateTuple<T> = [T, Dispatch<SetStateAction<T>>];