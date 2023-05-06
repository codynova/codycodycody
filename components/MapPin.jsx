export const MapPin = ({ href, children }) => (
  <div className="pin">
    <a href={href}>
      📍<span>{children || 'Map Pin'}</span>
    </a>
  </div>
)
