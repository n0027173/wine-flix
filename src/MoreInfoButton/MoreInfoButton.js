import './MoreInfoButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function MoreInfoButton() {
    return(
        <button className="secondary-action" onClick={()=>alert("More info button clicked!")}>
        <FontAwesomeIcon icon={faInfoCircle} />
        <span>More Info</span>
        </button>
    )
}
export default MoreInfoButton;