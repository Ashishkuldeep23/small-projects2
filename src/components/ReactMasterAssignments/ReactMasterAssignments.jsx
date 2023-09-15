import React from 'react'



import { FirstC1A3, SecondC1A3 } from './c1a3'

import C3a1 from './c3a1'
import { LayoutForC3A1 } from './c3a1'

const ReactMasterAssignments = () => {
    return (
        <>

            <div className='w-75 my-3 px-1 py-2 rounded rounded-2 border border-danger bg-white'>
                <h3 className='text-center'>Chapter 1 - Introduction to React & Setup</h3>
                <div className='my-3'>
                    <h5>Q :- Assignment 1 : If we delete node_modules. How to run our app again successfully ?</h5>
                    <h6>Ans : We run "npm install" command in terminal for successful run react app.</h6>
                    <p><strong>Extra :-</strong> Here</p>
                </div>

                <div className='my-3'>
                    <h5>Assignment 2 : How to remove double console.logs from React ?</h5>
                    <h6>Ans : React App is running in strict mode that's why double render happend , this is useful in development mode. Go to app.jsx file or main file where app is rendered by getId root and remover strict mode.</h6>
                    <p><strong>Extra :-</strong> Here</p>
                </div>

                <h4>Special Assignments =============={">"} </h4>

                <div className="my-3">
                    <h5>Assignment 3 : Create a Page with multiple React Apps. Both React Apps should be independent of each other.</h5>

                    <h6>Ans : Below done {"-->"} Done 🟢</h6>

                    <>
                        <FirstC1A3 />
                        <SecondC1A3 />
                    </>
                    <p><strong>Extra :-</strong> Here</p>
                </div>


                <div className='my-3'>

                    <h5>Assignment 4 : Try to build a react app using other toolchains like Vite.</h5>
                    <h6>Ans : I tried this , creating react app with vite , super easy , commands are "npm create vite@latest" then choose templete for recat by arrow keys.</h6>
                    <p><strong>Extra :-</strong> Here</p>
                </div>



            </div>




            <div className='w-75 my-3 px-1 py-2 rounded rounded-2 border border-danger bg-white'>

                <h3 className='text-center'>Chapter 2 - Components - JSX and Props</h3>


                <div className='my-3'>

                    <h5>Assignment 1 : Create a simple React app for RESUME Builder. It will be static website. You have to make components like Resume as top level and under it - Skills, Education, Experience etc as components. All resume data will be under 1 big JavaScript object like which you can us in components via props. You can fix the number of items in Skills, Education, Experience or any section. Example you can say that only 3 experience items is allowed.</h5>
                    <h6>Ans : <a href="#/ResumeBuilder">Go to this page</a></h6>
                    <p><strong>Extra :-</strong> Here</p>


                    <h4>Special Assignments =============={">"} </h4>
                    <h5>Assignment 2 : Create a Parent Component called Border which can provide some CSS border to any component nested into it. Hint : You will need to use children props here</h5>
                    <h6>Done 🟢 , Layout Component using in this project</h6>
                    <p><strong>Extra :-</strong> Here</p>

                </div>



            </div>



            <div className='w-75 my-3 px-1 py-2 rounded rounded-2 border border-danger bg-white'>
                <h3 className='text-center'>Chapter 3 - Conditional Rendering & Lists</h3>

                <dir>

                    <h5>Assignment 1 : Make a simple component which can conditionally render a list with number or alphabets or bullets in HTML for number. e..g. use a prop like layout for this. Also use a prop items for array of items in list.
                        {
                            `
                        < List layout="numbered" items={items} />
                        < List layout="alpha" items={items} />
                        < List layout="bullet" items={items} />
                            `
                        }
                    </h5>
                    <h6>Ans : </h6>
                    
                        <LayoutForC3A1 bg="red"> <C3a1 list={[1,5 ,8 ,9 ,10 ,11]} /> </LayoutForC3A1>
                    

                </dir>

            </div>




        </>

    )
}

export default ReactMasterAssignments