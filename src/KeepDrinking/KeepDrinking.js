import './KeepDrinking.css';

const wines = [{
    id: 1,
    imageUrl: '/red-wine.jpg',
    progress: 25,
    label: 'Wine',
  }, {
    id: 2,
    imageUrl: '/red-wine.jpg',
    progress: 50,
    label: 'Wine',
  }, {
    id: 3,
    imageUrl: '/red-wine.jpg',
    progress: 75,
    label: 'Wine',
  }, {
    id: 4,
    imageUrl: '/red-wine.jpg',
    progress: 90,
    label: 'Wine',
  }, {
    id: 5,
    imageUrl: '/red-wine.jpg',
    progress: 25,
    label: 'Wine',
  }, {
    id: 6,
    imageUrl: '/red-wine.jpg',
    progress: 50,
    label: 'Wine',
  }, {
    id: 7,
    imageUrl: '/red-wine.jpg',
    progress: 75,
    label: 'Wine',
  }, {
    id: 8,
    imageUrl: '/red-wine.jpg',
    progress: 90,
    label: 'Wine',
  }]

  function KeepDrinking() {
    const keepDrinkingWines = wines.map(wine => 
        <li key={wine.id}>
        <div className="wine">
            <img src={wine.imageUrl} alt={wine.label}/>
            <div className="amount-consumed">
                <progress min="0" max="100" value={wine.progress}></progress>
              </div>   
        </div>
        </li>
    )
    return (
        <div>
        <section className="category">
        <h2>Keep Drinking</h2>
            <ul>{keepDrinkingWines}</ul>
        </section>
        </div>
    );
  }
export default KeepDrinking;