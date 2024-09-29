// import { useContext } from "react";
// import { Button } from "@nextui-org/button";

// import { MoonIcon, SunIcon } from "../icons";

// import Index from "./index";

// import { Context } from "@/Context/ContextProvider";

// export default function BtnToggleTheme() {
//   const { theme } = useContext(Context);

//   Index;
//   const { themeSwitch } = Index();

//   return (
//     <Button
//       isIconOnly
//       aria-label={`Activated ${theme === "dark" ? "light" : "dark"} theme`}
//       className="uppercase"
//       color="default"
//       size="md"
//       title={`Activated ${theme === "dark" ? "light" : "dark"} theme`}
//       variant="faded"
//       onClick={themeSwitch}
//     >
//       {theme === "dark" ? <SunIcon /> : <MoonIcon />}
//     </Button>
//   );
// }
