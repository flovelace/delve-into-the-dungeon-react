import './Header.css';

const headerDescriptions = ['Delve', 'Fall', 'Descend'];

function generateRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = headerDescriptions[generateRandomInt(2)];

  return (
    <header>
      <h1>{description} into the Dungeon</h1>
    </header>
  );
}
