const GOOGLE_API_KEY="AIzaSyCpIq7XdLXc0xKwAPSvAhthOuP3PKBBCDM";

export const YOUTUBE_SUGGESTION_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEOS_API=(noOfVideos)=>{
    return "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults="+noOfVideos+"&regionCode=IN&key="+GOOGLE_API_KEY;
}
export const YOUTUBE_SEARCH_RESULTS=(s)=>{
    return "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+s+"&key="+GOOGLE_API_KEY
}
export const YOUTUBE_VIDEO_COMMENTS=(s)=>{
    return "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId="+s+"&key="+GOOGLE_API_KEY
}