import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter }  from '../../data'
import moment from 'moment';
/* eslint-disable no-unused-vars */

const Feed = ({category}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
            await fetch(videoList_url)
                .then(response => response.json())
                .then(data => setData(data.items));
        };
        fetchData();
    }, [category]);
    

  return (
    <div className='feed'>
        {data.map((item, index) => {
            // First, import moment at the top of your file:
            // import moment from 'moment';

            return (
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className='card' key={item.id}>
                    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                    <h3>{item.snippet.title}</h3>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
            )
        })}
        
        
    </div>
  );
};

export default Feed;


