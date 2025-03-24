
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  imageSrc, 
  tags, 
  liveUrl, 
  githubUrl 
}: ProjectCardProps) => {
  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-md hover:translate-y-[-4px]">
      <CardHeader className="p-0">
        <AspectRatio ratio={16/9}>
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      {(liveUrl || githubUrl) && (
        <CardFooter className="p-6 pt-0 gap-2">
          {liveUrl && (
            <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                View Live
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                Source Code
              </a>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
