
import React from "react"
import { Route,Switch,BrowserRouter,Redirect,HashRouter} from "react-router-dom"
import Page1 from "./page/page1"
import Page2 from "./page/page2"
import Page3 from "./page/page3"
import { Provider } from "react-redux"
import configStore from "./store"
const store = configStore()//创建store
const App = () => (
    <Provider store={store}>
        <HashRouter>
            <BrowserRouter>
                <Route render={({location}) => {
                    return (
                        <Switch key={location.pathname}>
                            <Route exact path="/" component={Page1}/>
                            <Route path="/page2:info" component={Page2}/>
                            <Route path="/page3" component={Page3}/>
                            <Redirect from="*" to="/"/>
                        </Switch>
                    )
                }}/>
            </BrowserRouter>
        </HashRouter>
    </Provider>
  )
export default App