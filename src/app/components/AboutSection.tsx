import CharacterWithBalloons from "./CharacterWithBalloons";
import AboutTextBlock from "./AboutTextBlock";
import Skills from "./Skills";
import Education from "./Education";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl gap-8 rounded-xl p-8"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-[50%] flex justify-center relative">
          <CharacterWithBalloons />
        </div>
        <div className="w-full md:w-[50%]">
          <AboutTextBlock />
        </div>
      </div>
      <div className="mt-12">
        <Skills />
      </div>
      <div className="mt-16">
        <Education />
      </div>
    </section>
  );
}