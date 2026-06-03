"use client";

export default function Home() {
  console.log("Hello world");

  return (
    <button
      className="bg-black text-red-200 border-none mx-6 mt-6 px-2 py-4 rounded-lg cursor-pointer"
      onClick={() => console.log("Button clicked")}
    >
      Click here
    </button>
  );
}
