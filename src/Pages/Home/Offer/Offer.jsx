import offer from '../../../assets/offer.jpg'


const Offer = ()=>{
    return(
        <div className='flex bg-green-200 mb-6'>
<div>
    <h2 className='text-4xl p-8 mt-16 ml-8 text-cyan-500 font-bold'>Register now and get 30% off from any toy!</h2>

    <h1 className='text-xl mt-8 ml-6 text-cyan-500'>Limited Offer</h1>
</div>

<div>
    <img src={offer} className='w-3/4 ml-60 p-5'></img>
</div>
        </div>
    );
};

export default Offer;