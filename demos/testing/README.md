# Installer et configurer Jest pour écrire des tests de modules ES6

Il faut transformer nos modules ES6 en modules Node.js (CommonJS) pour que jest puisse faire les tests. On fait cela avec l'outil [Babel](https://babeljs.io/), qui *transpile* le JS du navigateur vers du JS Node.js.


## Installer et configurer

1. Installer [jest](https://jestjs.io/fr/) et les outils de babel pour la transpilation:

~~~bash
npm init -y
#Installer jest
npm install jest --save-dev
#Installer babel-jest. Pour la transpilation auto
npm install --save-dev babel-jest
npm install @babel/preset-env --save-dev
~~~

2. Modifier le `package.json` en ajoutant ces lignes:

~~~json
{
  "scripts": {
    "test": "jest",
    "coverage": "jest --collect-coverage"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  }
}
~~~

3. Créer un fichier `babel.config.json` et y placer le contenu suivant:

~~~json
{
  "presets": ["@babel/preset-env"]
}
~~~

4. Lancer les tests (`*.test.js`):

~~~bash
npm run test
~~~

5. Lancer le code coverage:

~~~bash
npm run coverage
~~~

## Références

- [Jest](https://jestjs.io/fr/);
- [Using Babel for Jest](https://babeljs.io/setup#installation);