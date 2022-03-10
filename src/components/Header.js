import {React} from "react"

function Header({onPatientSearch, search}) {

    return(
        <header>
            <div>
                <img src="./images/hypnocil-logo.png" alt="Hypnocil logo"/>
                <h1>Clinical Trials</h1>
            </div>
            <input id="search" type="text" placeholder="Search..."
            value={search} onChange={e => onPatientSearch(e.target.value)} ></input>
        </header>
    );
}

export default Header;