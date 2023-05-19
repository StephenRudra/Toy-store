import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Tabs from "../Tab/Tab";
import { useEffect, useState } from "react";


const Home = ()=>{
  
    
    return(
        <div>
            
            <Banner></Banner>
            <Tabs></Tabs>
            
        </div>
    );
};

export default Home;