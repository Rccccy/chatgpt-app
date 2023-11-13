"use client";
import Navigation from "@/components/home/Navigation";
import Content from "@/components/home/Main";
import { useAppContext } from "@/components/AppContext";

export default function Home() {
  const {
    state: { themeMode },
  } = useAppContext();
  return (
    <div className={`${themeMode} flex h-full`}>
      <Navigation />
      <Content />
    </div>
  );
}
