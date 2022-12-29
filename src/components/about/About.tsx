import SectionTitle from '../section_title/SectionTitle';

import './About.css';

export default function About() {
  return (
    <section id='about' className='about_container'>
      <SectionTitle title='Sobre Mim' />
      <div className='about_container_content'>
        <img src='./profile/profile.png' alt='Guilherme Fernandes' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam,
          qui perferendis, culpa hic necessitatibus consectetur officiis dicta
          maxime ex reprehenderit soluta, tempora rerum numquam molestias
          tenetur in blanditiis ad?
        </p>
      </div>
    </section>
  );
}
