import React, { useEffect, useRef, useState  } from 'react'

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


  // // // This use state will contain all histories --------->
  const [backDataArr, setBackDataArr] = useState([])

  const [opratorSing, setOpratorSing] = useState(getPreivousData[getPreivousData?.length - 1].sing)

  const [valuesOfNum, setValuesOfNum] = useState({ first: getPreivousData[getPreivousData?.length - 1].first, second: getPreivousData[getPreivousData?.length - 1].second })
  // // // Give value as "" (empty string first) and use place holder in input box to show which data user give here or use || opr where using this var value.

  const [result, setResult] = useState(getPreivousData[getPreivousData?.length - 1].result)       // // // Result getting from history arr.

  const [totalOpr, setTotalOpr] = useState(0)

  const firstInput   = useRef(null)     // // // Refrance of 1st input
  
  const secondInput   = useRef(null)     // // // Refrance of 2st input




  function handeChangeOpr(opr) {

    // if (opr === "+") {
    //   setOpratorSing("+")
    // }
    // else if (opr === "-") {
    //   setOpratorSing("-")
    // }
    // else if (opr === "*") {
    //   setOpratorSing("*")
    // }
    // else if (opr === "/") {
    //   setOpratorSing("/")
    // }
    // else if (opr === "**") {
    //   setOpratorSing("**")
    // }


    // else {
    //   setOpratorSing("+")
    // }


    switch (opr) {

      case "+":
        setOpratorSing("+")
        break;

      case "−":
        setOpratorSing("−")
        break;
      case "×":
        setOpratorSing("×")
        break;
      case "÷":
        setOpratorSing("÷")
        break;
      case "pw":
        setOpratorSing("pw")
        break;

      case "%":
        setOpratorSing("%")
        break;

      case "mod":
        setOpratorSing("mod")
        break;


      default:
        setOpratorSing("+")
        break;

    }




  }




  function claculateHandler() {


    let firstVal = valuesOfNum.first
    firstVal = parseFloat(firstVal)

    let secVal = valuesOfNum.second
    secVal = parseFloat(secVal)


    // // // validation --------->

    if(!firstVal || !secVal){
      return alert("Value can't be 0 or null.")
    }
    



    // let takeSign = opratorSing   // // // This var stores singValue

    let cal;


    switch (opratorSing) {

      case "+":
        cal = firstVal + secVal
        break;

      case "−":
        cal = firstVal - secVal
        break;

      case "×":
        cal = firstVal * secVal
        break;

      case "÷":
        cal = firstVal / secVal
        break;


      case "pw":
        cal = firstVal ** secVal
        break;

      case "%`  ":
        cal = (firstVal / 100) * secVal
        break;

      case "mod":
        cal = firstVal % secVal
        break;

      default:
        break;
    }




    setResult(cal)  // // // Set result here

    // setValuesOfNum( (e)=>{
    //   console.log(e)
    // } )

    // // // Save Histroy for back btn
    setBackDataArr([...backDataArr, { first: valuesOfNum.first, second: valuesOfNum.second, sing: opratorSing, result: cal }])

    // console.log(backDataArr)


    setValuesOfNum({ first: `${cal}`, second: "" })    // // // Set value of first input equal to result and second equal to 0


    // // // count ++ (Increase how many operations)
    setTotalOpr(totalOpr + 1)

  }




  function backHandlerFn() {

    // console.log(backDataArr)

    backDataArr.pop()    // // // Means pop() and push() also worked with state var array.

    // // // pop() ele from backDataArr and paste all values below ------>


    setOpratorSing(backDataArr[backDataArr.length - 1]?.sing || "+");
    setResult(backDataArr[backDataArr.length - 1]?.result || "0");
    setValuesOfNum({ first: backDataArr[backDataArr.length - 1]?.first || "", second: backDataArr[backDataArr.length - 1]?.second || "" });

    // backDataArr.pop()    // // // Means pop() and push() also worked with state var array.
    setBackDataArr(backDataArr)

  }




  useEffect(() => {

    // console.log(backDataArr)


    // // // (Total Operations) Save value in localStorage how many operations till now -------->
    if (totalOpr) {
      localStorage.setItem("SimCalTotalOpr", JSON.stringify(totalOpr))
    }




    // // // if data getting (if anything changed in calculation)
    if (backDataArr.length > 0) {
      if (backDataArr[backDataArr.length - 1].first !== '' && backDataArr[backDataArr.length - 1].second !== '' && backDataArr[backDataArr.length - 1].result !== 0) {
        localStorage.setItem("HistoryForBackBtn", JSON.stringify(backDataArr))
      }
    }



  }, [totalOpr, backDataArr])



  // // // This will run once and only on reload ...

  useEffect(() => {

    // alert("second")


    // // // Log input value --->
    // console.log(firstInput)

    // // // On reload first input should focused
    firstInput.current.focus()




    // // // Get data from localStrorage and set --------->
    let getDataCount = localStorage.getItem("SimCalTotalOpr")
    // console.log(getDataCount)
    if (getDataCount) setTotalOpr(JSON.parse(getDataCount))


    // // // // Set data on arr of back btn (This way is Slow that's why doing very first of functon UI )--------->
    let getBackBtnData = localStorage.getItem("HistoryForBackBtn")
    // console.log(JSON.parse(getBackBtnData))
    if (getBackBtnData) setBackDataArr(JSON.parse(getBackBtnData))



    // // // // Make localStorage of history data if not created till now ---->   (Now not working)
    if (!getBackBtnData) {
      localStorage.setItem("HistoryForBackBtn", JSON.stringify([{ first: "", second: "", sing: "+", result: 0 }]))
    }


  }, [])



  // // // // Note : - 
  // // Two useEffects are valid ---------->
  // // Array.from(10).map() from previous project --------->






  // // // -------------------------- Actual UI here ----------------------- // // //

  return (
    <>

      <div className="main_prec_2 bg-warning">

        <div
          className='bg-white d-flex align-items-center justify-content-center flex-wrap flex-column text-center  border border-3 border-danger p-sm-5 py-5 rounded rounded-pill'
          style={{ width: "90%" }}
        >


          <h1>Simple Calculator</h1>

          <h3>Total Operations : {totalOpr} </h3>

          <div className='d-flex align-items-baseline justify-content-center flex-wrap'>


            <input
              placeholder='First Number'
              className='rounded my-1 text-center w-25'
              type="number" value={valuesOfNum.first}
              name="first"
              onChange={(event) => { setValuesOfNum({ ...valuesOfNum, [event.target.name]: event.target.value }) }}
              ref={firstInput}
              onKeyDown={ (e)=>{ if(e.key === "Enter") secondInput.current.focus() }  }

            />


            <div
              className='h-100  border border-success border-3 rounded-3 rounded-pill  px-2 fw-bold text-success mx-1 my-1'
              style={{ fontSize: "xx-large", fontFamily: "sans-serif" }}
            >{opratorSing}</div>




            <input
              placeholder='Second Number'
              className='rounded my-1 text-center w-25'
              type="number" value={valuesOfNum.second}
              name="second"
              onChange={(event) => { setValuesOfNum({ ...valuesOfNum, [event.target.name]: event.target.value }) }}
              ref={secondInput}
              onKeyDown={ (e)=>{ if(e.key === "Enter")claculateHandler() }  }
            />


            <button onClick={claculateHandler} className='ms-1 bg-info fw-bold text-white px-3 rounded my-1'>Equal To(=)</button>

            {/* back btn : (last first and scond and also last sing) */}

            <button
              className={(backDataArr.length > 0) ? "d-block ms-1 bg-warning fw-bold rounded px-3 my-1" : "d-none"}
              onClick={backHandlerFn}
            >Back(«)</button>


          </div>



          <div>
            <button onClick={() => { handeChangeOpr("+") }} className='ms-1 px-3 rounded my-2 mx-3 bg-primary text-white fw-bolder'>+</button>
            <button onClick={() => { handeChangeOpr("−") }} className='ms-1 px-3 rounded my-2 mx-3 bg-primary text-white fw-bolder'>−</button>

            <button onClick={() => { handeChangeOpr("×") }} className='ms-1 px-3 rounded my-2 mx-3 bg-primary text-white fw-bolder'>×</button>
            <button onClick={() => { handeChangeOpr("÷") }} className='ms-1 px-3 rounded my-2 mx-3 bg-primary text-white fw-bolder'>÷</button>

          </div>



          <div>
            <button onClick={() => { handeChangeOpr("pw") }} className='ms-1 px-3 rounded my-2 mx-3 bg-primary text-white fw-bolder'>Pw</button>
            <button onClick={() => { handeChangeOpr("mod") }} className='ms-1 px-3 rounded my-2 mx-3 bg-primary text-white fw-bolder'>Mod</button>
          </div>

          <div>
            <button onClick={() => { handeChangeOpr("%") }} className='ms-1 px-3 rounded my-2 mx-3 bg-primary text-white fw-bolder'>%</button>
          </div>


          <div className='d-flex justify-content-center align-items-center w-50'>
            <button
              className='ms-1 px-3 rounded my-2 mx-3 bg-danger text-white fw-bolder h-100'
              onClick={() => {
                setOpratorSing("+");
                setValuesOfNum({ first: "", second: "" });
                setResult(0);
                setBackDataArr([]);
                localStorage.removeItem("HistoryForBackBtn");
              }}
            >All Reset</button>

            <p
              className='  border border-2 border-dark ms-1 px-3 rounded my-2 mx-3 bg-success text-white fw-bolder'
            >
              {
                // // Previously duing this.
              }
              {
                // // `${valuesOfNum.first || "0"} ${opratorSing || "+"} ${valuesOfNum.second || "0"} = ${result || "0"}`
              }



              {
                // // // Callecting data from history arr that's why i can get previous data not current one

                backDataArr.length > 0
                  ? `${backDataArr[backDataArr.length - 1].first || 0} ${backDataArr[backDataArr.length - 1].sing || "+"} ${backDataArr[backDataArr.length - 1].second || 0} = ${backDataArr[backDataArr.length - 1].result || 0}`
                  : "Previous calculation"
              }

            </p>

            <p>

            </p>

          </div>

        </div>


      </div>



    </>
  )
}

export default Prectie2