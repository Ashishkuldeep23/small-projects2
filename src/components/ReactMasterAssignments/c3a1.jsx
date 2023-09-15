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



const C3a1 = ({ list = [1, 2, 3, 4, 5] } , listType ='I') => {

    const [listItem, setListItem] = useState(list)

    return (
        <div>
            <ol type={listType}>
                { listItem.map((item , i) => { return <li key={i}>{item}</li> })}
            </ol>
        </div>
    )
}

export { LayoutForC3A1 }
export default C3a1 