import React from 'react'

const InputPrec3 = React.forwardRef((props , ref) => {
    return (
        <>
            <input ref={ref} type="password" />
        </>
    )
})

export default InputPrec3