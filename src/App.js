import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =["Razzak"," OmarSani"," AnantaJolil"]
   const products =[
       {name :"Photoshop" ,price:"$90.99" },
       {name :"PDF reader" ,price:"$100.99" }

   ]


  return (
    <div className="App">
      <header className="App-header">
        <p>I m a react person </p>
        
        <Count></Count>
        <Users>

        </Users>

        <ul>
          { nayoks.map(nayok =><li>{nayok}</li>)}
         
        </ul>
         
         <Person name="Munna" job="Football" ></Person>
         <Person name="Masum" job="Cricket" ></Person>
          <Product product={products[0]} ></Product>
          <Product product={products[1]} ></Product>
      </header>
    </div>
  );
}
function Product(props){

  const productStyle={
    border : "1px solid gray",
    borderRadius : "5px",
    backgroundColor : "lightgray",
    height : "200px",
    width: "200px",
    float :"left",
    margin : "20px",
     
  }
  const {name,price}= props.product;
 return(
   <div style ={productStyle}>
       <h3 >{name}</h3>
       <h2>{price}</h2>

      <button>Buy Now</button>
   </div>
 )
  

}
function Person(props){
  return(<div  style={{border:`2px solid gold` , width : `400px` }}>
    <h3>My Name : {props.name}</h3>
    <h4>My Profession : {props.job}</h4>
    



    </div>
  )

}
function Count (){
const [count,setCount] = useState(10);
const handleIncrease = () =>{
  const newCount = count +1 ;
  setCount(newCount)
}
return(
  <div>
    <h1>Counter: {count}</h1>
    <button onMouseMove ={() =>setCount(count -1) }>Decreased</button>
   <button onClick ={ handleIncrease}>Increased</button>
    
  </div>
)

}

function Users(){
  const[users, setUsers]= useState([]);
  useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/users")
     .then (res => res.json())
     .then (data=> setUsers(data));

  }
  )

  return(
    <div>

      <h3>Dynamic User : {users.length}</h3>
      <ul>
       { users.map(user=> <li> {user.name} </li>)    } 
      </ul>
    </div>
  )


}
export default App;
