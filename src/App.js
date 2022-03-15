import Card from './Components/Card'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import './App.css'
const App = () => {
  return (
    <div className="main">
      <Card text="cabins" image={img1}/>
      <Card text="water cabin" image={img2}/>
      <Card text="flat ground cabin" image={img3}/>
      <Card image={img4} text="cabin with dogs" />
    </div>
  );
};


export default App;