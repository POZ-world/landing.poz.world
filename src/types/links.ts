/* 
 * links.ts
 *     Created: 2024-09-27T22:50:21-04:00
 *    Modified: 2024-09-27T22:50:22-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */

export type Links = LinkArray;
export type Action = { (): any };
export type Link = { action: string|Action, description?: string, label: string, target?: LinkTarget, className?: string, method?: HttpMethod };
export type LinkButton = Link & { action: { (): any } }
export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export class LinkArray extends Array<Link> {
    public hash(): string {
        return this.map(link => link.action).join('');
    }

    static fromArray(links: Link[]): LinkArray {
        return new LinkArray(...links);
    }
}
