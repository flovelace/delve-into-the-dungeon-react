export default function Card({ project, content }) {
  return (
    <div className="card-container">
      <div className="card">
        <h3>{project}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
