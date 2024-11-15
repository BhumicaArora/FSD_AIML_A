const parent= document.getElementsById("root");
const element=React.createElement("h1",{},"This is new heading");
const ele1= React.createElement("h2",{},"Shopping cart");
const item1=React.createElement("li",{},"Item1");
const item2=React.createElement("li",{},"Item2");

const list=React.createElement("ul",{},item1,item2);
const para=<p>This is new paragraph</p>
const root=ReactDOM.createRoot(parent); 
      root.render([element,ele1,list,para]);
      
