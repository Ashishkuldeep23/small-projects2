import React, { useEffect, useState } from 'react'

import "./prectice2.css"



// // // Here i'm getting data from localStorage and if getting the parse it and in useState settin these values.

let getPreivousData = localStorage.getItem("HistoryForBackBtn")

if (getPreivousData) {
  getPreivousData = JSON.parse(getPreivousData)
} else {
  getPreivousData = [{ first: "", second: "", sing: "+", result: 0 }]
}
// console.log(JSON.parse(getPreivousData))

// console.log(getPreivousData[getPreivousData.length-1].result)





function Prectie2() {


  const [backDataArr, setBackDataArr] = useState([{ first: "", second: "", sing: "+", result: 0 }])


  const [opratorSing, setOpratorSing] = useState(getPreivousData[getPreivousData?.length - 1].sing)

  const [valuesOfNum, setValuesOfNum] = useState({ first: getPreivousData[getPreivousData?.length - 1].first, second: getPreivousData[getPreivousData?.length - 1].second })
  // // // Give value as "" (empty string first) and use place holder in input box to show which data user give here or use || opr where using this var value.

  const [result, setResult] = useState(getPreivousData[getPreivousData?.length - 1].result)

  const [totalOpr, setTotalOpr] = useState(0)










  function handeChangeOpr(opr) {

    if (opr === "+") {
      setOpratorSing("+")
    }
    else if (opr === "-") {
      setOpratorSing("-")
    }
    else if (opr === "*") {
      setOpratorSing("*")
    }
    else if (opr === "/") {
      setOpratorSing("/")
    }
    else {
      setOpratorSing("+")
    }
  }


  function claculateHandler() {


    let firstVal = valuesOfNum.first
    firstVal = parseFloat(firstVal)

    let secVal = valuesOfNum.second
    secVal = parseFloat(secVal)


    // // // validation --------->

    if (firstVal === 0 || secVal === 0) {
      return alert("Value should change From 0.")
    }



    let takeSign = opratorSing

    let cal;

    if (takeSign === "+") {
      cal = firstVal + secVal
    }
    else if (takeSign === "-") {
      cal = firstVal - secVal
    }
    else if (takeSign === "*") {
      cal = firstVal * secVal
    }
    else if (takeSign === "/") {
      cal = firstVal / secVal
    }


    setResult(cal)  // // // Set result here

    // setValuesOfNum( (e)=>{
    //   console.log(e)
    // } )

    // // // Save Histroy for back btn
    setBackDataArr([...backDataArr, { first: valuesOfNum.first, second: valuesOfNum.second, sing: opratorSing, result: cal }])

    // console.log(backDataArr)


    setValuesOfNum({ first: `${cal}`, second: 0 })    // // // Set value of first input equal to result and second equal to 0


    // // // count ++ (Increase how many operations)
    setTotalOpr(totalOpr + 1)

  }




  function backHandlerFn() {

    // console.log(backDataArr)

    backDataArr.pop()    // // // Means pop() and push() also worked with state var array.

    // // // pop() ele from backDataArr and paste all values below ------>


    setOpratorSing(backDataArr[backDataArr.length - 1].sing);
    setResult(backDataArr[backDataArr.length - 1].result);
    setValuesOfNum({ first: backDataArr[backDataArr.length - 1].first, second: backDataArr[backDataArr.length - 1].second });

    // backDataArr.pop()    // // // Means pop() and push() also worked with state var array.
    setBackDataArr(backDataArr)

  }


  useEffect(() => {


    // // // (Total Operations) Save value in localStorage how many operations till now -------->
    if (totalOpr) {
      localStorage.setItem("SimCalTotalOpr", JSON.stringify(totalOpr))
    }


    // // // Make history for back btn (set localStrorage) -------------->

    // if(backDataArr[backDataArr.length-1].first !== '' || backDataArr[backDataArr.length-1].second !== '' || backDataArr[backDataArr.length-1].result !== 0){


    //   let getAllPreData = localStorage.getItem("HistoryForBackBtn")

    //   if(!getAllPreData){

    //     localStorage.setItem("HistoryForBackBtn" , JSON.stringify(backDataArr))
    //   }else{
    //     getAllPreData = JSON.parse(getAllPreData)

    //     localStorage.setItem("HistoryForBackBtn" , JSON.stringify([...getAllPreData , ...backDataArr]))
    //   }

    // }


    // // // if data getting
    if (backDataArr.length > 1) {
      if (backDataArr[backDataArr.length - 1].first !== '' || backDataArr[backDataArr.length - 1].second !== '' || backDataArr[backDataArr.length - 1].result !== 0) {
        localStorage.setItem("HistoryForBackBtn", JSON.stringify(backDataArr))
      }
    }


  }, [totalOpr, backDataArr])


  useEffect(() => {

    // alert("second")


    // // // Get data from localStrorage and set --------->
    let getDataCount = localStorage.getItem("SimCalTotalOpr")
    // console.log(getDataCount)
    if (getDataCount) setTotalOpr(JSON.parse(getDataCount))


    // // // // Set data on arr of back btn (This way is Slow that's why doing very first of functon UI )--------->
    let getBackBtnData = localStorage.getItem("HistoryForBackBtn")
    // console.log(JSON.parse(getBackBtnData))
    if (getBackBtnData) setBackDataArr(JSON.parse(getBackBtnData))

  }, [])



  // // // // Note : - 
  // // Two useEffects are valid ---------->
  // // Array.from(10).map() from previous project --------->






  // // // -------------------------- Actual UI here ----------------------- // // //

  return (
    <>

      <div className="main_prec_2 bg-warning ">

        <div className='w-75 bg-white d-flex align-items-center justify-content-center flex-wrap flex-column text-center  border border-3 border-dark p-sm-5 py-5 rounded rounded-pill'>


          <h1>Simple Calculator</h1>

          <h3>Total Operations : {totalOpr} </h3>

          <div className='d-flex align-items-center justify-content-center flex-wrap'>


            <input
              p
              placeholder='Give First Number'
              className='rounded my-1'
              type="number" value={valuesOfNum.first}
              name="first"
              onChange={(event) => { setValuesOfNum({ ...valuesOfNum, [event.target.name]: event.target.value }) }}
            />


            <div
              className='h-100  border rounded rounded-pill px-2 bg-success fw-bold text-white mx-1 my-1'
            >{opratorSing}</div>




            <input
          
              placeholder='Give Second Number'
              className='rounded my-1'
              type="number" value={valuesOfNum.second}
              name="second"
              onChange={(event) => { setValuesOfNum({ ...valuesOfNum, [event.target.name]: event.target.value }) }}
            />


            <button onClick={claculateHandler} className='ms-1 bg-info fw-bold text-white px-3 rounded my-1'>Calculate</button>

            {/* back btn : (last first and scond and also last sing) */}

            <button
              className={(backDataArr.length > 1) ? "d-block ms-1 bg-warning fw-bold rounded px-3 my-1" : "d-none"}
              onClick={backHandlerFn}
            >Back</button>


          </div>



          <div>
            <button onClick={() => { handeChangeOpr("+") }} className='ms-1 px-3 rounded my-2 mx-3 bg-primary text-white fw-bolder'>+</button>
            <button onClick={() => { handeChangeOpr("-") }} className='ms-1 px-3 rounded my-2 mx-3 bg-primary text-white fw-bolder'>-</button>
            <button onClick={() => { handeChangeOpr("*") }} className='ms-1 px-3 rounded my-2 mx-3 bg-primary text-white fw-bolder'>*</button>
            <button onClick={() => { handeChangeOpr("/") }} className='ms-1 px-3 rounded my-2 mx-3 bg-primary text-white fw-bolder'>/</button>

          </div>


          <div className='d-flex justify-content-around w-50'>
            <button
              className='ms-1 px-3 rounded my-2 mx-3 bg-danger text-white fw-bolder'
              onClick={() => {
                setOpratorSing("+");
                setValuesOfNum({ first: 0, second: 0 });
                setResult(0);
                setBackDataArr([]);
                localStorage.removeItem("HistoryForBackBtn");
              }}
            > Reset</button>

            <p
              className='  border border-2 border-dark ms-1 px-3 rounded my-2 mx-3 bg-success text-white fw-bolder'
            >
              { 
                `${valuesOfNum.first || "0"} ${opratorSing || "+"} ${valuesOfNum.second || "0"} = ${result || "0"}`
              }
            </p>
          </div>

        </div>


      </div>



    </>
  )
}

export default Prectie2