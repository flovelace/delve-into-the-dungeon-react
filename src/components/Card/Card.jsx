import './Card.css';

export default function Card({ image, project, content, year }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt={project} />
        <h3>{project}</h3>
        <p>{content}</p>
        {year && <p>{year}</p>}
      </div>
    </div>
  );
}
