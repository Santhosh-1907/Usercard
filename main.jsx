import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import { FunctionProps } from './component/FunctionProps'
// import { MultiTypeProps } from './component/MultiTypeProps'
// import { Oneofprops } from './component/Oneofprops'
// import { ArraySample } from './component/ArraySample'
// import Student from './component/Student'
// import { PropChildren } from './component/PropChildren'
// import Header from './component/Header.jsx'
import { UserCard } from './component/UserCard.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {/* <Header/>
    <Student name="Santhosh" age = {25} married ={false}/>
    <Student name="Sankar" age = {50} married ={true}/>
    <Student name="Kuppan" age = {60} married ={false}/>
    <PropChildren>
      <h1>Hi Santhosh!</h1>
      <p>How are you?</p>
      <p>How are you?</p>
      </PropChildren> 
      
       <ArraySample /> 
       <Oneofprops color= "green"/> 

      <MultiTypeProps value="Hello"/>
      <MultiTypeProps value={25}/>
      <MultiTypeProps value={true}/>

      <FunctionProps /> */}
      <UserCard/>
      
  </StrictMode>
)
