import email from "../assets/imgs/Mail.png";
import linkedin from "../assets/imgs/linkedin.png";

function Main() {
  return (
    <div className="bg-mainBg px-cardX py-cardY">
      <div className="text-center">
        <h1 className="text-title text-titleColor font-bold">Laura Smith</h1>
        <h5 className="text-subTitle text-subColor">Frontend Developer</h5>
        <p className="mt-3">
          <a href="#">laurasmith.website</a>
        </p>
      </div>
      <div className="flex gap-4 mt-3.5">
        <button className="btn bg-white text-black w-full">
          <img src={email} alt="email" />
          Email
        </button>
        <button className="btn bg-blue-500 w-full">
          <img src={linkedin} alt="linkedin" />
          Linkedin
        </button>
      </div>

      <div className="mt-8">
        <div className="mb-3">
          <h2 className="text-titleColor text-h2">About</h2>
          <p className="text-paragraph">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div>
          <h2 className="text-titleColor text-h2">Interests</h2>
          <p className="text-paragraph">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
