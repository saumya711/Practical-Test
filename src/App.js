import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, { useState}  from "react";
import LoginForm from "./component/LoginForm";
import ToDoList from "./component/ToDoList";


function App() {
  const adminUser = {
    email: "admin",
    password: "admin"
  }

  const [user, setUser] = useState({ email: ""});
  const [ error, setError] = useState("");
  

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
    console.log("logged in");
    setUser({
      email: details.email
    })
    } else {
      console.log("details are not match");
      setError("details are not match");
    }

  }

  const Logout = () => {
    setUser({email:""});
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div>
          <ToDoList />
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )
    }
    </div>
  );
}

export default App;
