import Project from '../interfaces/project';

const GITHUB_URL = 'https://github.com/guilherme-ac-fernandes';
const IMAGE_PATH = './projects';

const projects: Project[] = [
  {
    name: 'List Characters 🪄🧙🏻‍♂️',
    image: `${IMAGE_PATH}/harrypotter.png`,
    description:
      'Aplicação FullStack para criação e listagem de personagens da franquia Harry Potter e suas casas em Hogwarts.',
    skills: [
      'react',
      'context api',
      'react hooks',
      'css',
      'node.js',
      'express',
      'sequelize',
      'mysql',
      'docker',
    ],
    codeUrl: `${GITHUB_URL}/harrypotter-fullstack`,
    module: 'fullstack',
  },
  {
    name: 'Trivia Game 👾🎮',
    image: `${IMAGE_PATH}/trivia.png`,
    description:
      'Aplicação web construída em grupo, que consiste em um jogo de perguntas e respostas. Podendo configurar categoria, dificuldade e tipo das perguntas.',
    skills: ['react', 'redux', 'css'],
    codeUrl: `${GITHUB_URL}/trivia`,
    deployUrl: 'https://trivia-pink.vercel.app/',
    module: 'frontend',
  },
  {
    name: 'Blogs API 📝🗒',
    image: `${IMAGE_PATH}/blog.png`,
    description:
      'Consiste em uma API para produção de conteúdo para um blog. O usuário tem a possibilidade de criar, visualizar, deletar e atualizar as postagens.',
    skills: ['node.js', 'express', 'sequelize', 'mysql', 'docker'],
    codeUrl: `${GITHUB_URL}/blogs-api`,
    module: 'backend',
  },
  {
    name: 'Futebol Clube ⚽️🏆',
    image: `${IMAGE_PATH}/tfc.png`,
    description:
      'A partir do FrontEnd criado pela Trybe, foi construído uma API para prover as informações de um site sobre partidas e classificações de futebol.',
    skills: [
      'node.js',
      'express',
      'typescript',
      'sequelize',
      'mysql',
      'docker',
    ],
    codeUrl: `${GITHUB_URL}/trybe-futebol-clube`,
    module: 'fullstack',
  },
  {
    name: 'Job Insights 👩🏼‍🚒👷🏾',
    image: `${IMAGE_PATH}/job.png`,
    description:
      'Consiste em uma aplicação web desenvolvida com Flask contendo informações a partir da análise de um conjunto de dados sobre empregos.',
    skills: ['python', 'flask'],
    codeUrl: `${GITHUB_URL}/job-insights`,
    module: 'fullstack',
  },
  {
    name: 'Planet Search 🪐🌎',
    image: `${IMAGE_PATH}/starwars-planets-search.png`,
    description:
      'Aplicação web construída para busca dos planetas presentes na franquia Star Wars.',
    skills: ['react', 'context api', 'react hooks', 'css'],
    codeUrl: `${GITHUB_URL}/starwars-planets-search`,
    deployUrl: 'https://starwars-planets-search-alpha.vercel.app/',
    module: 'frontend',
  },
  {
    name: 'Store Manager 📦📦',
    image: `${IMAGE_PATH}/store.png`,
    description:
      'Consiste em uma API para o gerenciamento de um e-commerce, com a possibilidade de criar, visualizar, deletar e atualizar produtos e vendas.',
    skills: ['node.js', 'express', 'mysql', 'docker'],
    codeUrl: `${GITHUB_URL}/store-manager`,
    module: 'backend',
  },
  {
    name: 'eSport 🎮🕹',
    image: `${IMAGE_PATH}/esports.png`,
    description:
      'Consiste em uma aplicação web e mobile para encontro de jogadores de games para jogar em conjunto pelo discord.',
    skills: ['react', 'node.js', 'react-native'],
    codeUrl: `${GITHUB_URL}/nlw-esports-ignite`,
    module: 'fullstack',
  },
  {
    name: 'Car Shop 🚘🚖',
    image: `${IMAGE_PATH}/car-shop.png`,
    description:
      'Consiste em uma API para gerenciar de uma concessionária de veículos.',
    skills: ['node.js', 'express', 'typescript', 'mongodb', 'docker'],
    codeUrl: `${GITHUB_URL}/car-shop`,
    module: 'backend',
  },
  {
    name: 'DoctorCare 🩺🏥',
    image: `${IMAGE_PATH}/nlw-return-origin.png`,
    description:
      'Consiste em uma aplicação fictícia de uma única página relacionada ao setor de saúde.',
    skills: ['html', 'javascript', 'css'],
    codeUrl: `${GITHUB_URL}/nlw-return-origin`,
    deployUrl: 'https://guilherme-ac-fernandes.github.io/nlw-return-origin/',
    module: 'frontend',
  },
  {
    name: 'App de Delivery 🍺🍸',
    image: `${IMAGE_PATH}/delivery-app.png`,
    description:
      'Aplicação web full construída em grupo que consiste em sistema de delivery para uma distribuidora de bebidas.',
    skills: [
      'react',
      'context api',
      'react hooks',
      'css',
      'node.js',
      'express',
      'sequelize',
      'mysql',
      'docker',
    ],
    codeUrl: `${GITHUB_URL}/delivery-app`,
    module: 'fullstack',
  },
  {
    name: 'Bolão da Copa ⚽️🏆',
    image: `${IMAGE_PATH}/nlw-copa-ignite.png`,
    description:
      'Consiste em uma aplicação web e mobile para criações de bolões para copa do mundo Catar 🇶🇦 2022.',
    skills: ['react', 'node.js', 'react-native'],
    codeUrl: `${GITHUB_URL}/nlw-copa-ignite`,
    module: 'fullstack',
  },
];

export default projects;
