import React,{Component} from "react"
import {connect} from "react-redux"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import  * as loginAction from "../../action/loginAction"
import {Button} from "antd"
import "./index.css"
class Page1 extends Component{
    _click(){
        this.props.login({logintest:"我是不是改变了"})
    }
    render (){
        const name = "文杰"
        return (
            <div>
            <p onClick={()=>{this._click()}}>我是page1的页面 这是redux的数据时尚logintest{this.props.logintest}</p> 
            <Link to={{pathname:`/page2:{name:${name}}`,state:{name:"state"},query:{name:"query"}}}>我是去往page2的链接</Link>
            <Button type="primary">Primary</Button>
            <Button className="btn1">Default</Button>
            <Button type="dashed">Dashed</Button>
            {/* <Button type="danger">Danger</Button> */}
          </div>
        )
    }
}

const mapStateToProps=(state)=> {
    return {
        logintest: state.loginReducer.logintest
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
      login: (payload) => dispatch(loginAction.login(payload))
    }
}
Page1.propTypes={
    logintest:PropTypes.string,
    login:PropTypes.func
}
export default connect(mapStateToProps,mapDispatchToProps)(Page1)