/* 
 * landing-directory.ts
 *     Created: 2024-09-25T10:22:04-04:00
 *    Modified: 2024-09-25T10:22:04-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */
import type { Account } from "@poz-world/poz.world/mastodon/models/account";;
import type { AddressableResource } from "@/types/addressable-resource";
import { Constructor } from "@/types/constructor";

export type LandingDirectory = Array<Account> & AddressableResource;

export class LandingDirectoryImpl
  extends Array<Account>
  implements AddressableResource, LandingDirectory, Constructor<LandingDirectory>
{
  uri: "/api/v1/instance/landing-directory";

  constructor(...accounts: Account[]) {
    super(...accounts);
  }
}

export function createLandingDirectory(
  ...accounts: Account[]
): LandingDirectory {
  return new LandingDirectoryImpl(...accounts);
}

export const initialState: LandingDirectory = createLandingDirectory();