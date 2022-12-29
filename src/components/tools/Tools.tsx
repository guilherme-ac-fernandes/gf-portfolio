import tools from '../../data/tools';
import SectionTitle from '../section_title/SectionTitle';
import ToolsDisplay from '../tools_display/ToolsDisplay';
import './Tools.css';

export default function Tools() {
  return (
    <section id='tools' className='tools_container'>
      <SectionTitle
        title='Tecnologias'
        text='Estas são as linguagens e ferramentas que conheço'
      />
      <div className='tools_container_display'>
        {tools.map((tool, index) => (
          <ToolsDisplay tool={tool} key={index} />
        ))}
      </div>
    </section>
  );
}
