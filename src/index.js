import React from 'react';
import ReactDOM from 'react-dom';
import WButton from './components/winter_button';

function clickBtn(e){
  // console.log(e,"wwwww")
}

const App = () => {
  return (
    <div>
      <WButton type='primary' size='' disabled={false} block={false} onClick={(e)=>clickBtn(e)}>
        Primary
      </WButton>
    </div>
  )
}

//要实现局部热更新，必须要添加此句 
if (module.hot) {module.hot.accept()}

ReactDOM.render(<App />, document.getElementById('root'));