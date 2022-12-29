import AboutMe from '../interfaces/about_me';

const IMAGE_PATH = './profile';

const about_me: AboutMe[] = [
  {
    description: 'Nintendista',
    imageUrl: `${IMAGE_PATH}/nintendo.png`,
  },
  {
    description: 'Leitor / Colecionador de livros',
    imageUrl: `${IMAGE_PATH}/books.png`,
  },
  {
    description: 'Wannabe photographer',
    imageUrl: `${IMAGE_PATH}/camera.png`,
  },
];

export default about_me;
