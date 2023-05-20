import react from "react";
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'
import img5 from '../../../assets/img5.jpg'
import img6 from '../../../assets/img6.jpg'

const Gallery =()=>{
    return(
        <div className="mt-8">
            <h2 className="text-5xl text-center mb-5">Gallery Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-16">
                <div className="mb-5">
                <img src={img1} className="w-96"></img>
                <img src={img2} className="w-96 mt-3 h-80"></img>
                </div>
            <div className="mb-2">
            <img src={img3} className="w-96"></img>
            <img src={img4} className="w-96 mt-3 h-80"></img>

            </div>
            <div>
            <img src={img5} className="w-96"></img>
            <img src={img6} className="w-96 mt-3 h-80"></img>
            </div>
            </div>
        </div>
    );
};

export default Gallery;