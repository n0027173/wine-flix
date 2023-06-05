import './DrinkButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function DrinkButton() {
    return(
        <button className="primary-action" onClick={()=>alert("Drink button clicked!")}>
        <FontAwesomeIcon icon={faPlay} />
        <span>Drink</span>
        </button>
    )
}
export default DrinkButton;