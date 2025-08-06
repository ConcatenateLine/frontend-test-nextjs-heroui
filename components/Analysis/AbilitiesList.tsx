interface Ability {
  ability: {
    name: string;
  };
}

interface AbilitiesListProps {
  abilities: Ability[];
}

export function AbilitiesList({ abilities }: AbilitiesListProps) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-gray-800">Special Abilities</h3>
      <div className="space-y-3">
        {abilities.map((ability, index) => (
          <div
            key={`${ability.ability.name}-${index}`}
            className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-4"
          >
            <div className="font-bold text-purple-800 capitalize text-lg">
              {ability.ability.name.replace(/-/g, ' ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AbilitiesList;
