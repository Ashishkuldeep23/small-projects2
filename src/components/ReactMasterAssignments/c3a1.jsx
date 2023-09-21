import React, { useState } from 'react'







const LayoutForC3A1 = ({ children, bg = "white" }) => {




    return (
        <>
            <div style={{ backgroundColor: bg }}>

                <h1>layout</h1>
                {children}
            </div>
        </>
    )

}



const C3a1 = ({ list = [1, 2, 3, 4, 5] }, listType = 'i', ordered = true) => {

    // console.log(Props)

    const [listItem, setListItem] = useState(list)

    // const [listTypeS , setListTypeS] = useState(listType)

    return (
        <div>

            {
                (ordered)
                    ?
                    <ol type="A" >
                        {list.map((item, i) => { return <li key={i}>{item}</li> })}
                    </ol>

                    :
                    <ul>
                        {list.map((item, i) => { return <li key={i}>{item}</li> })}
                    </ul>
            }

        </div>
    )
}

export { LayoutForC3A1, C3a1 }
