import { Trend } from '../types';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface TrendsSidebarProps {
  trends: Trend[];
}

export default function TrendsSidebar({ trends }: TrendsSidebarProps) {
  return (
    <div className="glass-effect rounded-xl p-6 sticky top-6">
      <h2 className="text-xl font-bold gradient-text mb-4 flex items-center gap-2">
        <span>🔥</span>
        Tendances de la nuit
      </h2>

      <div className="space-y-3">
        {trends.map((trend) => (
          <div
            key={trend.tag}
            className="p-3 rounded-lg bg-dream-purple/30 hover:bg-dream-purple/50 transition-colors cursor-pointer border border-transparent hover:border-dream-glow/30"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-white">{trend.tag}</span>
              <div className={`flex items-center gap-1 text-xs ${
                trend.change > 0 ? 'text-green-400' : trend.change < 0 ? 'text-red-400' : 'text-gray-400'
              }`}>
                {trend.change > 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : trend.change < 0 ? (
                  <TrendingDown className="w-3 h-3" />
                ) : (
                  <Minus className="w-3 h-3" />
                )}
                <span>{Math.abs(trend.change)}%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-purple-300">{trend.count} rêves</span>
              <div className="flex-1 mx-3 bg-dream-purple/50 rounded-full h-1.5">
                <div
                  className="bg-gradient-to-r from-dream-pink to-dream-glow h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (trend.count / Math.max(...trends.map(t => t.count))) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-dream-purple/40 to-dream-pink/20 border border-dream-pink/30">
        <p className="text-xs text-purple-200">
          💡 <span className="font-semibold">Le saviez-vous ?</span> En moyenne, les humains rêvent 4-6 fois par nuit, même s'ils ne s'en souviennent pas !
        </p>
      </div>
    </div>
  );
}
