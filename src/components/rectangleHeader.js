import "./rectangleHeader.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const rectangleHeader=()=>{
    return(
        <ul className="rectangleHeader col-7">
            <li> <a href="#">All</a> </li>
            <li> <a href="#" >Inactive</a> </li>
            <li> <a href="#" >Active</a> </li>
            <li> <a href="#" >On hold</a> </li>
            <li> <a href="#" >Completed</a> </li>
            <li> 
                <a href="#" >Default</a> 
                <FontAwesomeIcon className="fa-sm icon fa-fw" icon={faArrowDown} />
                <FontAwesomeIcon className="fa-sm icon" icon={faBars} />
            </li>
        </ul>
    )
}

export default rectangleHeader;