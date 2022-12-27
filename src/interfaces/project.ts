export default interface Project {
  name: string;
  image: string;
  description: string;
  skills: string[];
  codeUrl: string;
  deployUrl?: string;
  module: 'frontend' | 'backend' | 'fullstack';
}
