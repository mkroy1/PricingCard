import "./App.css";
import PriceCard from './components/PriceCard'
import data from "./Data"
//Fonts-family imported...
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap');
</style>;

//------------------------------------------------------------------------------

function App() {
  //Import Array of objects data from Data.jsx to pass arguments
  //to the invoked function...
  

  return (
    <div className="App">
      {/* Title of the cards.. */}
      <h4 className="animate-charcter" id="title">💲PRICING CARD</h4>
      {/* map method is used to get the data  dynamically
      from the array of objects... */}
      {data.map((item, index) => ( 
        // Function invoked
        <PriceCard
          key={index}
          title={item.header}
          sub_title={item.sub_header}
          list_1={item.list_1}
          list_2={item.list_2}
          list_3={item.list_3}
          list_4={item.list_4}
          list_5={item.list_5}
          list_6={item.list_6}
          list_7={item.list_7}
          list_8={item.list_8}
        />
      ))}
      ;
    </div>
  );
}
//------------------------------------------------------------------------------

export default App;

