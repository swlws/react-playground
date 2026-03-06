export function dateFormat(date, format) {
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export function timeFormat(date, format) {
  return date.toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function dateTimeFormat(date, format) {
  return date.toLocaleDateTimeString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

/**
 * 字符串数组去重 - 使用Set（推荐，最高效）
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 *
 * @param {string[]} arr - 待去重的字符串数组
 * @returns {string[]} 去重后的数组
 *
 * @example
 * deduplicateStrings(['a', 'b', 'a', 'c', 'b']) // ['a', 'b', 'c']
 */
export function deduplicateStrings(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  // 性能优化：Array.from 比扩展运算符稍快，特别是在大数据量时
  return Array.from(new Set(arr));
}

/**
 * 字符串数组去重 - 保留原始顺序（使用Map）
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 *
 * @param {string[]} arr - 待去重的字符串数组
 * @returns {string[]} 去重后的数组（保持原顺序）
 *
 * @example
 * deduplicateStringsKeepOrder(['a', 'b', 'a', 'c', 'b']) // ['a', 'b', 'c']
 */
export function deduplicateStringsKeepOrder(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  const seen = new Map();
  // 性能优化：预分配数组大小（估算，避免频繁扩容）
  const result = [];
  const len = arr.length;

  // 性能优化：使用传统 for 循环比 for...of 稍快
  for (let i = 0; i < len; i++) {
    const str = arr[i];
    if (!seen.has(str)) {
      seen.set(str, true);
      result.push(str);
    }
  }

  return result;
}

/**
 * 字符串数组去重 - 使用对象哈希（兼容性更好）
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 *
 * @param {string[]} arr - 待去重的字符串数组
 * @returns {string[]} 去重后的数组
 *
 * @example
 * deduplicateStringsWithObject(['a', 'b', 'a', 'c', 'b']) // ['a', 'b', 'c']
 */
export function deduplicateStringsWithObject(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  const seen = Object.create(null); // 性能优化：使用 Object.create(null) 创建纯净对象，避免原型链查找
  const result = [];
  const len = arr.length;

  // 性能优化：使用传统 for 循环
  for (let i = 0; i < len; i++) {
    const str = arr[i];
    if (!seen[str]) {
      seen[str] = true;
      result.push(str);
    }
  }

  return result;
}

/**
 * 批量字符串去重 - 适合处理大量数据（十万+）
 * 使用Set，性能最优
 *
 * @param {string[]} arr - 待去重的字符串数组
 * @param {Object} options - 配置选项
 * @param {boolean} options.keepOrder - 是否保持原顺序，默认false（Set更快）
 * @returns {string[]} 去重后的数组
 *
 * @example
 * batchDeduplicateStrings(largeArray) // 最快
 * batchDeduplicateStrings(largeArray, { keepOrder: true }) // 保持顺序
 */
export function batchDeduplicateStrings(arr, options = {}) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }

  const { keepOrder = false } = options;

  if (keepOrder) {
    return deduplicateStringsKeepOrder(arr);
  }

  return deduplicateStrings(arr);
}

/**
 * 高性能字符串去重 - 针对十万+数据优化
 * 使用原生 for 循环和预分配策略，性能最优
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 *
 * @param {string[]} arr - 待去重的字符串数组
 * @param {Object} options - 配置选项
 * @param {boolean} options.keepOrder - 是否保持原顺序，默认false
 * @returns {string[]} 去重后的数组
 *
 * @example
 * highPerformanceDeduplicate(largeArray) // 最快
 */
export function highPerformanceDeduplicate(arr, options = {}) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }

  const { keepOrder = false } = options;
  const len = arr.length;

  if (!keepOrder) {
    // 最快方案：使用 Set + Array.from
    const set = new Set();
    for (let i = 0; i < len; i++) {
      set.add(arr[i]);
    }
    return Array.from(set);
  } else {
    // 保持顺序：使用 Map + 预分配数组
    const seen = new Map();
    const result = [];
    // 预分配：假设去重后至少保留 50% 的元素（可根据实际情况调整）
    result.length = Math.floor(len * 0.5);
    let resultIndex = 0;

    for (let i = 0; i < len; i++) {
      const str = arr[i];
      if (!seen.has(str)) {
        seen.set(str, true);
        result[resultIndex++] = str;
      }
    }

    // 裁剪到实际大小
    result.length = resultIndex;
    return result;
  }
}

