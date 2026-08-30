import Card from "./components/Card";

function App() {
  return (
    <div className="app">
      <h1>Hello mọi người!</h1>
      <Card name={"Thanh"} age={"20"}/>
      <Card name={"Toàn"} age={"30"}/>
      <Card name={"Linh"} age={"25"}/>
      <Card />
    </div>
  )
}

export default App;