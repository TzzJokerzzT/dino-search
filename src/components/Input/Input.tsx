import { Input } from "@nextui-org/input";

import { SearchIcon } from "../icons";

import { InputProps } from "@/types";

const styles = {
  label: "text-black/50 dark:text-white/90",
  input: [
    "bg-transparent",
    "text-black/90 dark:text-white/90",
    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
  ],
};

const Inputs = ({ value, onChange, onClick }: InputProps) => {
  return (
    <Input
      isClearable
      classNames={{
        label: "text-black/50 dark:text-white/90",
      }}
      color="primary"
      // onBlur={handleInputBlur}
      label="Search Github Username."
      radius="sm"
      startContent={
        <SearchIcon
          className="pointer-events-none flex-shrink-0 text-blue"
          onClick={onClick}
        />
      }
      value={value}
      variant="underlined"
      onChange={onChange}
      // onClear={() => setQueryInput("")}
    />
  );
};

export default Inputs;
