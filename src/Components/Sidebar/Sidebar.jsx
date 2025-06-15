import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import Ashis from '../../assets/Ashis.png'
import Striver from '../../assets/Striver.png'
import CodewithHarry from '../../assets/CodewithHarry.png'
import Messi from '../../assets/Messi.png'
import Arijit from '../../assets/Arijit.png'
import INDIA_TV from '../../assets/INDIA_TV.png'

const Sidebar = ({sidebar, category: selectedCategory, setCategory}) => {
    return (
        <>
            <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
                <div className="shortcut-links">
                    <div className={`side-link ${selectedCategory === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
                        <img src={home} alt="" /><p>Home</p>
                    </div>
                    <div className={`side-link ${selectedCategory === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
                        <img src={game_icon} alt="" /><p>Gaming</p>
                    </div>
                    <div className={`side-link ${selectedCategory === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
                        <img src={automobiles} alt="" /><p>Automobiles</p>
                    </div>
                    <div className={`side-link ${selectedCategory === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
                        <img src={sports} alt="" /><p>Sports</p>
                    </div>
                    <div className={`side-link ${selectedCategory === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
                        <img src={entertainment} alt="" /><p>Entertainment</p>
                    </div>
                    <div className={`side-link ${selectedCategory === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
                        <img src={tech} alt="" /><p>Technology</p>
                    </div>
                    <div className={`side-link ${selectedCategory === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
                        <img src={music} alt="" /><p>Music</p>
                    </div>
                    <div className={`side-link ${selectedCategory === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
                        <img src={blogs} alt="" /><p>Blogs</p>
                    </div>
                    <div className={`side-link ${selectedCategory === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
                        <img src={news} alt="" /><p>News</p>
                    </div>
                    <hr />
                </div>
                <div className="subscribed-list">
                    <h3>Subscribed</h3>
                    <div className="side-link">
                        <img src={Ashis} alt="" /><p>Ashis Shaw</p>
                    </div>
                    <div className="side-link">
                        <img src={Striver} alt="" /><p>Striver</p>
                    </div>
                    <div className="side-link">
                        <img src={CodewithHarry} alt="" /><p>CodewithHarry</p>
                    </div>
                    <div className="side-link">
                        <img src={Messi} alt="" /><p>Lionel Messi</p>
                    </div>
                    <div className="side-link">
                        <img src={Arijit} alt="" /><p>Arijit Singh</p>
                    </div>
                    <div className="side-link">
                        <img src={INDIA_TV} alt="" /><p>INDIA TV</p>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Sidebar