import Card from './Card/Card';
import Section from './Section';
import { NEW_PROJECTS_CARD_DATA } from '../data';

export default function ProjectsSection() {
  return (
    <Section title="Curious Dungeon Synth Projects" id="projects">
      <div className="cards-container">
        {NEW_PROJECTS_CARD_DATA.map((projectItem, index) => (
          <Card
            key={index}
            image={projectItem.image}
            project={projectItem.project}
            content={projectItem.description}
          />
        ))}
      </div>
    </Section>
  );
}
