import React, { useState } from 'react'
import Button from '../components/ui/Button';
import { db, storage } from '../firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export default function AddProduct() {
    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productCategory, setProductCategoty] = useState("");
    const [productDetail, setProductDetail] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);

    const metadata = {
        contentType: 'image/png'
      };

    function handleAddProduct(e){
        e.preventDefault();
      const storageRef = ref(storage, 'images/' + productImg.name);
      const uploadTask = uploadBytesResumable(storageRef, productImg, metadata);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        }, 
        (error) => {
          console.log(error.message);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            addDoc(collection(db, "products"), {
                variant: productName,
                category: productCategory,
                detail: productDetail,
                description: productDesc,
                price: Number(productPrice),
                imgUrl: url
            }).then(() => {
                console.log("successfully added product!");
                setProductCategoty("");
                setProductDesc("");
                setProductDetail("");
                setProductPrice(0);
                setProductName("");
                document.getElementById("file").value='';
            })
          });
        }
      );
    }

      
      

  return (
    <div className="h-screen px-8 md:px-16 py-10">
      <div className="h-full flex justify-center items-center">
        <form
          className="w-full md:w-fit p-8 md:px-14 py-10 flex flex-col gap-4 shadow-xl rounded-3xl bg-white bg-opacity-10" onSubmit={(e)=>handleAddProduct(e)}
        >
          <div className="flex gap-2 text-2xl md:text-3xl xl:text-4xl font-bold mb-4">
            <h1>Add</h1>
            <h1 className="text-clip bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-pink">
              Product
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="Product Name"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />

            <input
              type="text"
              className="w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="Detail"
              onChange={(e) => setProductDetail(e.target.value)}
              value={productDetail}
            />

            <input
              type="text"
              className="w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="Category"
              onChange={(e) => setProductCategoty(e.target.value)}
              value={productCategory}
            />
            <input
              type="text"
              className="w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="Description"
              onChange={(e) => setProductDesc(e.target.value)}
              value={productDesc}
            />
            <input
              type="number"
              className="w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="Price"
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
            />
            <input
              id='file'
              type="file"
              className="file:bg-purple file:text-white file:rounded-xl file:py-1 file:px-3 file:border-purple file:border-2 file:hover:bg-transparent file:hover:text-purple file:cursor-pointer w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="image"
              onChange={(e) => setProductImg(e.target.files[0])}
              
            />
          </div>


          <div className="flex justify-center">
            <Button textButton="Add Product" />
          </div>
        </form>
      </div>
    </div>
  )
}
