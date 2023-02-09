import img1 from "../../../assets/Upload.svg";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FileUploader } from "react-drag-drop-files";
import { DatePicker, notification } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";

import { post, get } from "../../../components/utils/API";
import Dropdown from "./../../../components/interfaces/Dropdown/Dropdown";
import Footer from "../../../components/interfaces/Footer/index";
import Navbar2 from "../../../components/interfaces/Navbar2";
import SEO from "../../../components/utils/SEO";

const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

export default function lost_form() {
  const router = useRouter();
  const [file, setFile] = useState(null),
    [fileDataURL, setFileDataURL] = useState(null),
    [lostDate, setLostDate] = useState(null),
    [categories, setCategories] = useState(null),
    [selectedCategory, setSelectedCategory] = useState(null),
    [loading, setLoading] = useState(false);

  const title = useRef(null),
    description = useRef(null),
    location = useRef(null),
    phone = useRef(null),
    email = useRef(null);

  const handleFileChange = (file) => {
    setFile(file);
  };

  function removeFile() {
    setFile(null);
  }

  const onDateChange = (date, dateString) => {
    setLostDate(dateString);
  };

  async function getCategories() {
    try {
      let res = await get("/tag/categories");
      let c = res.data?.data;
      if (c) {
        c.push({ id: "null", name: "Other" });
      }
      setCategories(c);
    } catch (e) {}
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let data = new FormData();
    data.append("title", title.current.value);
    data.append("contactPhone", phone.current.value);
    data.append("lostDate", lostDate);

    if (description.current.value !== "")
      data.append("description", description.current.value);
    if (location.current.value !== "")
      data.append("location", location.current.value);
    if (email.current.value !== "")
      data.append("contactEmail", email.current.value);
    if (selectedCategory !== null) {
      data.append("tagIds", selectedCategory);
    }
    if (file !== null) {
      data.append("image", file);
    }
    let res = await post("/lost/new", data, null, true);
    if (res.data?.data) {
      notification.success({
        message: "Lost Item Added Successfully",
        description:
          "Your lost item has been successfully listed among lost items. Hope it reaches you soon.",
      });
      router.replace("/lost");
    } else {
      notification.error({
        message: "Incorrect Fields",
        description: "Please enter details in correct format",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <SEO title="Lost / Lost&Found" />
      <Navbar2 />
      <div className="flex flex-row justify-around md:flex-col-reverse">
        <div className="flex w-[50vw] md:w-auto bg-[#fafafa] shadow-[inset_0_-4px_16px_rgba(0,0,0,0.15)] rounded-r-[64px] md:rounded-none md:shadow-none md:bg-[white]">
          <div className="flex flex-col gap-y-10 px-[10%] my-auto flex-grow">
            <div className="flex flex-col md:text-center">
              <p className="font-semibold text-3xl font-['Poppins'] ">
                Instructions for Lost:
              </p>
            </div>
            <ul
              className=" text-[#6D7392] ml-4 -mt-4"
              style={{ listStyleType: "disc" }}
            >
              <li className="text-lg font-normal mb-6">
                If you've lost an item, first go through the found list
                carefully before listing new item.
              </li>
              <li className="text-lg font-normal mb-6">
                Describe the item you have lost in as much detail as possible,
                especially any unique characteristics that can help in
                identification.
              </li>
              <li className="text-lg font-normal mb-6">
                Include the location where you have lost your item for better
                chances of finding the item.
              </li>
              <li className="text-lg font-normal mb-6">
                If possible, also mention the date, time or event during which
                you have lost the item.
              </li>
              <li className="text-lg font-normal mb-6">
                False information and spamming may result in strict action and a
                permanent ban from the website.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-[50vw] md:w-auto justify-center">
          <div className="h-auto pb-4 flex w-[50vw] justify-center sm:w-auto my-8">
            <div className="flex flex-col justify-center items-center flex-grow">
              <h1 className="font-semibold text-5xl mb-10 text-[#304AC1]">
                Add Lost Item
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="text-md box-border h-11 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA] pl-3">
                  <input
                    type="text"
                    placeholder="Title"
                    className="bg-transparent"
                    ref={title}
                    required={true}
                  />
                </div>
                <div className="text-md box-border py-2 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA] pr-3">
                  <Dropdown
                    options={categories}
                    setValue={(v) => {
                      if (v === "null") {
                        setSelectedCategory(null);
                      } else {
                        setSelectedCategory(v);
                        console.log(v);
                      }
                    }}
                    fieldNames={{
                      label: "name",
                      value: "id",
                    }}
                  />
                </div>
                <div className="text-md box-border h-11 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA]">
                  <DatePicker
                    onChange={onDateChange}
                    showToday={true}
                    placeholder={"Date when Lost"}
                  />
                </div>
                <textarea
                  className="text-md box-border pt-3 pr-3 h-36 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA] pl-3 "
                  placeholder="Description..."
                  ref={description}
                ></textarea>
                <div className="text-md box-border h-11 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA] pl-3">
                  <input
                    className="bg-transparent"
                    type="text"
                    placeholder="Location"
                    ref={location}
                    required={true}
                  />
                </div>
                <div className="text-md box-border h-11 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA] pl-3">
                  <input
                    className="bg-transparent"
                    type="tel"
                    placeholder="Phone Number"
                    ref={phone}
                    required={true}
                  />
                </div>
                <div className="text-md box-border h-11 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA] pl-3">
                  <input
                    className="bg-transparent"
                    type="email"
                    placeholder="Email"
                    ref={email}
                  />
                </div>
                {file === null ? (
                  <div
                    className="text-md box-border flex items-center justify-center flex-wrap flex-col w-96 border-2 border-solid border-slate-400 rounded-md mb-5 bg-[#EBEFFA] pl-3 pr-3"
                    style={{ position: "relative" }}
                  >
                    <div>
                      <div className="text-center w-full text-base opacity-40">
                        Add Image
                      </div>
                      <div className=" text-center w-full scale-75 opacity-40">
                        <Image src={img1} className="" />
                      </div>

                      <div className="text-center w-full text-xs opacity-40 ">
                        Drag or drop or browse a file
                      </div>
                    </div>
                    <div
                      style={{
                        opacity: 0,
                        position: "absolute",
                      }}
                    >
                      <FileUploader
                        handleChange={handleFileChange}
                        name="file"
                        types={fileTypes}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className="text-md box-border flex py-4 pt-6 items-center justify-center flex-wrap flex-col w-96 border-2 border-solid border-slate-400 rounded-md mb-5 bg-[#EBEFFA] pl-3 pr-3"
                    style={{ position: "relative" }}
                  >
                    <div
                      className=""
                      style={{
                        width: "50%",
                        position: "relative",
                      }}
                    >
                      <img src={fileDataURL} alt="preview" />
                      <div
                        style={{
                          position: "absolute",
                          top: "-15px",
                          right: "-15px",
                        }}
                        onClick={removeFile}
                      >
                        <IoCloseCircleOutline />
                      </div>
                    </div>
                  </div>
                )}
                <button
                  className="bg-[#304AC1] text-[#EBEFFA] h-11 w-96 rounded-md select-none disabled:cursor-not-allowed disabled:opacity-90 flex items-center justify-center"
                  type="submit"
                  disabled={loading}
                >
                  <span className="text-center flex flex-row justify-center items-center">
                    {loading && (
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline mr-3 w-4 h-4 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                    Add Lost Item
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
