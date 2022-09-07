import './App.css';
import Favorites from './components/Favorites';
import Search from './components/Search';
import Modal from './components/Modal';
import Meals from './components/Meals';

function App() {
  return (
    <main>
      <Search />
      <Favorites />
      <Meals />
      <Modal />
    </main>
  );
}

export default App;
