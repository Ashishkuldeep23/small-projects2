
import "./app.css"


function Layout({ layoutFor = "", children, bg = "white", color = "black", height = "100dvh" }) {


    return (
        <>
            <div
                style={
                    {
                        backgroundColor: bg,
                        color: color ,
                        minHeight : height
                    }
                }
                id="layout"
            >

                <h1 id="layout_heading">{layoutFor}</h1>
                {children}
            </div>

        </>
    )

}



export default Layout