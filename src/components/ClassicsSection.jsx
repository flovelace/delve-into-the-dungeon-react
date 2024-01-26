import Card from './Card/Card';
import Section from './Section';
import { CLASSICS_CARD_DATA } from '../data';

export default function ClassicsSection() {
  return (
    <Section title="Classic Dungeon Synth" id="classics">
      <div className="cards-container">
        {CLASSICS_CARD_DATA.map((classicItem, index) => (
          <Card
            key={index}
            image={classicItem.image}
            project={classicItem.project}
            content={`${classicItem.release}, (${classicItem.year})`}
          />
        ))}
      </div>
    </Section>
  );
}
