import React from "react";
import cleanHandsAdvert from "../assets/clean-hands-advert.jpeg";

export default function CleanHandsAdvert() {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="bg-gradient-to-br from-blue-100 to-yellow-50 rounded-xl shadow-lg p-4 max-w-2xl w-full border-2 border-yellow-200 flex flex-col items-center">
        <img
          src={cleanHandsAdvert}
          alt="Clean Hands, Pure Hearts Advertisement"
          className="rounded-lg w-full max-w-md mb-4 shadow-md border border-yellow-100"
        />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">CLEAN HANDS, PURE HEARTS</h2>
          <p className="italic text-yellow-700 mb-2">Where Healing Flows with Hope</p>
          <p className="text-gray-700 mb-2">
            Local confidential counseling and weekly sessions for those struggling with masturbation addiction.
          </p>
          <p className="font-semibold text-blue-800 mb-2">Weekly Sessions: Fridays at 5:00 PM</p>
          <p className="font-bold text-blue-900 mb-1">BROOK OF HEALING CENTRE</p>
          <p className="text-blue-700 mb-1">Call: <a href="tel:+254113678958" className="underline hover:text-blue-900">+254113678958</a> / <a href="tel:+254704478783" className="underline hover:text-blue-900">+254704478783</a></p>
          <p className="text-blue-700">Website: <a href="https://bit.ly/4iOqvny" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">https://bit.ly/4iOqvny</a></p>
        </div>
      </div>
    </div>
  );
}
