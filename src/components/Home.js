import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {




    const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
    const productList = [
        {
            name:'Mac Book',  // its a object
            price:120000,
            imgSrc:img1,
            id:"dfasdafsdfadfa",
        },
        {
            name:"Black Shoes",
            price:490,
            imgSrc:img2,
            id:"sadfadaf",
        }
    ]


    const dispatch = useDispatch();

    


    const addToCartHandler= (options) => {
       console.log(options)
       toast.success("Added To Cart")
       dispatch({
        type:"addToCart",
        payload:options
       })

}


  return (
    <div className='home'>
    {productList.map((i)=>(
        <ProductCard key={i.id} name={i.name} price={i.price} imgSrc={i.imgSrc} id={i.id} handler={addToCartHandler} />
    ))}
    </div>
  )
}
const ProductCard =({name,price,handler,imgSrc,id})=>(
    <div className='productCard'>
        <img src={imgSrc}  />
        <p>{name}</p>
        <h4>{`$${price}`}</h4>
        <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add to cart</button>
    </div>

)



export default Home