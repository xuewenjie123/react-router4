
import React from "react"
import { Route,Switch,BrowserRouter,Redirect,HashRouter} from "react-router-dom"
import Page1 from "./page/page1"
import Page2 from "./page/page2"
import Page3 from "./page/page3"
const App = () => (
    <HashRouter>
        <BrowserRouter>
            <Route render={({location}) => {
                return (
                    <Switch key={location.pathname}>
                        <Route exact path="/" component={Page1}/>
                        <Route path="/page2:info" component={Page2}/>
                        <Route path="/page3" component={Page3}/>
                        <Redirect to="/"/>
                    </Switch>
                )
            }}/>
        </BrowserRouter>
    </HashRouter>
  )
export default App