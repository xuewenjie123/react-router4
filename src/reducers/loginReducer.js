import * as types from "../typeDispatch/loginTypes"
const initialState = {
    logintest:"我是实验的redux"
  }
const loginReducer=(state=initialState, action)=>{
    switch (action.type) {
      case types.LOGIN_IN_DONE:
        return {
          ...state,
          ...action.payLoad
        }
        break
      default:
        return state
    }
  }
export default loginReducer
  