import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from '../utils/context';

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: '10rem' }}></div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
