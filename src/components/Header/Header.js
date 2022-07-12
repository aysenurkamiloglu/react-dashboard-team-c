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
        <Search/>
      <h1 className="header__title">{title}</h1>
        <Interaction/>
        <User/>

        </Wrapper>
    
    </header>
    )
}

export default Header;
