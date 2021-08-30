import React, { Component } from 'react';
import './card_download.css';
import PropTypes from 'prop-types';
import WButton from './winter_button'
import html2canvas from 'html2canvas'


class CardDown extends Component{
    constructor(props){
      super(props);
      
      this.state = {
        isMask:null,
        text:'',
        title:'',
        author:''
      }
    }

   componentDidMount(){
   
   }

  uploadImg (e){
    const imageFile = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload =  (e)=> {
          const base64Img = e.target.result
          // console.log(base64Img)
          if(base64Img){
            let showCard = document.getElementById('show_card')
            showCard.style.background=`url(${base64Img}) no-repeat`;
            showCard.style.backgroundSize=`contain`;
            this.setState({
              isMask:"mask"
            })
          }
      }
   }

   changeText(e){
     this.setState({
       text:e.target.value
     })
   }

   changeTitle(e){
    this.setState({
      title:e.target.value
    })
   }

   changeAuthor(e){
    this.setState({
      author:e.target.value
    })
   }

   saveImg() {
    let _canvas = document.getElementById('show_card')
    let canvas2 = document.createElement("canvas");
    let w = parseInt(window.getComputedStyle(_canvas).width);
    let h = parseInt(window.getComputedStyle(_canvas).height);

    const width = _canvas.offsetWidth // 获取dom 宽度
    const height = _canvas.offsetHeight // 获取dom 高度
    // canvas2.style.width = _canvas.offsetWidth + "px";
    // canvas2.style.height = _canvas.offsetHeight + "px";
    canvas2.getContext('2d').scale(2, 2)
    const rect = _canvas.getBoundingClientRect() // 获取元素相对于视口的
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 获取滚动轴滚动的长度

    // canvas2.useCORS=true, //是否使用CORS从服务器加载图像 !!!
    // canvas2.allowTaint=true //是否允许跨域图像污染画布  !!!
    // canvas2.taintTest=false

    html2canvas(_canvas, {
          x: rect.left+19, // 绘制的dom元素相对于视口的位置
          y: rect.top,
          scrollX: scrollTop,// 滚动的长度
          scrollY: -scrollTop,
          scale: 2, // 添加的scale 参数
          width: width-10, // dom 原始宽度
          height: height,
          useCORS: true, // 开启跨域
     }).then(function(canvas) {
      var url = canvas.toDataURL();
      var a = document.createElement("a");
      a.download = "cardImg";
      var event = new MouseEvent("click");
      a.href = url;
      a.dispatchEvent(event);
    });
  }


    render(){
      const {

      }=this.props;
      const { isMask,text,title,author} =this.state
      return(
        <div className='card_down'>
            <div className='input_card'>
            <div className='form_box'>
              <span>上传背景图：</span>
              <input accept="image/*" name="upimage" id="upload_file" type="file" onChange={(e)=>{this.uploadImg(e)}}></input>
            </div>
            <div className='form_box'>
              <span>标题：</span>
              <input type="text" onChange={this.changeTitle.bind(this)}/>
            </div> 
            <div className='form_box'>
              <span>正文：</span>
              <textarea rows='4' cols="25" onChange={this.changeText.bind(this)}/>
            </div> 
            <div className='form_box'>
              <span>作者：</span>
              <input type="text" onChange={this.changeAuthor.bind(this)}/>
            </div> 
            <div className='form_box'>
              <WButton type='primary' onClick={this.saveImg.bind(this)}>一键生成</WButton>
            </div>           
            </div>
            <div className='show_card' id='show_card'>
              <div className="card_download_text">{title}</div>
              <div className="card_download_text">{text}</div>
              <div className="card_download_text">{author}</div>
              <div className={isMask}></div>
            </div>           
        </div>
      )
    }
}

CardDown.propTypes = {
  children: PropTypes.any,
 }

CardDown.defaultProps = {
  children: "Default",
 }

export default CardDown;