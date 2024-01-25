import About from './About';
import { ABOUT_DATA } from '../data';

export default function AboutItems() {
  return (
    <section id="about-items">
      <h2>About Dungeon Synth</h2>
      <ul>
        {ABOUT_DATA.map((aboutItem) => (
          <About key={aboutItem.title} {...aboutItem} />
        ))}
      </ul>
    </section>
  );
}
