import { Chip } from "@heroui/chip";

export function TreeLegend() {
    return (
        <div className="mt-12 pt-8 border-t-2 border-blue-200">
            <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">Tree Guide</h4>
      <div className="grid md:grid-cols-3 gap-6 text-sm">
        <LegendItem 
          icon={<div className="w-6 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />} 
          text="Evolution Path" 
        />
        <LegendItem 
          icon={<div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white" />} 
          text="Branch Point" 
        />
        <LegendItem 
          icon={<Chip className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs border-0">Level 16</Chip>} 
          text="Requirement" 
        />
      </div>
    </div>
  );
}

function LegendItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-blue-200">
      {icon}
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
}