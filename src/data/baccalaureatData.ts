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
        description: 'Étude des fonctions, calcul de limites, continuité et asymptotes',
        completed: false,
        summary: `# Fonctions et limites

## 1. Généralités sur les Fonctions
Une fonction numérique *f* est une relation qui, à tout nombre réel *x* d'un ensemble de départ Df (domaine de définition), associe un unique nombre réel *y*, noté f(x).

### Types de fonctions usuelles
- **Fonctions polynomiales** : f(x) = a_n x^n + ... + a_1 x + a_0. Elles sont définies et continues sur R.
- **Fonctions rationnelles** : f(x) = P(x) / Q(x), où P et Q sont des polynômes. Définies pour Q(x) ≠ 0.
- **Fonctions trigonométriques** : sin(x), cos(x), tan(x).
- **Fonctions exponentielles** : f(x) = e^x. Définie sur R, strictement positive.
- **Fonctions logarithmes** : f(x) = ln(x). Définie pour x > 0.
- **Fonctions puissances** : f(x) = x^a.

## 2. Limites de fonctions
La limite d'une fonction *f* en un point *a* (ou en l'infini) est la valeur vers laquelle f(x) tend lorsque *x* tend vers *a*.

### Opérations sur les limites
- **Limite d'une somme** : lim(f + g) = lim f + lim g
- **Limite d'un produit** : lim(f × g) = lim f × lim g
- **Limite d'un quotient** : lim(f/g) = lim f / lim g (si lim g ≠ 0)

### Formes Indéterminées (FI)
Il existe 4 formes indéterminées :
- **"∞ - ∞"** : Souvent levée en factorisant par le terme de plus haut degré.
- **"0 × ∞"** : Souvent levée en transformant l'expression.
- **"∞ / ∞"** : Pour les fonctions rationnelles, on prend la limite du quotient des termes de plus haut degré.
- **"0 / 0"** : Souvent levée en utilisant le nombre dérivé, la factorisation, ou la règle de L'Hôpital.

### Théorèmes de comparaison
- **Théorème des gendarmes** : Si g(x) ≤ f(x) ≤ h(x) et que lim g(x) = lim h(x) = L, alors lim f(x) = L.
- **Croissances comparées** : Permet de comparer exponentielles, puissances et logarithmes en l'infini.
  - lim (x→+∞) e^x / x^n = +∞
  - lim (x→+∞) ln(x) / x^n = 0 (pour n > 0)

## 3. Continuité
Une fonction *f* est continue en un point *a* si **lim (x→a) f(x) = f(a)**.
Une fonction est continue sur un intervalle si elle est continue en tout point de cet intervalle.

### Théorème des Valeurs Intermédiaires (TVI)
Si *f* est une fonction continue sur un intervalle [a, b], alors pour tout réel *k* compris entre f(a) et f(b), il existe au moins un réel *c* dans [a, b] tel que f(c) = k.
**Corollaire (Théorème de la bijection)** : Si de plus *f* est strictement monotone sur [a, b], alors pour tout réel *k* compris entre f(a) et f(b), l'équation f(x) = k admet une unique solution dans [a, b].

## 4. Asymptotes
- **Asymptote verticale** : La droite d'équation x = a est une asymptote verticale à la courbe de *f* si lim (x→a) f(x) = ±∞.
- **Asymptote horizontale** : La droite d'équation y = L est une asymptote horizontale si lim (x→±∞) f(x) = L.
- **Asymptote oblique** : La droite d'équation y = ax + b est une asymptote oblique si lim (x→±∞) [f(x) - (ax + b)] = 0.
  - On trouve *a* par : a = lim (x→±∞) f(x)/x
  - Puis *b* par : b = lim (x→±∞) [f(x) - ax]
`,
        quiz: [
          {
            id: 'math-1-q1',
            question: 'Quelle est la limite de (x²-4)/(x-2) quand x tend vers 2 ?',
            options: ['0', '4', 'n\'existe pas', '∞'],
            correctAnswer: 1,
            explanation: 'C\'est une forme indéterminée 0/0. En factorisant : (x-2)(x+2)/(x-2) = x+2. Quand x tend vers 2, la limite est 2+2=4.'
          },
          {
            id: 'math-1-q2',
            question: 'Une fonction polynomiale est-elle toujours continue sur R ?',
            options: ['Oui', 'Non', 'Seulement si son degré est pair', 'Seulement sur R+'],
            correctAnswer: 0,
            explanation: 'Oui, toute fonction polynomiale est continue sur l\'ensemble des nombres réels R.'
          },
          {
            id: 'math-1-q3',
            question: 'Quelle est la limite de (3x³ - 2x) / (x³ + 1) en +∞ ?',
            options: ['3', '0', '+∞', '-2'],
            correctAnswer: 0,
            explanation: 'Pour une fonction rationnelle en l\'infini, on prend la limite du quotient des termes de plus haut degré : lim (3x³/x³) = 3.'
          },
          {
            id: 'math-1-q4',
            question: 'Que signifie lim (x→3+) f(x) = +∞ ?',
            options: ['Une asymptote horizontale y=3', 'Une asymptote verticale x=3', 'Un trou dans la courbe en x=3', 'La fonction est définie en 3'],
            correctAnswer: 1,
            explanation: 'Une limite infinie en un point fini indique la présence d\'une asymptote verticale d\'équation x = ce point.'
          },
          {
            id: 'math-1-q5',
            question: 'Selon le théorème des valeurs intermédiaires, si f est continue sur [0, 5] avec f(0)=-1 et f(5)=3, l\'équation f(x)=1 admet...',
            options: ['...exactement une solution', '...au moins une solution', '...aucune solution', '...une solution en x=2'],
            correctAnswer: 1,
            explanation: 'Le TVI garantit l\'existence d\'au moins une solution car 1 est compris entre -1 et 3. Il ne garantit pas l\'unicité sans la monotonie.'
          },
          {
            id: 'math-1-q6',
            question: 'Quelle est la limite de ln(x)/x en +∞ ?',
            options: ['+∞', '1', '0', 'e'],
            correctAnswer: 2,
            explanation: 'C\'est un résultat classique de croissances comparées : la puissance l\'emporte sur le logarithme en +∞.'
          },
          {
            id: 'math-1-q7',
            question: 'La fonction f(x) = 1/x est...',
            options: ['Continue sur R', 'Continue sur R*', 'Continue sur [0, +∞[', 'Continue nulle part'],
            correctAnswer: 1,
            explanation: 'La fonction inverse est continue sur son domaine de définition, qui est R* (tous les réels sauf 0).'
          },
          {
            id: 'math-1-q8',
            question: 'Si lim (x→+∞) f(x) = -2, que peut-on dire ?',
            options: ['La courbe de f a une asymptote verticale x=-2', 'La courbe de f a une asymptote horizontale y=-2', 'La fonction s\'annule en -2', 'La limite n\'existe pas'],
            correctAnswer: 1,
            explanation: 'Une limite finie à l\'infini indique une asymptote horizontale d\'équation y = cette limite.'
          },
          {
            id: 'math-1-q9',
            question: 'Quelle est une forme indéterminée parmi les suivantes ?',
            options: ['∞ + ∞', '0 / ∞', '∞ × ∞', '∞ - ∞'],
            correctAnswer: 3,
            explanation: 'Les quatre formes indéterminées sont ∞ - ∞, 0 × ∞, ∞ / ∞, et 0 / 0.'
          },
          {
            id: 'math-1-q10',
            question: 'La fonction f(x) = |x| est-elle continue en 0 ?',
            options: ['Oui', 'Non', 'Elle n\'est pas définie en 0', 'On ne peut pas savoir'],
            correctAnswer: 0,
            explanation: 'Oui, la limite à gauche (-x) et la limite à droite (x) valent toutes deux 0, ce qui est égal à f(0)=|0|=0.'
          }
        ],
        mindmap: {
          title: 'Fonctions et limites',
          nodes: [
            {
              title: 'Fonctions',
              children: [
                { title: 'Définition & Domaine' },
                { title: 'Types usuels' }
              ]
            },
            {
              title: 'Limites',
              children: [
                { title: 'Opérations' },
                { title: 'Formes Indéterminées' },
                { title: 'Théorèmes de comparaison' }
              ]
            },
            {
              title: 'Continuité',
              children: [
                { title: 'Définition' },
                { title: 'Théorème des Valeurs Intermédiaires' }
              ]
            },
            {
              title: 'Asymptotes',
              children: [
                { title: 'Verticale' },
                { title: 'Horizontale' },
                { title: 'Oblique' }
              ]
            }
          ]
        }
      },
      {
        id: 'math-2',
        title: 'Séance 2 : Dérivées et études de fonctions',
        duration: '8h',
        description: 'Calcul différentiel, applications des dérivées, convexité et points d\'inflexion.',
        completed: false,
        summary: `# Dérivées et études de fonctions

## 1. Nombre dérivé et fonction dérivée
### Définition (Taux d'accroissement)
Le nombre dérivé de *f* en *a*, noté f'(a), est la limite (si elle existe et est finie) :
**f'(a) = lim (h→0) [f(a+h) - f(a)] / h**
Géométriquement, f'(a) est le coefficient directeur de la tangente à la courbe de *f* au point d'abscisse *a*.
L'équation de la tangente est : **y = f'(a)(x - a) + f(a)**.

### Fonction dérivée
La fonction dérivée *f'* est la fonction qui à chaque *x* où *f* est dérivable associe le nombre dérivé f'(x).

## 2. Règles de dérivation
- **Somme** : (u + v)' = u' + v'
- **Produit** : (u × v)' = u'v + uv'
- **Quotient** : (u / v)' = (u'v - uv') / v²
- **Composée** : (g ∘ u)'(x) = g'(u(x)) × u'(x)
- **Cas particuliers de composition** :
  - (u^n)' = n × u' × u^(n-1)
  - (e^u)' = u'e^u
  - (ln u)' = u' / u

## 3. Applications de la dérivée
### Sens de variation
Le signe de la dérivée f'(x) donne le sens de variation de la fonction f(x) :
- Si f'(x) > 0 sur un intervalle I, alors *f* est strictement croissante sur I.
- Si f'(x) < 0 sur un intervalle I, alors *f* est strictement décroissante sur I.
- Si f'(x) = 0 sur un intervalle I, alors *f* est constante sur I.

### Extremums locaux
Si f'(x) s'annule en changeant de signe en *a*, alors *f* admet un extremum local (maximum ou minimum) en *a*.

## 4. Dérivée seconde et Convexité
### Définition
Une fonction *f* est **convexe** sur un intervalle I si sa courbe est au-dessus de toutes ses tangentes sur I. Elle est **concave** si sa courbe est en dessous.
Un **point d'inflexion** est un point où la convexité de la courbe change.

### Lien avec la dérivée seconde
Soit f'' la dérivée de f'.
- Si f''(x) ≥ 0 sur I, alors *f* est convexe sur I.
- Si f''(x) ≤ 0 sur I, alors *f* est concave sur I.
- Si f''(x) s'annule en changeant de signe en *a*, alors le point d'abscisse *a* est un point d'inflexion.
`,
        quiz: [
          {
            id: 'math-2-q1',
            question: 'Quelle est la dérivée de f(x) = x³ + 2x² - 5x + 1 ?',
            options: ['3x² + 4x - 5', '3x² + 2x - 5', 'x² + 4x - 5', '3x³ + 4x² - 5x'],
            correctAnswer: 0,
            explanation: 'On dérive terme à terme : (x³)\' = 3x², (2x²)\' = 4x, (-5x)\' = -5, (1)\' = 0. La somme est 3x² + 4x - 5.'
          },
          {
            id: 'math-2-q2',
            question: 'Quelle est l\'équation de la tangente à la courbe de f(x) = x² en x=1 ?',
            options: ['y = 2x - 1', 'y = 2x + 1', 'y = x + 1', 'y = x²'],
            correctAnswer: 0,
            explanation: 'f(1)=1. f\'(x)=2x, donc f\'(1)=2. L\'équation est y = f\'(1)(x-1) + f(1) = 2(x-1) + 1 = 2x - 1.'
          },
          {
            id: 'math-2-q3',
            question: 'La dérivée de f(x) = e^(2x+1) est :',
            options: ['e^(2x+1)', '2x * e^(2x+1)', '2 * e^(2x+1)', '(2x+1) * e^(2x+1)'],
            correctAnswer: 2,
            explanation: 'On utilise la formule (e^u)\' = u\'e^u. Ici u(x)=2x+1, donc u\'(x)=2. La dérivée est 2e^(2x+1).'
          },
          {
            id: 'math-2-q4',
            question: 'Si f\'(x) > 0 sur l\'intervalle [0, 5], alors f est :',
            options: ['Constante sur [0, 5]', 'Décroissante sur [0, 5]', 'Strictement croissante sur [0, 5]', 'Négative sur [0, 5]'],
            correctAnswer: 2,
            explanation: 'Le signe de la dérivée détermine le sens de variation de la fonction. Une dérivée positive implique une fonction croissante.'
          },
          {
            id: 'math-2-q5',
            question: 'La dérivée de g(x) = ln(x² + 1) est :',
            options: ['1 / (x² + 1)', '2x / (x² + 1)', '1 / (2x)', '2x * ln(x² + 1)'],
            correctAnswer: 1,
            explanation: 'On utilise (ln u)\' = u\'/u. Ici u(x)=x²+1, donc u\'(x)=2x. La dérivée est 2x / (x² + 1).'
          },
          {
            id: 'math-2-q6',
            question: 'Un point d\'inflexion est un point où :',
            options: ['La dérivée première s\'annule', 'La fonction atteint un maximum', 'La convexité de la courbe change', 'La courbe coupe l\'axe des abscisses'],
            correctAnswer: 2,
            explanation: 'Un point d\'inflexion marque un changement de convexité (de concave à convexe ou inversement), ce qui correspond à un changement de signe de la dérivée seconde.'
          },
          {
            id: 'math-2-q7',
            question: 'Quelle est la dérivée de h(x) = 5/x ?',
            options: ['-5 / x²', '5 / x²', '5', '-5 / x'],
            correctAnswer: 0,
            explanation: 'h(x) = 5 * (1/x). La dérivée de 1/x est -1/x². Donc h\'(x) = 5 * (-1/x²) = -5/x².'
          },
          {
            id: 'math-2-q8',
            question: 'Si f\'(3)=0 et f\'(x) est négative pour x<3 et positive pour x>3, alors f admet en x=3 un :',
            options: ['Maximum local', 'Minimum local', 'Point d\'inflexion', 'Asymptote'],
            correctAnswer: 1,
            explanation: 'La dérivée s\'annule en changeant de signe de négatif à positif. La fonction est donc décroissante puis croissante, ce qui caractérise un minimum local.'
          },
          {
            id: 'math-2-q9',
            question: 'La dérivée de la fonction f(x) = sin(3x) est :',
            options: ['cos(3x)', '3cos(3x)', '-3cos(3x)', 'cos(x)'],
            correctAnswer: 1,
            explanation: 'On utilise (sin u)\' = u\'cos u. Ici u(x)=3x, donc u\'(x)=3. La dérivée est 3cos(3x).'
          },
          {
            id: 'math-2-q10',
            question: 'Si f\'\'(x) > 0 sur un intervalle I, la fonction f est :',
            options: ['Concave sur I', 'Convexe sur I', 'Croissante sur I', 'Négative sur I'],
            correctAnswer: 1,
            explanation: 'Une dérivée seconde positive sur un intervalle I signifie que la fonction f est convexe sur I (sa courbe est "tournée vers le haut").'
          }
        ],
        mindmap: {
          title: 'Dérivées',
          nodes: [
            {
              title: 'Définition et Tangente',
            },
            {
              title: 'Règles de calcul',
              children: [
                { title: 'Opérations' },
                { title: 'Composition' }
              ]
            },
            {
              title: 'Applications',
              children: [
                { title: 'Sens de variation' },
                { title: 'Extremums' }
              ]
            },
            {
                title: 'Convexité',
                children: [
                  { title: 'Dérivée seconde' },
                  { title: 'Point d\'inflexion' }
                ]
            }
          ]
        }
      },
      {
        id: 'math-3',
        title: 'Séance 3 : Intégrales et primitives',
        duration: '8h',
        description: 'Calcul intégral, primitives, intégration par parties et applications géométriques.',
        completed: false,
        summary: `# Intégrales et Primitives

## 1. Primitives
### Définition
Une fonction *F* est une primitive de *f* sur un intervalle I si, pour tout *x* de I, **F'(x) = f(x)**.
Si *F* est une primitive de *f*, alors toutes les autres primitives sont de la forme **F(x) + C**, où C est une constante réelle.

### Primitives des fonctions usuelles
- f(x) = xⁿ  =>  F(x) = (xⁿ⁺¹)/(n+1) + C
- f(x) = 1/x  =>  F(x) = ln|x| + C
- f(x) = e^x  =>  F(x) = e^x + C
- f(x) = cos(x) => F(x) = sin(x) + C
- f(x) = sin(x) => F(x) = -cos(x) + C
- f(x) = u'(x) * u(x)ⁿ => F(x) = (u(x)ⁿ⁺¹)/(n+1) + C
- f(x) = u'(x) / u(x)   => F(x) = ln|u(x)| + C
- f(x) = u'(x) * e^(u(x)) => F(x) = e^(u(x)) + C

## 2. Intégrale définie
### Définition et Théorème Fondamental
Si *f* est une fonction continue sur [a, b] et *F* est une de ses primitives, alors l'intégrale de *f* de *a* à *b* est le nombre réel :
**∫[a,b] f(x) dx = [F(x)]_a^b = F(b) - F(a)**

### Interprétation géométrique
Si *f* est continue et **positive** sur [a, b], alors ∫[a,b] f(x) dx est l'aire, en unités d'aire, du domaine délimité par la courbe de *f*, l'axe des abscisses, et les droites d'équation x=a et x=b.
Si *f* est négative, l'intégrale est l'opposé de l'aire.

### Propriétés de l'intégrale
- **Linéarité** : ∫(αf + βg) = α∫f + β∫g
- **Relation de Chasles** : ∫[a,c] f(x) dx = ∫[a,b] f(x) dx + ∫[b,c] f(x) dx
- **Positivité** : Si f(x) ≥ 0 sur [a, b] (avec a≤b), alors ∫[a,b] f(x) dx ≥ 0.
- **Comparaison** : Si f(x) ≤ g(x) sur [a, b], alors ∫[a,b] f(x) dx ≤ ∫[a,b] g(x) dx.

## 3. Techniques de calcul
### Intégration par Parties (IPP)
Si *u* et *v* sont deux fonctions dérivables, alors :
**∫[a,b] u'(x)v(x) dx = [u(x)v(x)]_a^b - ∫[a,b] u(x)v'(x) dx**
Cette technique est utile pour intégrer des produits de fonctions (ex: x*e^x, ln(x)).

## 4. Applications
### Valeur moyenne
La valeur moyenne d'une fonction *f* continue sur [a, b] (avec a≠b) est :
**μ = (1 / (b-a)) * ∫[a,b] f(x) dx**

### Calcul d'aires et de volumes
- **Aire entre deux courbes** : L'aire du domaine entre les courbes de *f* et *g* (avec f(x)≥g(x)) sur [a, b] est A = ∫[a,b] (f(x) - g(x)) dx.
- **Volume d'un solide de révolution** (autour de l'axe Ox) : V = π * ∫[a,b] (f(x))² dx.`,
        quiz: [
            {
                id: 'math-3-q1',
                question: 'Une primitive de f(x) = 3x² + 1 est :',
                options: ['x³ + x', '6x', '3x³ + x', 'x³'],
                correctAnswer: 0,
                explanation: 'Une primitive de 3x² est x³. Une primitive de 1 est x. Donc une primitive de f(x) est F(x) = x³ + x (+ C).'
            },
            {
                id: 'math-3-q2',
                question: 'Que vaut ∫[0,1] 2x dx ?',
                options: ['0', '1', '2', '4'],
                correctAnswer: 1,
                explanation: 'Une primitive de 2x est x². L\'intégrale vaut [x²] de 0 à 1, soit 1² - 0² = 1.'
            },
            {
                id: 'math-3-q3',
                question: 'Si f est positive sur [2, 5], que représente ∫[2,5] f(x) dx ?',
                options: ['La longueur de la courbe', 'L\'aire sous la courbe entre x=2 et x=5', 'La pente de la sécante', 'La valeur de f(5) - f(2)'],
                correctAnswer: 1,
                explanation: 'Pour une fonction positive, l\'intégrale définie correspond à l\'aire géométrique sous la courbe.'
            },
            {
                id: 'math-3-q4',
                question: 'D\'après la relation de Chasles, ∫[0,5] f(x) dx est égal à :',
                options: ['∫[0,2] f(x) dx + ∫[2,5] f(x) dx', '∫[5,0] f(x) dx', '∫[0,2] f(x) dx - ∫[2,5] f(x) dx', 'f(5) - f(0)'],
                correctAnswer: 0,
                explanation: 'La relation de Chasles permet de "couper" une intégrale en deux en un point intermédiaire.'
            },
            {
                id: 'math-3-q5',
                question: 'Une primitive de f(x) = e^(3x) est :',
                options: ['e^(3x)', '3e^(3x)', '(1/3)e^(3x)', 'e^(x³)'],
                correctAnswer: 2,
                explanation: 'La primitive de e^(ax) est (1/a)e^(ax). Ici a=3, donc la primitive est (1/3)e^(3x).'
            },
            {
                id: 'math-3-q6',
                question: 'La valeur moyenne de f(x)=x sur [0, 4] est :',
                options: ['1', '2', '4', '8'],
                correctAnswer: 1,
                explanation: 'μ = (1/(4-0)) ∫[0,4] x dx = (1/4) * [x²/2]_0^4 = (1/4) * (16/2 - 0) = (1/4) * 8 = 2.'
            },
            {
                id: 'math-3-q7',
                question: 'Quelle technique est la plus adaptée pour calculer ∫ x*e^x dx ?',
                options: ['Changement de variable', 'Relation de Chasles', 'Intégration par parties', 'Décomposition en éléments simples'],
                correctAnswer: 2,
                explanation: 'L\'intégration par parties est idéale pour intégrer un produit d\'une fonction polynomiale et d\'une fonction exponentielle ou trigonométrique.'
            },
            {
                id: 'math-3-q8',
                question: 'Une primitive de f(x) = 2x / (x² + 1) est :',
                options: ['ln(x² + 1)', '2 ln(x² + 1)', '1 / (x² + 1)', 'arctan(x)'],
                correctAnswer: 0,
                explanation: 'L\'expression est de la forme u\'/u avec u(x) = x² + 1 et u\'(x) = 2x. Une primitive est donc ln|u(x)| = ln(x² + 1) car x²+1 est toujours positif.'
            },
            {
                id: 'math-3-q9',
                question: 'Que vaut ∫[a,a] f(x) dx ?',
                options: ['f(a)', '0', '2f(a)', 'Indéfini'],
                correctAnswer: 1,
                explanation: 'Si les bornes d\'intégration sont les mêmes, l\'intégrale est nulle : F(a) - F(a) = 0.'
            },
            {
                id: 'math-3-q10',
                question: 'L\'aire entre la courbe de y=x² et y=x pour x entre 0 et 1 est :',
                options: ['1/6', '1/3', '1/2', '1'],
                correctAnswer: 0,
                explanation: 'Sur [0,1], x ≥ x². L\'aire est A = ∫[0,1] (x - x²) dx = [x²/2 - x³/3]_0^1 = (1/2 - 1/3) - 0 = 1/6.'
            }
        ],
        mindmap: { 
            title: 'Intégrales',
            nodes: [
                {
                    title: 'Primitives',
                },
                {
                    title: 'Intégrale Définie',
                    children: [
                        {title: 'Théorème Fondamental'},
                        {title: 'Interprétation (Aire)'},
                        {title: 'Propriétés'}
                    ]
                },
                {
                    title: 'Techniques de Calcul',
                },
                {
                    title: 'Applications',
                }
            ]
        }
      },
      {
        id: 'math-4',
        title: 'Séance 4 : Probabilités',
        duration: '8h',
        description: 'Probabilités conditionnelles, indépendance, variables aléatoires et lois de probabilité.',
        completed: false,
        summary: `# Probabilités

## 1. Vocabulaire et Probabilités Simples
- **Expérience aléatoire** : Expérience dont le résultat est incertain.
- **Univers (Ω)** : Ensemble de tous les résultats possibles.
- **Événement** : Sous-ensemble de l'univers.
- **Probabilité d'un événement A (P(A))** : Nombre entre 0 et 1. P(Ω) = 1.
- **Événement contraire (Ā)** : P(Ā) = 1 - P(A).
- **Union (A ∪ B)** : P(A ∪ B) = P(A) + P(B) - P(A ∩ B).

## 2. Probabilités Conditionnelles
### Définition
La probabilité de l'événement B sachant que l'événement A est réalisé, notée P_A(B) ou P(B|A), est :
**P_A(B) = P(A ∩ B) / P(A)** (avec P(A) > 0)
On en déduit la formule des probabilités composées : **P(A ∩ B) = P(A) × P_A(B)**.

### Formule des Probabilités Totales
Si les événements B₁, B₂, ..., Bₙ forment une partition de l'univers, alors pour tout événement A :
**P(A) = P(A ∩ B₁) + ... + P(A ∩ Bₙ) = P(B₁)P_B₁(A) + ... + P(Bₙ)P_Bₙ(A)**
Les arbres de probabilités sont un outil puissant pour visualiser et appliquer cette formule.

## 3. Indépendance
Deux événements A et B sont **indépendants** si la réalisation de l'un n'influence pas la probabilité de l'autre.
**A et B sont indépendants si et seulement si P(A ∩ B) = P(A) × P(B)**.
Si A et B sont indépendants, alors P_A(B) = P(B).

## 4. Variables Aléatoires (V.A.)
Une variable aléatoire X associe une valeur numérique à chaque issue d'une expérience aléatoire.

### Loi de probabilité d'une V.A. discrète
C'est donner l'ensemble des valeurs x_i prises par X et les probabilités associées p_i = P(X = x_i). La somme des p_i doit valoir 1.

### Espérance, Variance, Écart-type
- **Espérance (E[X])** : La valeur moyenne que l'on peut espérer pour X. E[X] = Σ x_i * p_i
- **Variance (V(X))** : Mesure la dispersion des valeurs. V(X) = E[X²] - (E[X])²
- **Écart-type (σ(X))** : Racine carrée de la variance. σ(X) = √V(X).

## 5. Lois de probabilité usuelles
### Épreuve et Schéma de Bernoulli
- **Épreuve de Bernoulli** : Expérience à deux issues : succès (probabilité *p*) et échec (1-*p*).
- **Schéma de Bernoulli** : Répétition de *n* épreuves de Bernoulli identiques et indépendantes.

### Loi Binomiale (B(n, p))
La V.A. X qui compte le nombre de succès dans un schéma de Bernoulli suit une loi binomiale.
- **Probabilité** : P(X = k) = (n k) * p^k * (1-p)^(n-k)
- **Espérance** : E[X] = n * p
- **Variance** : V(X) = n * p * (1-p)`,
        quiz: [
            {
                id: 'math-4-q1',
                question: 'On lance un dé équilibré. Quelle est la probabilité d\'obtenir un nombre pair ?',
                options: ['1/6', '1/3', '1/2', '2/3'],
                correctAnswer: 2,
                explanation: 'Les issues paires sont {2, 4, 6}. Il y a 3 issues favorables sur 6 possibles. P = 3/6 = 1/2.'
            },
            {
                id: 'math-4-q2',
                question: 'Si P(A)=0.5, P(B)=0.4 et P(A ∩ B)=0.2, que vaut P(A ∪ B) ?',
                options: ['0.9', '0.7', '0.2', '0.1'],
                correctAnswer: 1,
                explanation: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.5 + 0.4 - 0.2 = 0.7.'
            },
            {
                id: 'math-4-q3',
                question: 'Si P(A)=0.6 et P(A ∩ B)=0.3, que vaut P_A(B) ?',
                options: ['0.5', '0.3', '1.8', '0.2'],
                correctAnswer: 0,
                explanation: 'P_A(B) = P(A ∩ B) / P(A) = 0.3 / 0.6 = 0.5.'
            },
            {
                id: 'math-4-q4',
                question: 'Si A et B sont deux événements indépendants avec P(A)=0.5 et P(B)=0.2, que vaut P(A ∩ B) ?',
                options: ['0.7', '0.3', '0.1', 'Impossible à dire'],
                correctAnswer: 2,
                explanation: 'Pour des événements indépendants, P(A ∩ B) = P(A) × P(B) = 0.5 × 0.2 = 0.1.'
            },
            {
                id: 'math-4-q5',
                question: 'Que représente l\'espérance d\'une variable aléatoire ?',
                options: ['La valeur la plus probable', 'La valeur maximale', 'La valeur moyenne sur un grand nombre d\'essais', 'L\'écart des valeurs'],
                correctAnswer: 2,
                explanation: 'L\'espérance mathématique est la valeur moyenne que prendrait la variable aléatoire si on répétait l\'expérience un très grand nombre de fois.'
            },
            {
                id: 'math-4-q6',
                question: 'X suit une loi binomiale B(10, 0.3). Quelle est son espérance E[X] ?',
                options: ['10', '0.3', '3', '2.1'],
                correctAnswer: 2,
                explanation: 'Pour une loi binomiale B(n, p), l\'espérance est E[X] = n × p. Ici, E[X] = 10 × 0.3 = 3.'
            },
            {
                id: 'math-4-q7',
                question: 'X suit une loi binomiale B(10, 0.3). Quelle est sa variance V(X) ?',
                options: ['3', '7', '0.21', '2.1'],
                correctAnswer: 3,
                explanation: 'Pour une loi binomiale B(n, p), la variance est V(X) = n × p × (1-p). Ici, V(X) = 10 × 0.3 × (1-0.3) = 3 × 0.7 = 2.1.'
            },
            {
                id: 'math-4-q8',
                question: 'Qu\'est-ce qu\'une partition de l\'univers ?',
                options: ['Un ensemble d\'événements dont l\'union est Ω', 'Un ensemble d\'événements disjoints deux à deux', 'Un ensemble d\'événements disjoints dont l\'union est Ω', 'Un ensemble d\'événements de même probabilité'],
                correctAnswer: 2,
                explanation: 'Une partition est un ensemble d\'événements qui sont incompatibles (disjoints) deux à deux et dont la réunion forme l\'univers entier.'
            },
            {
                id: 'math-4-q9',
                question: 'La probabilité de l\'événement contraire de A, noté Ā, est :',
                options: ['P(A)', '1 / P(A)', '1 - P(A)', '0'],
                correctAnswer: 2,
                explanation: 'La somme des probabilités d\'un événement et de son contraire est toujours égale à 1.'
            },
            {
                id: 'math-4-q10',
                question: 'Dans un jeu de 32 cartes, on tire une carte. La probabilité que ce soit un roi est 4/32. Sachant que la carte tirée est une figure (Roi, Dame, Valet), quelle est la probabilité que ce soit un roi ?',
                options: ['4/32', '4/12', '1/32', '1/4'],
                correctAnswer: 1,
                explanation: 'Il y a 12 figures (4 Rois, 4 Dames, 4 Valets). Sachant que c\'est une figure, l\'univers est réduit à 12 cartes. Parmi elles, il y a 4 rois. P = 4/12 = 1/3.'
            }
        ],
        mindmap: { 
            title: 'Probabilités', 
            nodes: [
                {
                    title: 'Bases et Vocabulaire',
                },
                {
                    title: 'Probabilités Conditionnelles',
                },
                {
                    title: 'Indépendance',
                },
                {
                    title: 'Variables Aléatoires',
                },
                {
                    title: 'Loi Binomiale',
                }
            ]
        }
      },
      {
        id: 'math-5',
        title: 'Séance 5 : Géométrie dans l\'espace',
        duration: '8h',
        description: 'Vecteurs, droites, plans, produit scalaire et orthogonalité.',
        completed: false,
        summary: `# Géométrie dans l'espace

## 1. Vecteurs de l'espace
Un vecteur **u** est défini par sa direction, son sens et sa norme. Dans un repère (O, **i**, **j**, **k**), un vecteur **u** a pour coordonnées (x, y, z).
- **Norme** : ||**u**|| = √(x² + y² + z²)
- **Addition** : **u** + **v** = (x+x', y+y', z+z')
- **Vecteur AB** : **AB** = (x_B - x_A, y_B - y_A, z_B - z_A)

### Colinéarité
Deux vecteurs **u** et **v** sont colinéaires s'il existe un réel *k* tel que **u** = k**v**.
Trois points A, B, C sont alignés si les vecteurs **AB** et **AC** sont colinéaires.

## 2. Produit Scalaire
### Définitions
- **Avec les coordonnées** : **u** · **v** = xx' + yy' + zz'
- **Avec les normes et l'angle** : **u** · **v** = ||**u**|| × ||**v**|| × cos(**u**, **v**)

### Orthogonalité
Deux vecteurs **u** et **v** sont orthogonaux si et seulement si **u** · **v** = 0.
Une droite est orthogonale à un plan si elle est orthogonale à deux vecteurs directeurs non colinéaires de ce plan.

## 3. Droites et Plans
### Représentation paramétrique d'une droite
Une droite (D) passant par A(x_A, y_A, z_A) et de vecteur directeur **u**(a, b, c) a pour représentation :
{ x = x_A + at
{ y = y_A + bt
{ z = z_A + ct
(t ∈ R)

### Équation cartésienne d'un plan
Un plan (P) a une équation de la forme **ax + by + cz + d = 0**.
Le vecteur **n**(a, b, c) est un **vecteur normal** au plan (P), c'est-à-dire qu'il est orthogonal à tous les vecteurs du plan.

### Positions relatives
- **Deux droites** : Coplanaires (sécantes ou parallèles) ou non coplanaires.
- **Une droite et un plan** : Sécants, parallèles, ou la droite est contenue dans le plan.
- **Deux plans** : Sécants (leur intersection est une droite) ou parallèles.

### Comment déterminer les positions relatives ?
- **Parallélisme** : Étudier la colinéarité des vecteurs directeurs (droites) ou normaux (plans).
- **Orthogonalité** : Utiliser le produit scalaire. Une droite de vecteur directeur **u** est parallèle à un plan de vecteur normal **n** si **u** · **n** = 0.
- **Intersection** : Résoudre le système d'équations.
`,
        quiz: [
            {
                id: 'math-5-q1',
                question: 'Soit u(1, 2, 3) et v(2, 4, 6). Ces vecteurs sont :',
                options: ['Orthogonaux', 'Colinéaires', 'De même norme', 'Unitaires'],
                correctAnswer: 1,
                explanation: 'Les vecteurs sont colinéaires car v = 2u (2x1=2, 2x2=4, 2x3=6).'
            },
            {
                id: 'math-5-q2',
                question: 'Le produit scalaire de u(1, 0, -2) et v(3, 5, 1) est :',
                options: ['1', '0', '3', '5'],
                correctAnswer: 0,
                explanation: 'u · v = (1)(3) + (0)(5) + (-2)(1) = 3 + 0 - 2 = 1.'
            },
            {
                id: 'math-5-q3',
                question: 'Si u · v = 0, les vecteurs u et v sont :',
                options: ['Parallèles', 'Orthogonaux', 'Égaux', 'Opposés'],
                correctAnswer: 1,
                explanation: 'La nullité du produit scalaire est la condition d\'orthogonalité de deux vecteurs non nuls.'
            },
            {
                id: 'math-5-q4',
                question: 'Un vecteur normal au plan d\'équation 2x - y + 5z - 1 = 0 est :',
                options: ['n(2, -1, 5)', 'n(2, 1, 5)', 'n(-1, 5, -1)', 'n(x, y, z)'],
                correctAnswer: 0,
                explanation: 'Les coefficients de x, y, et z dans l\'équation cartésienne d\'un plan sont les coordonnées d\'un vecteur normal à ce plan.'
            },
            {
                id: 'math-5-q5',
                question: 'La norme du vecteur u(-3, 0, 4) est :',
                options: ['7', '1', '5', '25'],
                correctAnswer: 2,
                explanation: '||u|| = √((-3)² + 0² + 4²) = √(9 + 0 + 16) = √25 = 5.'
            },
            {
                id: 'math-5-q6',
                question: 'Une droite et un plan sont parallèles si :',
                options: ['Leur vecteur directeur et normal sont colinéaires', 'Leur vecteur directeur et normal sont orthogonaux', 'Ils n\'ont aucun point commun', 'Ils ont un seul point commun'],
                correctAnswer: 1,
                explanation: 'Si le vecteur directeur de la droite est orthogonal au vecteur normal du plan, alors la droite est parallèle au plan (ou contenue dedans).'
            },
            {
                id: 'math-5-q7',
                question: 'Le point A(1, 1, 1) appartient-il au plan d\'équation x + 2y - 3z = 0 ?',
                options: ['Oui', 'Non', 'Seulement si z=0', 'Impossible à dire'],
                correctAnswer: 0,
                explanation: 'On remplace les coordonnées dans l\'équation : 1 + 2(1) - 3(1) = 1 + 2 - 3 = 0. L\'équation est vérifiée.'
            },
            {
                id: 'math-5-q8',
                question: 'Deux plans sont parallèles si leurs vecteurs normaux sont :',
                options: ['Orthogonaux', 'Coplanaires', 'Colinéaires', 'Égaux'],
                correctAnswer: 2,
                explanation: 'Le parallélisme de deux plans se traduit par la colinéarité de leurs vecteurs normaux.'
            },
            {
                id: 'math-5-q9',
                question: 'Soit A(1,2,3) et B(3,3,3). Les coordonnées du vecteur AB sont :',
                options: ['(4, 5, 6)', '(2, 1, 0)', '(-2, -1, 0)', '(3, 6, 9)'],
                correctAnswer: 1,
                explanation: 'AB = (x_B - x_A, y_B - y_A, z_B - z_A) = (3-1, 3-2, 3-3) = (2, 1, 0).'
            },
            {
                id: 'math-5-q10',
                question: 'L\'intersection de deux plans non parallèles est :',
                options: ['Un point', 'Une droite', 'Un plan', 'Le vide'],
                correctAnswer: 1,
                explanation: 'Deux plans sont soit parallèles (ou confondus), soit sécants. S\'ils sont sécants, leur intersection est une droite.'
            }
        ],
        mindmap: { 
            title: 'Géométrie dans l\'espace', 
            nodes: [
                {
                    title: 'Vecteurs',
                },
                {
                    title: 'Produit Scalaire & Orthogonalité',
                },
                {
                    title: 'Droites (Rep. paramétrique)',
                },
                {
                    title: 'Plans (Eq. cartésienne)',
                },
                {
                    title: 'Positions Relatives',
                }
            ]
        }
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
        description: 'Cinématique, dynamique, énergie et lois de Newton',
        completed: false,
        summary: `# Mécanique

## 1. Cinématique du point
Étude du mouvement indépendamment des causes qui le provoquent.
- **Référentiel** : Solide par rapport auquel on étudie le mouvement. Un référentiel est **galiléen** si le principe d'inertie s'y applique.
- **Vecteur position** : **OM** = x**i** + y**j** + z**k**
- **Vecteur vitesse** : Dérivée du vecteur position par rapport au temps. **v** = d**OM**/dt.
- **Vecteur accélération** : Dérivée du vecteur vitesse. **a** = d**v**/dt.

## 2. Lois de Newton (Dynamique)
- **1ère loi (Principe d'inertie)** : Dans un référentiel galiléen, si ΣF_ext = 0, alors le centre d'inertie est au repos ou en mouvement rectiligne uniforme.
- **2ème loi (Principe Fondamental de la Dynamique)** : Dans un référentiel galiléen, **ΣF_ext = m * a**.
- **3ème loi (Actions réciproques)** : **F_A/B** = - **F_B/A**.

## 3. Énergie
### Travail d'une force
Le travail d'une force constante **F** lors d'un déplacement **AB** est : W_AB(**F**) = **F** · **AB**.

### Énergie cinétique (Ec)
Énergie liée au mouvement : **Ec = ½ * m * v²** (en Joules, J).

### Théorème de l'énergie cinétique
La variation d'énergie cinétique est égale à la somme des travaux des forces.
**ΔEc = Ec_B - Ec_A = Σ W_AB(F)**

### Énergie potentielle de pesanteur (Epp)
Énergie liée à l'altitude : **Epp = m * g * z** (+ constante).

### Énergie mécanique (Em)
Somme de l'énergie cinétique et potentielle : **Em = Ec + Epp**.
- Si seulement des forces conservatives (poids) agissent, l'énergie mécanique se conserve : **ΔEm = 0**.
- S'il y a des forces non conservatives (frottements), leur travail est égal à la variation de l'énergie mécanique : **ΔEm = W(F_non-conservatives)**.`,
        quiz: [
          {
            id: 'phys-1-q1',
            question: 'Un objet en chute libre (sans frottements) a une accélération égale à :',
            options: ['0 m/s²', 'g ≈ 9.8 m/s²', 'Variable', 'Dépend de sa masse'],
            correctAnswer: 1,
            explanation: 'En chute libre, la seule force est le poids. D\'après la 2ème loi de Newton, P = ma, donc mg = ma, d\'où a = g.'
          },
          {
            id: 'phys-1-q2',
            question: 'Quelle est l\'unité de l\'énergie dans le système international ?',
            options: ['Joule (J)', 'Newton (N)', 'Watt (W)', 'Pascal (Pa)'],
            correctAnswer: 0,
            explanation: 'L\'unité de l\'énergie (cinétique, potentielle, travail) est le Joule (J).'
          },
          {
            id: 'phys-1-q3',
            question: 'Selon le principe d\'inertie, si la somme des forces est nulle, un objet...',
            options: ['...s\'arrête.', '...a une vitesse constante.', '...accélère.', '...tourne.'],
            correctAnswer: 1,
            explanation: 'Le principe d\'inertie (1ère loi de Newton) stipule que l\'objet conserve un mouvement rectiligne uniforme ou reste au repos si la somme des forces est nulle.'
          },
          {
            id: 'phys-1-q4',
            question: 'L\'énergie cinétique d\'une voiture de 1000 kg roulant à 10 m/s est de :',
            options: ['5 000 J', '10 000 J', '50 000 J', '100 000 J'],
            correctAnswer: 2,
            explanation: 'Ec = 1/2 * m * v² = 0.5 * 1000 * (10)² = 500 * 100 = 50 000 J.'
          },
          {
            id: 'phys-1-q5',
            question: 'Le vecteur vitesse est toujours...',
            options: ['...parallèle au vecteur accélération.', '...tangent à la trajectoire.', '...dirigé vers le centre de la Terre.', '...constant.'],
            correctAnswer: 1,
            explanation: 'Par définition, le vecteur vitesse en un point est le vecteur directeur de la tangente à la trajectoire en ce point.'
          },
          {
            id: 'phys-1-q6',
            question: 'Que dit le théorème de l\'énergie cinétique ?',
            options: ['ΔEc = 0', 'ΔEc = Σ W(Forces)', 'Ec = Em - Epp', 'Ec = W(Poids)'],
            correctAnswer: 1,
            explanation: 'Il énonce que la variation de l\'énergie cinétique est égale à la somme des travaux de toutes les forces appliquées au système.'
          },
          {
            id: 'phys-1-q7',
            question: 'Dans quel cas l\'énergie mécanique se conserve-t-elle ?',
            options: ['Toujours', 'Jamais', 'En l\'absence de forces non conservatives (frottements)', 'Si le poids est nul'],
            correctAnswer: 2,
            explanation: 'L\'énergie mécanique est conservée lorsque le travail des forces non conservatives est nul, ce qui est typiquement le cas en l\'absence de frottements.'
          },
          {
            id: 'phys-1-q8',
            question: 'Le travail du poids pour un objet de masse m qui descend d\'une hauteur h est :',
            options: ['-mgh', '+mgh', '0', '½mgh'],
            correctAnswer: 1,
            explanation: 'Le poids est une force motrice lors d\'une descente. Son travail est positif et vaut W(P) = mgh.'
          },
          {
            id: 'phys-1-q9',
            question: 'La 3ème loi de Newton est aussi appelée :',
            options: ['Principe fondamental', 'Principe d\'inertie', 'Principe des actions réciproques', 'Loi de la gravitation'],
            correctAnswer: 2,
            explanation: 'La 3ème loi, F(A/B) = -F(B/A), est le principe des actions réciproques (ou action-réaction).'
          },
          {
            id: 'phys-1-q10',
            question: 'Si la vitesse d\'un objet double, son énergie cinétique est multipliée par :',
            options: ['1', '2', '4', '8'],
            correctAnswer: 2,
            explanation: 'L\'énergie cinétique est proportionnelle au carré de la vitesse (v²). Si v est multiplié par 2, Ec est multipliée par 2² = 4.'
          }
        ],
        mindmap: {
          title: 'Mécanique',
          nodes: [
            {
              title: 'Cinématique',
            },
            {
              title: 'Lois de Newton',
            },
            {
                title: 'Énergie',
                children: [
                    { title: 'Travail' },
                    { title: 'Ec, Epp, Em' },
                    { title: 'Théorème de l\'Ec' },
                    { title: 'Conservation' }
                ]
            }
          ]
        }
      },
      {
        id: 'physics-2',
        title: 'Séance 2 : Électricité',
        duration: '8h',
        description: 'Circuits électriques, lois fondamentales, condensateurs et bobines.',
        completed: false,
        summary: `# Électricité

## 1. Courant et Tension
- **Courant électrique (I)** : Débit de charges, en Ampères (A).
- **Tension électrique (U)** : Différence de potentiel, en Volts (V).

## 2. Dipôles
- **Résistor** : Loi d'Ohm : **U = R * I**. R en Ohms (Ω).
- **Condensateur** : Stocke de l'énergie. Capacité C en Farads (F).
  - **q = C * u_C**
  - **i = dq/dt = C * (du_C/dt)**
- **Bobine idéale** : S'oppose aux variations de courant. Inductance L en Henrys (H).
  - **u_L = L * (di/dt)**

## 3. Lois des circuits
- **Loi des nœuds** : La somme des courants arrivant à un nœud est égale à la somme des courants qui en partent.
- **Loi des mailles** : La somme algébrique des tensions le long d'une maille est nulle.

## 4. Circuits RC et RL (Régimes transitoires)
### Circuit RC série
- **Charge** : u_C(t) = E * (1 - e^(-t/τ)), avec **τ = RC** (constante de temps).
- **Décharge** : u_C(t) = U₀ * e^(-t/τ)

### Circuit RL série
- **Établissement du courant** : i(t) = (E/R) * (1 - e^(-t/τ)), avec **τ = L/R**.

## 5. Énergie stockée
- **Condensateur** : E_e = ½ * C * u_C²
- **Bobine** : E_m = ½ * L * i²
`,
        quiz: [
            {
                id: 'phys-2-q1',
                question: 'La loi d\'Ohm pour un résistor est :',
                options: ['U = R / I', 'U = R * I', 'R = U * I', 'U = R + I'],
                correctAnswer: 1,
                explanation: 'La loi d\'Ohm relie la tension U, la résistance R et le courant I par la formule U = R * I.'
            },
            {
                id: 'phys-2-q2',
                question: 'L\'unité de la capacité d\'un condensateur est le :',
                options: ['Ohm (Ω)', 'Henry (H)', 'Volt (V)', 'Farad (F)'],
                correctAnswer: 3,
                explanation: 'La capacité C se mesure en Farads (F).'
            },
            {
                id: 'phys-2-q3',
                question: 'Dans un circuit RC série, la constante de temps τ est égale à :',
                options: ['R / C', 'R * C', 'L / R', 'L * C'],
                correctAnswer: 1,
                explanation: 'La constante de temps, qui caractérise la rapidité de la charge/décharge, est le produit τ = RC.'
            },
            {
                id: 'phys-2-q4',
                question: 'La loi des nœuds exprime la conservation de :',
                options: ['L\'énergie', 'La tension', 'La charge électrique', 'La résistance'],
                correctAnswer: 2,
                explanation: 'La loi des nœuds (ΣI = 0) est une conséquence directe de la conservation de la charge électrique.'
            },
            {
                id: 'phys-2-q5',
                question: 'La tension aux bornes d\'une bobine idéale d\'inductance L est :',
                options: ['u = L * I', 'u = L / I', 'u = L * (dI/dt)', 'u = C * (dU/dt)'],
                correctAnswer: 2,
                explanation: 'La tension aux bornes d\'une bobine est proportionnelle à la dérivée du courant : u_L = L * di/dt.'
            },
            {
                id: 'phys-2-q6',
                question: 'Après un temps très long (régime permanent), un condensateur en charge se comporte comme :',
                options: ['Un fil', 'Un interrupteur ouvert', 'Un résistor', 'Une bobine'],
                correctAnswer: 1,
                explanation: 'En régime permanent, le condensateur est complètement chargé et le courant ne circule plus dans sa branche. Il agit comme un interrupteur ouvert.'
            },
            {
                id: 'phys-2-q7',
                question: 'L\'énergie stockée dans une bobine d\'inductance L parcourue par un courant I est :',
                options: ['½CU²', '½LI²', 'L I', 'L²I'],
                correctAnswer: 1,
                explanation: 'L\'énergie magnétique emmagasinée par une bobine est E_m = ½ * L * I².'
            },
            {
                id: 'phys-2-q8',
                question: 'Que dit la loi des mailles ?',
                options: ['La somme des courants est nulle', 'La somme des résistances est nulle', 'La somme algébrique des tensions est nulle', 'La tension est la même partout'],
                correctAnswer: 2,
                explanation: 'La loi des mailles stipule que la somme des tensions le long d\'une boucle fermée d\'un circuit est égale à zéro.'
            },
            {
                id: 'phys-2-q9',
                question: 'Dans un circuit RL, la constante de temps τ est :',
                options: ['RC', 'R/L', 'L/R', 'LC'],
                correctAnswer: 2,
                explanation: 'La constante de temps pour un circuit RL est τ = L/R.'
            },
            {
                id: 'phys-2-q10',
                question: 'Quelle est la relation entre la charge q et le courant i ?',
                options: ['i = q/t', 'q = i/t', 'i = dq/dt', 'q = di/dt'],
                correctAnswer: 2,
                explanation: 'Le courant est défini comme le débit de charge, c\'est-à-dire la dérivée de la charge par rapport au temps : i(t) = dq(t)/dt.'
            }
        ],
        mindmap: { 
            title: 'Électricité', 
            nodes: [
                { title: 'Dipôles (R, C, L)' },
                { title: 'Lois (Nœuds, Mailles)' },
                { title: 'Circuits 1er ordre (RC, RL)' },
                { title: 'Énergie stockée' }
            ]
        }
      },
      {
        id: 'physics-3',
        title: 'Séance 3 : Optique Géométrique',
        duration: '8h',
        description: 'Réflexion, réfraction, lentilles minces et instruments optiques.',
        completed: false,
        summary: `# Optique Géométrique

## 1. Propagation de la lumière
- La lumière se propage en ligne droite dans un milieu homogène et transparent. On la modélise par des **rayons lumineux**.
- **Indice de réfraction (n)** : n = c/v, où c est la vitesse de la lumière dans le vide et v sa vitesse dans le milieu. n ≥ 1.

## 2. Lois de Snell-Descartes
### Réflexion
Le rayon réfléchi est dans le plan d'incidence. L'angle de réflexion *r* est égal à l'angle d'incidence *i* : **r = i**.

### Réfraction
Le rayon réfracté est dans le plan d'incidence. Les angles d'incidence *i₁* et de réfraction *i₂* sont liés par :
**n₁ sin(i₁) = n₂ sin(i₂)**

## 3. Lentilles minces
### Types de lentilles
- **Convergente (CV)** : Bords minces, centre épais. Fait converger les rayons parallèles en un point appelé **foyer image F'**.
- **Divergente (DV)** : Bords épais, centre mince. Fait diverger les rayons parallèles comme s'ils provenaient d'un point F'.

### Grandeurs caractéristiques
- **Distance focale (f')** : Distance algébrique OF'. f' > 0 pour une lentille CV, f' < 0 pour une lentille DV.
- **Vergence (C)** : C = 1/f'. En dioptries (δ) si f' est en mètres.

## 4. Construction d'images
- Un rayon passant par le centre optique O n'est pas dévié.
- Un rayon incident parallèle à l'axe optique émerge en passant par le foyer image F'.
- Un rayon incident passant par le foyer objet F émerge parallèle à l'axe optique.

### Relations de conjugaison et de grandissement
- **Relation de conjugaison (Descartes)** : **1/OA' - 1/OA = 1/f'**
- **Grandissement transversal (γ)** : **γ = A'B'/AB = OA'/OA**
  - Si γ > 0, l'image est droite.
  - Si γ < 0, l'image est renversée.
  - Si |γ| > 1, l'image est agrandie.
  - Si |γ| < 1, l'image est réduite.`,
        quiz: [
          {
            id: 'phys-3-q1',
            question: 'Laquelle de ces lois décrit la réfraction ?',
            options: ['Loi d\'Ohm', 'Loi de Newton', 'Loi de Snell-Descartes', 'Loi de Coulomb'],
            correctAnswer: 2,
            explanation: 'Les lois de Snell-Descartes décrivent les phénomènes de réflexion et de réfraction de la lumière.'
          },
          {
            id: 'phys-3-q2',
            question: 'Une lentille avec une distance focale f\' > 0 est :',
            options: ['Divergente', 'Convergente', 'Miroir plan', 'Prisme'],
            correctAnswer: 1,
            explanation: 'Par convention, une distance focale positive caractérise une lentille convergente.'
          },
          {
            id: 'phys-3-q3',
            question: 'Un rayon lumineux passant par le centre optique d\'une lentille mince...',
            options: ['...est réfléchi.', '...passe par le foyer.', '...n\'est pas dévié.', '...devient parallèle à l\'axe.'],
            correctAnswer: 2,
            explanation: 'C\'est l\'un des trois rayons remarquables pour la construction d\'images : il continue sa trajectoire en ligne droite.'
          },
          {
            id: 'phys-3-q4',
            question: 'L\'indice de réfraction de l\'eau est n=1.33. Cela signifie que la lumière va...',
            options: ['...plus vite dans l\'eau que dans le vide.', '...moins vite dans l\'eau que dans le vide.', '...à la même vitesse dans l\'eau et le vide.', '...ne peut pas se propager dans l\'eau.'],
            correctAnswer: 1,
            explanation: 'n = c/v. Comme n > 1, alors v < c. La vitesse de la lumière est toujours maximale dans le vide.'
          },
          {
            id: 'phys-3-q5',
            question: 'La vergence d\'une lentille est de +5 δ. Sa distance focale est de :',
            options: ['5 m', '-5 m', '0.2 m', '-0.2 m'],
            correctAnswer: 2,
            explanation: 'C = 1/f\', donc f\' = 1/C = 1/5 = 0.2 m (ou 20 cm).'
          },
          {
            id: 'phys-3-q6',
            question: 'Si le grandissement γ = -2, l\'image est :',
            options: ['Droite et réduite', 'Droite et agrandie', 'Renversée et réduite', 'Renversée et agrandie'],
            correctAnswer: 3,
            explanation: 'Le signe négatif indique une image renversée. La valeur absolue |γ|=2 > 1 indique une image agrandie.'
          },
          {
            id: 'phys-3-q7',
            question: 'Dans la loi de la réflexion, l\'angle de réflexion r est...',
            options: ['...égal à l\'angle d\'incidence i.', '...plus grand que i.', '...plus petit que i.', '...égal à 90° - i.'],
            correctAnswer: 0,
            explanation: 'La première loi de Snell-Descartes pour la réflexion stipule que r = i.'
          },
          {
            id: 'phys-3-q8',
            question: 'Un objet est placé à 30 cm d\'une lentille convergente de 10 cm de focale. Où se forme l\'image ?',
            options: ['-15 cm', '+15 cm', '-30 cm', '+30 cm'],
            correctAnswer: 1,
            explanation: '1/OA\' = 1/f\' + 1/OA = 1/10 + 1/(-30) = (3-1)/30 = 2/30 = 1/15. Donc OA\' = +15 cm.'
          },
          {
            id: 'phys-3-q9',
            question: 'Pour former une image réelle avec une lentille convergente, l\'objet doit être placé...',
            options: ['...n\'importe où.', '...entre le foyer F et la lentille.', '...au foyer F.', '...avant le foyer F (plus loin de la lentille).'],
            correctAnswer: 3,
            explanation: 'Si l\'objet est placé avant le foyer objet F, l\'image formée est réelle et renversée.'
          },
          {
            id: 'phys-3-q10',
            question: 'L\'unité de la vergence est :',
            options: ['Le mètre (m)', 'Le Farad (F)', 'La dioptrie (δ)', 'L\'Hertz (Hz)'],
            correctAnswer: 2,
            explanation: 'La vergence, inverse de la distance focale en mètres, s\'exprime en dioptries.'
          }
        ],
        mindmap: { 
            title: 'Optique', 
            nodes: [
                { title: 'Propagation et Indice' },
                { title: 'Lois de Snell-Descartes' },
                { title: 'Lentilles Minces (CV/DV)' },
                { title: 'Construction & Formules' }
            ]
        }
      },
      {
        id: 'physics-4',
        title: 'Séance 4 : Thermodynamique',
        duration: '8h',
        description: 'Chaleur, température, premier principe et transferts thermiques.',
        completed: false,
        summary: `# Thermodynamique

## 1. Système et Variables d'état
- **Système** : Portion de l'univers que l'on étudie.
- **Variables d'état** : Grandeurs macroscopiques qui décrivent l'état du système (Pression P, Volume V, Température T, quantité de matière n).
- **Température (T)** : Mesure de l'agitation thermique des particules. Unité SI : Kelvin (K). T(K) = T(°C) + 273.15.

## 2. Gaz Parfait
Modèle simplifié d'un gaz où les interactions entre particules sont négligées.
**Loi des gaz parfaits** : **P * V = n * R * T**
- P en Pascals (Pa)
- V en mètres cubes (m³)
- n en moles (mol)
- T en Kelvin (K)
- R = 8.314 J·mol⁻¹·K⁻¹ (constante des gaz parfaits)

## 3. Premier Principe de la Thermodynamique
L'énergie se conserve. Pour un système fermé, la variation de son **énergie interne (ΔU)** est égale à la somme du **travail (W)** et de la **chaleur (Q)** échangés avec l'extérieur.
**ΔU = W + Q**
- **Énergie interne (U)** : Somme des énergies cinétiques et potentielles microscopiques du système. Pour un gaz parfait, U ne dépend que de la température.
- **Travail (W)** : Énergie échangée par des forces mécaniques (ex: compression d'un gaz). W > 0 si le système reçoit du travail.
- **Chaleur (Q)** : Énergie échangée par agitation thermique (transfert thermique). Q > 0 si le système reçoit de la chaleur.

## 4. Transferts Thermiques
La chaleur se propage toujours du corps chaud vers le corps froid.
- **Conduction** : Transfert de proche en proche, sans déplacement de matière (ex: barre métallique chauffée).
- **Convection** : Transfert avec déplacement de matière (fluides : liquides, gaz) (ex: chauffage central).
- **Rayonnement** : Transfert par ondes électromagnétiques, sans support matériel (ex: chaleur du Soleil).

### Flux et résistance thermique
- **Flux thermique (Φ)** : Puissance thermique transférée, en Watts (W). Φ = Q / Δt.
- **Résistance thermique (R_th)** : Aptitude d'un matériau à s'opposer au passage de la chaleur. Φ = (T_chaud - T_froid) / R_th.`,
        quiz: [
          {
            id: 'phys-4-q1',
            question: 'Le premier principe de la thermodynamique est une loi de conservation de :',
            options: ['La masse', 'La charge', 'L\'énergie', 'La température'],
            correctAnswer: 2,
            explanation: 'Le premier principe (ΔU = W + Q) exprime la conservation de l\'énergie totale d\'un système.'
          },
          {
            id: 'phys-4-q2',
            question: 'Quelle est l\'unité de la température dans le Système International ?',
            options: ['Degré Celsius (°C)', 'Degré Fahrenheit (°F)', 'Kelvin (K)', 'Joule (J)'],
            correctAnswer: 2,
            explanation: 'L\'unité SI de la température thermodynamique est le Kelvin (K).'
          },
          {
            id: 'phys-4-q3',
            question: 'La loi des gaz parfaits est :',
            options: ['P/V = nRT', 'PV = nRT', 'PT = nRV', 'PV/T = nR'],
            correctAnswer: 1,
            explanation: 'La relation d\'état des gaz parfaits est PV = nRT.'
          },
          {
            id: 'phys-4-q4',
            question: 'Le transfert de chaleur par le mouvement d\'un fluide est appelé :',
            options: ['Conduction', 'Convection', 'Rayonnement', 'Évaporation'],
            correctAnswer: 1,
            explanation: 'La convection est le mode de transfert thermique qui implique un déplacement macroscopique de matière.'
          },
          {
            id: 'phys-4-q5',
            question: 'Si un système reçoit 100 J de chaleur et fournit 40 J de travail, sa variation d\'énergie interne ΔU est :',
            options: ['+140 J', '+60 J', '-60 J', '-140 J'],
            correctAnswer: 1,
            explanation: 'ΔU = Q + W. Le système reçoit de la chaleur (Q=+100J) et fournit du travail (W=-40J). ΔU = 100 - 40 = +60 J.'
          },
          {
            id: 'phys-4-q6',
            question: 'Comment se propage la chaleur du Soleil jusqu\'à la Terre ?',
            options: ['Conduction', 'Convection', 'Rayonnement', 'Les trois'],
            correctAnswer: 2,
            explanation: 'Le vide spatial ne permettant ni conduction ni convection, la chaleur du Soleil nous parvient par rayonnement électromagnétique.'
          },
          {
            id: 'phys-4-q7',
            question: 'Pour un gaz parfait, l\'énergie interne ne dépend que de :',
            options: ['Son volume', 'Sa pression', 'Sa température', 'Sa masse'],
            correctAnswer: 2,
            explanation: 'C\'est une propriété fondamentale du modèle du gaz parfait : son énergie interne est uniquement fonction de sa température.'
          },
          {
            id: 'phys-4-q8',
            question: 'La constante des gaz parfaits R vaut environ :',
            options: ['8.31 J·mol⁻¹·K⁻¹', '9.81 m·s⁻²', '6.02x10²³ mol⁻¹', '3x10⁸ m·s⁻¹'],
            correctAnswer: 0,
            explanation: 'La valeur de R est approximativement 8.314 J·mol⁻¹·K⁻¹.'
          },
          {
            id: 'phys-4-q9',
            question: 'Une température de 27°C correspond en Kelvin à :',
            options: ['27 K', '246 K', '300 K', '273 K'],
            correctAnswer: 2,
            explanation: 'T(K) = T(°C) + 273.15. Donc T = 27 + 273.15 ≈ 300 K.'
          },
          {
            id: 'phys-4-q10',
            question: 'Un flux thermique s\'exprime en :',
            options: ['Joules (J)', 'Watts (W)', 'Kelvin (K)', 'Pascals (Pa)'],
            correctAnswer: 1,
            explanation: 'Un flux thermique est une puissance (énergie par unité de temps), il s\'exprime donc en Watts (W).'
          }
        ],
        mindmap: { 
            title: 'Thermodynamique', 
            nodes: [
                { title: 'Système & Variables d\'état' },
                { title: 'Gaz Parfait (PV=nRT)' },
                { title: 'Premier Principe (ΔU=W+Q)' },
                { title: 'Transferts Thermiques' }
            ]
        }
      },
      {
        id: 'physics-5',
        title: 'Séance 5 : Ondes',
        duration: '8h',
        description: 'Ondes mécaniques et électromagnétiques, périodicité, diffraction et interférences.',
        completed: false,
        summary: `# Ondes

## 1. Définitions et Types d'ondes
- **Onde** : Propagation d'une perturbation transportant de l'énergie sans transport de matière.
- **Onde mécanique** : Nécessite un milieu matériel pour se propager (ex: son, vagues).
- **Onde électromagnétique** : Peut se propager dans le vide (ex: lumière, ondes radio).
- **Onde transversale** : La perturbation est perpendiculaire à la direction de propagation (ex: lumière, corde).
- **Onde longitudinale** : La perturbation est parallèle à la direction de propagation (ex: son).

## 2. Caractéristiques d'une onde périodique
- **Période (T)** : Plus petite durée au bout de laquelle le phénomène se répète identique à lui-même. En secondes (s).
- **Fréquence (f)** : Nombre de périodes par seconde. f = 1/T. En Hertz (Hz).
- **Longueur d'onde (λ)** : Plus petite distance séparant deux points dans le même état vibratoire. En mètres (m).
- **Célérité (v)** : Vitesse de propagation de l'onde.
  **v = λ / T = λ * f**

## 3. Diffraction
Phénomène observé lorsqu'une onde rencontre un obstacle ou une ouverture de dimension comparable à sa longueur d'onde. L'onde se propage alors dans des directions où elle ne devrait pas aller.
- L'étalement est d'autant plus marqué que l'ouverture est petite.
- **Écart angulaire (θ)** de la tache centrale de diffraction :
  **θ ≈ λ / a**
  (où *a* est la largeur de la fente et θ est en radians)

## 4. Interférences
Superposition de deux ondes de même fréquence.
- **Interférences constructives** : Les ondes s'additionnent (amplitude maximale). Se produit lorsque la différence de marche est un multiple entier de la longueur d'onde : **δ = k * λ**.
- **Interférences destructives** : Les ondes s'annulent (amplitude minimale/nulle). Se produit lorsque la différence de marche est un multiple demi-entier de la longueur d'onde : **δ = (k + ½) * λ**.

## 5. Effet Doppler
Décalage de fréquence d'une onde observé entre l'émission et la réception, lorsque la source et le récepteur sont en mouvement relatif l'un par rapport à l'autre.
- Si la source se rapproche, la fréquence reçue est plus élevée (son plus aigu).
- Si la source s'éloigne, la fréquence reçue est plus faible (son plus grave).`,
        quiz: [
          {
            id: 'phys-5-q1',
            question: 'Quelle est la relation fondamentale liant célérité (v), longueur d\'onde (λ) et fréquence (f) ?',
            options: ['v = λ / f', 'v = f / λ', 'v = λ * f', 'λ = v * f'],
            correctAnswer: 2,
            explanation: 'La célérité est la distance parcourue (une longueur d\'onde) pendant une période, soit v = λ/T. Comme f=1/T, on a v = λ * f.'
          },
          {
            id: 'phys-5-q2',
            question: 'Le son est une onde...',
            options: ['Électromagnétique et transversale', 'Mécanique et longitudinale', 'Mécanique et transversale', 'Électromagnétique et longitudinale'],
            correctAnswer: 1,
            explanation: 'Le son est une onde de compression-détente d\'un milieu matériel (donc mécanique) où la perturbation est dans la même direction que la propagation (donc longitudinale).'
          },
          {
            id: 'phys-5-q3',
            question: 'Le phénomène de diffraction est plus marqué lorsque la taille de l\'ouverture...',
            options: ['...est très grande devant la longueur d\'onde.', '...est du même ordre de grandeur que la longueur d\'onde.', '...est nulle.', '...n\'a pas d\'influence.'],
            correctAnswer: 1,
            explanation: 'La diffraction devient significative quand la dimension de l\'obstacle ou de l\'ouverture est de l\'ordre de λ.'
          },
          {
            id: 'phys-5-q4',
            question: 'Des interférences sont constructives si la différence de marche δ est :',
            options: ['δ = k * λ', 'δ = (k + ½) * λ', 'δ = k / λ', 'δ = 0'],
            correctAnswer: 0,
            explanation: 'Pour que les crêtes coïncident, il faut que les ondes soient "en phase", ce qui arrive si leur différence de chemin parcouru est un multiple entier de la longueur d\'onde.'
          },
          {
            id: 'phys-5-q5',
            question: 'Laquelle de ces ondes peut se propager dans le vide ?',
            options: ['Le son', 'Une vague sur l\'eau', 'La lumière', 'Une onde sismique'],
            correctAnswer: 2,
            explanation: 'La lumière est une onde électromagnétique, la seule catégorie d\'ondes capable de se propager dans le vide.'
          },
          {
            id: 'phys-5-q6',
            question: 'La fréquence d\'une onde est de 500 Hz. Sa période T est de :',
            options: ['500 s', '0.02 s', '2 s', '0.002 s'],
            correctAnswer: 3,
            explanation: 'La période est l\'inverse de la fréquence : T = 1/f = 1/500 = 0.002 s.'
          },
          {
            id: 'phys-5-q7',
            question: 'L\'effet Doppler explique...',
            options: ['...pourquoi le ciel est bleu.', '...le changement de fréquence perçue d\'une sirène qui passe.', '...la formation d\'un arc-en-ciel.', '...la réflexion de la lumière.'],
            correctAnswer: 1,
            explanation: 'L\'effet Doppler est le décalage de fréquence dû au mouvement relatif entre une source et un observateur.'
          },
          {
            id: 'phys-5-q8',
            question: 'Si la fréquence d\'une onde lumineuse double, sa longueur d\'onde dans le vide...',
            options: ['...double.', '...est divisée par deux.', '...reste la même.', '...est divisée par quatre.'],
            correctAnswer: 1,
            explanation: 'La célérité de la lumière dans le vide (c) est constante. Comme c = λ*f, si f double, λ doit être divisé par deux pour que le produit reste constant.'
          },
          {
            id: 'phys-5-q9',
            question: 'Dans une onde transversale, la direction de la perturbation est...',
            options: ['...parallèle à la direction de propagation.', '...perpendiculaire à la direction de propagation.', '...à 45° de la direction de propagation.', '...circulaire.'],
            correctAnswer: 1,
            explanation: 'C\'est la définition même d\'une onde transversale, comme une vague ou une onde sur une corde.'
          },
          {
            id: 'phys-5-q10',
            question: 'L\'unité de la fréquence est le :',
            options: ['Seconde (s)', 'Mètre (m)', 'Hertz (Hz)', 'Watt (W)'],
            correctAnswer: 2,
            explanation: 'La fréquence, qui correspond à un nombre de cycles par seconde, se mesure en Hertz (Hz).'
          }
        ],
        mindmap: { 
            title: 'Ondes', 
            nodes: [
                { title: 'Types d\'ondes (Méca/EM, Trans/Longi)' },
                { title: 'Grandeurs (T, f, λ, v)' },
                { title: 'Diffraction' },
                { title: 'Interférences' },
                { title: 'Effet Doppler' }
            ]
        }
      }
    ]
  }
];
