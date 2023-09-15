import React from 'react'

const Video = ({ el, dispatch, sivlingDataTansfer }) => {



    function onEditHandler(id) {
        () => sivlingDataTansfer({ title: "ok" })
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



    return (
        <>


            <div
                className='border border-white bg-dark text-white'
                id='single_card'
                key={el.id}
            >




                <img src={`https://picsum.photos/100/100?random=${el.id}`} alt="" />

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