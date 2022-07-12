import React from "react";
import ProgressBar from "./Progressbar/ProgressBar";
import Data from "./Data.json";
import Members from "./Members/Members";

import "./CardBottom.css";

const CardBottom = () => {
  return Data.map((item) => {
    
    return (
        <div className="Card">
          <div className="Members">
            <div><h3 className="MembersText">Members</h3></div>
            
            <div className="MembersIcons">
              <Members photo={item.membersPhoto.map((item) => item.photo)} />
            </div>
          </div>
          <div className="Progress">
            <div className="ProgressFirst">
              <div className="ProgressText">Progress</div>
              <div className="ProgressPercentage">
                <span>{item.progress}%</span>
              </div>
            </div>
            <div className="ProgressValue">
              <ProgressBar value={item.progress} />
            </div>
          </div>
        </div>
    );
  });
};

export default CardBottom;
