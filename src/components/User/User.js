import "./User.css"
import user_icon from './user_icon.jpg'


import Wrapper from "../Wrapper/Wrapper"

const UserBar = () => (
  <div className="User-bar">

  <img class="user-icon" src={user_icon}/>

  <span class="user-name">  Asfak Mahmud </span>
  <span class="user-mail"> asfakmahmudbd@gmaill.com  </span>




  </div>
   

);

export default UserBar;