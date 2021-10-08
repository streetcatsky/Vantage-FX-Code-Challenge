import './media/css/global.css';
import './media/css/normalize.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RatesList from './pages/RatesList'

function App() {
  return (
    <BrowserRouter >
      <Routes >
        <Route
          path="/*"
          element={<RatesList />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
