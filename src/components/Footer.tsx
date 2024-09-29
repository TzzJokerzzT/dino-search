import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { OctIcon } from "./icons";

const Footer = () => {
  return (
    <>
      <footer className="flex w-full flex-col justify-center py-4">
        <p className="mb-2 text-center">
          {new Date().getFullYear()} &copy; Alexis Buelvas
        </p>
        <Button
          as={Link}
          className="self-center border-blue text-blue transition-colors dark:text-white"
          href="https://github.com/TzzJokerzzT/dino-search"
          startContent={
            <OctIcon className="w-4 fill-blue transition-colors dark:fill-white" />
          }
          target="blank"
          variant="bordered"
        >
          Dino Search
        </Button>
      </footer>
    </>
  );
};

export default Footer;
