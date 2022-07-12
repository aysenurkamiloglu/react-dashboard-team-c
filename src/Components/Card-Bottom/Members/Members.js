import "./Members.css";
import "../CardBottom.css";

const Members = ({ photo }) => {
  console.log(photo);

  return (
    <>
    <div className="MembersContainer">
      {photo.map((item) => {
        return (
          <div className="circle">
            <img className="Circle" src={item} alt=""></img>
          </div>
        );
      })}
      </div>
      <div className="MembersIconSecond">
        <div className="AddMemberButton">+</div>
      </div>
    </>
  );
};

export default Members;
