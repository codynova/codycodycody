export const Gallery = ({ data }) => (
  <div className="gallery">
    {data.map((src) => (
      <a key={src} href={src} target="_blank" rel="noreferrer">
        <img src={src} />
      </a>
    ))}
  </div>
)
