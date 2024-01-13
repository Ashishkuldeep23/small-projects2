
import { useEffect, useState } from 'react'
import './motiStyle.css'

// import React from 'react'

export const Motivaltion = () => {

    let intialObj = {

        "id": 1090,
        "quote": "I Hated Every Minute Of Training, But I Said, 'Don'T Quit. Suffer Now And Live The Rest Of Your Life As A Champion.'",
        "author": "Muhammad Ali"
    }

    const [quoteData, setQuoteData] = useState(intialObj)



    async function getAndSetQuotes() {

        let req = await fetch("https://dummyjson.com/quotes/random")

        let data = await req.json()

        setQuoteData({...data})

        // console.log(data)
    }


    useEffect(() => {
        getAndSetQuotes()
    }, [])



    return (
        <>

            <div style={{ position: 'relative' }}>


                <div className="mot_linesH_hlder"  ></div>

                <div className='moti_text_div'>
                    <p className=' fs-5'>{quoteData.quote}</p>
                    <p className=' text-end'>By : {quoteData.author}</p>

                    <button
                        className=' px-2 rounded fw-bold'
                        onClick={getAndSetQuotes}
                    >Refresh</button>

                </div>

            </div>


        </>
    )
}


