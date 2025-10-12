![IP](/img/ip.png)

If you know the domain name of a website but want to find out its IP address, you can easily do this through the command line. To open the command line, press **“Windows + R”** or type **“Run”** into the search bar. In the window that appears, type "`cmd`" and press _Enter_ to launch the Command Prompt.

## Finding an IP Address with the `nslookup` Command

You can use the `nslookup` command to find the IP address of any website. For example, to look up Google’s IP address, type the following command in the terminal:

```bash
nslookup www.google.com
```

Press Enter, and you will see the IP address of the Google server to which your system is connected.

![Terminal](/img/how-to-find-ip/3.png)

In the output, the **“Server”** line shows the address of the DNS server your computer is currently using. You can confirm this information by typing "`ipconfig`" in the command line.

The **“Name”** and **“Addresses”** fields display the domain name (for example, _google.com_) and its corresponding IP address. In my case, the result shows **172.217.169.196**. But is this address actually valid?

## Checking the Connection with the `ping` Command

To verify that the IP address you found is active and reachable, use the command:

```bash
ping 172.217.169.196
```

This sends test packets to the target IP to see if a response is received.

![Terminal](/img/how-to-find-ip/4.png)

Sending a ping request to the IP address found earlier

If you receive a reply, it means the connection is successful. Now, open your browser and enter the IP address directly into the address bar. You can access the site using its IP instead of the domain name.

![Entering the IP address in the browser’s address bar](/img/how-to-find-ip/5.png)

![Since the address belongs to Google, the redirection completes successfully](/img/how-to-find-ip/6.png)

## Summary: Commands Used

- `ipconfig` — Displays the computer’s network configuration details.
- `nslookup <domain name>` — Queries the IP address of a given domain.
- `ping <ip address>` — Tests connectivity to a specific IP address.

In short, if you know a website’s URL, you can use the `nslookup` command to find its IP address and then verify the connection using the `ping` command.

---

This article explained how to find the IP address of a website. If you’d like to gain a deeper understanding of the Internet’s technical infrastructure, follow the next parts of this series.

See you in the next article 👋

**Further Reading:**

- [Internet 101: What Are IP and DNS?](https://aysedemirel.github.io/#/article/ip-dns)
