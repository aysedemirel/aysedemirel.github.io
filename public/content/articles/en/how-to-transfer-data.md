![internet](/img/tcp.png)

In previous articles, we explained data transfer as though it occurs directly from one device to another. In practice, however, Internet traffic is more complex. A useful analogy is a congested road network, where multiple route options exist and the fastest path is preferred. On the Internet, data is transmitted as bits organized into **packets**, and these packets select routes that allow them to reach their destination most efficiently.

Packets have a limited size. Large amounts of data cannot be carried in a single packet because of security and efficiency concerns; therefore, data is divided across multiple packets. Each packet contains source and destination IP addresses. Consequently, even if packets traverse different routes or arrive at different times, the original data can be reassembled when all packets have reached their destination.

Network devices that manage data traffic are called **routers**. Routers monitor traffic on the network and forward packets along the most appropriate paths. Each router evaluates multiple possible routes and decides through which of the paths it controls the incoming packet can most easily continue.

> The availability of multiple route options makes the system fault-tolerant and more reliable.

![internet](/img/ip-router.png)

## TCP (Transmission Control Protocol)

To ensure that data is transmitted completely and accurately, the **Transmission Control Protocol (TCP)** is used. TCP guarantees that packets are delivered in order and without omission. When a packet is received, an acknowledgment (ACK) message is returned; if a packet is missing, the source retransmits it. If the acknowledgment is received, the transmission is considered successful; otherwise, packets are resent until delivery is confirmed. This mechanism ensures reliable and complete data transfer.

> One of the primary advantages of TCP and routers is **scalability**.

The system functions reliably both in small networks and in large-scale infrastructures with millions of devices. Thanks to routers and TCP, the Internet connects devices according to the principles of **connectivity**, **communication**, and **collaboration**.

## HTTP and Web Page Communication

Web browsers (e.g., Chrome, Firefox) are used to access websites. When a **URL (Uniform Resource Locator)** is entered into the browser, communication between the client and the server typically uses the **HyperText Transfer Protocol (HTTP)**. HTTP is the protocol through which clients request documents from servers.

Most interactions between servers and clients on the Web take the form of **GET requests**, which have a simple structure such as `GET /requested-document-name`. For example, to open a login page, a client might issue a `GET /login` request.

The basic visual structure of a web page is defined by **HTML (HyperText Markup Language)**. HTML determines whether text is bold or italic, and its alignment or placement on the page. While text content often resides directly within HTML, images and videos are usually loaded from separate URLs. The browser issues separate HTTP requests for each image and video resource and renders them when the requests receive successful responses.

> The greater the number of images or videos on a page, the more HTTP requests are required, which can slow page load times.

Web interaction is not limited to passive viewing. Actions such as form submissions or searches use HTTP **POST** requests. For instance, a search for cat videos might be sent as `POST /search HTTP/1.1` with `Query=Cat+Videos` in the request body; if the server responds successfully, the results (videos) are displayed.

Continuing the login example: when a user enters a username and password and submits the form, a POST request carrying these credentials is sent to the server. If the server verifies the credentials, it responds by presenting a personalized page for the user. The server also issues **cookies** after authentication. Cookies are pieces of data that allow a website to remember a user’s identity; they are stored by the client so that subsequent page reloads retain the logged-in state. Without cookies, users would need to reauthenticate after every page refresh. In effect, cookies function as a form of identity token for the website.

## Security: SSL, TLS, and HTTPS

Internet communication is accessible to many parties and, by default, occurs in plain text. This creates risks such as **snooping** (unauthorized eavesdropping) and **tampering** (unauthorized modification of data).

To mitigate these risks, trusted websites employ **SSL (Secure Sockets Layer)** and **TLS (Transport Layer Security)** to establish secure communication channels. These cryptographic layers prevent eavesdropping and unauthorized modification. When you see **_HTTPS_** and a padlock icon in the browser’s address bar, the data exchanged with that site is protected by these protocols. **HTTPS (HyperText Transfer Protocol Secure)** ensures that HTTP requests and responses are transmitted securely.

To establish a trustworthy connection, a website presents the browser with a **digital certificate**. A digital certificate acts like an official identity card that verifies the site’s claimed identity. Certificates are issued by certificate authorities (CAs). If a site lacks a valid certificate or attempts to establish an authenticated connection without one, the browser displays a warning.

## Summary of the Internet 101 Series

Summarizing the concepts covered in the Internet 101 series so far:

- **HTTP & DNS** → Enable document retrieval and address resolution
- **TCP/IP & Routing** → Determine destinations and ensure packets are correctly routed
- **Cables, Networks & Wi-Fi** → Provide the physical infrastructure for all communication

These components together enable the **Internet** to function.

---

In this article, we examined data transmission, protocols, and security mechanisms on the Internet.To further explore how the Internet functions, follow the upcoming articles in this series.

See you in the next chapter 👋

**References:**

- https://roadmap.sh/guides/what-is-internet
- https://medium.com/hackernoon/tcp-three-way-handshake-4161eb8aba32
- http://ithare.com/packet-loss-for-an-app-level-developer-part-i-router-failures-bgp-convergence-time-aqm-traffic-shapers/
