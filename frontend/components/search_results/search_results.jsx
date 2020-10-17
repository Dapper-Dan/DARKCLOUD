import React from 'react';
import UserNavBarContainer from '../nav_bar/user_nav_bar_container';
import { NavLink } from 'react-router-dom';
import SearchBarContainer from '../search_bar/search_bar_container'
import SongPartContainer from '../song/song_part_container'
import Carousel from 'react-bootstrap/Carousel';


export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        
          
          
        };

        this.props.fetchUsers()
        this.props.getBunchSongs()

        
        
        
    }

    render() {
        
        let songs = Object.values(this.props.songs);
        let users = Object.values(this.props.users);

       
        // const filteredOptions = songs.filter(
        //     songItem => {
        //         let songName = songItem.title.toLowerCase()
        //         return songName.indexOf(searchInput.toLowerCase()) > -1
        //     }).concat(users.filter(
        //         userItem => {
        //             let userName = userItem.display_name.toLowerCase()
        //             return userName.indexOf(searchInput.toLowerCase()) > -1
        //         }
        //     ))
            

        return (
        <>
            <div className="nav_bar_background" ></div>
            <div className="nav-con"  >
                <UserNavBarContainer />
                <SearchBarContainer/>
            </div>
            
            <div className="outtermost" >
                <div className="searchHeader"> some stuff</div>

                <div className="mainSearchSplit">

                    <div className="searchLeftSideBar"></div>
                    <div className="searchResultsMain"></div>

                </div>

            

            </div>
        </>

        )
    }


}
