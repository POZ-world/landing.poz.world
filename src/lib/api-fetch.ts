import axios from 'axios';
import { MASTODON_URL } from '../mastodon-url';

export default async function fetch<T>(endpoint: string): Promise<T | undefined> {
    try {
        const res = await axios.get<T>(`${MASTODON_URL}${endpoint}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}