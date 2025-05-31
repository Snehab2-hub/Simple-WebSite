/*import React from 'react'
import FunComponent1 from './funcomponents/funcomponents1'
import FunComponent2 from './funcomponents/funcomponents2'
import FunComponent3 from './funcomponents/funcomponents3'
import FunComponent4 from './funcomponents/funcomponents4'

function App() {
  return (
   <>
    <FunComponent1/>
    <div style={{display:"flex"}}>
    <FunComponent2/>
    <FunComponent3/>
    </div>
    <FunComponent4/>
   </>
  )
}

export default App

import React from 'react';
import ClassComponent1 from './NestedClassComponents/ClassComponent1';
import ClassComponent2 from './NestedClassComponents/ClassComponent2';
import ClassComponent3 from './NestedClassComponents/ClassComponent3';
import ClassComponent4 from './NestedClassComponents/ClassComponent4';
function App() {
  return (
  <div>
      <ClassComponent1/>
      <div style={{display:"flex" ,gap:"30px",margin:"10px"}}>
      <ClassComponent2/>
      <ClassComponent3/>
      </div>
      <ClassComponent4/>
    </div>
  );
};

export default App;
import React from "react";
import Nav from "./Assignment/Nav";
import Component1 from "./Assignment/Component1";
import Component2 from "./Assignment/Component2";
function App() {
  return (
    <>
     <Nav/>
     <div style={{display:"flex"}}>
     <Component1/>
     <img src="food.jpeg" height={689} width={800}></img>
     </div>
     <Component2/>
    </>
  );
}
import React from 'react';
import Example1 from './Props/Example1';  // Ensure the correct path

function App() {
  return (
    <>
      <Example1 />
    </>
  );
}
export default App;

import React from 'react';
import Example1 from './MiniProject/Example1';

function App() {
  return (
    <>
       
      <Example1 />
    </>
  );
}

export default App;
import React from 'react'
import Component1 from './ReactState/Component1'

class App extends React.Component{
  render(){
    return(
      <>
      <Component1/>
      </>
    )
  }
}

export default App*/
import React from 'react';
import Nav from './Website/nav';
import Component1 from './Website/Component1';
import Component2 from './Website/Component2';
import Component3 from './Website/Component3';
function App() {
  return (
    <>
      <Nav />
      <Component1 />
      <Component2 />
     <Component3/>
    </>
  );
}

export default App;
/*
import React from 'react'
import Example2 from './ReactConditionalRendring/Example2'

function App() {
  return (
<>
{/* <Example2 condition={true} /> */
/* <Example2 condition={false} />

</>
  )
}

export default App
import React from 'react'
import CourseRegistration from './RegisterForm/CourseRegistration'
// import Signup from './facebook/Signup'
//import Login from './facebook/Login'

function App() {
  return (
   <>
   <CourseRegistration/>
  
   </>
  )
}

export default App

import React from 'react'
import Signup from './facebook/Signup'
// import Login from './facebook/Login'

function App() {
  return (
    <>
   
    <Signup/>
    </>
  )
}

export default App
import React from 'react'
import Example3 from './ReactUseEffect/Example3';

function App() {
  return (
    <>
    <Example3/>
    </>
  );
}


export default App

import React from 'react';
import Example4 from './ReactUseEffect/Example4';

function App() {
    return <Example4 />;
}

export default App;
import React from 'react'
import Component1 from './PropDrilling/Component1'


function App() {
  return (
    <>
    <Component1/>
  
    </>
  )
}

export default App
import React from 'react'
import Component1 from './UseContext/Component1'

function App() {
  return (
   <Component1/>
  )
}

export default App
import React from 'react'
import Component1 from './CustomHook/Component1'
import Component2 from './CustomHook/Component2'

function App() {
  return (
   <>
   <Component1/>
   <Component2/>
   </>
  )
}

export default App
import React from 'react';
import UseToggle1 from './CustomHook/useToggle1';  // Import the custom hook component

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Custom Hook Example</h1>
      <UseToggle1 />
    </div>
  );
}

export default App;
import React from 'react'
import Example2 from './APICallsAxios/Example2'

function App() {
  return (
  <>
  <Example2/>
  </>
  )
}

export default App
import React, { lazy, Suspense } from 'react'
import LightComponent from './LazyLoading/LightComponent'
import LoadedComponent from './LazyLoading/LoadedComponent'

let LoadedComponent=lazy(()=>import ('./LazyLoading/LoadedComponent'))

function App() {
  return (
    <>
    <LightComponent/>
    <Suspense fallback={<h1>Loading data!!!!!..............</h1>}>
    <LoadedComponent/>
    </Suspense>
    
    </>
  )
}
export default App

import React from 'react'
import Data from './LazyLoading/Data'
function App() {
  return (
    <>
    <Date/> 
    </>
  )
}
export default App

import React from 'react'
import Heading from './Project/Heading'
import Weather from './Project/Weather'

function App() {
  return (
    <>
    <Heading/>
    <Weather/>
    </>
  )
}

export default App*/
