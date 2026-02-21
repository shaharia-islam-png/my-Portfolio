import Hero from "../asset/hero.jpg";

const ParralaxBg = () => {
  return (
    <div
      className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default ParralaxBg;