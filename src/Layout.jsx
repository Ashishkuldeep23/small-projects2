
import "./app.css"


function Layout({ layoutFor = "", className = "", children, bg = "white", color = "black", height = "100dvh", zIndex = "" }) {


    return (
        <>
            <div
                className={className}
                id="layout"

                style={
                    {
                        // // // Some props values taken for style.
                        backgroundColor: bg,
                        color: color,
                        minHeight: height,
                        zIndex: zIndex
                    }
                }
            >

                <h1 id="layout_heading">{layoutFor}</h1>
                {children}
            </div>

        </>
    )

}



export default Layout