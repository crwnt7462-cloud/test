import { useState } from 'react';
import { Dream } from '../types';
import { Heart, MessageCircle, Share2, Sparkles } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from '../utils/locale';

interface DreamCardProps {
  dream: Dream;
  onLike: (dreamId: string) => void;
  onComment: (dreamId: string, comment: string) => void;
  onShare: (dreamId: string) => void;
  onShowMatches: (dream: Dream) => void;
}

export default function DreamCard({ dream, onLike, onComment, onShare, onShowMatches }: DreamCardProps) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleComment = () => {
    if (commentText.trim()) {
      onComment(dream.id, commentText);
      setCommentText('');
    }
  };

  const matchCount = dream.matches?.length || 0;

  return (
    <div className="glass-effect rounded-xl p-6 mb-4 hover:border-dream-glow transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{dream.avatar}</div>
          <div>
            <h3 className="font-bold text-white">{dream.displayName}</h3>
            <p className="text-sm text-purple-300">{dream.username}</p>
          </div>
        </div>
        <span className="text-xs text-purple-400">
          {formatDistanceToNow(dream.timestamp, { addSuffix: true, locale: fr })}
        </span>
      </div>

      {/* Content */}
      <p className="text-gray-200 mb-4 leading-relaxed">{dream.content}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {dream.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full text-xs font-medium bg-dream-purple/50 text-purple-200 border border-dream-glow/30"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Match Counter */}
      {matchCount > 0 && (
        <button
          onClick={() => onShowMatches(dream)}
          className="w-full mb-4 p-3 rounded-lg bg-gradient-to-r from-dream-pink/20 to-dream-glow/20 border border-dream-pink/30 hover:border-dream-pink/60 transition-all duration-300 dream-glow-pink"
        >
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-dream-pink" />
            <span className="text-dream-pink-light font-semibold">
              {matchCount} {matchCount === 1 ? 'match trouvé' : 'matchs trouvés'}
            </span>
            <span className="text-xs text-purple-300">
              (jusqu'à {Math.max(...dream.matches.map(m => m.similarity))}% de similarité)
            </span>
          </div>
        </button>
      )}

      {/* Actions */}
      <div className="flex items-center gap-6 pb-4 border-b border-purple-800/30">
        <button
          onClick={() => onLike(dream.id)}
          className={`flex items-center gap-2 transition-all duration-200 ${
            dream.isLiked ? 'text-dream-pink' : 'text-purple-300 hover:text-dream-pink'
          }`}
        >
          <Heart className={`w-5 h-5 ${dream.isLiked ? 'fill-current' : ''}`} />
          <span className="text-sm font-medium">{dream.likes}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-purple-300 hover:text-dream-glow transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">{dream.comments.length}</span>
        </button>

        <button
          onClick={() => onShare(dream.id)}
          className="flex items-center gap-2 text-purple-300 hover:text-dream-pink-light transition-colors"
        >
          <Share2 className="w-5 h-5" />
          <span className="text-sm font-medium">{dream.shares}</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4">
          <div className="space-y-3 mb-3">
            {dream.comments.map((comment) => (
              <div key={comment.id} className="bg-dream-purple/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{comment.avatar}</span>
                  <span className="text-sm font-semibold text-white">{comment.displayName}</span>
                  <span className="text-xs text-purple-400">
                    {formatDistanceToNow(comment.timestamp, { addSuffix: true, locale: fr })}
                  </span>
                </div>
                <p className="text-sm text-gray-200 ml-8">{comment.content}</p>
              </div>
            ))}
          </div>

          {/* Comment Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleComment()}
              placeholder="Ajoute un commentaire..."
              className="flex-1 bg-dream-purple/30 border border-purple-700/50 rounded-lg px-4 py-2 text-white placeholder-purple-400 focus:outline-none focus:border-dream-glow"
            />
            <button
              onClick={handleComment}
              disabled={!commentText.trim()}
              className="px-4 py-2 bg-gradient-to-r from-dream-pink to-dream-glow rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
