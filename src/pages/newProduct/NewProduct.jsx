import "./newProduct.css";
import { addproduct } from '../../apiCalls'
import app from "../../firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React from "react";
import { useDispatch } from "react-redux";

export default function NewProduct() {

  const [inputs, setInputs] = React.useState({})
  const [file, setFile] = React.useState(null)
  const [cat, setCat] = React.useState([])
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    const Filename = String(new Date().getTime()) + file?.name
    const storage = getStorage(app);
    const storageRef = ref(storage, Filename);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          const product = {
            ...inputs, img: downloadURL, categories: cat
          }
          console.log(product);
          addproduct(dispatch, product)
        });
      }
    );

  }

  const handleChange = (e) => {

    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
    console.log(inputs);
  }

  function handleFile(e) {
    let image = e.target.files[0]
    console.log(e.target.files);
    setFile(image);
    console.log(file);
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" onChange={handleFile} id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input onChange={handleChange} name="name" type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input onChange={handleChange} name="desc" type="text" placeholder="cool t-shirt" />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input onChange={handleChange} name="price" type="number" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input onChange={(e) => { setCat(e.target.value.split(",")) }} type="text" placeholder="jeans,blue" />
        </div>
        <div className="addProductItem">
          <label>instock</label>
          <select onChange={handleChange} name="instock" id="active">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <button onClick={handleSubmit} className="addProductButton">Create</button>
      </form>
    </div>
  );
}
