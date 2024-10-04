import axios from 'axios';
import { MASTODON_URL } from '../mastodon-url';

export async function fetch<T>(endpoint: string): Promise<T | undefined> {
    try {
        const res = await axios.get<T>(`${MASTODON_URL}${endpoint}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

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
        if (item) {
            return JSON.parse(item);
        }
        return undefined;
    }

    set<T>(key: string, value: T): T {
        this.setItem(key, JSON.stringify(value));
        return value;
    }
}

export const localStorage = new ExtendedStorage(window.localStorage);

export default async function fetchWithCache<T>(endpoint: string): Promise<T | undefined> {
    try {
        // Check localStorage for cached response
        if (localStorage.containsKey(endpoint)) {
            return localStorage.get<T>(endpoint);
        }
        const res = await fetch<T>(endpoint);
        localStorage.set(endpoint, res);
        return res;
    } catch (err) {
        console.log(err);
    }
}