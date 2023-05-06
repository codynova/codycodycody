export const MountainProjectLink = ({ href, children }) => (
  <div className="pin">
    <a href={href}>
      ⛰️<span>{children || 'Mountain Project'}</span>
    </a>
  </div>
)
