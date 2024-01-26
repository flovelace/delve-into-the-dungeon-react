import Card from './Card';
import Section from './Section';
import { CLASSICS_CARD_DATA } from '../data';

export default function ClassicsSection() {
  return (
    <Section title="Classic Dungeon Synth" id="classics">
      <ul>
        {CLASSICS_CARD_DATA.map((classicItem, index) => (
          <Card
            key={index}
            project={classicItem.project}
            content={`${classicItem.release}, (${classicItem.year})`}
          ></Card>
        ))}
      </ul>
    </Section>
  );
}
