import { useState } from 'react';

import TabButton from './TabButton';
import TabHeader from './TabHeader';
import Section from './Section';
import Tabs from './Tabs';
import { TAB_SUBHEADER_DATA, SUBGENRE_DATA } from '../data';

export default function SubGenres() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Dungeon Synth Subgenres" id="subgenres">
      <TabHeader
        image={TAB_SUBHEADER_DATA.image}
        title={TAB_SUBHEADER_DATA.title}
        subtitle={TAB_SUBHEADER_DATA.subtitle}
      ></TabHeader>
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'medieval'}
              onClick={() => handleSelect('medieval')}
            >
              Medieval Dungeon Synth
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'darkAmbient'}
              onClick={() => handleSelect('darkAmbient')}
            >
              Dark Ambient
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'winter'}
              onClick={() => handleSelect('winter')}
            >
              Winter Synth
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'dino'}
              onClick={() => handleSelect('dino')}
            >
              Dino Synth
            </TabButton>
          </>
        }
      ></Tabs>
      {!selectedTopic && <p id="no-topic">Click a subgenre to learn more.</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{SUBGENRE_DATA[selectedTopic].title}</h3>
          <p>{SUBGENRE_DATA[selectedTopic].description}</p>
        </div>
      )}
    </Section>
  );
}
