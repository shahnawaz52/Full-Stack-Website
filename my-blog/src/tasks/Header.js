// import exp = require("constants")
import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
    // console.log(showAdd)
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            {<Button color={showAdd ? "#fa8072" : "#2E8B57"} text={showAdd ? 'close' : 'Add'} onClick={onAdd} />}
        </header>
    )
}

export default Header;