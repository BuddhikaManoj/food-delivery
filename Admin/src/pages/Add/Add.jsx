import React, { useEffect, useState } from 'react'
import './Add.css'
import { IoCloudUploadOutline } from "react-icons/io5";
import axios from "axios"
import { toast } from 'react-toastify';

const Add = ({url}) => {
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Noodles"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
        console.log(name,value);
        
    }
    

    const onSubmitHandler = async (event)=> {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)

        const response = await axios.post(`${url}/api/foods/add`,formData);
        if (response.data.success) {
            setData({
                name:"",
                description:"",
                price:"",
                category:"Noodles"
            })
            setImage(false)
            toast.success(response.data.message);
        } else {
            toast.error(response.data.message)
        }

    }

  return (
    <div className='add'>
        <form className="add-form" onSubmit={onSubmitHandler}>
            <div className="add-image-upload add-form">
                <p>Upload Image</p>
                <label htmlFor='image' className='image'>
                {image?<img src={URL.createObjectURL(image)} />:<IoCloudUploadOutline />} 
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            </div>
            <div className="add-product-name add-form">
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add-product-description add-form">
                <p>Product Description</p>
                <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='write content here'></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category add-form">
                    <p>Product Category</p>
                    <select onChange={onChangeHandler} name="category">
                        <option value="Noodles">Noodles</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Ice cream">Ice cream</option>
                        <option value="Beverages">Beverages</option>
                    </select>
                </div>
                <div className="add-price add-form">
                    <p>Product price</p>
                    <input onChange={onChangeHandler} value={data.price} type='number' name='price' placeholder='$20'></input>
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default Add