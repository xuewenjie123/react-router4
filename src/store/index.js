import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import reducer from "../reducers"
//applyMiddleware来自redux可以包装store的dispatch
//thunk作用是使action创建函数可以返回一个function代替一个action对象
//enhancer 是中间件，且第二个参数为 Function 且没有第三个参数时，可以转移到第二个参数，那么就有两种方式设置中间件：
//export default function createStore(reducer, preloadedState, enhancer) {
//      if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
//          enhancer = preloadedState
//          preloadedState = undefined
//      }
//    }
//第一种方式融入中间件的方式
// const store = createStore(reducer, null, applyMiddleware(...))
//第二种方式融入中间件的方式
// const store = createStore(reducer, applyMiddleware(...))
//第三种方式融入中间件
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const configStore = () => {
    const store = createStoreWithMiddleware(reducer)
    return store
}
export default configStore