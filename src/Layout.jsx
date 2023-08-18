
import "./app.css"


function Layout({ children, bg = "white" , color = "black"}) {


    return (

        <div
            style={{ backgroundColor: bg , color : color }}
            id="layout"
        >{children}</div>

    )

}



export default Layout