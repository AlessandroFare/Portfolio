"use client";

import TechTag from './TechTag';

interface TechStackProps {
  technologies: string[];
  showTitle?: boolean;
}

const TechStack = ({ technologies, showTitle = false }: TechStackProps) => {
  return (
    <div>
      {showTitle && (
        <h2 className="text-lg font-normal mb-6">Tech Stack</h2>
      )}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <TechTag key={index} name={tech} />
        ))}
      </div>
    </div>
  );
};

export default TechStack; 