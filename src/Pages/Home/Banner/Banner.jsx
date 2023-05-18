import kid from '../../../assets/kid.jpg'
import b2 from '../../../assets/b2.jpg'

const Banner =()=>{
    return(
        <div className='flex lg:flex-row mt-5 mb-32'>
            <div className='ml-5 mr-5 w-1/2 relative lg:w-1/2'>
            <img src={kid} className="w-4/6 rounded-lg shadow-2xl ml-16 md:flex-col-1" />
            <img src={b2} className="w-3/6 rounded-lg shadow-2xl absolute left-60 top-1/2 md:flex-col-1" />
    
            </div>
            <div className='mt-8'>
                <h1 className='text-4xl'>Get construction toys here at a reasonable price</h1>
                <h2 className='text-4xl'>Make your child's moments enjoyable!!</h2>
            </div>
            

        </div>
    );
};

export default Banner;

{/*
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='relative'>
    <img src={b2} className="w-3/4 rounded-lg shadow-2xl absolute left-24 top-1/2" />
    <img src={kid} className="rounded-lg shadow-2xl" />
    </div>
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>*/}