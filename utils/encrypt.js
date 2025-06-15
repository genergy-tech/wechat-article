import { JSEncrypt } from 'jsencrypt';

// 签名加密
const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDFXME+2oiSgo9BapxUIXJVyPDlXUWW4vnkUZPgiViYvsjIX9CUVnRXe3DkrgXkYaG0oidUDE0/LiOTV3MQpzqCuWszqGrer4FZ5NhOzxmIOZH8wOPioT0cj7soN1hW0emYseZhRf+SG97pLpMJdUWwxjNFCAyQwIguxmwfH1vVXQIDAQAB';
const encryptor = new JSEncrypt();
encryptor.setPublicKey(publicKey);

export const encryptSignature = (url) => {
    let path = url;
    const index = url.indexOf('?');
    if (index >= 0) {
        path = url.substring(0, index);
    }
    const encryptStr = `${path}=${new Date().getTime()}`;
    return encryptor.encrypt(encryptStr);
};
