import "./Footer.css";
import { GiConsoleController } from "react-icons/gi";
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
        <GiConsoleController fontSize="3em" color="gold" />
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
