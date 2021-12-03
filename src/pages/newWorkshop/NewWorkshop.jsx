import "./newProduct.css";
import { createworkshop } from '../../apiCalls2'
import app from "../../firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React from "react";
import { useDispatch } from "react-redux";

export default function NewWorkshop() {

  const [inputs, setInputs] = React.useState({})
  const [file, setFile] = React.useState(null)
  const [images, setImages] = React.useState([])
  const [isUploading, setIsUploading] = React.useState(false)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    const workshop = {
      ...inputs, img: images
    }
    console.log(workshop);
    createworkshop(dispatch, workshop)
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
            setIsUploading(true)
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
          setIsUploading(false)
          console.log('File available at', downloadURL);
          setImages([...images, downloadURL])
          console.log(images);
        });
      }
    );
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New WorkShop</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" multiple onChange={handleFile} id="file" />
          {isUploading && <span>UPLOADING..</span>}
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input onChange={handleChange} name="name" type="text" placeholder="illustration" />
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
          <label>Date</label>
          <input onChange={handleChange} name="time" type="text" placeholder="17/22/2020" />
        </div>
        <div className="addProductItem">
          <label>Maximum Number of Particpants</label>
          <input onChange={handleChange} name="maxpart" type="text" placeholder="22" />
        </div>

        <button onClick={handleSubmit} className="addProductButton">Create</button>
      </form>
    </div>
  );
}
