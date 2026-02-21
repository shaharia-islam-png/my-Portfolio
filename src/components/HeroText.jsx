import { FlipWords } from "./Flipword";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable", "User-Friendly"];

  return (
    <div className="z-10 pt-24 md:pt-28 text-center md:text-left rounded-3xl bg-clip-text">

      {/* Desktop View */}
      <div className="hidden md:block">
        <h1 className="text-4xl font-medium text-white">
          Hi, I'm Shaharia Islam
        </h1>

        <div>
          <p className="text-5xl font-medium text-neutral-300">
            I'm a Web Developer <br /> Dedicated to Crafting
          </p>

          <FlipWords
            words={words}
            className="text-7xl font-black text-white"
          />

          <p className="text-4xl font-medium text-neutral-300">
            Web Solution
          </p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="space-y-4 md:hidden">
        <h1 className="text-2xl font-medium text-white">
          Hi, I'm Shaharia
        </h1>

        <p className="text-3xl font-medium text-neutral-300">
          Web Developer
        </p>

        <FlipWords
          words={words}
          className="text-5xl font-black text-white"
        />

        <p className="text-2xl font-medium text-neutral-300">
          Building Web Solutions
        </p>
      </div>
    </div>
  );
};

export default HeroText;