import { User } from '../types';
import { Flame, Moon, Sparkles, Trophy } from 'lucide-react';

interface UserStatsProps {
  user: User;
}

export default function UserStats({ user }: UserStatsProps) {
  return (
    <div className="glass-effect rounded-xl p-6 mb-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-6xl">{user.avatar}</div>
        <div>
          <h2 className="text-2xl font-bold text-white">{user.displayName}</h2>
          <p className="text-purple-300">{user.username}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-dream-purple/40 to-dream-glow/20 rounded-lg p-4 border border-dream-glow/30">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-sm text-purple-300">Série</span>
          </div>
          <p className="text-3xl font-bold text-white">{user.stats.streak}</p>
          <p className="text-xs text-purple-400 mt-1">jours consécutifs</p>
        </div>

        <div className="bg-gradient-to-br from-dream-purple/40 to-dream-pink/20 rounded-lg p-4 border border-dream-pink/30">
          <div className="flex items-center gap-2 mb-2">
            <Moon className="w-5 h-5 text-dream-pink" />
            <span className="text-sm text-purple-300">Rêves</span>
          </div>
          <p className="text-3xl font-bold text-white">{user.stats.totalDreams}</p>
          <p className="text-xs text-purple-400 mt-1">partagés</p>
        </div>

        <div className="bg-gradient-to-br from-dream-purple/40 to-purple-500/20 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-purple-300">Matchs</span>
          </div>
          <p className="text-3xl font-bold text-white">{user.stats.totalMatches}</p>
          <p className="text-xs text-purple-400 mt-1">trouvés</p>
        </div>

        <div className="bg-gradient-to-br from-dream-purple/40 to-yellow-500/20 rounded-lg p-4 border border-yellow-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-sm text-purple-300">Record</span>
          </div>
          <p className="text-3xl font-bold text-white">{user.stats.bestMatch}%</p>
          <p className="text-xs text-purple-400 mt-1">meilleur match</p>
        </div>
      </div>
    </div>
  );
}
