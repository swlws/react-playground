import React from 'react';
// 使用别名导入组件
import AdvancedSearch from '@components/advanced-search';
// 使用别名导入样式
import '@styles/ui-theme.css';
// 使用别名导入资源
import reactLogo from '@assets/react.svg';

function AliasTest() {
  return (
    <div className="alias-test">
      <h1>路径别名测试</h1>
      <img src={reactLogo} alt="React Logo" />
      <div className="search-container">
        <AdvancedSearch />
      </div>
    </div>
  );
}

export default AliasTest;