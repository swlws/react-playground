export default function SelectUI({ options = [] } = {}) {
  return (
    <div className="fe-ui-select">
      <select className="fe-ui-select__select">
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
