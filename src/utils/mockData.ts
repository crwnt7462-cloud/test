import { Dream, User } from '../types';
import { detectTags } from './dreamMatcher';

export const CURRENT_USER: User = {
  id: 'user-1',
  username: '@dreamer',
  displayName: 'Rêveur Nocturne',
  avatar: '🌙',
  stats: {
    totalDreams: 42,
    streak: 7,
    totalMatches: 156,
    bestMatch: 94,
  },
};

const mockUsers = [
  { id: 'user-2', username: '@lunarDreams', displayName: 'Luna', avatar: '✨' },
  { id: 'user-3', username: '@nightwalker', displayName: 'Noctambule', avatar: '🌟' },
  { id: 'user-4', username: '@dreamweaver', displayName: 'Tisseuse', avatar: '🕸️' },
  { id: 'user-5', username: '@cosmicmind', displayName: 'Cosmic', avatar: '🌌' },
  { id: 'user-6', username: '@stardust', displayName: 'Poussière', avatar: '💫' },
  { id: 'user-7', username: '@moonchild', displayName: 'Enfant Lune', avatar: '🌛' },
  { id: 'user-8', username: '@nebula', displayName: 'Nébuleuse', avatar: '🌠' },
];

const dreamContents = [
  "Je volais au-dessus d'un océan de couleurs psychédéliques, avec des dauphins roses qui chantaient de la musique classique 🎵",
  "J'étais poursuivi dans un labyrinthe infini fait de miroirs, chaque reflet montrait une version différente de moi-même",
  "J'ai rencontré un chat géant qui parlait en alexandrins et me donnait des conseils philosophiques sur le sens de la vie",
  "Je nageais sous l'eau sans avoir besoin de respirer, entouré de méduses lumineuses qui formaient des constellations",
  "J'étais dans une bibliothèque où les livres volaient et racontaient leurs histoires à voix haute",
  "Une fête dans une maison qui changeait de pièces toutes les 5 minutes, impossible de retrouver mes amis",
  "Je courais dans une forêt où les arbres étaient en cristal et jouaient de la musique quand le vent passait",
  "Un examen de maths mais les chiffres étaient remplacés par des symboles extraterrestres que je comprenais parfaitement",
  "Je volais en jetpack au-dessus de ma ville natale, mais tout était construit avec des nuages solides",
  "J'ai transformé en oiseau au milieu d'une réunion de famille, personne ne semblait surpris",
  "Une course-poursuite en voiture mais les routes étaient verticales et on roulait sur les murs",
  "J'étais dans un restaurant où chaque plat me faisait revivre un souvenir d'enfance",
  "Je découvrais une porte secrète dans ma chambre qui menait à une plage tropicale la nuit",
  "Un monstre gentil m'apprenait à voler en me donnant des cours de confiance en soi",
  "Je parlais avec mon chien et il me racontait ses propres rêves (de chasser des écureuils cosmiques)",
];

export function generateMockDreams(count: number = 15): Dream[] {
  const dreams: Dream[] = [];
  const now = new Date();

  for (let i = 0; i < count; i++) {
    const user = mockUsers[i % mockUsers.length];
    const content = dreamContents[i % dreamContents.length];
    const tags = detectTags(content);
    const timestamp = new Date(now.getTime() - Math.random() * 24 * 60 * 60 * 1000);

    dreams.push({
      id: `dream-${i + 2}`,
      userId: user.id,
      username: user.username,
      displayName: user.displayName,
      avatar: user.avatar,
      content,
      tags,
      timestamp,
      likes: Math.floor(Math.random() * 50),
      comments: [],
      shares: Math.floor(Math.random() * 20),
      matches: [],
    });
  }

  return dreams.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
}
