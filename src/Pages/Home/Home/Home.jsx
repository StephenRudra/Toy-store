import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Tabs from "../Tab/Tab";
import { useEffect, useState } from "react";
import Gallery from "../Gallery/Gallery";


const Home = ()=>{
  
    
    return(
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <Tabs></Tabs>
            
        </div>
    );
};

export default Home;