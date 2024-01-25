export default function About({ image, title, description }) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
