
export const incNumber = (num = 1) =>{

    return {
        type : "INCREMENT" ,
        payload : num
    }

}


export const decNumber = (num = 1)=>{

    return {
        type : "DECREMENT" ,
        payload : num 
    }
    
}
