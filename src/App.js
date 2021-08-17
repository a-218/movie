
function Greetings() {
  return (
    <div className="Greetings">
      <h2>Hello world </h2>
      <LoginButton />
      <LogoutButton />
    </div>


  );
}


const Person = () => {
  return (
    <p>this is message</p>);

};


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
export default Greetings;
