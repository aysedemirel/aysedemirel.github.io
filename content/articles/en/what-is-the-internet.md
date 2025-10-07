![internet](../../img/internet.png)

Today, a significant portion of the world’s population are internet users. In the field of software development, a large proportion of developers are engaged in web programming. Whether you are working on frontend or backend development, the internet architecture remains central to the tasks being performed.

To better understand internet architecture, I plan to create a series titled “Internet 101”. The starting point of this series addresses the question: “How does the Internet work?”

![internet](../../img/many-nodes.png)

## The Origins of the Internet

Historical sources trace the origins of the Internet back to the **ARPANET (Advanced Research Projects Agency Network)** project. Developed during the Cold War to ensure uninterrupted communication, this system served as a precursor to today’s Internet, which supports widely used platforms such as Netflix, YouTube, and Instagram.

To achieve a resilient network during wartime, the architecture transitioned from a **centralized system** to a **distributed system**. This shift laid the foundation for the modern Internet. Today, the Internet continues to operate on a distributed architecture, with no central governing authority. This design ensures that the Internet has no single owner. The strength of the Internet derives from its distributed nature: all participants have equal access rights, although networks with more robust infrastructure enjoy a relative advantage in communication efficiency.

## Data Formats on the Internet

Information on the Internet is transmitted in the form of **bits**. Physical media, such as networks, wireless connections (Wi-Fi), and cables, are required for this transmission.

Data transmitted over the Internet consists of bits, forming what is known as **binary information**. A bit is a binary unit that represents two states: 0 denotes off/absent, and 1 denotes on/present. Because of this dual-state nature, the bit system is referred to as **binary code**. Eight bits constitute one byte, and 1,000 bytes form one kilobyte.

Have you noticed the speed specifications in internet packages? For example, values such as 16 Mbps. **Mbps (Megabits per second)** is the standard unit of Internet speed, representing the number of megabits transmitted per second. Higher Mbps values correspond to faster data transfer rates. For instance, a “16 Mbps” connection allows the transfer of 16 megabits of data per second. The actual speed depends on the physical infrastructure (e.g., copper wire, fiber-optic cable). Advanced technologies, such as fiber optics, are employed to achieve higher transmission speeds.

## How Data is Transmitted on the Internet

Once data is converted into binary format, it is physically transmitted using electricity, light, or radio waves. This system is fundamentally based on the 0-and-1 logic of bits.

For example, when you send an email from your computer, the message is first converted into the binary system, consisting exclusively of bits. The source is your computer, while the destination is the device where your friend opens the email. Communication between these two devices is facilitated by cables.

Even when using Wi-Fi or mobile data, a physical cable exists somewhere in the communication chain. At home, the connection is delivered via a cable leading to your modem. The binary message travels through these cables and is eventually converted back into readable numerical or alphabetical characters, completing the transmission.

Would transmitting one bit per second suffice? Unfortunately, no. Considering that a single character consists of 8 bits, transmitting just one character in 8 seconds would be highly inefficient. To increase the amount of transmitted data, we must increase bandwidth.

**Bandwidth** defines a device’s maximum transmission capacity and is measured as bit rate, usually expressed as the number of bits transmitted per second.

Another critical metric is **latency**, which indicates the time required for data to travel from the source to the destination.

### Data Transmission Using Light

Electrical transmission via cables is cost-effective but may result in signal loss. While short-distance communication may not pose a problem, long-distance electrical transmission cannot maintain adequate speed. In such cases, light-based transmission is employed.

Bits are transmitted as light pulses through fiber-optic cables, which consist of glass fibers designed to reflect light internally. The bits propagate linearly, reflecting within the cable as they travel. This zigzag propagation allows multiple bits to be transmitted simultaneously.

Fiber-optic communication is extremely fast and does not suffer from signal loss like electrical transmission. However, it is expensive and challenging to install. Intercontinental communication relies on fiber-optic cables laid across ocean floors, where any physical damage can disrupt connectivity.

### Data Transmission Using Radio Waves

Electrical and light-based transmissions depend on cables, which may experience signal attenuation or high costs. How can data be transmitted without cables? The answer is **radio waves**.

**Wireless communication** utilizes radio waves. Bits are encoded into radio frequencies for transmission, preserving the original binary format.

Radio waves provide mobility but cannot reliably travel long distances without degradation. Wi-Fi networks, for example, operate using radio waves, enabling Internet access within a limited range, such as in cafes. Beyond a certain distance, the connection is lost.

Establishing a Wi-Fi connection requires first connecting to an **Internet Service Provider (ISP)**, which provides access to other devices on the network.

## Summary of Data Transmission Methods

The table below presents the advantages and disadvantages of various data transmission methods:

| METHOD      | ADVANTAGE      | DISADVANTAGE       |
| ----------- | -------------- | ------------------ |
| ELECTRICITY | COST-EFFECTIVE | SIGNAL LOSS        |
| LIGHT       | VERY FAST      | COMPLEX, EXPENSIVE |
| RADIO WAVES | PORTABLE       | LIMITED RANGE      |

> Fundamentally, the Internet is a **design philosophy** expressed through a set of **protocols forming an architectural framework**. Protocols are standardized rules that enable seamless communication across all participants.

---

The Internet encompasses a vast domain, including its logical structure, tools, and underlying concepts. In this article, I have introduced the historical rationale behind the Internet’s emergence and its concrete formation process.

This article was prepared based on the following sources:

- [What is the Internet?](https://roadmap.sh/guides/what-is-internet)
- [Many Nodes, One Distributed System](https://medium.com/baseds/many-nodes-one-distributed-system-9921f85205c4)

Stay tuned for future articles that explore Internet concepts in greater detail.

See you in the next post 👋
