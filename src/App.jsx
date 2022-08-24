import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Artis from "./Artis/Artis";


function App() {
  return (
    <>
      <form>
        <h1>Daftar Artis</h1>
        <button>
        <Link to="/Artis/Harry Style">Harry Style</Link>
        </button>
        <button>
        <Link to="/Artis/Louis Tomlinson">Louis Tomlinson</Link>
        </button>
        <button>
        <Link to="/Artis/Niall Horan">Niall Horan</Link>
        </button>
        <button>
        <Link to="/Artis/Liam Payne">Liam Payne</Link>
        </button>
        <button>
        <Link to="/Artis/Zayn Malik">Zayn Malik</Link>
        </button>
        <button>
        <Link to="/Artis/Taylor Swift">Taylor Swift</Link>
        </button>
        <button>
        <Link to="/Artis/Selena Gomez">Selena Gomez</Link>
        </button>
        <button>
        <Link to="/Artis/Louis Partridge">Louis Partridge</Link>
        </button>
        <button>
        <Link to="/Artis/Jennie">Jennie</Link>
        </button>
        <button>
        <Link to="/Artis/Rose">Rose</Link>
        </button>
        <button>
        <Link to="/Artis/Justin Bieber">Justin Bieber</Link>
        </button>
        <button>
        <Link to="/Artis/Tom Holland">Tom Holland</Link>
        </button>
        <button>
        <Link to="/Artis/Zendaya">Zendaya</Link>
        </button>
        <button>
        <Link to="/Artis/Adele">Adele</Link>
        </button>
        <button>
        <Link to="/Artis/Chris Evans">Chris Evans</Link>
        </button>
      </form>
      <Routes>
        <Route path="/Artis/:nama_artis" element={<Artis />} />
      </Routes>
    </>
  );
}

export default App;