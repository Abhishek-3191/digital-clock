import React from 'react'


const App = () => {
    let time=new Date().toLocaleTimeString();
    const [ctime,setCtime]=React.useState(time);

    function getTime(){
        setCtime(new Date().toLocaleTimeString());
    }
    setInterval(getTime,1000);
  return (
    <div>
      <h1 className='heading'>{ctime}</h1>
    </div>
  )
}

export default App
