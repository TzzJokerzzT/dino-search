// import BtnToggleTheme from "../Button/ToggleTheme";
import { ThemeSwitch } from "../theme-switch";

const Navbar = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-[#8ba2bc] to-transparent mx-auto flex w-full max-w-[1440px] items-center justify-between p-4 pb-2  ">
        <div className="flex items-center gap-2">
          <img alt="Dino Logo" height={40} src="/dino.png" width={40} />
          <h1 className="text-3xl">Dino Search</h1>
        </div>
        {/* <BtnToggleTheme /> */}
        <ThemeSwitch />
      </header>
    </>
  );
};

export default Navbar;
