/**
 * Created by raunak on 20/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import FetchCityData from '../actions/FetchCityData'


class LocationBar extends React.Component{

    constructor(props){
        super(props);
        this.state={city:"nagpur"};
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this)
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.FetchCityData(this.state.city);
    }
    onInputChange(event){
        this.setState({city:event.target.value})
    }


    render(){
        return(
            <form className='input-group' onSubmit={this.onFormSubmit}>
                <input className="form-control" value={this.state.city} onChange={this.onInputChange}/>
                <span className="input-group-btn"><button className="btn btn-secondary" type="Submit">Search</button></span>
            </form>

        )
    }


}
export default connect(null,{FetchCityData:FetchCityData})(LocationBar)