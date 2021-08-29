const $app = document.querySelector(".app");
const R = React.createElement;
const RC = React.Component;
//=> sin jsx
// ReactDOM.render(R("h1", "class", "hola Mundo desde react "), $app);
//=> con jsx

//=>Esta forma ya no se utiliza por que ahora se utiliza la forma de funciones o arrow functions
// class Legacy extends RC {
//   render() {
//     return (
//       <div>
//         <h1> Legacy</h1>
//       </div>
//     );
//   }
// }

const Legacy = (props) => {
  const nombre = "user UNDeFINED";
  // const [state , getState] = React.useState
  console.log(React.useState());
  return (
    <div class="root">
      <h1>{props.title}</h1>
      <h3>{nombre}</h3>
    </div>
  );
};

ReactDOM.render(<Legacy title={"Legacy New Version"} />, $app);
