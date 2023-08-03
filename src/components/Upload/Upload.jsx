
import React, { useEffect, useState } from 'react'
import "./style.css";

import axios from 'axios';

import sha1 from "sha1"



// import cloudinary from "cloudinary/lib/cloudinary";


const Upload = () => {

    const [arrOfUrl, setArrUrl] = useState([])


    const [arrOfUrl2, setArrUrl2] = useState([])





    // // // Check how many time code runing , only ----->
    useEffect(() => {
        console.log("LOADING...")

        // console.log(import.meta)
      
    }, [])


    const preset_key = import.meta.env.VITE_CLOUDINARY_PRESET
    const urlForCloudinary = import.meta.env.VITE_CLOUDINARY_URL



    async function onChangeHandler(e) {

        const files = e.target.files

        // console.log(files)
        // console.log(files.length)



        for (let i = 0; i < files.length; i++) {
            // alert("Hello")

            // console.log(files[i])
            // console.log(i)


            let imgFile = files[i]
            // console.log(imgFile)

            // const date = new Date
            const now = Date.now()

            //  console.log(now)

            // let newName = now + imgFile.name
            // let newObj = {...imgFile , name : newName}
            // imgFile.name = now + imgFile.name
            // console.log(imgFile)
            // let check = imgFile.name("Ashish")
            // console.log(check)
            // imgFile.name = "ahhhhh"
            // // // File properties are read only , can't changeable 
            // // // Make new file with old file properties and change that you want to change.

            // console.log(imgFile)


            // // // By below way we can change name of file.
            const myRenamedFile = new File([imgFile], `${now}_${imgFile.name}`);

            console.log(myRenamedFile);






            let formData = new FormData()

            formData.append("file", myRenamedFile)
            formData.append("upload_preset", preset_key)

            let request = await axios.post(urlForCloudinary, formData)

            console.log(request)

            if (request.data) {

                console.log(request.data)

                setArrUrl((pre) => { console.log(pre); return [...pre, { url: request.data.url, name: request.data.original_filename, id: request.data.public_id }] })
            } else {
                alert(request.message)
                return
            }





            

            // // // Do this when network good
            // // // Delete any uploaded image.

            const { public_id } = request.data

            console.log(public_id)

    

            const api_key = import.meta.env.VITE_CLOUDINARY_API_KEY

            const timestamp = new Date().getTime()
            const string = `public_id=${public_id}&timestamp=${timestamp}&api_key=${api_key}`
            const signature = await sha1(string)

            console.log(signature)

            const formData2 = new FormData()
            formData2.append("public_id", public_id)
            formData.append("signature",signature)
            formData.append("api_key", api_key)
            formData.append("timestamp", timestamp)

            let cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
            const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/destroy`, formData)

            console.log(res)

            let data2 = await res

            console.log(data2)


            // // // Not NOw -------->

            // await axios.post(urlForCloudinary, formData)
            //     .then(
            //         // res => console.log(res)
            //         (res) => {setArrUrl((preData) => { [...preData, res.data.url] }); console.log(res); }
            //     )
            //     .catch(err => console.log(err))

        }
    }



    // cloudinary.config({
    //     cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    //     api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
    //     api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
    // });





    async function onChangeHandler2(e) {

        // console.log(process.cwd())

        const files = e.target.files

        for (let i = 0; i < files.length; i++) {

            let currentFile = files[i]
            const now = Date.now()
            const renamedFile = new File([currentFile], `${now}_${currentFile.name}`)
            console.log(renamedFile)



            // let uplaod = await cloudinary.v2.uploader.upload(renamedFile)


            // console.log(uplaod)


        }


    }








    return (
        <>
            <main className='upload_main'>
                <div className="box">
                    <h2>Upload Image using cloudinary and React by Api </h2>
                    <input type="file" name="file" id="input" multiple={true} onChange={(e) => onChangeHandler(e)} />


                    {
                        (arrOfUrl.length > 0)
                            ?

                            arrOfUrl.map((ele, i) => {
                                return (
                                    <div key={i} className='result'>
                                        <p>{ele.url}</p>
                                        <img src={ele.url} alt={ele.name} />
                                    </div>
                                )
                            })

                            :

                            null


                    }
                </div>



                <div className="box">
                    <h2>Upload Image using cloudinary package</h2>
                    <input type="file" name="file" multiple={true} onChange={(e) => onChangeHandler2(e)} />


                    {
                        (arrOfUrl2.length > 0)
                            ?

                            arrOfUrl2.map((ele, i) => {
                                return (
                                    <div key={i} className='result'>
                                        <p>{ele.url}</p>
                                        <img src={ele.url} alt={ele.name} />
                                    </div>
                                )
                            })

                            :

                            null


                    }
                </div>


            </main>


        </>
    )
}

export default Upload
