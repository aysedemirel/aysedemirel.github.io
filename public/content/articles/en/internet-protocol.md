![IP](/img/ip-2.png)

When data is transmitted from one point to another, the system that enables this journey is known as a **network**. Yet, a fundamental question arises: how does data determine its destination?

## Basic Network Structure

If only two devices were directly connected via a cable, data would travel straight to the other device without the need for routing. However, once a third device is introduced into the system, determining the correct destination becomes more complex. This is where **routers** come into play.

![Data](/img/data.png)

## Routers and Network Communication

Modern networks can consist of thousands or even millions of interconnected devices. Physically connecting all of them directly to one another is infeasible. Routers organize this complex infrastructure and manage data traffic efficiently.

When we connect to the Internet, we do not communicate directly with the target website. Instead, our data first reaches a router within the local network. From there, data packets are forwarded step by step through multiple interconnected routers until they reach their final destination.

![Internet](/img/internet-broadcasting.png)

Routers perform this process using a **routing table**, which specifies the most appropriate route for each target address.

![Routing](/img/routing.png)

In the diagrams above, routers’ routing decisions and the data flow paths are illustrated. Square symbols represent routers, circles represent end devices, and the arrows indicate possible directions for data transmission. The numbers on the arrows correspond to routing information used to determine the target path. If a number is followed by an exclamation mark (“!”), it indicates that all routes except that number are considered viable.

## Example: Data Routing Scenario

![Data Routing Scenario](/img/routing-1-en.png)

In the simple example above, data is being sent from device number 1 to device number 5:

- Device 1 recognizes that it is not the target and forwards the data to its connected router.
- The first router determines that the destination is not device 2, but one of devices 3, 4, 5, or 6, and sends the data to the next router.
- The second router analyzes the routing information: “If the destination is 3, send it upward; if 6, send it to device 6 below; if 4 or 5, send it to the other router below.”
- The third router then delivers the data directly to device 5.

While this example is simplified, the same logic applies to real-world Internet routing. Instead of device numbers, actual networks use IP addresses to identify endpoints and perform routing.

## IP Addresses

Every device on the Internet is assigned a unique identifier called an **IP (Internet Protocol) address**. There are two primary versions of IP:

- **IPv4 Example:** `192.168.1.1`
- **IPv6 Example:** `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

To find your computer’s IP address, open a command prompt (press Windows + R and type cmd), then execute the command `ipconfig`. For detailed instructions, see [How to find a website’s IP address](https://aysedemirel.github.io/#/blog/how-find-website-ip).

## Characteristics of the IP Protocol

If all network devices were directly connected, communication would be faster but also far more costly and difficult to manage. The IP protocol was designed to overcome these challenges.

Data transmitted over IP is divided into smaller units called **data packets**. These packets can travel along different routes simultaneously, optimizing network efficiency. However, some packets may be lost or delayed, potentially interrupting communication. Excessive traffic can also overload routers and degrade network performance.

### Connectionless Structure

The IP protocol is connectionless, meaning that no persistent connection is established between devices during data transmission. Each data packet may take a different route depending on current network conditions. This allows for dynamic load balancing across the network.

### Unreliable Protocol

The IP protocol does not guarantee that data will successfully reach its destination. Packet loss, transmission errors, and routing failures may occur. For this reason, IP is considered an unreliable protocol. However, when combined with higher-level protocols such as **TCP (Transmission Control Protocol)**, reliable data delivery can be ensured.

---

In conclusion, the IP protocol is one of the foundational components of the Internet. Its ability to allow each data packet to travel independently makes the Internet flexible and scalable. Yet this flexibility introduces reliability issues, which are mitigated by upper-layer protocols that ensure data integrity and consistency.

If you want to understand the technical infrastructure and security principles of the internet in greater depth, you can follow the rest of the series. Other articles related to IP:

- [How do you find a website's IP address?](https://aysedemirel.github.io/#/blog/how-find-website-ip)
- [Internet 101 — IP and DNS](https://aysedemirel.github.io/#/blog/ip-dns)

See you in the next posts 👋

**References:**

- [What is a network switch? | Switch vs. router](https://www.cloudflare.com/learning/network-layer/what-is-a-network-switch/)
- [What is: IP Address](https://www.wpbeginner.com/glossary/ip-address/)
- [Transmission Control Protocol (TCP)](https://www.tutorialspoint.com/internet_technologies/internet_protocols.htm)
