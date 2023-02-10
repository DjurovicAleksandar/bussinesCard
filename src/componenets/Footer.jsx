import facebook from "../assets/imgs/facebook.png";
import twitter from "../assets/imgs/twitter.png";
import github from "../assets/imgs/github.png";
import instagram from "../assets/imgs/instagram.png";

function Footer() {
  return (
    <div className="bg-footerBg p-4 flex items-center justify-center gap-6 rounded-b-xl">
      <img src={twitter} alt="twitter" />
      <img src={facebook} alt="facebook" />
      <img src={instagram} alt="instagram" />
      <img src={github} alt="github" />
    </div>
  );
}

export default Footer;
