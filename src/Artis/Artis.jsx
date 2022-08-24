import { useParams } from "react-router-dom";
import "../Artis/Artis.css";
import "../App.css"
import FotoArtis from "../Home/Home";
import Foto1 from "../Assets/Harry-Styles.jpg";
// import Foto2 from "../Assets/Louis-Tomlinson.jpg";
// import Foto3 from "../Assets/Niall-Horan.jpg";
// import Foto4 from "../Assets/Liam-Payne.jpg";
// import Foto5 from "../Assets/Zayn-Malik.jpg";
// import Foto6 from "../Assets/Taylor-Swift.jpg";
// import Foto7 from "../Assets/Selena-Gomez.jpg";
// import Foto8 from "../Assets/Louis-Partridge.jpg";
// import Foto9 from "../Assets/Jennie.jpg";
// import Foto10 from "../Assets/Rose.jpg";
// import Foto11 from "../Assets/Justin-Bieber.jpg";
// import Foto12 from "../Assets/Tom-Holland.jpg";
// import Foto13 from "../Assets/Zendaya.jpg";
// import Foto14 from "../Assets/Adele.jpg";
// import Foto15 from "../Assets/Chris-Evans.jpg";

const Artis = () => {
  let params = useParams();
  return (
    <>
    <div className="Body">
      <h3>Ini {params.nama_artis}</h3>
      <FotoArtis gambar={Foto1} />
      {/* <FotoArtis gambar={Foto2} />
      <FotoArtis gambar={Foto3} />
      <FotoArtis gambar={Foto4} />
      <FotoArtis gambar={Foto5} />
      <FotoArtis gambar={Foto6} />
      <FotoArtis gambar={Foto7} />
      <FotoArtis gambar={Foto8} />
      <FotoArtis gambar={Foto9} />
      <FotoArtis gambar={Foto10} />
      <FotoArtis gambar={Foto11} />
      <FotoArtis gambar={Foto12} />
      <FotoArtis gambar={Foto13} />
      <FotoArtis gambar={Foto14} />
      <FotoArtis gambar={Foto15} /> */}
 </div>   
 </>
  );
};

export default Artis;