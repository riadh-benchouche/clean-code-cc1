# Développement des Règles du Jeu Yams en TDD

Ce projet vise à développer les règles du jeu Yams en utilisant la méthode du Test Driven Development (TDD). L'objectif
est de garantir la qualité du code en mettant en œuvre les bonnes pratiques de développement logiciel.

## Objectif

L'objectif principal est de développer des règles du jeu Yams en suivant les principes du TDD. L'évaluation du projet se
fera sur plusieurs critères :

- Fiabilité des réponses du programme.
- Couverture de test exhaustive.
- Qualité du nommage des fonctions et variables.
- Découpage et arité appropriés des fonctions.
- Lisibilité du code.
- Application effective du TDD.

Il est important de noter que la qualité du code, la lisibilité et la mise en œuvre correcte du TDD sont prioritaires
par rapport à la prise en charge de tous les cas possibles du jeu. Un programme bien structuré, testé de manière
exhaustive et facilement compréhensible aura une meilleure note qu'un programme complet mais mal conçu et testé.

## Attendu

Vous devrez développer un programme qui prend en paramètre plusieurs lancés de 5 dés, analyse ces lancés pour identifier
les figures possibles, retourne la somme des points obtenus.
En cas de multiple figure dans un même lancé, seule la figure rapportant le plus de points devra être prise en compte.
Les lancés utilisés par votre programme pourront être écrits en dur dans le code.

## Figures possibles

| Figure       | Description                    | Points          |
|--------------|--------------------------------|-----------------|
| Brelan       | 3 dés ont la même valeur       | 28              |
| Carré        | 4 dés ont la même valeur       | 35              |
| Full         | 1 brelan et 1 paire            | 30              |
| Grande suite | La valeur des 5 dés se suivent | 40              |
| YAMS         | 5 dés ont la même valeur       | 50              |
| Chance       | Pas de figure                  | Somme des 5 dés |
