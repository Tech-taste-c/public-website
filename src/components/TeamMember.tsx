
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Linkedin, Github, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  imageAlt: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  imageSrc,
  imageAlt
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
      <div className="w-full">
        <AspectRatio ratio={16 / 9} className="bg-gray-100">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-primary font-medium mb-4">{role}</p>
        <p className="text-gray-700 mb-6">{bio}</p>
        {/* <div className="flex space-x-3">
          <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Github">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default TeamMember;
