import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
//import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
//import jack from '../../assets/jack.png'
//import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'


const PlayVideo = ({ videoId }) => {

    
    
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const[commentData, setCommentData] = useState([]);

    const fetchOtherData = async () => {
        // Fetching Channel Data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url).then(response => response.json()).then(data => setChannelData(data.items[0]));

        // Fertching Comment Data
        const comment_url  = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        await fetch(comment_url).then(response => response.json()).then(data =>setCommentData(data.items)); 
    }

    useEffect(() => {
        // Fetch Videos Data
        const fetchVideoData = async () => {
            const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
            await fetch(videoDetails_url).then(response => response.json()).then(data => setApiData(data.items[0]));
        };
        fetchVideoData();
    }, [videoId])

    useEffect(() => {
        fetchOtherData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiData])


   return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay muted></video> */}
    <iframe 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        style={{ border: 'none' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
    ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>{apiData ? value_converter(apiData.statistics.viewCount): "16k"} Views &bull;  {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "Loading..."}</p>
        <div>
            <span><img src={like} alt="" />{apiData? value_converter(apiData.statistics.likeCount): 155}</span>
            <span><img src={dislike} alt="" /></span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr/>
      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="Loading..." />
        <div>
            <p>{apiData? apiData.snippet.channelTitle:""}</p>
            <span>{channelData?value_converter(channelData.statistics.subscriberCount): "1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData? apiData.snippet.description.slice(0, 250): "Description Here"}</p>
        <hr/>
        <h4>{apiData? value_converter(apiData.statistics.commentCount): 102} Comments</h4>


        {commentData.map((item, index) => {
            return(
                <div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="Loading..." />
            <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                    <img src={like} alt="Loading..." />
                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
            )
        })}
        
      </div>
    </div>
  )
}

export default PlayVideo;
