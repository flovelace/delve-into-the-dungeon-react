import airImg from './assets/air.svg';
import phosImg from './assets/phos.svg';
import saturnImg from './assets/saturn.svg';
import trinityImg from './assets/trinity.svg';

import secretImg from './assets/secretstairways.jpg';
import depressiveImg from './assets/depressivesilence.jpg';
import forgottenImg from './assets/forgottenpathways.jpg';
import wongravenImg from './assets/wongraven.jpg';

import diploImg from './assets/diplodocus.jpg';
import holeImg from './assets/holedweller.jpg';
import gondarImg from './assets/gondar.jpg';
import oldImg from './assets/oldsorcery.jpg';

export const ABOUT_DATA = [
  {
    image: airImg,
    title: 'lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit vitae arcu placerat auctor.',
  },
  {
    image: phosImg,
    title: 'lorem 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit vitae arcu placerat auctor..',
  },
  {
    image: saturnImg,
    title: 'lorem 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit vitae arcu placerat auctor.',
  },
  {
    image: trinityImg,
    title: 'lorem 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit vitae arcu placerat auctor.',
  },
];

export const SUBGENRE_DATA = {
  medieval: {
    title: 'medieval dungeon synth',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit vitae arcu placerat auctor.',
  },
  darkAmbient: {
    title: 'dark ambient',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit vitae arcu placerat auctor.',
  },
  winter: {
    title: 'winter synth',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit vitae arcu placerat auctor poo.',
  },
  dino: {
    title: 'dino synth',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit vitae arcu placerat auctor.',
  },
};

export const CLASSICS_CARD_DATA = [
  {
    image: secretImg,
    project: 'Secret Stairways',
    release: 'Enchantment of the Ring',
    year: '2017',
  },
  {
    image: depressiveImg,
    project: 'Depressive Silence',
    release: 'Mourning',
    year: '1996',
  },
  {
    image: forgottenImg,
    project: 'Forgotten Pathways',
    release: 'Shrouded in Mystery',
    year: '2017',
  },
  {
    image: wongravenImg,
    project: 'Wongraven',
    release: 'Fjelltronen',
    year: '1995',
  },
];

export const NEW_PROJECTS_CARD_DATA = [
  {
    image: holeImg,
    project: 'Hole Dweller',
    description: 'Dungeon synth for the hobbit hearted.',
  },
  {
    image: gondarImg,
    project: 'Gondar',
    description: 'Dark, poignant and melancholic medieval synth.',
  },
  {
    image: oldImg,
    project: 'Old Sorcery',
    description:
      'Atmosphere and fantasical dungeon synth with a hint of black metal',
  },
  {
    image: diploImg,
    project: 'Diplodocus',
    description: 'Dark and dino synth with antiquated ambience',
  },
];
