import {
  deduplicateStrings,
  deduplicateStringsKeepOrder,
  deduplicateStringsWithObject,
  batchDeduplicateStrings,
} from '../utils.js';

/**
 * 生成测试数据
 * @param {number} count - 字符串数量
 * @param {number} duplicateRate - 重复率 (0-1)
 * @returns {string[]}
 */
export function generateTestData(count = 100000, duplicateRate = 0.5) {
  const uniqueCount = Math.floor(count * (1 - duplicateRate));
  const uniqueStrings = Array.from({ length: uniqueCount }, (_, i) => `string_${i}`);
  const duplicateStrings = Array.from(
    { length: count - uniqueCount },
    (_, i) => uniqueStrings[Math.floor(Math.random() * uniqueCount)]
  );
  
  // 混合数组
  const allStrings = [...uniqueStrings, ...duplicateStrings];
  for (let i = allStrings.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allStrings[i], allStrings[j]] = [allStrings[j], allStrings[i]];
  }
  
  return allStrings;
}

/**
 * 性能测试
 */
export function performanceTest() {
  console.log('=== 字符串去重性能测试 ===\n');
  
  const testSizes = [1000, 10000, 100000];
  
  testSizes.forEach(size => {
    console.log(`\n测试数据量: ${size.toLocaleString()} 个字符串`);
    console.log('─'.repeat(50));
    
    const testData = generateTestData(size, 0.5);
    const originalLength = testData.length;
    
    // 方法1: Set去重
    let start = performance.now();
    const result1 = deduplicateStrings(testData);
    let end = performance.now();
    const time1 = (end - start).toFixed(2);
    console.log(`Set去重:        ${time1}ms | 结果: ${result1.length} 个唯一字符串 (减少 ${originalLength - result1.length} 个)`);
    
    // 方法2: Map去重（保持顺序）
    start = performance.now();
    const result2 = deduplicateStringsKeepOrder(testData);
    end = performance.now();
    const time2 = (end - start).toFixed(2);
    console.log(`Map去重(有序):  ${time2}ms | 结果: ${result2.length} 个唯一字符串`);
    
    // 方法3: 对象哈希去重
    start = performance.now();
    const result3 = deduplicateStringsWithObject(testData);
    end = performance.now();
    const time3 = (end - start).toFixed(2);
    console.log(`对象哈希去重:   ${time3}ms | 结果: ${result3.length} 个唯一字符串`);
    
    // 方法4: 批量去重（默认）
    start = performance.now();
    const result4 = batchDeduplicateStrings(testData);
    end = performance.now();
    const time4 = (end - start).toFixed(2);
    console.log(`批量去重:       ${time4}ms | 结果: ${result4.length} 个唯一字符串`);
    
    // 验证结果一致性
    const allSame = result1.length === result2.length && 
                   result2.length === result3.length && 
                   result3.length === result4.length;
    console.log(`结果一致性: ${allSame ? '✓' : '✗'}`);
  });
  
  console.log('\n=== 性能测试完成 ===');
  console.log('\n推荐方案:');
  console.log('- 一般情况: 使用 deduplicateStrings() (Set方法，最快)');
  console.log('- 需要保持顺序: 使用 deduplicateStringsKeepOrder()');
  console.log('- 大量数据: 使用 batchDeduplicateStrings()');
}

/**
 * 使用示例
 */
export function usageExample() {
  console.log('=== 使用示例 ===\n');
  
  // 示例数据
  const strings = ['apple', 'banana', 'apple', 'orange', 'banana', 'grape'];
  console.log('原始数组:', strings);
  
  // 方法1: 简单去重（最快）
  const unique1 = deduplicateStrings(strings);
  console.log('Set去重结果:', unique1);
  
  // 方法2: 保持顺序去重
  const unique2 = deduplicateStringsKeepOrder(strings);
  console.log('保持顺序去重:', unique2);
  
  // 方法3: 批量去重
  const unique3 = batchDeduplicateStrings(strings);
  console.log('批量去重结果:', unique3);
  
  // 方法4: 批量去重（保持顺序）
  const unique4 = batchDeduplicateStrings(strings, { keepOrder: true });
  console.log('批量去重(有序):', unique4);
}

// 如果在Node环境或需要直接运行测试，取消下面的注释
// if (typeof window === 'undefined' || window.location.search.includes('test=true')) {
//   usageExample();
//   performanceTest();
// }
