import { Chip } from "@heroui/chip";

interface EvolutionConditionsProps {
  conditions: string[];
}

export function EvolutionConditions({ conditions }: EvolutionConditionsProps) {
  if (conditions.length === 0) return null;
  
  return (
    <div className="space-y-2">
      <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
        Requirements
      </div>
      {conditions.map((condition, index) => (
        <Chip
          key={index}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold border-0 px-3 py-1"
        >
          {condition}
        </Chip>
      ))}
    </div>
  );
}