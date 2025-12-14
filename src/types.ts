export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  stats: {
    totalDreams: number;
    streak: number;
    totalMatches: number;
    bestMatch: number;
  };
}

export interface Dream {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  avatar: string;
  content: string;
  tags: string[];
  timestamp: Date;
  likes: number;
  comments: Comment[];
  shares: number;
  matches: Match[];
  isLiked?: boolean;
}

export interface Match {
  userId: string;
  username: string;
  displayName: string;
  avatar: string;
  similarity: number;
  dreamId: string;
  dreamPreview: string;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  avatar: string;
  content: string;
  timestamp: Date;
}

export interface Trend {
  tag: string;
  count: number;
  change: number; // percentage change
}
