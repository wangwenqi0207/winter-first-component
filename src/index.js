import React from 'react';
import ReactDOM from 'react-dom';
import CardDown from './components/card_download';


const App = () => {
  return (
    <div>
      <CardDown />
    </div>
  )
}

//要实现局部热更新，必须要添加此句 
if (module.hot) {module.hot.accept()}

ReactDOM.render(<App />, document.getElementById('root'));