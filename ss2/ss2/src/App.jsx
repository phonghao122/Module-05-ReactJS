import React, {} from 'react'
import './App.css'

function App() {
  const li1 = React.createElement("li",null,"HN");
  const li2 = React.createElement("li",null,"DN");
  const li3 = React.createElement("li",null,"HCM");
  const ul = React.createElement("ul",null,[li1,li2,li3]);
  const h1 = React.createElement("h1",null,"Thành phố trực thuộc trung ương");
  const div = React.createElement("div",null,[h1,ul]);
  return div;
}

export default App
