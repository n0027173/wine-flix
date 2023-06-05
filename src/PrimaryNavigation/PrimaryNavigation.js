import './PrimaryNavigation.css';

const primaryNavigationLinks = [{
    id: 1,
    href: 'https://developer.mozilla.org',
    linkName: 'Home',
    isActive: 'active',
  },
  {
    id: 2,
    href: 'https://developer.mozilla.org',
    linkName: 'Whites',
    isActive: '',
  },
  {
    id: 3,
    href: 'https://developer.mozilla.org',
    linkName: 'Reds',
    isActive: '',
  },
  {
    id: 4,
    href: 'https://developer.mozilla.org',
    linkName: 'Blends',
    isActive: '',
  },
];

function PrimaryNavigation() {
  const primaryNavLinks = primaryNavigationLinks.map(primaryNavigationLink => 
    <li key={primaryNavigationLink.id} className={primaryNavigationLink.isActive}>
      <a href={primaryNavigationLink.href}>{primaryNavigationLink.linkName}</a>
    </li>
  )
  return(
    <section className="primary-navigation">
    <h1>WineFlix</h1>
      <ul className="navigation-links">
        {primaryNavLinks}
      </ul>
    </section>
  )
}
export default PrimaryNavigation;