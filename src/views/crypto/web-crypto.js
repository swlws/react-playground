// 工具：将 PEM 转 ArrayBuffer
function pemToArrayBuffer(pem) {
  const b64 = pem
    .replace(/-----BEGIN .* KEY-----/, '')
    .replace(/-----END .* KEY-----/, '')
    .replace(/\s+/g, '');
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

// ArrayBuffer 转字符串
function arrayBufferToString(buffer) {
  const decoder = new TextDecoder();
  return decoder.decode(buffer);
}

// Base64 转 ArrayBuffer
function base64ToArrayBuffer(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

// 将 ArrayBuffer 转成 Base64
function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

// RSA 加密函数，使用公钥和 SHA-256
export async function rsaEncrypt(publicKeyPem, text) {
  // 1. 导入公钥
  const keyBuffer = pemToArrayBuffer(publicKeyPem);
  const publicKey = await crypto.subtle.importKey(
    'spki', // 公钥格式
    keyBuffer,
    {
      name: 'RSA-OAEP',
      hash: 'SHA-256',
    },
    false, // 是否可导出
    ['encrypt'] // 用途
  );

  // 2. 将文本编码为 Uint8Array
  const encoder = new TextEncoder();
  const data = encoder.encode(text);

  // 3. 加密
  const encrypted = await crypto.subtle.encrypt(
    { name: 'RSA-OAEP' },
    publicKey,
    data
  );

  // 4. 转为 Base64 返回
  return arrayBufferToBase64(encrypted);
}

// RSA 解密函数
export async function rsaDecrypt(privateKeyPem, base64Cipher) {
  // 1. 导入私钥
  const keyBuffer = pemToArrayBuffer(privateKeyPem);
  const privateKey = await crypto.subtle.importKey(
    'pkcs8', // 私钥格式
    keyBuffer,
    {
      name: 'RSA-OAEP',
      hash: 'SHA-256',
    },
    false,
    ['decrypt']
  );

  // 2. 将 Base64 密文转 ArrayBuffer
  const cipherBuffer = base64ToArrayBuffer(base64Cipher);

  // 3. 解密
  const decrypted = await crypto.subtle.decrypt(
    { name: 'RSA-OAEP' },
    privateKey,
    cipherBuffer
  );

  // 4. 转为字符串
  return arrayBufferToString(decrypted);
}
