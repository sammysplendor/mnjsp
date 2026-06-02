"use client";

import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5">
      <h1>Contact Page</h1>
      <button
        className="bg-black text-white w-fit p-2 rounded-lg cursor-pointer"
        onClick={() => router.push("/about")}
      >
        Go to About Page
      </button>
    </div>
  );
};

export default Contact;
