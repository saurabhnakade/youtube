// const GOOGLE_API_KEY=process.env.REACT_APP_GOOGLE_API_KEY;
const GOOGLE_API_KEY="AIzaSyBFHaiDcvGFwEQirXQ1mK3VmF6sRvP0P7M";

const corsProxy="https://corsproxy.io/?";

export const YOUTUBE_SUGGESTION_API=corsProxy+"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEOS_API=(noOfVideos)=>{
    return corsProxy+"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults="+noOfVideos+"&regionCode=IN&key="+GOOGLE_API_KEY;
}
export const YOUTUBE_SEARCH_RESULTS=(s)=>{
    return corsProxy+"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+s+"&key="+GOOGLE_API_KEY
}
export const YOUTUBE_VIDEO_COMMENTS=(s)=>{
    return corsProxy+"https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=14&videoId="+s+"&key="+GOOGLE_API_KEY
}

export const YOUTUBE_RELATED_VIDEOS_TO_VIDEO_ID=(v)=>{
    return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&relatedToVideoId=${v}&type=video&key=${GOOGLE_API_KEY}`
}