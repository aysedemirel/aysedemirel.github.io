![internet](/img/encryption.png)

We share vast amounts of data on the Internet every day: our credit card information, bank account details, passwords, and personal data are all part of this communication. But how are these sensitive details protected?

If data were transmitted without encryption, an intermediary attacker (known as a **man-in-the-middle attacker**) could intercept a packet, read its contents, and then forward it to the intended recipient. The target system would remain unaware of the interception, as the packet would appear to have arrived normally. To prevent such threats, data is **encrypted** before transmission and can only be read after it is **decrypted** by the recipient.

## Encryption Methods

One of the earliest known encryption techniques in history is the **Caesar Cipher**. In this method, the sender and receiver agree on a shared “key number.” Each letter in the message is shifted along the alphabet by this number. For instance, if the key is 3, the transformation follows the pattern `A → D, B → E`, and so on.

![internet](/img/ceasar-cipher.png)

While simple, this method is also highly vulnerable. Since the alphabet contains a limited number of characters, an attacker can easily try every possible key through brute force. Increasing the key complexity—such as using a different shift value for each character—makes decryption harder but not impossible. Modern computers can still break such ciphers in a matter of seconds.

Today, secure communication channels are typically encrypted using algorithms with 256-bit key lengths. This dramatically increases the number of possible combinations to an astronomical scale. However, as computing power continues to grow, encryption methods once considered “secure” must be continuously updated to maintain their effectiveness.

## Symmetric and Asymmetric Encryption

When both the sender and receiver use the same key for encryption and decryption, the method is called **symmetric encryption**. The main challenge with symmetric systems lies in securely sharing the secret key between parties. While this can be done in physical environments, it is far more difficult on the Internet due to the risk of interception.

For this reason, **asymmetric encryption** is commonly used in online communication. This method employs two distinct keys:

- **Public key** – shared openly and used for encryption.
- **Private key** – kept secret by the recipient and used for decryption.

> Anyone can encrypt a message using the public key, but only the holder of the private key can decrypt and read it.

This can be likened to a mailbox: the mail slot is accessible to everyone (public key), but only you can unlock the box to retrieve the mail (private key). This approach enables secure communication without the need for prior key exchange.

Modern **TLS (Transport Layer Security)** and **SSL (Secure Sockets Layer)** protocols rely on these asymmetric encryption principles to establish secure connections.

## Cybersecurity Threats

Some of the most common cybersecurity threats on the Internet include **viruses**, **DDoS attacks**, and **phishing** schemes.

### Viruses

Viruses often infiltrate systems through seemingly harmless files or applications. Once executed, they can delete files, steal personal data, or grant attackers remote control over the system.

Some viruses aggregate infected devices into a **botnet**, a network of compromised computers controlled by an attacker. Once part of a botnet, a user’s device may unknowingly participate in large-scale cyberattacks or other malicious operations.

### DDoS (Distributed Denial of Service)

A DDoS attack aims to overwhelm a website or service by flooding it with excessive requests. The attacker directs thousands of botnet devices to target the same system simultaneously. This surge in traffic exhausts the system’s resources, rendering it unable to respond to legitimate users.

### Phishing

Phishing is a deceptive practice used to steal sensitive data such as login credentials or financial information. It typically involves fraudulent emails, fake login pages, or convincing messages designed to trick users into voluntarily providing their information to attackers.

---

This article has provided a brief introduction to the fundamental concepts of encryption and the most common cybersecurity threats. For a deeper understanding of the Internet’s technical infrastructure and security principles, you may refer to the upcoming parts of this series.

See you in the next article 👋

**References:**

- [Caesar Cipher – Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher)
- [What Is Encryption and How Does It Work? – Medium](https://medium.com/searchencrypt/what-is-encryption-how-does-it-work-e8f20e340537)
