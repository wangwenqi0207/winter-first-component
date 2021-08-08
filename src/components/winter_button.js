import React, { Component } from 'react';
import './winter_button.css';
import PropTypes from 'prop-types';

const typeStyle ={
  primary:"primary",
  dashed:"dashed",
  danger:"danger",
  link:"link"
}

const sizeStyle={
  large:"large",
  small:"small"
}

class WButton extends Component{
    constructor(props){
      super(props);
    }

   componentDidMount(){
     let container = document.getElementById('container').getAttribute('class')
     if(this.props.disabled){
        container = container.concat(' disabled');
        document.getElementById('container').setAttribute("class",container)
     }

     if(this.props.block){
      container = container.concat(' block');
      document.getElementById('container').setAttribute("class",container)
   }
   }

   ClickBtn(e){
     if(this.props.disabled){
        e.preventDefault();
        e.stopPropagation();
        return false;
     }else{
      this.props.onClick(e)
     }
   }


    render(){
      const {
      type,
      size,
      }=this.props;
      return(
        <div 
        id='container'
        className={`button-container ${typeStyle[type]} ${sizeStyle[size]}`}
        onClick={this.ClickBtn.bind(this)}
        >{this.props.children}</div>
      )
    }
}

 WButton.propTypes = {
  children: PropTypes.any,
  type:PropTypes.string,
  size:PropTypes.string,
  disabled:PropTypes.boolean,
  block:PropTypes.boolean,
  onClick:PropTypes.func
 }

 WButton.defaultProps = {
  children: "Default",
  type:("default" || '') && undefined,
  size:("default" || '') && undefined,
  disabled: false,
  block:false
 }

export default WButton;