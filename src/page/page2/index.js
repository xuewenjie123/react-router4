import React,{Component} from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { DatePicker, Radio } from "antd"
const { MonthPicker, RangePicker, WeekPicker } = DatePicker
let _this = this
class Page2 extends Component{
    constructor(props){
        super(props)
        this.state={
          size: 'default',
          startValue: null,
          endValue: null,
          endOpen: false,
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
    handleSizeChange(e){
        console.log(e)
        _this.setState({ size: e.target.value });
      }

      disabledStartDate(startValue){
        const endValue = _this.state.endValue;
        if (!startValue || !endValue) {
          return false;
        }
        return startValue.valueOf() > endValue.valueOf();
      }
    
      disabledEndDate(endValue){
        const startValue = _this.state.startValue;
        if (!endValue || !startValue) {
          return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
      }
    
      onChange(field, value){
         
        _this.setState({
          [field]: value,
        });
        console.log(_this.state.startValue)
      }
    
      onStartChange(value){
          console.log("我是start")
          console.log(value)
          _this.onChange('startValue', value);
      }
    
      onEndChange(value){
        _this.onChange('endValue', value);
      }
    
      handleStartOpenChange(open){
        if (!open) {
            _this.setState({ endOpen: true });
        }
      }
    
      handleEndOpenChange(open){
        _this.setState({ endOpen: open });
      }
    
    render (){
        _this =this
        const { startValue, endValue, endOpen } = this.state;
        return (
        <div>
            {/* <p>我是page2的页面</p> 
             <Link to="/page3">
                 我是去往page3的链接
             </Link>
             <p>通过地址栏上级传来了this.props.match.params.info～～～{this.props.match.params.info?this.props.match.params.info:""}
             还有this.props.location.query.name～～～{this.props.location.query?this.props.location.query.name:""}
             还有this.props.location.state.name～～～{this.props.location.state?this.props.location.state.name:""}</p>
             const { size } = this.state; */}
                {/* <Radio.Group value={size} onChange={(e)=>this.handleSizeChange(e)}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                 <br /><br /> 
                <DatePicker size={size} /> */}
                {/* <br />
                <MonthPicker size={size} placeholder="Select Month" />
                <br />
                <RangePicker size={size} />
                <br />
                <WeekPicker size={size} placeholder="Select Week" /> */}
                  <DatePicker
                    disabledDate={_this.disabledStartDate}
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={startValue}
                    placeholder="Start"
                    onChange={_this.onStartChange}
                    onOpenChange={_this.handleStartOpenChange}
                    />
                    {/* <DatePicker
                    disabledDate={()=>this.disabledEndDate()}
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={endValue}
                    placeholder="End"
                    onChange={()=>this.onEndChange()}
                    open={endOpen}
                    onOpenChange={()=>this.handleEndOpenChange()}
                    /> */}
        </div>
        )
    }
}
Page2.propTypes = {
    match:PropTypes.object,
    location:PropTypes.object
}
export default Page2