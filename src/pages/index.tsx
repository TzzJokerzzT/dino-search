import { lazy, Suspense, useContext } from "react";

import DefaultLayout from "@/layouts/default";
import Buttons from "@/components/Button/Button";
import Inputs from "@/components/Input/Input";
// import ProfileCard from "@/components/Card/Card";
import { Context } from "@/Context/ContextProvider";
import Loading from "@/components/Spinner/Loading";

const ProfileCard = lazy(() => import("@/components/Card/Card"));

export default function IndexPage() {
  const { handleSubmit, handleChange, inputValue, onDelete } =
    useContext(Context);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-2">
        <form
          className="mb-4 flex w-full items-center justify-between gap-4 pb-4"
          onSubmit={handleSubmit}
        >
          <Inputs
            value={inputValue}
            onChange={handleChange}
            onClick={onDelete}
          />
          <Buttons />
        </form>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-3 md:py-3">
        <Suspense fallback={<Loading />}>
          <ProfileCard />
        </Suspense>
      </section>
    </DefaultLayout>
  );
}
