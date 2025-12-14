import { Dream } from '../types';

// Simulated NLP matching algorithm
// In a real app, this would use actual NLP/ML models
export function calculateSimilarity(dream1: string, dream2: string): number {
  const words1 = dream1.toLowerCase().split(/\s+/);
  const words2 = dream2.toLowerCase().split(/\s+/);
  
  const set1 = new Set(words1);
  const set2 = new Set(words2);
  
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);
  
  // Jaccard similarity
  const baseSimilarity = (intersection.size / union.size) * 100;
  
  // Add some randomness to simulate more sophisticated NLP
  const variance = (Math.random() - 0.5) * 20;
  const similarity = Math.max(0, Math.min(100, baseSimilarity + variance));
  
  return Math.round(similarity);
}

export function findMatches(currentDream: Dream, allDreams: Dream[]): Dream[] {
  const matches = allDreams
    .filter(d => d.id !== currentDream.id && d.userId !== currentDream.userId)
    .map(d => ({
      ...d,
      similarity: calculateSimilarity(currentDream.content, d.content)
    }))
    .filter(d => d.similarity && d.similarity > 30)
    .sort((a, b) => (b.similarity || 0) - (a.similarity || 0))
    .slice(0, 5);
  
  return matches;
}

export function detectTags(content: string): string[] {
  const tagPatterns: Record<string, RegExp[]> = {
    '🌊 océan': [/ocean|mer|eau|vague|plage|nager/i],
    '✈️ vol': [/voler|vol\b|avion|oiseau|ciel|planer/i],
    '🐾 animaux': [/chat|chien|animal|oiseau|poisson|lion|tigre|loup/i],
    '👻 cauchemar': [/cauchemar|peur|effrayant|monstre|angoisse|terrifiant/i],
    '💖 amour': [/amour|amoureux|baiser|coeur|romance|couple/i],
    '🏃 course': [/courir|course|poursuivi|fuir|chasser/i],
    '🏠 maison': [/maison|chambre|appartement|chez|intérieur/i],
    '👥 foule': [/gens|foule|monde|personnes|groupe/i],
    '🌈 couleurs': [/couleur|arc-en-ciel|brillant|lumineux|éclatant/i],
    '🌙 nuit': [/nuit|sombre|obscur|noir|ténèbres/i],
    '☀️ jour': [/jour|soleil|lumière|matin|après-midi/i],
    '🎭 étrange': [/bizarre|étrange|surréaliste|impossible|fou/i],
    '💀 mort': [/mort|mourir|décès|tuer|fin/i],
    '🎉 fête': [/fête|célébration|anniversaire|joie|rire/i],
    '🔥 feu': [/feu|flamme|brûler|incendie|chaleur/i],
    '❄️ froid': [/froid|glace|neige|glacé|hiver/i],
    '🚗 voyage': [/voyage|voiture|route|conduire|déplacement/i],
    '🎓 école': [/école|classe|examen|étudier|professeur/i],
    '💼 travail': [/travail|bureau|collègue|patron|emploi/i],
    '👨‍👩‍👧 famille': [/famille|parent|mère|père|frère|soeur/i],
  };

  const detectedTags: string[] = [];
  
  for (const [tag, patterns] of Object.entries(tagPatterns)) {
    if (patterns.some(pattern => pattern.test(content))) {
      detectedTags.push(tag);
    }
  }
  
  return detectedTags.length > 0 ? detectedTags : ['🌟 autre'];
}
