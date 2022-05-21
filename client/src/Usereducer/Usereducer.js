export const initialState = null

export const reducer = (state, action) => {
    if (action.type === "user") {
        // return {

        //     user:action.payload
        // }
        return action.payload;
    }
    else if (action.type === "CLEAR") {

        // return {

        //     user:null
        // }
        return null;
    }
    else {
        return state
    }

}