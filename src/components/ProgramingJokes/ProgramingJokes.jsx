import React, { useEffect, useRef, useState } from 'react'

import "./jokes.css"


const ProgramingJokes = () => {

    let [jokeData, setJokeData] = useState([])


    let headerOfJokeDiv = useRef(null)




    async function getJokeByApiCall() {
        const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '18e757a746msh9cdc1cb2ec719c2p110b1ajsna52856dc320f',
                'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);

            const result = await response.text();
            // console.log(result);     // // // Here i'm getting result but in json form , don't convert here into actual data by json.parse , this will gives you error.

            const actualData = await JSON.parse(result)
            // console.log(actualData);     // // // Here i can convert into catual data


            setJokeData(actualData)

        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {

        getJokeByApiCall()

    }, [])

    return (
        <>

            <div id='joke_holder_div'>

                <header id='headerOfJokeDiv' ref={headerOfJokeDiv} className='w-100 text-center text-decoration-underline'>
                    <h1>See Programming Jokes here</h1>
                </header>

                {


                    jokeData && jokeData.length > 0
                        ?
                        jokeData.map((el) => {
                            return (
                                <div
                                    className='border border-danger py-3 px-2 d-flex justify-content-center align-items-center rounded '
                                    key={el.id}
                                >
                                    <img src={el.image} alt="joke" />
                                    {/* <div>{"IMAGE URL :- " + el.image}</div> 
                                <button onClick={ ()=>{ window.open( el.image , "__blank" ) } }>Open in new Window</button>  */}
                                </div>
                            )
                        })

                        :
                        Array.from(Array(5)).map((el, i) => {
                            return (

                                <div
                                    className='border border-danger py-3 px-2 d-flex justify-content-center align-items-center rounded '
                                    key={i}
                                >
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqI3lHFjBbLelg5rGnkZVukHUI2cd9cnEGOQ&usqp=CAU"} alt="joke" />
                                    {/* <div>{"IMAGE URL :- " + el.image}</div> 
                        <button onClick={ ()=>{ window.open( el.image , "__blank" ) } }>Open in new Window</button>  */}
                                </div>

                            )
                        })

                    // JSON.stringify(jokeData)
                }

                <footer className='w-100 text-center'>
                    <button
                        onClick={() => {
                            if (headerOfJokeDiv.current) {
                                window.scrollTo(0, headerOfJokeDiv.current.offsetTop);
                            }
                            setJokeData([]);
                            getJokeByApiCall();
                        }}
                    > <a href="#headerOfJokeDiv">Refresh</a></button>
                </footer>



            </div>


        </>
    )
}

export default ProgramingJokes