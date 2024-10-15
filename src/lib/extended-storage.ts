/* 
 * extended-storage.ts
 *     Created: 2024-10-04T06:10:54-04:00
 *    Modified: 2024-10-04T06:10:55-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */


class ExtendedStorage implements Storage {
    private storage: Storage;

    constructor(storage: Storage) {
        this.storage = storage;
    }

    get length(): number { return this.storage.length; }

    clear(): void {
        this.storage.clear();
    }
    getItem(key: string): string | null {
        return this.storage.getItem(key);
    }
    key(index: number): string | null {
        return this.storage.key(index);
    }
    removeItem(key: string): void {
        return this.storage.removeItem(key);
    }
    setItem(key: string, value: string): void {
        this.storage.setItem(key, value);
    }

    // Custom methods
    containsKey(key: string): boolean {
        return this.getItem(key) !== null;
    }

    getKeys(): string[] {
        const keys: string[] = [];
        for (let i = 0; i < this.length; i++) {
            keys.push(this.key(i)!);
        }
        return keys;
    }

    getValues(): string[] {
        const values: string[] = [];
        for (let i = 0; i < this.length; i++) {
            values.push(this.getItem(this.key(i)!)!);
        }
        return values;
    }

    get keys(): string[] { return this.getKeys(); }
    get values(): string[] { return this.getValues(); }

    get<T>(key: string): T | undefined {
        const item = this.getItem(key);
        if (item !== null) {
            return JSON.parse(item) as T;
        }
        return undefined;
    }

    set<T>(key: string, value: T): T {
        this.setItem(key, JSON.stringify(value));
        return value;
    }
}

export const localStorage = new ExtendedStorage(window.localStorage);