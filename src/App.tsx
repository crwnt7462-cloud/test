import { useState, useEffect } from 'react';
import { Dream, Trend, Comment } from './types';
import { CURRENT_USER, generateMockDreams } from './utils/mockData';
import { detectTags, findMatches } from './utils/dreamMatcher';
import DreamCard from './components/DreamCard';
import NewDreamForm from './components/NewDreamForm';
import TrendsSidebar from './components/TrendsSidebar';
import UserStats from './components/UserStats';
import MatchModal from './components/MatchModal';
import { Moon, Sparkles } from 'lucide-react';

function App() {
  const [dreams, setDreams] = useState<Dream[]>([]);
  const [trends, setTrends] = useState<Trend[]>([]);
  const [selectedDream, setSelectedDream] = useState<Dream | null>(null);

  useEffect(() => {
    // Initialize with mock dreams
    const mockDreams = generateMockDreams(15);
    setDreams(mockDreams);
    updateTrends(mockDreams);
  }, []);

  const updateTrends = (allDreams: Dream[]) => {
    const tagCounts: Record<string, number> = {};
    
    allDreams.forEach(dream => {
      dream.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    const trendsList: Trend[] = Object.entries(tagCounts)
      .map(([tag, count]) => ({
        tag,
        count,
        change: Math.floor(Math.random() * 40) - 10, // Simulate change
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);

    setTrends(trendsList);
  };

  const handleNewDream = (content: string) => {
    const tags = detectTags(content);
    
    const newDream: Dream = {
      id: `dream-${Date.now()}`,
      userId: CURRENT_USER.id,
      username: CURRENT_USER.username,
      displayName: CURRENT_USER.displayName,
      avatar: CURRENT_USER.avatar,
      content,
      tags,
      timestamp: new Date(),
      likes: 0,
      comments: [],
      shares: 0,
      matches: [],
    };

    // Find matches with existing dreams
    const matches = findMatches(newDream, dreams);
    newDream.matches = matches.map(m => ({
      userId: m.userId,
      username: m.username,
      displayName: m.displayName,
      avatar: m.avatar,
      similarity: (m as any).similarity,
      dreamId: m.id,
      dreamPreview: m.content.substring(0, 150) + (m.content.length > 150 ? '...' : ''),
    }));

    const updatedDreams = [newDream, ...dreams];
    setDreams(updatedDreams);
    updateTrends(updatedDreams);

    // Update user stats
    CURRENT_USER.stats.totalDreams += 1;
    CURRENT_USER.stats.totalMatches += newDream.matches.length;
    if (newDream.matches.length > 0) {
      const bestMatch = Math.max(...newDream.matches.map(m => m.similarity));
      if (bestMatch > CURRENT_USER.stats.bestMatch) {
        CURRENT_USER.stats.bestMatch = bestMatch;
      }
    }
  };

  const handleLike = (dreamId: string) => {
    setDreams(dreams.map(dream => {
      if (dream.id === dreamId) {
        return {
          ...dream,
          likes: dream.isLiked ? dream.likes - 1 : dream.likes + 1,
          isLiked: !dream.isLiked,
        };
      }
      return dream;
    }));
  };

  const handleComment = (dreamId: string, commentText: string) => {
    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      userId: CURRENT_USER.id,
      username: CURRENT_USER.username,
      displayName: CURRENT_USER.displayName,
      avatar: CURRENT_USER.avatar,
      content: commentText,
      timestamp: new Date(),
    };

    setDreams(dreams.map(dream => {
      if (dream.id === dreamId) {
        return {
          ...dream,
          comments: [...dream.comments, newComment],
        };
      }
      return dream;
    }));
  };

  const handleShare = (dreamId: string) => {
    setDreams(dreams.map(dream => {
      if (dream.id === dreamId) {
        return {
          ...dream,
          shares: dream.shares + 1,
        };
      }
      return dream;
    }));
    
    // In a real app, this would open a share dialog
    alert('Rêve partagé ! 🌙✨');
  };

  const handleShowMatches = (dream: Dream) => {
    setSelectedDream(dream);
  };

  return (
    <div className="min-h-screen bg-dream-dark">
      {/* Header */}
      <header className="sticky top-0 z-40 glass-effect border-b border-purple-800/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Moon className="w-8 h-8 text-dream-glow animate-pulse-slow" />
              <h1 className="text-3xl font-bold gradient-text">DreamScape</h1>
            </div>
            <div className="flex items-center gap-2 text-purple-300">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-medium">Connecte tes rêves au monde</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - User Stats */}
          <div className="lg:col-span-1">
            <UserStats user={CURRENT_USER} />
          </div>

          {/* Middle Column - Feed */}
          <div className="lg:col-span-2 xl:col-span-1">
            <NewDreamForm onSubmit={handleNewDream} />
            
            <div className="space-y-4">
              {dreams.length === 0 ? (
                <div className="glass-effect rounded-xl p-12 text-center">
                  <Moon className="w-16 h-16 text-dream-glow mx-auto mb-4 animate-float" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Aucun rêve pour le moment
                  </h3>
                  <p className="text-purple-300">
                    Sois le premier à partager ton rêve de la nuit ! 🌙
                  </p>
                </div>
              ) : (
                dreams.map(dream => (
                  <DreamCard
                    key={dream.id}
                    dream={dream}
                    onLike={handleLike}
                    onComment={handleComment}
                    onShare={handleShare}
                    onShowMatches={handleShowMatches}
                  />
                ))
              )}
            </div>
          </div>

          {/* Right Column - Trends */}
          <div className="lg:col-span-3 xl:col-span-1">
            <TrendsSidebar trends={trends} />
          </div>
        </div>
      </main>

      {/* Match Modal */}
      {selectedDream && (
        <MatchModal
          dream={selectedDream}
          onClose={() => setSelectedDream(null)}
        />
      )}

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-dream-glow/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-dream-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
}

export default App;
