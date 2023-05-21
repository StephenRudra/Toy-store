import john from '../../../assets/john.jpg'
import mary from '../../../assets/mary.jpg'



const Review = ()=>{
    return(
        
        <div className="flex m-10 mb-10 gap-6 ml-28">
            
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={john} className='w-3/4'/></figure>
  <div className="card-body">
    <h2 className="card-title">John Doe</h2>
    <p>I am really happy that a site like this exists. Their toys are very good and legit. Price is really reasonable.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={mary} className='w-3/4'/></figure>
  <div className="card-body">
    <h2 className="card-title">Mary Smith</h2>
    <p>I like this site. My son loves their toys and I am also satisfied. So I will tell you to buy from this site.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Review;