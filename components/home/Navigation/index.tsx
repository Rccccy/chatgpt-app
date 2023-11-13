"use client";
import { useAppContext } from "@/components/AppContext";
import Menubar from "./Menubar";
import Toolbar from "./Toolbar";

export default function Navigation() {
  const {
    state: { displayNavigation },
  } = useAppContext();

  return (
    <nav
      className={`${
        displayNavigation ? "" : "hidden"
      } dark relative w-[260px] bg-gray-900 text-gray-300 p-2 h-full`}
    >
      <Menubar />
      <Toolbar />
    </nav>
  );
}
