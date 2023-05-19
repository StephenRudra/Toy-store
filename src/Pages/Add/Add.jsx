const Add = ()=>{
  const handleAdd= event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const subCategory = form.category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const seller = form.sellar.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const details = form.details.value;

    const toys = {name, subCategory, price, quantity, seller, rating, photo, details};
    console.log(toys)

    fetch('http://localhost:5000/toys',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(toys)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId){
       alert('Toy added!')
      }
      
    })
  }
    return(

        <div>
            <h2 className="text-5xl text-center mt-5">Add Toy</h2>
          <form onSubmit={handleAdd}>
          <div className="bg-red-200 p-20 ml-10 mr-10 mb-10 mt-10">
           <div className="grid grid-cols-2 gap-5">
       <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl">Toy Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl">Sub-category</span>
          </label>
          <input type="text" placeholder="Category" name="category" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl">Price</span>
          </label>
          <input type="text" placeholder="price" name="price" className="input input-bordered" />
        </div>
         </div>

        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl">Quantity</span>
          </label>
          <input type="text" placeholder="quantity" name="quantity" className="input input-bordered" />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl">Sellar</span>
          </label>
          <input type="text" placeholder="sellar" name="sellar" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl">Rating</span>
          </label>
          <input type="text" placeholder="rating" name="rating" className="input input-bordered" />
        </div>
        </div>
      </div>
      <div className="form-control ml-20 mr-20">
          <label className="label">
            <span className="label-text text-2xl">Photo URL</span>
          </label>
          <input type="text" placeholder="url" name="photo" className="input input-bordered" />
        </div>
        <div className="form-control ml-20 mr-20">
          <label className="label">
            <span className="label-text text-2xl">Details</span>
          </label>
          <input type="text" placeholder="details" name="details" className="input input-bordered" />
        </div>
        <div className="form-control mt-6 ml-20 mr-20">
          <input type="submit" value='Add' className="btn btn-primary"></input>
        </div>
           </div>
           
          </form>
        </div>
    );
};

export default Add;