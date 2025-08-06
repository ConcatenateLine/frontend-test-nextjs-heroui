interface CombatRatingProps {
  totalStats: number;
}

export function CombatRating({ totalStats }: CombatRatingProps) {
  const getRatingClass = (total: number): string => {
    if (total > 500) return "🏆 Legendary Class";
    if (total > 400) return "⭐ Elite Class";
    return "🔥 Standard Class";
  };

  return (
    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-300">
      <h4 className="font-bold text-orange-800 mb-3 text-lg">Combat Power Rating</h4>
      <div className="text-4xl font-bold text-orange-900 mb-2">
        {totalStats}
      </div>
      <div className="text-sm text-orange-600 font-semibold">
        {getRatingClass(totalStats)}
      </div>
    </div>
  );
}

export default CombatRating;
