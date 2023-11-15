"use client";
import ModelSelect from "./ModelSelect";
import Example from "./Example";
export default function welcome() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-20">
      <ModelSelect />
      <h1 className="mt-20 text-4xl font-bold">ChaGPT</h1>
      <Example />
    </div>
  );
}
