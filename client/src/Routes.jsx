// import RegisterAndLoginForm from "./RegisterAndLoginForm.jsx";
import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";
import RegisterAndLoginForm from "./RegisterAndLoginForm.jsx";
// import Chat from "./Chat";

export default function Routes() {
  const {username, id} = useContext(UserContext);

  if (username) {
    return 'logged in '+ username + id;
  }
  console.log('ka');
  return (
    <RegisterAndLoginForm/>
  );
}