"use client"

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleRedirect = (url) => {

    router.push(url)

  }

  return (
    <div className="flex flex-col">

      <button
        onClick={() => handleRedirect("/controller")}
        className="bg-black text-white mb-8 mt-8"
      >Controller</button>

      <button
        className="bg-[#000099] text-white"
        onClick={() => handleRedirect("/receiver")}
      >
        Receiver
      </button>

    </div>
  );
}