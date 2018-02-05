import React,{Component} from "react"
import { Link } from "react-router-dom"
class Page2 extends Component{
    render (){
        return (
        <div>
            <p>我是page3的页面</p> 
             <Link to="/">
                 我是去往page1的链接
             </Link>
        </div>
        )
    }
}
export default Page2