import JSEncrypt from 'jsencrypt';

/**
 * RSA 加密（兼容 Java RSA/ECB/PKCS1Padding）
 * @param {string} publicKeyBase64 - Base64 公钥字符串（不含 PEM 头尾）
 * @param {string} text - 明文
 * @returns {string} Base64 加密结果
 */
export function rsaEncrypt(publicKeyBase64, text) {
  const encryptor = new JSEncrypt();
  const pem = [
    '-----BEGIN PUBLIC KEY-----',
    publicKeyBase64,
    '-----END PUBLIC KEY-----',
  ].join('\n');
  encryptor.setPublicKey(pem);
  return encryptor.encrypt(text);
}

/**
 * RSA 解密（兼容 Java RSA/ECB/PKCS1Padding）
 * ⚠️ 注意：仅用于调试，不建议前端存放私钥
 * @param {string} privateKeyBase64 - Base64 私钥字符串（不含 PEM 头尾）
 * @param {string} ciphertext - Base64 密文
 * @returns {string} 解密后的明文
 */
export function rsaDecrypt(privateKeyBase64, ciphertext) {
  const decryptor = new JSEncrypt();
  const pem = [
    '-----BEGIN PRIVATE KEY-----',
    privateKeyBase64,
    '-----END PRIVATE KEY-----',
  ].join('\n');
  decryptor.setPrivateKey(pem);
  return decryptor.decrypt(ciphertext);
}
