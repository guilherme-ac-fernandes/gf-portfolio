import Tools from '../../interfaces/tools';

import './ToolsDisplay.css';

interface ToolsDisplayProps {
  tool: Tools;
}

export default function ToolsDisplay({ tool }: ToolsDisplayProps) {
  return (
    <div className='tools_display'>
      <img src={tool.imageUrl} alt={tool.name} />
      <h3>{tool.name}</h3>
    </div>
  );
}
