import React, { useState } from 'react'

const AddVideoForm = ({ videoData, dispatch, setInput, input, setOnUpdate, onUpdate }) => {

    // const [input, setInput] = useState({ title: "", views: "" })


    function onChangeHandler(e) {
        // console.log(e);
        e.preventDefault()
        e.stopPropagation()
        setInput({ ...input, [e.target.name]: e.target.value })
    }


    function addVideoHandler(e) {

        e.preventDefault()
        e.stopPropagation()

        // console.log(e)

        if (!input.title || !input.views) {
            return alert("Give some input")
        }

        dispatch({
            type: "ADD", payload: {
                id: videoData.length + 1,
                title: input.title,
                creator: "YRF",
                views: input.views,

            },
        })

        setInput({ title: "", views: "" })
        setOnUpdate(false)
    }


    function updateVideo(e){
        e.preventDefault()
        e.stopPropagation()
        
        // console.log(input.id)
        
        dispatch({
            type: "UPDATE", payload: {
                id: input.id,
                title: input.title,
                creator: "YRF",
                views: input.views,
            },
        })
        

        setInput({ title: "", views: "" })

    }




    return (
        <>

            <form className='border rounded p-1' >

                <input onChange={onChangeHandler} value={input.title} name="title" type="text" placeholder='Title' />
                <input onChange={onChangeHandler} value={input.views} name="views" type="text" placeholder='Views' />
                <button 
                    className='btn btn-outline-success '
                    onClick={onUpdate ? updateVideo : addVideoHandler}
                    onSubmit={onUpdate ? updateVideo : addVideoHandler}
                >{onUpdate ? "Update" : "Add"} Video</button>

            </form>
        </>
    )
}

export default AddVideoForm