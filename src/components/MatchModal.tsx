import { X } from 'lucide-react';
import { Dream } from '../types';

interface MatchModalProps {
  dream: Dream;
  onClose: () => void;
}

export default function MatchModal({ dream, onClose }: MatchModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-effect rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-dream-dark/90 backdrop-blur-md p-6 border-b border-purple-700/30 flex items-center justify-between">
          <h2 className="text-2xl font-bold gradient-text flex items-center gap-2">
            <span>✨</span>
            Matchs pour ce rêve
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-dream-purple/50 transition-colors"
          >
            <X className="w-6 h-6 text-purple-300" />
          </button>
        </div>

        <div className="p-6">
          {/* Original Dream */}
          <div className="bg-dream-purple/30 rounded-lg p-4 mb-6 border border-dream-glow/30">
            <p className="text-sm text-purple-300 mb-2">Ton rêve :</p>
            <p className="text-white">{dream.content}</p>
          </div>

          {/* Matches */}
          <div className="space-y-4">
            {dream.matches && dream.matches.length > 0 ? (
              dream.matches.map((match) => (
                <div
                  key={match.dreamId}
                  className="bg-gradient-to-br from-dream-purple/40 to-dream-pink/20 rounded-lg p-5 border border-dream-pink/30 hover:border-dream-pink/60 transition-all"
                >
                  {/* Match Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{match.avatar}</span>
                      <div>
                        <h3 className="font-bold text-white">{match.displayName}</h3>
                        <p className="text-sm text-purple-300">{match.username}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-dream-pink-light">
                        {match.similarity}%
                      </div>
                      <p className="text-xs text-purple-300">similarité</p>
                    </div>
                  </div>

                  {/* Similarity Bar */}
                  <div className="w-full bg-dream-purple/50 rounded-full h-2 mb-3">
                    <div
                      className="bg-gradient-to-r from-dream-pink to-dream-glow h-full rounded-full transition-all duration-500 dream-glow-pink"
                      style={{ width: `${match.similarity}%` }}
                    />
                  </div>

                  {/* Match Dream Preview */}
                  <div className="bg-dream-dark/40 rounded-lg p-3">
                    <p className="text-sm text-gray-200">{match.dreamPreview}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-purple-400">Aucun match trouvé pour ce rêve</p>
                <p className="text-sm text-purple-500 mt-2">
                  Reviens plus tard quand d'autres rêveurs auront posté !
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
