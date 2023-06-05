import './HeroContent.css';
import Navigation from '../Navigation/Navigation';
import ButtonControls from '../Buttons/ButtonControls';

function HeroContent() {
  const heroContent = {
    title: 'Rex Goliath',
    subtitle: 'His Royal Majesty is back.',
    imageUrl: '/rex-goliath-logo.png',
    description: `America's most unhinged rooster is out of retirement, and this time? He's mad
    as hell.  Experience the unapologetic flavor burst of Rex Goliath.`,
  }
  return(
    <header className="hero">
    <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />
    <Navigation />
      <div className="hero-content">
        <h2><img src={heroContent.imageUrl } alt={heroContent.title} /></h2>
        <h3>{heroContent.subtitle}</h3>
        <p>{heroContent.description}</p>
        <ButtonControls />
      </div>
    </header>
  )
}

export default HeroContent;