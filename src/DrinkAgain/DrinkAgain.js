import './DrinkAgain.css';

const wines = [{
    id: 1,
    imageUrl: '/red-wine.jpg',
    isNew: true,
    label: 'Wine',
    isFinished: false,
  }, {
    id: 2,
    imageUrl: '/red-wine.jpg',
    label: 'Wine',
    isFinished: true,
  }, {
    id: 3,
    imageUrl: '/red-wine.jpg',
    label: 'Wine',
    isNew: true,
    isFinished: true,
  }, {
    id: 4,
    imageUrl: '/red-wine.jpg',
    label: 'Wine',
    isFinished: true,
  }, {
    id: 5,
    imageUrl: '/red-wine.jpg',
    label: 'Wine',
    isNew: true,
    isFinished: true,
  }, {
    id: 6,
    imageUrl: '/red-wine.jpg',
    label: 'Wine',
    isFinished: true,
  }, {
    id: 7,
    imageUrl: '/red-wine.jpg',
    label: 'Wine',
    isFinished: true,
  }, {
    id: 8,
    imageUrl: '/red-wine.jpg',
    label: 'Wine',
    isFinished: true,
  }]

  function DrinkAgain() {

    /* Mapping the wines into a new array of JSX nodes as drink again wines */
  
    const drinkAgainWines = wines.map(wine => 
      <li key={wine.id}>
        <div className="wine">
            <img src={wine.imageUrl} alt={wine.label}/>
            {(() => {
            if (wine.isNew) {
                return <span className="new-badge">New!</span>
                }
            })()}   
        </div>
        </li>
    )
    return (
        <div>
          <section className="category">
            <h2>Drink Again</h2>
            <ul>{drinkAgainWines}</ul>
            </section>
        </div>
    );
  }
export default DrinkAgain;