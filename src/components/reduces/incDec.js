

let initialstate = localStorage.getItem("initSateRedux") | 0;


export const numberReduer = (state = initialstate, action) => {

    switch (action.type) {

        case "INCREMENT":

            if (state > 120) {
                return alert("Can't increase number more then 120")
            }
            let newStateIN = state + +(action.payload);
            localStorage.setItem("initSateRedux", JSON.stringify(newStateIN))
            return newStateIN;

        case "DECREMENT":

            if (state < -20) {
                return alert("Can't reduce number less then -20")
            }
            let newStateDE = state - action.payload
            localStorage.setItem("initSateRedux", JSON.stringify(newStateDE))
            return newStateDE;

        default: return state

    }

}

