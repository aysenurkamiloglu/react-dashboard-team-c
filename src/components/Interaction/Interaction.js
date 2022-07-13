import "./Interaction.css"
import message_icon from './message-icon.jpg'
import notification_icon from './notification-icon.png'
import settings_icon from './settings-icon.png'

import Wrapper from "../Wrapper/Wrapper"

const InteractionBar = () => (
  <div className="interaction-bar">

    <img class="message-icon" src={message_icon}/>
    <img class="notification-icon" src={notification_icon}/>
    <img class="settings-icon" src={settings_icon}/>

  </div>
   

);

export default InteractionBar;