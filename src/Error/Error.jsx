import error from '../assets/error.jpg'

const Error = ()=>{
    return(
        <div className='text-center'>
        <img src={error} className='w-3/4 ml-36 mt-5'></img>
        <div>
        <h2 className='mb-5 font-bold text-4xl'>Your ship might have lost the way! </h2>
        </div>
        </div>
        
    );
};

export default Error;