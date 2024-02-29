const navLinks = [{ name: 'home' }, { name: 'link 1' }, { name: 'link 2' }];

export default function Nav() {
  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => {
          return <li key={index}>{link.name}</li>;
        })}
      </ul>
    </nav>
  );
}
