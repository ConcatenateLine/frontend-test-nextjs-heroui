import { Ruler, Weight } from "lucide-react";

interface PhysicalTraitsProps {
  height: number;
  weight: number;
}

export function PhysicalTraits({ height, weight }: PhysicalTraitsProps) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6 text-gray-800">Physical Traits</h3>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border-2 border-blue-200">
          <Ruler className="w-10 h-10 text-blue-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-blue-800">{height / 10}m</div>
          <div className="text-sm text-blue-600 font-semibold">Height</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border-2 border-green-200">
          <Weight className="w-10 h-10 text-green-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-green-800">{weight / 10}kg</div>
          <div className="text-sm text-green-600 font-semibold">Weight</div>
        </div>
      </div>
    </div>
  );
}

export default PhysicalTraits;
