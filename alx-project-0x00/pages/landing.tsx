import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md space-y-4 max-w-md mx-auto mt-6">
      <h2 className="text-lg font-semibold text-gray-800">Button Variants</h2>

      <div className="space-y-2">
        <Button title="Small / Rounded-sm" size="small" shape="rounded-sm" styles="bg-blue-600 text-white hover:bg-blue-700 transition" />
        <Button title="Medium / Rounded-md" size="medium" shape="rounded-md" styles="bg-blue-600 text-white hover:bg-blue-700 transition" />
        <Button title="Large / Rounded-full" size="large" shape="rounded-full" styles="bg-blue-600 text-white hover:bg-blue-700 transition" />
        <Button title="Small / Rounded-full" size="small" shape="rounded-full" styles="bg-blue-600 text-white hover:bg-blue-700 transition" />
        <Button title="Large / Rounded-sm" size="large" shape="rounded-sm" styles="bg-blue-600 text-white hover:bg-blue-700 transition" />
        <Button title="Large / Rounded-lg" size="large" shape="rounded-lg" styles="bg-blue-600 text-white hover:bg-blue-700 transition" />
      </div>
      <Card />
    </div>
  );
};

export default Landing;
