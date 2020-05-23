import axios from 'axios';

const KEY = 'AIzaSyDor48YTTzAJce6sGtxTV2qZlXCy4p7F4k';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});