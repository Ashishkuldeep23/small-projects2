import React from 'react'
import { useVideoDispatch } from './contextReducer'

const Video = ({ el, i, sivlingDataTansfer }) => {


    const dispatch = useVideoDispatch()


    function onEditHandler(id) {
        // () => sivlingDataTansfer({ title: "ok" })
        //    { id: videoData.length+1,
        //     title: input.title,
        //     creator: "YRF",
        //     viwes: input.views,}


        sivlingDataTansfer({
            id: el.id,
            title: el.title,
            creator: el.creator,
            views: el.views
        })

    }



    function srkImagesRandom(){

        const srkImages= [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsD1KTbvCybNc_IJJCUwFgCM8YsXB-Zx7hticFvICBr7nrI2kWiKhz8lYXpYUHVzA0dm0&usqp=CAU" ,
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPTDjUAhDJwavKlQ0t8baxbauaqqhVtyL9Q&usqp=CAU" , 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd0ZBu6kABp00XJPKfgO9Qyt1uQFA1Pg9pXA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKzb-rYjD8Y2zAvRKLP8mA-bN6lSZaOS33Q&usqp=CAU" ,
            

        ]


        return srkImages[ Math.floor(Math.random() * srkImages.length)];
        
    }



    return (
        <>


            <div
                className='border border-white bg-dark text-white'
                id='single_card'
                key={el.id}
            >




                {/* <img src={`https://picsum.photos/100/100?random=${el.id}`} alt="" /> */}
                <img src={(i < 4)
                    ? srkImagesRandom()

                    : `https://picsum.photos/100/100?random=${el.id}`
                } alt="" />

                <button
                    className='position-absolute top-0 start-0 btn btn-primary py-0 px-1 '
                    onClick={() => onEditHandler(el.id)}
                >Edit</button>

                <button
                    className='position-absolute top-0 end-0  btn btn-outline-danger px-2 py-0  '
                    onClick={() => { dispatch({ type: "DELETE", payload: el.id }) }}
                >X</button>


                <h5 className='m-0 px-1'>{el.title}</h5>
                <p className='m-0 px-1'>{"By :- " + el.creator}</p>
                <p className='m-0 px-1'>{"Views :- " + el.views}</p>
            </div>


        </>
    )
}

export default Video