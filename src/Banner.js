import React from 'react';
import {useState} from 'react';
import { Button } from '@material-ui/core';
import Search from './Search';

import "./Banner.css"
function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search/>}


                <Button onClick={() => setShowSearch(!showSearch)}
                className="banner_searchbtn"
                variant="outlined">{showSearch ? "Hide" : "Search Dates"}</Button>
            </div>
            <div className="banner_info">
                <h1>Never think twice 
                to explore beautiful things</h1>
                <h5>
                    Plan a different kind of gateway to
                    uncover the hidden gems near you.
                </h5>
                <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}
export default Banner
