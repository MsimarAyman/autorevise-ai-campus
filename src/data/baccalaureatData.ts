export interface BaccalaureatCourse {
  id: string;
  title: string;
  description: string;
  image: string;
  progress: number;
  totalSessions: number;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  duration: string;
  rating: number;
  sessions: BaccalaureatSession[];
  category: 'mathematics' | 'physics';
}

export interface BaccalaureatSession {
  id: string;
  title: string;
  duration: string;
  description: string;
  completed: boolean;
  summary: string;
  quiz: QuizQuestion[];
  mindmap: MindmapData;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface MindmapData {
  title: string;
  nodes: MindmapNode[];
}

export interface MindmapNode {
  title: string;
  children?: MindmapNode[];
}

export const baccalaureatCoursesData: BaccalaureatCourse[] = [
  {
    id: 'math-bac',
    title: 'Mathématiques Baccalauréat',
    description: 'Cours complet de mathématiques pour la préparation du baccalauréat',
    image: '/placeholder.svg',
    progress: 0,
    totalSessions: 5,
    difficulty: 'Intermédiaire',
    duration: '40h',
    rating: 4.8,
    category: 'mathematics',
    sessions: [
      {
        id: 'math-1',
        title: 'Séance 1 : Fonctions et limites',
        duration: '8h',
        description: 'Étude des fonctions, calcul de limites et continuité',
        completed: false,
        summary: `# Fonctions et limites

## Définition d'une fonction
Une fonction f est une relation qui associe à chaque élément x d'un ensemble de départ (domaine) au plus un élément y d'un ensemble d'arrivée.

## Types de fonctions
- **Fonctions polynomiales** : f(x) = anxn + ... + a1x + a0
- **Fonctions rationnelles** : quotient de deux polynômes
- **Fonctions trigonométriques** : sin, cos, tan
- **Fonctions exponentielles et logarithmiques**

## Limites
### Définition
La limite d'une fonction f en un point a est la valeur vers laquelle tend f(x) quand x tend vers a.

### Propriétés des limites
- Limite d'une somme : lim(f + g) = lim f + lim g
- Limite d'un produit : lim(f × g) = lim f × lim g
- Limite d'un quotient : lim(f/g) = lim f / lim g (si lim g ≠ 0)

## Continuité
Une fonction f est continue en a si : lim(x→a) f(x) = f(a)

## Formes indéterminées
- 0/0, ∞/∞, 0×∞, ∞-∞
- Techniques de levée : factorisation, multiplication par la quantité conjuguée, règle de L'Hôpital`,
        quiz: [
          {
            id: 'q1',
            question: 'Quelle est la limite de (x²-1)/(x-1) quand x tend vers 1 ?',
            options: ['0', '1', '2', 'n\'existe pas'],
            correctAnswer: 2,
            explanation: 'En factorisant le numérateur : (x²-1)/(x-1) = (x+1)(x-1)/(x-1) = x+1. Donc lim = 1+1 = 2'
          },
          {
            id: 'q2',
            question: 'Une fonction polynomiale est-elle toujours continue ?',
            options: ['Oui', 'Non', 'Seulement si le degré est pair', 'Seulement sur R+'],
            correctAnswer: 0,
            explanation: 'Les fonctions polynomiales sont continues sur tout leur domaine de définition, qui est R.'
          }
        ],
        mindmap: {
          title: 'Fonctions et limites',
          nodes: [
            {
              title: 'Fonctions',
              children: [
                { title: 'Polynomiales' },
                { title: 'Rationnelles' },
                { title: 'Trigonométriques' },
                { title: 'Exponentielles' }
              ]
            },
            {
              title: 'Limites',
              children: [
                { title: 'Définition' },
                { title: 'Propriétés' },
                { title: 'Formes indéterminées' }
              ]
            },
            {
              title: 'Continuité',
              children: [
                { title: 'Définition' },
                { title: 'Théorèmes' }
              ]
            }
          ]
        }
      },
      {
        id: 'math-2',
        title: 'Séance 2 : Dérivées',
        duration: '8h',
        description: 'Calcul différentiel et applications des dérivées',
        completed: false,
        summary: `# Dérivées

## Définition
La dérivée d'une fonction f en un point a est la limite : f'(a) = lim(h→0) [f(a+h) - f(a)]/h

## Règles de dérivation
- (u + v)' = u' + v'
- (u × v)' = u'v + uv'
- (u/v)' = (u'v - uv')/v²
- (u∘v)' = u'(v) × v' (règle de la chaîne)

## Dérivées usuelles
- (xⁿ)' = nxⁿ⁻¹
- (eˣ)' = eˣ
- (ln x)' = 1/x
- (sin x)' = cos x
- (cos x)' = -sin x

## Applications
- Étude des variations d'une fonction
- Recherche d'extremums
- Équation de la tangente`,
        quiz: [
          {
            id: 'q1',
            question: 'Quelle est la dérivée de f(x) = x³ + 2x² - 5x + 1 ?',
            options: ['3x² + 4x - 5', '3x² + 2x - 5', 'x³ + 4x - 5', '3x² + 4x - 1'],
            correctAnswer: 0,
            explanation: 'En appliquant la règle (xⁿ)\'= nxⁿ⁻¹ : f\'(x) = 3x² + 4x - 5'
          }
        ],
        mindmap: {
          title: 'Dérivées',
          nodes: [
            {
              title: 'Définition',
              children: [
                { title: 'Limite du taux d\'accroissement' },
                { title: 'Interprétation géométrique' }
              ]
            },
            {
              title: 'Règles de calcul',
              children: [
                { title: 'Somme' },
                { title: 'Produit' },
                { title: 'Quotient' },
                { title: 'Composée' }
              ]
            }
          ]
        }
      },
      {
        id: 'math-3',
        title: 'Séance 3 : Intégrales',
        duration: '8h',
        description: 'Calcul intégral et applications',
        completed: false,
        summary: '# Intégrales\n\nCalcul intégral, primitives et applications géométriques.',
        quiz: [],
        mindmap: { title: 'Intégrales', nodes: [] }
      },
      {
        id: 'math-4',
        title: 'Séance 4 : Probabilités',
        duration: '8h',
        description: 'Probabilités et statistiques',
        completed: false,
        summary: '# Probabilités\n\nCalcul des probabilités et lois de probabilité.',
        quiz: [],
        mindmap: { title: 'Probabilités', nodes: [] }
      },
      {
        id: 'math-5',
        title: 'Séance 5 : Géométrie',
        duration: '8h',
        description: 'Géométrie dans l\'espace',
        completed: false,
        summary: '# Géométrie\n\nGéométrie dans l\'espace et produit scalaire.',
        quiz: [],
        mindmap: { title: 'Géométrie', nodes: [] }
      }
    ]
  },
  {
    id: 'physics-bac',
    title: 'Physique Baccalauréat',
    description: 'Cours complet de physique pour la préparation du baccalauréat',
    image: '/placeholder.svg',
    progress: 0,
    totalSessions: 5,
    difficulty: 'Intermédiaire',
    duration: '40h',
    rating: 4.7,
    category: 'physics',
    sessions: [
      {
        id: 'physics-1',
        title: 'Séance 1 : Mécanique',
        duration: '8h',
        description: 'Cinématique et dynamique',
        completed: false,
        summary: `# Mécanique

## Cinématique
### Mouvement rectiligne uniforme
- Vitesse constante : v = d/t
- Équation horaire : x(t) = x₀ + vt

### Mouvement rectiligne uniformément varié
- Accélération constante : a = Δv/Δt
- Équations horaires :
  - v(t) = v₀ + at
  - x(t) = x₀ + v₀t + ½at²
  - v² = v₀² + 2a(x - x₀)

## Dynamique
### Lois de Newton
1. **Principe d'inertie** : Dans un référentiel galiléen, un objet persiste dans son état de repos ou de mouvement rectiligne uniforme si aucune force ne s'exerce sur lui.
2. **Principe fondamental** : F = ma
3. **Principe d'action-réaction** : Les forces d'interaction entre deux corps sont égales et opposées.

### Forces courantes
- **Poids** : P = mg
- **Force de rappel d'un ressort** : F = -kx
- **Force de frottement** : f = μN`,
        quiz: [
          {
            id: 'q1',
            question: 'Un objet chute librement. Quelle est son accélération ?',
            options: ['0 m/s²', '9.8 m/s²', '19.6 m/s²', 'Dépend de la masse'],
            correctAnswer: 1,
            explanation: 'En chute libre, l\'accélération est celle de la pesanteur g = 9.8 m/s², indépendamment de la masse.'
          },
          {
            id: 'q2',
            question: 'Quelle est l\'unité de la force dans le système international ?',
            options: ['Joule (J)', 'Newton (N)', 'Watt (W)', 'Pascal (Pa)'],
            correctAnswer: 1,
            explanation: 'L\'unité de la force est le Newton (N), défini comme kg⋅m⋅s⁻².'
          }
        ],
        mindmap: {
          title: 'Mécanique',
          nodes: [
            {
              title: 'Cinématique',
              children: [
                { title: 'Mouvement uniforme' },
                { title: 'Mouvement uniformément varié' },
                { title: 'Chute libre' }
              ]
            },
            {
              title: 'Dynamique',
              children: [
                { title: 'Lois de Newton' },
                { title: 'Forces' },
                { title: 'Applications' }
              ]
            }
          ]
        }
      },
      {
        id: 'physics-2',
        title: 'Séance 2 : Électricité',
        duration: '8h',
        description: 'Circuits électriques et lois d\'Ohm',
        completed: false,
        summary: '# Électricité\n\nCircuits électriques, loi d\'Ohm et puissance électrique.',
        quiz: [],
        mindmap: { title: 'Électricité', nodes: [] }
      },
      {
        id: 'physics-3',
        title: 'Séance 3 : Optique',
        duration: '8h',
        description: 'Réflexion, réfraction et lentilles',
        completed: false,
        summary: '# Optique\n\nLois de la réflexion et de la réfraction, lentilles.',
        quiz: [],
        mindmap: { title: 'Optique', nodes: [] }
      },
      {
        id: 'physics-4',
        title: 'Séance 4 : Thermodynamique',
        duration: '8h',
        description: 'Chaleur et température',
        completed: false,
        summary: '# Thermodynamique\n\nChaleur, température et transferts thermiques.',
        quiz: [],
        mindmap: { title: 'Thermodynamique', nodes: [] }
      },
      {
        id: 'physics-5',
        title: 'Séance 5 : Ondes',
        duration: '8h',
        description: 'Ondes mécaniques et électromagnétiques',
        completed: false,
        summary: '# Ondes\n\nOndes mécaniques et électromagnétiques.',
        quiz: [],
        mindmap: { title: 'Ondes', nodes: [] }
      }
    ]
  }
];