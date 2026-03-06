import { useState, useCallback } from 'react';
import {
  deduplicateStrings,
  deduplicateStringsKeepOrder,
  deduplicateStringsWithObject,
  batchDeduplicateStrings,
  highPerformanceDeduplicate,
  chunkedDeduplicate,
} from '../../utils.js';

/**
 * 生成测试数据
 */
function generateTestData(count, duplicateRate = 0.5) {
  const uniqueCount = Math.floor(count * (1 - duplicateRate));
  const uniqueStrings = Array.from({ length: uniqueCount }, (_, i) => `string_${i}`);
  const duplicateStrings = Array.from(
    { length: count - uniqueCount },
    (_, i) => uniqueStrings[Math.floor(Math.random() * uniqueCount)]
  );
  
  const allStrings = [...uniqueStrings, ...duplicateStrings];
  // 打乱顺序
  for (let i = allStrings.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allStrings[i], allStrings[j]] = [allStrings[j], allStrings[i]];
  }
  
  return allStrings;
}

export default function DeduplicateDemo() {
  const [testData, setTestData] = useState([]);
  const [results, setResults] = useState({});
  const [isRunning, setIsRunning] = useState(false);
  const [dataSize, setDataSize] = useState(100000);
  const [chunkedProgress, setChunkedProgress] = useState({ current: 0, total: 0 });

  // 生成测试数据
  const handleGenerateData = useCallback(() => {
    setIsRunning(true);
    setTimeout(() => {
      const data = generateTestData(dataSize, 0.5);
      setTestData(data);
      setIsRunning(false);
    }, 100);
  }, [dataSize]);

  // 性能测试
  const handlePerformanceTest = useCallback(() => {
    if (testData.length === 0) {
      alert('请先生成测试数据');
      return;
    }

    setIsRunning(true);
    const newResults = {};

    // 方法1: Set去重
    let start = performance.now();
    const result1 = deduplicateStrings(testData);
    let end = performance.now();
    newResults.set = {
      time: (end - start).toFixed(2),
      count: result1.length,
      reduced: testData.length - result1.length,
    };

    // 方法2: Map去重（保持顺序）
    start = performance.now();
    const result2 = deduplicateStringsKeepOrder(testData);
    end = performance.now();
    newResults.map = {
      time: (end - start).toFixed(2),
      count: result2.length,
      reduced: testData.length - result2.length,
    };

    // 方法3: 对象哈希去重
    start = performance.now();
    const result3 = deduplicateStringsWithObject(testData);
    end = performance.now();
    newResults.object = {
      time: (end - start).toFixed(2),
      count: result3.length,
      reduced: testData.length - result3.length,
    };

    // 方法4: 批量去重
    start = performance.now();
    const result4 = batchDeduplicateStrings(testData);
    end = performance.now();
    newResults.batch = {
      time: (end - start).toFixed(2),
      count: result4.length,
      reduced: testData.length - result4.length,
    };

    // 方法5: 高性能去重
    start = performance.now();
    const result5 = highPerformanceDeduplicate(testData);
    end = performance.now();
    newResults.highPerf = {
      time: (end - start).toFixed(2),
      count: result5.length,
      reduced: testData.length - result5.length,
    };

    setResults(newResults);
    setIsRunning(false);
  }, [testData]);

  // 分批处理测试
  const handleChunkedTest = useCallback(async () => {
    if (testData.length === 0) {
      alert('请先生成测试数据');
      return;
    }

    setIsRunning(true);
    setChunkedProgress({ current: 0, total: testData.length });

    const start = performance.now();
    const result = await chunkedDeduplicate(testData, {
      batchSize: 10000,
      onProgress: (current, total) => {
        setChunkedProgress({ current, total });
      },
    });
    const end = performance.now();

    setResults((prev) => ({
      ...prev,
      chunked: {
        time: (end - start).toFixed(2),
        count: result.length,
        reduced: testData.length - result.length,
      },
    }));
    setIsRunning(false);
  }, [testData]);

  // 简单示例
  const simpleExample = ['apple', 'banana', 'apple', 'orange', 'banana', 'grape'];
  const simpleResult = deduplicateStrings(simpleExample);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>字符串去重性能测试</h1>

      <section style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
        <h2>简单示例</h2>
        <p>
          <strong>原始数组:</strong> {JSON.stringify(simpleExample)}
        </p>
        <p>
          <strong>去重结果:</strong> {JSON.stringify(simpleResult)}
        </p>
        <p>
          <strong>代码:</strong> <code>deduplicateStrings(['apple', 'banana', 'apple', ...])</code>
        </p>
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
        <h2>性能测试</h2>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>
            数据量:
            <input
              type="number"
              value={dataSize}
              onChange={(e) => setDataSize(Number(e.target.value))}
              style={{ marginLeft: '5px', padding: '5px', width: '120px' }}
              min="1000"
              max="1000000"
              step="10000"
            />
          </label>
          <button
            onClick={handleGenerateData}
            disabled={isRunning}
            style={{
              padding: '8px 16px',
              marginRight: '10px',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isRunning ? 'not-allowed' : 'pointer',
            }}
          >
            {isRunning ? '生成中...' : '生成测试数据'}
          </button>
          <button
            onClick={handlePerformanceTest}
            disabled={isRunning || testData.length === 0}
            style={{
              padding: '8px 16px',
              marginRight: '10px',
              background: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isRunning || testData.length === 0 ? 'not-allowed' : 'pointer',
            }}
          >
            运行性能测试
          </button>
          <button
            onClick={handleChunkedTest}
            disabled={isRunning || testData.length === 0}
            style={{
              padding: '8px 16px',
              background: '#ffc107',
              color: '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: isRunning || testData.length === 0 ? 'not-allowed' : 'pointer',
            }}
          >
            分批处理测试
          </button>
        </div>

        {testData.length > 0 && (
          <p style={{ color: '#666' }}>
            已生成 <strong>{testData.length.toLocaleString()}</strong> 个字符串
          </p>
        )}

        {chunkedProgress.total > 0 && (
          <div style={{ marginTop: '10px', padding: '10px', background: '#fff3cd', borderRadius: '4px' }}>
            <div style={{ marginBottom: '5px' }}>
              分批处理进度: {chunkedProgress.current.toLocaleString()} / {chunkedProgress.total.toLocaleString()}
            </div>
            <div style={{ width: '100%', height: '20px', background: '#e9ecef', borderRadius: '10px', overflow: 'hidden' }}>
              <div
                style={{
                  width: `${(chunkedProgress.current / chunkedProgress.total) * 100}%`,
                  height: '100%',
                  background: '#ffc107',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
          </div>
        )}

        {Object.keys(results).length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: 'white',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <thead>
                <tr style={{ background: '#333', color: 'white' }}>
                  <th style={{ padding: '12px', textAlign: 'left' }}>方法</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>时间复杂度</th>
                  <th style={{ padding: '12px', textAlign: 'right' }}>耗时 (ms)</th>
                  <th style={{ padding: '12px', textAlign: 'right' }}>去重后数量</th>
                  <th style={{ padding: '12px', textAlign: 'right' }}>减少数量</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px' }}>
                    <strong>Set去重</strong>
                    <br />
                    <code style={{ fontSize: '12px', color: '#666' }}>
                      deduplicateStrings()
                    </code>
                  </td>
                  <td style={{ padding: '12px' }}>O(n)</td>
                  <td style={{ padding: '12px', textAlign: 'right', fontWeight: 'bold' }}>
                    {results.set?.time}ms
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>
                    {results.set?.count.toLocaleString()}
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right', color: '#28a745' }}>
                    -{results.set?.reduced.toLocaleString()}
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px' }}>
                    <strong>Map去重（保持顺序）</strong>
                    <br />
                    <code style={{ fontSize: '12px', color: '#666' }}>
                      deduplicateStringsKeepOrder()
                    </code>
                  </td>
                  <td style={{ padding: '12px' }}>O(n)</td>
                  <td style={{ padding: '12px', textAlign: 'right', fontWeight: 'bold' }}>
                    {results.map?.time}ms
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>
                    {results.map?.count.toLocaleString()}
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right', color: '#28a745' }}>
                    -{results.map?.reduced.toLocaleString()}
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px' }}>
                    <strong>对象哈希去重</strong>
                    <br />
                    <code style={{ fontSize: '12px', color: '#666' }}>
                      deduplicateStringsWithObject()
                    </code>
                  </td>
                  <td style={{ padding: '12px' }}>O(n)</td>
                  <td style={{ padding: '12px', textAlign: 'right', fontWeight: 'bold' }}>
                    {results.object?.time}ms
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>
                    {results.object?.count.toLocaleString()}
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right', color: '#28a745' }}>
                    -{results.object?.reduced.toLocaleString()}
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px' }}>
                    <strong>批量去重</strong>
                    <br />
                    <code style={{ fontSize: '12px', color: '#666' }}>
                      batchDeduplicateStrings()
                    </code>
                  </td>
                  <td style={{ padding: '12px' }}>O(n)</td>
                  <td style={{ padding: '12px', textAlign: 'right', fontWeight: 'bold' }}>
                    {results.batch?.time}ms
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>
                    {results.batch?.count.toLocaleString()}
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right', color: '#28a745' }}>
                    -{results.batch?.reduced.toLocaleString()}
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd', background: '#fff3cd' }}>
                  <td style={{ padding: '12px' }}>
                    <strong>⚡ 高性能去重</strong>
                    <br />
                    <code style={{ fontSize: '12px', color: '#666' }}>
                      highPerformanceDeduplicate()
                    </code>
                    <br />
                    <span style={{ fontSize: '11px', color: '#856404' }}>优化版：原生循环+预分配</span>
                  </td>
                  <td style={{ padding: '12px' }}>O(n)</td>
                  <td style={{ padding: '12px', textAlign: 'right', fontWeight: 'bold', color: '#856404' }}>
                    {results.highPerf?.time}ms
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>
                    {results.highPerf?.count.toLocaleString()}
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right', color: '#28a745' }}>
                    -{results.highPerf?.reduced.toLocaleString()}
                  </td>
                </tr>
                {results.chunked && (
                  <tr style={{ background: '#d1ecf1' }}>
                    <td style={{ padding: '12px' }}>
                      <strong>🔄 分批处理去重</strong>
                    <br />
                    <code style={{ fontSize: '12px', color: '#666' }}>
                      chunkedDeduplicate()
                    </code>
                    <br />
                    <span style={{ fontSize: '11px', color: '#0c5460' }}>不阻塞主线程</span>
                  </td>
                  <td style={{ padding: '12px' }}>O(n)</td>
                  <td style={{ padding: '12px', textAlign: 'right', fontWeight: 'bold', color: '#0c5460' }}>
                    {results.chunked?.time}ms
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>
                    {results.chunked?.count.toLocaleString()}
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right', color: '#28a745' }}>
                    -{results.chunked?.reduced.toLocaleString()}
                  </td>
                </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section style={{ padding: '20px', background: '#e7f3ff', borderRadius: '8px' }}>
        <h2>推荐方案</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>
            <strong>⚡ 十万+数据（推荐）:</strong> 使用 <code>highPerformanceDeduplicate()</code> - 性能最优，使用原生循环和预分配策略
          </li>
          <li>
            <strong>一般情况:</strong> 使用 <code>deduplicateStrings()</code> - Set方法，简单高效
          </li>
          <li>
            <strong>需要保持顺序:</strong> 使用 <code>deduplicateStringsKeepOrder()</code> 或 <code>highPerformanceDeduplicate(arr, {'{'} keepOrder: true {'}'})</code>
          </li>
          <li>
            <strong>超大数据（百万+）:</strong> 使用 <code>chunkedDeduplicate()</code> - 分批处理，不阻塞主线程，支持进度回调
          </li>
          <li>
            <strong>内存敏感场景:</strong> 使用 <code>inPlaceDeduplicate()</code> - 原地去重，最小内存占用（会修改原数组）
          </li>
          <li>
            <strong>兼容性要求:</strong> 使用 <code>deduplicateStringsWithObject()</code> - 对象哈希方法
          </li>
        </ul>
        <div style={{ marginTop: '15px', padding: '15px', background: 'white', borderRadius: '4px' }}>
          <h3 style={{ marginTop: 0 }}>性能优化说明</h3>
          <ul style={{ lineHeight: '1.8', marginBottom: 0 }}>
            <li><strong>时间复杂度:</strong> 所有方法都是 O(n)</li>
            <li><strong>空间复杂度:</strong> 所有方法都是 O(n)</li>
            <li><strong>性能优化点:</strong>
              <ul>
                <li>使用 <code>Array.from()</code> 替代扩展运算符 <code>[...]</code></li>
                <li>使用原生 <code>for</code> 循环替代 <code>for...of</code></li>
                <li>预分配数组大小，减少动态扩容</li>
                <li>使用 <code>Object.create(null)</code> 创建纯净对象，避免原型链查找</li>
                <li>分批处理避免阻塞主线程（使用 requestIdleCallback）</li>
              </ul>
            </li>
            <li><strong>适用场景:</strong>
              <ul>
                <li>10万以下：<code>highPerformanceDeduplicate()</code> 或 <code>deduplicateStrings()</code></li>
                <li>10万-100万：<code>highPerformanceDeduplicate()</code></li>
                <li>100万以上：<code>chunkedDeduplicate()</code> 分批处理</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
