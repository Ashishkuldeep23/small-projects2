


import React, { useState, useRef } from "react";


const arr = ["Mango", "Banana", "Graps"]



const ListItemInterview = () => {

    const [list, setList] = useState(arr)


    const [checked, setChecked] = useState("")


    const mainDivRef = useRef(null)


    function deleteHandler(index) {

        let newArr = list.filter((ele, i) => { return index !== i })
        setList([...newArr])
    }


    function checkedHandler(index) {

        console.log(checked)

        setChecked(index)


        // console.log(mainDivRef)

    }




    return (

        <>

      

                {
                    list.map((el, i) => {
                        return (
                            <div key={i} className="d-flex" ref={mainDivRef}>
                                <input key={i} type="checkBox" onClick={() => { checkedHandler(i); }} />
                                <h1>{el}</h1>
                                {(checked === i) && <button onClick={() => { deleteHandler(i); }}> X </button>}
                            </div>
                        )
                    })
                }

     

        </>
    )

}


export default ListItemInterview