/**
 * 分批处理字符串去重 - 避免阻塞主线程
 * 使用 requestIdleCallback 或 setTimeout 分批处理，适合超大数据量（百万+）
 *
 * @param {string[]} arr - 待去重的字符串数组
 * @param {Object} options - 配置选项
 * @param {number} options.batchSize - 每批处理的元素数量，默认10000
 * @param {boolean} options.keepOrder - 是否保持原顺序，默认false
 * @param {Function} options.onProgress - 进度回调函数 (current, total) => void
 * @returns {Promise<string[]>} 返回去重后的数组
 *
 * @example
 * await chunkedDeduplicate(veryLargeArray, {
 *   batchSize: 10000,
 *   onProgress: (current, total) => console.log(`进度: ${current}/${total}`)
 * })
 */
export function chunkedDeduplicate(arr, options = {}) {
  return new Promise((resolve) => {
    if (!Array.isArray(arr) || arr.length === 0) {
      resolve([]);
      return;
    }

    const { batchSize = 10000, keepOrder = false, onProgress } = options;

    const len = arr.length;
    const seen = keepOrder ? new Map() : new Set();
    const result = keepOrder ? [] : null;
    let processed = 0;
    let resultIndex = 0;

    function processBatch(startIndex) {
      const endIndex = Math.min(startIndex + batchSize, len);

      // 处理当前批次
      for (let i = startIndex; i < endIndex; i++) {
        const str = arr[i];

        if (keepOrder) {
          if (!seen.has(str)) {
            seen.set(str, true);
            result[resultIndex++] = str;
          }
        } else {
          seen.add(str);
        }

        processed++;
      }

      // 进度回调
      if (onProgress) {
        onProgress(processed, len);
      }

      // 继续处理下一批
      if (endIndex < len) {
        // 使用 requestIdleCallback 如果可用，否则使用 setTimeout
        if (typeof requestIdleCallback !== "undefined") {
          requestIdleCallback(() => processBatch(endIndex), { timeout: 1000 });
        } else {
          setTimeout(() => processBatch(endIndex), 0);
        }
      } else {
        // 处理完成
        if (keepOrder) {
          result.length = resultIndex;
          resolve(result);
        } else {
          resolve(Array.from(seen));
        }
      }
    }

    // 开始处理
    processBatch(0);
  });
}

/**
 * 内存优化的字符串去重 - 原地去重（修改原数组）
 * 注意：会修改原数组，但内存占用最小
 *
 * @param {string[]} arr - 待去重的字符串数组（会被修改）
 * @returns {string[]} 去重后的数组（原数组的前N个元素）
 *
 * @example
 * const arr = ['a', 'b', 'a', 'c'];
 * const unique = inPlaceDeduplicate(arr); // arr 被修改，unique 是去重后的结果
 */
export function inPlaceDeduplicate(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }

  const seen = new Set();
  let writeIndex = 0;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const str = arr[i];
    if (!seen.has(str)) {
      seen.add(str);
      arr[writeIndex++] = str;
    }
  }

  // 裁剪数组到实际大小
  arr.length = writeIndex;
  return arr;
}

/**
 * 计算斐波那契数列的第n项（递归实现）
 * @param {number} n - 项数（非负整数）
 * @returns {number} 斐波那契数列的第n项
 */
// 添加了带有缓存（记忆化）的斐波那契数列计算
const fibCache = new Map();

export function fibonacci(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    throw new Error("参数n必须是非负整数");
  }
  if (n <= 1) return n;
  if (fibCache.has(n)) return fibCache.get(n);
  const value = fibonacci(n - 1) + fibonacci(n - 2);
  fibCache.set(n, value);
  return value;
}


/**
 * 生成 RFC4122 v4 标准的 UUID
 * 优先使用 crypto.randomUUID，其次使用 crypto.getRandomValues，
 * 最后退化到 Math.random（非安全，仅用于兜底）。
 * @returns {string} uuid
 */
export function makeUuid() {
  if (typeof crypto !== "undefined") {
    if (typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }

    if (typeof crypto.getRandomValues === "function") {
      const bytes = new Uint8Array(16);
      crypto.getRandomValues(bytes);

      // 调整符合 RFC4122 v4
      bytes[6] = (bytes[6] & 0x0f) | 0x40;
      bytes[8] = (bytes[8] & 0x3f) | 0x80;

      const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0"));
      return (
        hex.slice(0, 4).join("") +
        "-" +
        hex.slice(4, 6).join("") +
        "-" +
        hex.slice(6, 8).join("") +
        "-" +
        hex.slice(8, 10).join("") +
        "-" +
        hex.slice(10, 16).join("")
      );
    }
  }

  // 非安全兜底方案
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}