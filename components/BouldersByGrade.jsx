export const BouldersByGrade = ({ data }) => (
  <div className="boulder-grades">
    {Object.entries(data).map(([grade, count]) => (
      <div key={grade}>
        <span>{grade}</span>
        <span>{count}</span>
      </div>
    ))}
  </div>
)
