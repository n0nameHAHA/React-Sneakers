import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { title: 'Men Sneakers Nike Blazer Mid Suede', price: 15999, imageUrl: '/img/sneakers/1.jpg' },
  { title: 'Men Sneakers Nike Air Max 270', price: 12999, imageUrl: '/img/sneakers/2.jpg' },
  { title: 'Men Sneakers Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneakers/3.jpg' },
  {
    title: 'Men Sneakers Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: '/img/sneakers/4.jpg',
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..."></input>
          </div>
        </div>
        <div className=" d-flex">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
