import axios from 'axios';

const KEY = 'AIzaSyA3LXB_w3fRqfq0JoonLJRVBqAfmUWu8dk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})