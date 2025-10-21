import { useCallback, useState } from 'react';
import { rsaEncrypt, rsaDecrypt } from './rsa-crypto';

import './index.scss';

const publicKey = `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhe6JxTLTcFD8XkKEZqchHA7k6p8T/cmrtNbuWXJUW46nAvCW5a7Dblo+Mra+MpF+7eSBnK4q5iZWKBkXiDdjpzRMNlTZuk4FXw9s3rd8ME7k7D41Gzzya/yR3LAU9UxCiIPrDra/CmSzDWwspLTBkNV/lp5uU0dJgnCIT8ivbW5BSch9TxPz+M4RoL8SOXphtOY6D5agQP5zKuui3QJuN9W7T9pMbOOp6I8o8nYj2Lwyz5vEz0AQyHZJNq28NkUoe0f4bcRzUw1qO89HxsmwJZybAIoo7GkfkyuL0AVDWdNjr2fCiTx+BrLysFpkbUoUg6ZD970L+9kJCYhZumh+swIDAQAB`;
const privateKey = `MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCF7onFMtNwUPxeQoRmpyEcDuTqnxP9yau01u5ZclRbjqcC8JblrsNuWj4ytr4ykX7t5IGcrirmJlYoGReIN2OnNEw2VNm6TgVfD2zet3wwTuTsPjUbPPJr/JHcsBT1TEKIg+sOtr8KZLMNbCyktMGQ1X+Wnm5TR0mCcIhPyK9tbkFJyH1PE/P4zhGgvxI5emG05joPlqBA/nMq66LdAm431btP2kxs46nojyjydiPYvDLPm8TPQBDIdkk2rbw2RSh7R/htxHNTDWo7z0fGybAlnJsAiijsaR+TK4vQBUNZ02OvZ8KJPH4GsvKwWmRtShSDpkP3vQv72QkJiFm6aH6zAgMBAAECggEAHTzk4KLm27ciUOWOh+ZmaPyrZrjRoW68SF8/a1F1LwOmXBLvrjaHvXh/6YxRWzK+FerzjKPNA69M0bYgmAEXhTH6jUXavjw4GfeBGeHOf7FJcnVmHIsilQZvRVE/UgmS4MCDuROWAwvWttBtsosvUpH5J4Vwqkd+ubYdW+WAvo+mCzNUZkBluVgS6WT7EZna69yNfhXQVV4adowTXRx0pBBA4J6dsyD6XMrdeu5yR3PRlT2nXUdKw9EBCPR/FHxnoW/44F6q1veihMNNG5PlEyrhXiwpQS+9p7vGpYVSUmyvHw1eYmUFTFQg34jEf8uhFZPBhDbR0NG5m4yFkf682QKBgQD2mJr9+dgjKjo/7pZFXockUzy/f2IiEoS6YAvM+YK4/8kL8EdRRvGnsspRdxoDEZHJ0KkzretFUs7u8qBWPlXeYrHOF5jTQqjGWTAIg8PiR+MpKLT3xWv0+Vasnxo2jNnwDIoUz+3DPxe4Mv1rnUNEx9SwIXBeyNOMdY5Z26lI7wKBgQCLCgwZAiiUrAwBDRz25OsJB9jM4Q8/1oEGfdoOu4KuwApzDqI9BKbP4VOAHMJUvfd8LS3/bQtJxEf71+nTYvbI34gmNwtOXp1DjuuVGSuMJIwKKwuUgf6ZyBiSzJKo44muHcjOokoZyX7UALBWHcVXhcQH0oAHqBZ+3Qz23Eo+fQKBgGjc2kQYY8YIZf7b2YEkQnm6/8E7TSLKFzEeOMZwcBt1giwWgG1aqtayXACqkiAt734PwnQciEjRfvfzqyUhmuhXtd67AB0OYrD+KkPkrH7kLQBKtDIM/OyOv0Hm4oHCAcdnvaw+A5CcmtyUqlmB5aIxDAveHGfiJLu9HcyucV13AoGAJ7i4GhDuzQKV71rysmpV51+RhX6qn59FfzhHKrxRKmF82sAMg4gnq+4Ar/IHZrRa1uQFZxqdBfcIZZ+akqSMQnjx6ZECLuKC5UEYdqEZOtFaHLGNfmDg/sgWlSHSqGNQ+yhRLQ9aQiG5lRGZTxD0RvvVNDLkFsvjmVzHjmMC5vUCgYA4z5K5DvwGv8WuhhvqkOyVsdLrV/aclcZ7I3wzH13OUzzuhWi7CCpVN/TUKSFcjJSv6NtOMEUWx2Vj5Zg6G64f0csaQpePsmKnKycCFaLyQOyFogJrxMSfE5NCaEu/JJBV88VyVNlpzgZADABt5LqAKeqVzK661Qinuc1RTIDvYA==`;

export default function Crypto() {
  const [text, setText] = useState('123');
  const [output, setOutput] = useState('');

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setText(value);
  }, []);

  const handleEncrypt = useCallback(async () => {
    const encrypted = await rsaEncrypt(publicKey, text);
    console.log('加密结果：', encrypted);
    setOutput(encrypted);
  }, [text]);

  const handleDecrypt = useCallback(async () => {
    const decrypted = await rsaDecrypt(privateKey, text);
    console.log('解密结果：', decrypted);
    setOutput(decrypted);
  }, [text]);

  return (
    <section className="web-crypto">
      <h1>Crypto</h1>

      <div className="input">
        <textarea type="text" value={text} onChange={handleChange} />
      </div>

      <div className="button-group">
        <button onClick={handleEncrypt}>加密</button>
        <button onClick={handleDecrypt}>解密</button>

        <span>输出：</span>
      </div>

      <div className="output">
        <pre>{output}</pre>
      </div>
    </section>
  );
}
