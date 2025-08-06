import { Shield, Swords, Zap } from "lucide-react";
import { cn } from "@/utils/MergeClassNames";
import { getStatColor } from "@/utils/StatColor";

interface StatItemProps {
  stat: {
    stat: {
      name: string;
    };
    base_stat: number;
  };
}

export function StatItem({ stat }: StatItemProps) {
  const getStatIcon = (statName: string) => {
    switch (statName) {
      case 'hp':
        return <Shield className="w-4 h-4 text-red-500" />;
      case 'attack':
        return <Swords className="w-4 h-4 text-orange-500" />;
      case 'defense':
        return <Shield className="w-4 h-4 text-blue-500" />;
      case 'speed':
        return <Zap className="w-4 h-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatRating = (value: number): string => {
    if (value < 50) return "Below Average";
    if (value < 80) return "Average";
    if (value < 110) return "Above Average";
    if (value < 140) return "Excellent";
    return "Outstanding";
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200">
      <div className="flex justify-between items-center mb-3 text-xl">
        <span className="font-semibold text-gray-700 capitalize flex items-center gap-2">
          {getStatIcon(stat.stat.name)}
          {stat.stat.name.replace('-', ' ')}
        </span>
        <span className="font-bold text-xl text-gray-900">{stat.base_stat}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={cn(
            "h-3 rounded-full transition-all duration-700",
            getStatColor(stat.base_stat),
          )}
          style={{ width: `${Math.min((stat.base_stat / 200) * 100, 100)}%` }}
        />
      </div>
      <div className="text-sm text-gray-600 mt-2 font-medium">
        {getStatRating(stat.base_stat)}
      </div>
    </div>
  );
}

export default StatItem;
