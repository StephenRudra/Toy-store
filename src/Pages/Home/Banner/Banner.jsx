import kid from '../../../assets/kid.jpg'
import b2 from '../../../assets/b2.jpg'

const Banner =()=>{
    return(
        <div className='flex lg:flex-row mt-5 mb-32'>
            <div className='ml-5 mr-5 w-1/2 relative lg:w-1/2'>
            <img src={kid} className="w-4/6 rounded-lg shadow-2xl ml-16 md:flex-col-1" />
            <img src={b2} className="w-3/6 rounded-lg shadow-2xl absolute left-60 top-1/2 md:flex-col-1" />
    
            </div>
            <div className='mt-28'>
                <h1 className='text-4xl'>Get construction toys here at a reasonable price</h1>
                <h2 className='text-4xl mt-5'>Make your child's moments enjoyable!!</h2>
            </div>
            

        </div>
    );
};

export default Banner;


