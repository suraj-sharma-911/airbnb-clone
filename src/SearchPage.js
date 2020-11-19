import React from 'react';
import "./SearchPage.css";
import SearchResult from './SearchResult'
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
            <SearchResult
                image = "https://a0.muscache.com/im/pictures/6f4455fd-684e-47bd-87fb-fe89a9fb98b4.jpg?im_w=960"
                location = "Deenaty, Tamil Nadu, India"
                title = "Farm-to-Table Relaxing 2 BR Estate House"
                description = "8 guests · 2 bedrooms · 2 beds · 3 bathrooms "
                star ="4.56"
                price = "₹2,589/ night"
                total = "₹53,749 total"
            />
            <SearchResult
                image = "https://a0.muscache.com/im/pictures/6f4455fd-684e-47bd-87fb-fe89a9fb98b4.jpg?im_w=960"
                location = "Deenaty, Tamil Nadu, India"
                title = "Farm-to-Table Relaxing 2 BR Estate House"
                description = "8 guests · 2 bedrooms · 2 beds · 3 bathrooms "
                star ="4.56"
                price = "₹2,589/ night"
                total = "₹53,749 total"
            />
            <SearchResult
                image = "https://a0.muscache.com/im/pictures/6f4455fd-684e-47bd-87fb-fe89a9fb98b4.jpg?im_w=960"
                location = "Deenaty, Tamil Nadu, India"
                title = "Farm-to-Table Relaxing 2 BR Estate House"
                description = "8 guests · 2 bedrooms · 2 beds · 3 bathrooms "
                star ="4.56"
                price = "₹2,589/ night"
                total = "₹53,749 total"
            />
        </div>
    )
}

export default SearchPage;