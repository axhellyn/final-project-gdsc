import { useContext, useState } from "react";
import Button from "../components/ui/Button";
import { db, storage } from "../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { AuthContext } from "../context/AuthContext";
import { FaRegSadTear } from "react-icons/fa";

export default function AddProduct() {
  const { isAdmin } = useContext(AuthContext);
  const initialValue = "";

  const [state, setState] = useState({
    productName: initialValue,
    productDesc: initialValue,
    productCategory: initialValue,
    productDetail: initialValue,
    productPrice: 0,
    productImg: null,
  });

  function handleChangeState(key, value) {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  const metadata = {
    contentType: "image/png",
  };

  function handleAddProduct(e) {
    e.preventDefault();
    const storageRef = ref(storage, "images/" + state.productImg.name);
    const uploadTask = uploadBytesResumable(
      storageRef,
      state.productImg,
      metadata
    );

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          addDoc(collection(db, "products"), {
            variant: state.productName,
            category: state.productCategory,
            detail: state.productDetail,
            description: state.productDesc,
            price: Number(state.productPrice),
            imgUrl: url,
          }).then(() => {
            console.log("successfully added product!");
            handleChangeState("productName", initialValue);
            handleChangeState("productDesc", initialValue);
            handleChangeState("productDetail", initialValue);
            handleChangeState("productPrice", 0);
            handleChangeState("productCategory", initialValue);
            document.getElementById("file").value = "";
          });
        });
      }
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col gap-6 justify-center items-center">
        <FaRegSadTear className="w-20 h-20" />
        <div className="flex flex-col gap-2 items-center">
        <div className="text-2xl font-semibold">This page only for admin!</div>
        <div className="text-sm font-normal">You cannot add product</div>

        </div>
      </div>
    );
  }

  return (
    <div className="h-screen px-8 md:px-16 py-10">
      <div className="h-full flex justify-center items-center">
        <form
          className="w-full md:w-fit p-8 md:px-14 py-10 flex flex-col gap-4 shadow-xl rounded-3xl bg-white bg-opacity-10"
          onSubmit={(e) => handleAddProduct(e)}
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
              onChange={(e) => handleChangeState("productName", e.target.value)}
              value={state.productName}
            />

            <input
              type="text"
              className="w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="Detail"
              onChange={(e) =>
                handleChangeState("productDetail", e.target.value)
              }
              value={state.productDetail}
            />

            <input
              type="text"
              className="w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="Category"
              onChange={(e) =>
                handleChangeState("productCategory", e.target.value)
              }
              value={state.productCategory}
            />
            <input
              type="text"
              className="w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="Description"
              onChange={(e) => handleChangeState("productDesc", e.target.value)}
              value={state.productDesc}
            />
            <input
              type="number"
              className="w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="Price"
              onChange={(e) =>
                handleChangeState("productPrice", e.target.value)
              }
              value={state.productPrice}
            />
            <input
              id="file"
              type="file"
              className="file:bg-purple file:text-white file:rounded-xl file:py-1 file:px-3 file:border-purple file:border-2 file:hover:bg-transparent file:hover:text-purple file:cursor-pointer w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="image"
              onChange={(e) =>
                handleChangeState("productImg", e.target.files[0])
              }
            />
          </div>

          <div className="flex justify-center">
            <Button textButton="Add Product" />
          </div>
        </form>
      </div>
    </div>
  );
}
