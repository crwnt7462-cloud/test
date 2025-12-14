import { useState } from 'react';
import { Moon, Sparkles, X } from 'lucide-react';

interface NewDreamFormProps {
  onSubmit: (content: string) => void;
}

export default function NewDreamForm({ onSubmit }: NewDreamFormProps) {
  const [content, setContent] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent('');
      setIsExpanded(false);
    }
  };

  const remainingChars = 500 - content.length;

  return (
    <div className="glass-effect rounded-xl p-6 mb-6 dream-glow">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">🌙</span>
        <h2 className="text-xl font-bold gradient-text">Partage ton rêve</h2>
      </div>

      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full p-4 rounded-lg bg-dream-purple/30 border border-purple-700/50 text-left text-purple-300 hover:border-dream-glow hover:text-white transition-all"
        >
          Qu'as-tu rêvé cette nuit ? 🌌
        </button>
      ) : (
        <div className="space-y-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Décris ton rêve en détail... Plus c'est précis, meilleurs seront les matchs ! 💭"
            maxLength={500}
            rows={6}
            autoFocus
            className="w-full bg-dream-purple/30 border border-purple-700/50 rounded-lg px-4 py-3 text-white placeholder-purple-400 focus:outline-none focus:border-dream-glow resize-none"
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className={`text-sm ${remainingChars < 50 ? 'text-dream-pink' : 'text-purple-400'}`}>
                {remainingChars} caractères restants
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setIsExpanded(false);
                  setContent('');
                }}
                className="px-4 py-2 rounded-lg border border-purple-700/50 text-purple-300 hover:border-purple-600 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>
              <button
                onClick={handleSubmit}
                disabled={!content.trim()}
                className="px-6 py-2 bg-gradient-to-r from-dream-pink to-dream-glow rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Publier le rêve
              </button>
            </div>
          </div>

          <div className="bg-dream-purple/20 rounded-lg p-3 border border-purple-700/30">
            <div className="flex items-start gap-2">
              <Moon className="w-5 h-5 text-dream-glow flex-shrink-0 mt-0.5" />
              <p className="text-sm text-purple-300">
                <span className="font-semibold text-white">Astuce :</span> Mentionne les couleurs, émotions, lieux et personnages pour des matchs plus précis !
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
