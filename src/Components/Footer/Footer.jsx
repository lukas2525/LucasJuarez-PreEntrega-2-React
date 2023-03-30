import "./Footer.css";
import { SiPlaystation4 } from "react-icons/si"
import { SiInstagram } from "react-icons/si";
import { TbBrandTwitter } from "react-icons/tb";
import { SiWhatsapp } from "react-icons/si";
import { SlSocialYoutube } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="tituloPrincipal">
      <Link to="/" className="tituloPrincipal">
        <h1>¡VideoJuegos!</h1>
        <SiPlaystation4 fontSize="4em" color="white" />
      </Link>
      <div>
        <Link to="/"className="estilosRedes">
          <h2>Seguinos en Nuestras Redes</h2>
          <SiInstagram fontSize="2em" color="gold"  />
          <TbBrandTwitter fontSize="2em" color="gold" />
          <SlSocialYoutube fontSize="2em" color="gold" />
          <SiWhatsapp fontSize="2em" color="gold" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
