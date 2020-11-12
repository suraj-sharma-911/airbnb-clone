import React from 'react';
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import { Button } from "@material-ui/core";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_info">
                <p>62 stays · 25 november to 30 november · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined"> 
                    Type of place
                </Button>
                <Button variant="outlined"> 
                    Price
                </Button>
                <Button variant="outlined"> 
                    Rooms and beds
                </Button>
                <Button variant="outlined"> 
                    More filters
                </Button>
            </div>
            <SearchResult/>
        </div>
    )
}

export default SearchPage
