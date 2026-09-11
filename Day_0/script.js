let rh1 = React.createElement("h1", {className: "box", id: "KD"}, React.createElement("span", null, "I am From React h1>span"))


let realDomElem = document.querySelector("#root")


let rootOfReact = ReactDOM.createRoot(realDomElem)


rootOfReact.render(rh1)