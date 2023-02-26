import Header from "./components/Header";
import Program from "./components/Program";
import Values from "./components/Values";
import { RiFlagFill } from "react-icons/ri";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { useEffect, useState } from "react";

let da = <img className="" src="./darkmode.png" />;
let li = <img className="bg-white" src="./lightmode.png" />;

const App = () => {
  const [theme, setheme] = useState("light");

  // const [button, setbutton] = useState("Light");
  const [button, setbutton] = useState(da);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleSwitch = () => {
    setheme("dark");
  };
  const handleSwitch1 = () => {
    setheme("light");
  };
  const handleSwitch2 = () => {
    setheme(theme === "dark" ? "light" : "dark");
  };
  const buttonChange = () => {
    if (theme === "dark") {
      // setbutton("Dark");
      setbutton(da);
    } else {
      setbutton(li);
    }
  };

  return (
    <div className="dark:bg-[#03001C] relative">
      <Header />
      <Program />
      <Values />
      {/* banner  */}
      <main className="px-4 py-4 text-center ">
        <section className="bg-purple_bg border-[1rem] border-white shadow-[0_15px_100px_-15px_#c9b8ec] grid place-items-center max_width rounded-[3rem] dark:bg-[#00005C] dark:border-hidden">
          <div className="flex flex-col items-center justify-center py-12 px-2">
            <div className="bg-icon_bg text-yellow_text p-2 rounded-lg text-3xl border-[3px] border-light_purple">
              <RiFlagFill />
            </div>
            <h1 className="text-4xl py-3 dark:text-white font-bold">
              Get Started With{" "}
              <span className="text-yellow_text dark:text-[#E94560]">
                Fitly
              </span>
            </h1>
            <p className="text-[1rem] max-w-[23rem] pb-10">
              Discover tips & news for your health from experts and get the best
              discounts by getting started
            </p>
            <button className="dark:bg-[#E94560] dark:text-white dark:border-hidden">
              Get Started
            </button>
          </div>
        </section>
      </main>
      <Menu />
      <AboutUs />
      <Footer />

      <button
        className="fixed bottom-10 right-10 dark:bg-white rounded-full w-12 bg-white"
        onClick={() => {
          handleSwitch2();
          buttonChange();
        }}
      >
        {button}
      </button>
    </div>
  );
};

export default App;
