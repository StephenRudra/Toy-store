import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Tabs from "../Tab/Tab";
import { useEffect, useState } from "react";
import Gallery from "../Gallery/Gallery";
import Offer from "../Offer/Offer";
import Review from "../Review/Review";


const Home = ()=>{
  
    
    return(
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <Tabs></Tabs>
            <Offer></Offer>
            <Review></Review>
            
        </div>
    );
};

export default Home;