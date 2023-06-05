import './Navigation.css';
import PrimaryNavigation from '../PrimaryNavigation/PrimaryNavigation.js';
import SecondaryNavigation from '../SecondaryNavigation/SecondaryNavigation.js';

const Navigation = () => {
    return (
    <nav className="navigation">
        <PrimaryNavigation />
        <SecondaryNavigation />
    </nav>
    )
}

export default Navigation;