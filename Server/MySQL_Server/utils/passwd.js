let crypto = require('crypto');

function encrypt(password, callback) {
    // Key length is dependent on the algorithm. In this case for aes192, it is
    // 24 bytes (192 bits).
    // Use async `crypto.scrypt()` instead.
    const key = crypto.scryptSync(password, 'salt', 24);
    // Use `crypto.randomBytes()` to generate a random iv instead of the static iv
    // shown here.
    const iv = Buffer.alloc(16, 0); // Initialization vector.

    let cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
    let encrypted = '';

    cipher.on('readable', () => {
        let chunk;
        while (null !== (chunk = cipher.read())) {
            encrypted += chunk.toString('hex');
        }
    });

    cipher.on('end', () => {
        console.log(encrypted);
        callback(encrypted);
        // Prints: e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa
    });

    // cipher.write('some clear text data');
    cipher.end();
}

function decrypt(password, callback) {
    // Key length is dependent on the algorithm. In this case for aes192, it is
    // 24 bytes (192 bits).
    // Use the async `crypto.scrypt()` instead.
    const key = crypto.scryptSync(password, 'salt', 24);
    // The IV is usually passed along with the ciphertext.
    const iv = Buffer.alloc(16, 0); // Initialization vector.

    const decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);

    let decrypted = '';

    decipher.on('readable', () => {
        while (null !== (chunk = decipher.read())) {
            decrypted += chunk.toString('utf8');
        }
    });

    decipher.on('end', () => {
        // console.log(decrypted);
        callback(decrypted);
        // Prints: some clear text data
    });

    // // Encrypted with same algorithm, key and iv.
    // const encrypted =
    //     'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
    // decipher.write(encrypted, 'hex');
    decipher.write(password, 'hex');
    decipher.end();
}

module.exports = 
{
    Encrypt: encrypt,
    Decrypt: decrypt
}