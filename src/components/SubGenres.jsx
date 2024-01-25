import { useState } from 'react';

import TabButton from './TabButton';
import Section from './section';
import Tabs from './Tabs';
import { SUBGENRE_DATA } from '../data';

export default function SubGenres() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Dungeon Synth Subgenres" id="subgenres">
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
      {!selectedTopic && <p>Learn more about Dungeon Synth Subgenres</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{SUBGENRE_DATA[selectedTopic].title}</h3>
          <p>{SUBGENRE_DATA[selectedTopic].description}</p>
        </div>
      )}
    </Section>
  );
}
