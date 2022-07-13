import Wrapper from "../Wrapper/Wrapper"
import Search from "../Search/Search";

import Interaction from "../Interaction/Interaction";

import User from "../User/User";
import "./Header.css"

function Header() {

const title = "Projects";

    return (
        <header className="header">
        <Wrapper>
        <div className="header-title">
        <span >{title}</span>
        </div>

        <Search/>
        <Interaction/>
        <User/>

        </Wrapper>
    
    </header>
    )
}

export default Header;
