import "./rangeFilter.styles.css";

function RangeFilter({
  range,
  setRange,
  isLoading,
  isRangeChecked,
  setIsRangeChecked,
}) {
  return (
    <div className="range-container">
      <label>
        <input
          type="checkbox"
          disabled={isLoading}
          checked={isRangeChecked}
          onChange={() => setIsRangeChecked((currState) => !currState)}
        />
        Filter by age
      </label>
      {isRangeChecked && (
        <>
          <input
            type="range"
            value={range}
            disabled={isLoading}
            onChange={(e) => setRange(e.target.value)}
          />
          <span>{range}</span>
        </>
      )}
    </div>
  );
}

export default RangeFilter;
