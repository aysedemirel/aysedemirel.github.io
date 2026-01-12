![TCP](../../img/client-server.png)

**TCP (Transmission Control Protocol)**, ağ üzerindeki cihazlar arasında güvenilir veri iletimini sağlamak amacıyla geliştirilmiş, **bağlantı odaklı (connection-oriented)** bir iletişim protokolüdür. TCP, genellikle **IP (Internet Protocol)** ile birlikte çalışır ve bu iki protokol birlikte internetin temelini oluşturan **TCP/IP protokol kümesi** olarak anılır.

TCP’nin temel amacı, iki uç nokta arasında iletilen verinin **doğru sırayla, eksiksiz ve hatasız** biçimde karşı tarafa ulaştığından emin olmaktır. Bu yönüyle TCP, bağlantının kurulması, sürdürülmesi ve sonlandırılması süreçlerine özel önem verir.

## TCP Bağlantısının Kurulması: Three-Way Handshake

TCP bağlantısı, bir **istemci (client)** ile bir **sunucu (server)** arasında kurulur. Veri iletimi başlamadan önce taraflar arasında **three-way handshake (üçlü el sıkışma)** adı verilen bir doğrulama süreci gerçekleştirilir. Bu sürecin amacı, iki uç nokta arasında veri aktarımı için güvenilir bir iletişim kanalı oluşturulduğunu doğrulamaktır.

Three-way handshake süreci şu adımlardan oluşur:

1. **SYN (Synchronize):**
   İstemci, bağlantı başlatma isteğini ifade eden ve **SYN** biti (flag) işaretlenmiş bir TCP paketi gönderir. Bu pakette rastgele oluşturulmuş bir başlangıç sıra numarası (sequence number) bulunur.
   - **Sıra Numarası:** İstemci, rastgele bir başlangıç sıra numarası belirler (Buna $x$ diyelim).
   - **Durum:** İstemci “SYN-SENT” durumuna geçer.
2. **SYN-ACK (Synchronize-Acknowledgment):**
   Sunucu, gelen isteği kabul ettiğini göstermek için kendi SYN bitini işaretler ve istemcinin gönderdiği sıra numarasını bir artırarak **ACK** bilgisiyle birlikte istemciye geri gönderir.
   - **Onay Numarası (Acknowledgment Number):** İstemciden gelen sıra numarasını bir artırır ($x + 1$). Bu, “Senin $x$ numaralı paketini aldım, bir sonrakini bekliyorum” demektir.
   - **Kendi Sıra Numarası:** Sunucu da kendisi için rastgele bir başlangıç sıra numarası belirler (Buna da $y$ diyelim).
   - **Durum:** Sunucu “SYN-RECEIVED” durumuna geçer.
3. **ACK (Acknowledgment):**
   İstemci, sunucudan gelen paketi doğrular ve sunucunun sıra numarasını bir artırarak bir **ACK** paketi gönderir.
   - **Sıra Numarası:** Artık $x + 1$ olur.
   - **Onay Numarası:** Sunucudan gelen sıra numarasını bir artırır ($y + 1$).
   - **Durum:** Her iki taraf da “ESTABLISHED” (Bağlantı Kuruldu) durumuna geçer ve veri alışverişi başlar.

Bu üç adım tamamlandığında TCP bağlantısı kurulmuş olur ve veri iletimi başlayabilir.

![3-way handshake](../../img/tcp-handshake.png)

## TCP’nin Temel Özellikleri

TCP, **iki yönlü (bidirectional)** bir protokoldür; yani hem istemci sunucuya hem de sunucu istemciye veri gönderebilir. Veri, tek parça halinde değil, **paketler (segments)** halinde iletilir.

TCP’nin en ayırt edici özelliği, veri bütünlüğünü sağlamak için **onay mekanizması (ACK — acknowledgment)** kullanmasıdır. Gönderilen her veri paketi için karşı taraftan bir onay mesajı beklenir. Bu onay alınmadığında TCP, ilgili paketin kaybolduğunu varsayar ve paketi yeniden gönderir.

Bu süreç şu şekilde işler:

- Gönderilen her paket, gönderici tarafından takip edilir.
- Karşı taraftan ACK alındığında paket başarılı kabul edilir.
- Belirli bir süre (timeout) içerisinde **ACK** alınmazsa paket kayıp olarak değerlendirilir ve yeniden gönderilir.

Timeout süresi, ağ koşullarına göre dinamik olarak ayarlanır. Bu mekanizma sayesinde TCP, veri kaybını tespit edebilir ve telafi edebilir.

## TCP’nin Avantajları ve Dezavantajları

TCP, paket kaybı, sıralama hataları ve veri bozulmalarına karşı koruma sağladığı için **yüksek güvenilirlik** sunar. Bu nedenle:

- Dosya transferleri
- Metin tabanlı mesajlaşma
- Web trafiği (HTTP/HTTPS)
  gibi veri kaybına toleransı düşük uygulamalarda tercih edilir.

Ancak bu güvenilirlik, ek kontrol mekanizmaları nedeniyle performans maliyetine yol açar. Yeniden iletimler, onay paketleri ve bağlantı yönetimi TCP’yi, bağlantısız protokollere (örneğin UDP) kıyasla daha yavaş hale getirebilir.

## TCP Uygulama ve Gözlem

TCP tabanlı istemci ve sunucu uygulamaları, birçok programlama dili kullanılarak geliştirilebilir. Java, Python ve C gibi dillerde TCP server/client örnekleri yaygın olarak bulunmaktadır.

Java için örneklerden birine şu linkten ulaşabilirsiniz: “[TCP Sunucu-İstemci Java üzerinden örnek](https://github.com/aysedemirel/Socket-Programming/tree/master/BasicClientServer)”. Linkteki projede basit bir sunucu-istemci kodu vardır. Kendi bilgisayarınıza kodu indirerek istemci ve sunucuyu ayrı ayrı çalıştırırsanız veri alışverişi gerçekleştirebilirsiniz. Kodda geliştirme yaparak TCP tabanlı kendi [mesajlaşma](https://github.com/aysedemirel/Socket-Programming/tree/master/MessageApp) uygulamanızı yapabilirsiniz :)

Ayrıca TCP trafiği, [Wireshark](https://www.wireshark.org/#download) gibi ağ analiz araçları kullanılarak gözlemlenebilir. Bu tür araçlar sayesinde three-way handshake süreci, paket iletimleri ve ACK mekanizmaları detaylı biçimde incelenebilir.

---

TCP, internet üzerindeki güvenilir veri iletiminin temelini oluşturan protokollerden biridir. Bağlantı kurulumu, hata kontrolü ve yeniden iletim mekanizmaları sayesinde veri bütünlüğünü garanti altına alır. Bu özellikleri nedeniyle TCP, modern ağ uygulamalarının büyük bir kısmında tercih edilmektedir.

---

İnternet kavramlarının daha ayrıntılı açıklandığı yazılar için takipte kalın.

Sonraki yazılarda görüşmek üzere 👋

**Kaynaklar:**

- [TCP nasıl çalışır — 1?](https://medium.com/@gokhansengun/tcp-nas%C4%B1l-%C3%A7al%C4%B1%C5%9F%C4%B1r-1-484612c5264f)
- [Transmission Control Protocol (TCP)](https://searchnetworking.techtarget.com/definition/TCP)
