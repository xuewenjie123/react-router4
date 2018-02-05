import React,{Component} from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
class Page2 extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props)
    }
    render (){
        return (
        <div>
            <p>我是page2的页面</p> 
             <Link to="/page3">
                 我是去往page3的链接
             </Link>
             <p>通过地址栏上级传来了this.props.match.params.info～～～{this.props.match.params.info?this.props.match.params.info:""}
             还有this.props.location.query.name～～～{this.props.location.query?this.props.location.query.name:""}
             还有this.props.location.state.name～～～{this.props.location.state?this.props.location.state.name:""}</p>
        </div>
        )
    }
}
Page2.propTypes = {
    match:PropTypes.object,
    location:PropTypes.object
}
export default Page2