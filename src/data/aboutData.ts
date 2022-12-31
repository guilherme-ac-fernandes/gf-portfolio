import AboutMe from '../interfaces/aboutMe';

const IMAGE_PATH = './profile';

const AboutData: AboutMe[] = [
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

export default AboutData;
