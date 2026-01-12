![TCP](../../img/client-server.png)

**TCP (Transmission Control Protocol)** is a **connection-oriented** communication protocol developed to ensure reliable data transmission between devices over a network. TCP typically operates in conjunction with **IP (Internet Protocol)**, and together these two protocols are referred to as the **TCP/IP protocol suite**, which forms the foundation of the Internet.

The primary objective of TCP is to ensure that data transmitted between two endpoints is delivered to the receiving party in the **correct order, completely, and without errors**. In this respect, TCP places special emphasis on the processes of connection establishment, maintenance, and termination.

## Establishment of a TCP Connection: Three-Way Handshake

A TCP connection is established between a **client** and a **server**. Before data transmission begins, a verification process known as the **three-way handshake** is performed between the parties. The purpose of this process is to confirm that a reliable communication channel for data transfer has been successfully established between the two endpoints.

The three-way handshake process consists of the following steps:

1. **SYN (Synchronize):**
   The client sends a TCP packet with the **SYN** flag set, indicating a request to initiate a connection. This packet contains a randomly generated initial sequence number.
   - **Sequence Number:** The client determines a random initial sequence number (let this be denoted as $x$).
   - **State:** The client transitions to the “SYN-SENT” state.
2. **SYN-ACK (Synchronize-Acknowledgment):**
   To indicate acceptance of the request, the server sets its own SYN flag and sends a response back to the client along with **ACK** information by incrementing the sequence number sent by the client.
   - **Acknowledgment Number:** The server increments the sequence number received from the client by one ($x + 1$). This indicates, “I have received your packet with sequence number $x$, and I am expecting the next one.”
   - **Server Sequence Number:** The server also selects a random initial sequence number for itself (denoted as $y$).
   - **State:** The server transitions to the “SYN-RECEIVED” state.
3. **ACK (Acknowledgment):**
   The client acknowledges the packet received from the server and sends an **ACK** packet by incrementing the server’s sequence number.
   - **Sequence Number:** This value is now $x + 1$.
   - **Acknowledgment Number:** The sequence number received from the server is incremented by one ($y + 1$).
   - **State:** Both parties transition to the “ESTABLISHED” state, and data exchange begins.

Once these three steps are completed, the TCP connection is established and data transmission can commence.

![3-way handshake](../../img/tcp-handshake.png)

## Fundamental Characteristics of TCP

TCP is a **bidirectional protocol**; that is, data can be transmitted both from the client to the server and from the server to the client. Data is not transmitted as a single unit but rather in the form of **packets (segments)**.

The most distinctive characteristic of TCP is its use of an **acknowledgment mechanism (ACK — acknowledgment)** to ensure data integrity. For each transmitted data packet, an acknowledgment message is expected from the receiving party. If this acknowledgment is not received, TCP assumes that the packet has been lost and retransmits it.

This process operates as follows:

- Each transmitted packet is tracked by the sender.
- When an ACK is received from the receiving party, the packet is considered successfully delivered.
- If an **ACK** is not received within a specified period of time (timeout), the packet is considered lost and is retransmitted.

The timeout duration is dynamically adjusted based on network conditions. Through this mechanism, TCP is able to detect and compensate for data loss.

## Advantages and Disadvantages of TCP

TCP provides **high reliability** because it protects against packet loss, ordering errors, and data corruption. For this reason, it is preferred in applications with low tolerance for data loss, such as:

- File transfers
- Text-based messaging
- Web traffic (HTTP/HTTPS)

However, this reliability introduces a performance cost due to additional control mechanisms. Retransmissions, acknowledgment packets, and connection management can make TCP slower compared to connectionless protocols (for example, UDP).

## TCP Implementation and Observation

TCP-based client and server applications can be developed using many programming languages. TCP server/client examples are widely available in languages such as Java, Python, and C.

One such example for Java can be found at the following link: “[TCP Server–Client example using Java](https://github.com/aysedemirel/Socket-Programming/tree/master/BasicClientServer)”. The project available at this link contains a simple server–client implementation. By downloading the code to your local machine and running the client and server separately, you can observe data exchange. By extending the code, you can develop your own TCP-based [messaging application](https://github.com/aysedemirel/Socket-Programming/tree/master/MessageApp) :)

In addition, TCP traffic can be observed using network analysis tools such as [Wireshark](https://www.wireshark.org/#download). Through such tools, the three-way handshake process, packet transmissions, and acknowledgment mechanisms can be examined in detail.

---

TCP is one of the fundamental protocols that underpin reliable data transmission over the Internet. Through its connection establishment, error control, and retransmission mechanisms, it guarantees data integrity. Due to these characteristics, TCP is preferred in a large proportion of modern network applications.

---

Stay tuned for articles that explain Internet concepts in greater detail.

See you in the next article 👋

**References:**

- [Transmission Control Protocol (TCP)](https://searchnetworking.techtarget.com/definition/TCP)
