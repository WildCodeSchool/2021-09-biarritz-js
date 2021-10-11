import './App.css';

const monSimpson = [{
  firstName:"Bart",
  lastName:"Simpson",
  image:"bart-simpson.png"
},
{
  firstName:"Maggie",
  lastName:"Simpson",
  image:"maggie-simpson.png"
},
{
  firstName:"Lisa",
  lastName:"Simpson",
  image:"lisa-simpson.jpg"
},
{
  firstName:"Marge",
  lastName:"Simpson",
  image:"marge-simpson.jpg"
}]

const Avatar = ({firstName, lastName, image}) => {
  return(
    <div className = "container">
      <h2>{lastName.toUpperCase()} {firstName}</h2>
      <img src={`/assets/` + image} alt = "bart" width="300px" height="300px"/>      
    </div>
  );  
}


function App() {
  return (
    <div className="App">
      {monSimpson.map((simpson) => (
          <Avatar {...simpson}/>
      ))
      }
    </div>
  );
}

export default App;
