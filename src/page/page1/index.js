import React,{Component} from "react"
import { Link } from "react-router-dom"
class Page1 extends Component{
    render (){
        const name = "文杰"
        return (
            <div>
            <p>我是page1的页面</p> 
             {/* <Link to={`/page2:{name:${name}}`}>
                 我是去往page2的链接  链接传参
             </Link> */}
             <Link to={{pathname:`/page2:{name:${name}}`,state:{name:"state"},query:{name:"query"}}}>我是去往page2的链接</Link>
          </div>
        )
    }
}
export default Page1