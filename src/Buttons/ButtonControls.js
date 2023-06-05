import './ButtonControls.css';
import DrinkButton from '../DrinkButton/DrinkButton';
import MoreInfoButton from '../MoreInfoButton/MoreInfoButton';

const ButtonControls = () => {
    return (
        <ul className="controls">
          <li>
              <DrinkButton />
          </li>
          <li>
              <MoreInfoButton />
          </li>
        </ul>
    )
}

export default ButtonControls;