import "./index.scss";

export default function FeTabs({ tabs, activeTabId, onChange }) {
  const handleTabClick = (tabId) => {
    onChange(tabId);
  };

  return (
    <div className="fe-tabs">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`fe-tabs__item ${
            tab.id === activeTabId ? "fe-tabs__item--active" : ""
          }`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}
