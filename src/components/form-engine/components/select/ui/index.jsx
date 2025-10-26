export default function SelectUI({ options }) {
  return (
    <div className="fe__ui-select">
      <select>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
