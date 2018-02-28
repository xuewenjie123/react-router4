import React,{Component} from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
// import { DatePicker, Radio } from "antd"
// const { MonthPicker, RangePicker, WeekPicker } = DatePicker
// let _this = this
class Page2 extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
  
  
    render (){
        // _this =this
        // const { startValue, endValue, endOpen } = this.state;
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