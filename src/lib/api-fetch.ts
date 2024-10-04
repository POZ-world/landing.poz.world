import axios from 'axios';
import { MASTODON_URL } from '../mastodon-url';
import { localStorage } from './extended-storage';

export async function fetch<T>(endpoint: string): Promise<T | undefined> {
    try {
        const res = await axios.get<T>(`${MASTODON_URL}${endpoint}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

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