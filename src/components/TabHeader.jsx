export default function TabHeader({ image, title, subtitle }) {
  return (
    <div id="tab-header-container">
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
