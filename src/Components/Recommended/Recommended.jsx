
import React, { useEffect, useState } from 'react';
import './Recommended.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId || '1'}&key=${API_KEY}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const data = await response.json();
      setApiData(data.items || []);
    } catch (err) {
      console.error("API Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, [categoryId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!apiData.length) return <div>No videos found</div>;

  return (
    <div className='recommended'>
      {apiData.map((item) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={item.id} className="side-video-list">
          <img 
            src={item.snippet?.thumbnails?.default?.url || thumbnail1} 
            alt={item.snippet?.title || 'Video thumbnail'} 
          />
          <div className="vid-info">
            <h4>{item.snippet?.title || 'Untitled Video'}</h4>
            <p>{item.snippet?.channelTitle || 'Unknown Channel'}</p>
            <p>{value_converter(item.statistics?.viewCount) || 'N/A'} views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;