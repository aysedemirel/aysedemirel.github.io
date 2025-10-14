![DNS](/img/dns.png)

İnternet üzerindeki cihazlar, iletişimi IP (Internet Protocol) adresleri aracılığıyla gerçekleştirir. IP adresi, her cihaz için benzersiz bir kimlik işlevi görür. Bir cihazdan diğerine veri aktarılırken, verinin izleyeceği yol bu IP adresleri temel alınarak belirlenir. Dolayısıyla ister internet üzerinden ister yerel ağ (Ethernet) aracılığıyla iletişim kurulsun, veri aktarımı için IP adresi gereklidir.

## İnternet ve Veri Aktarımı

İnternet üzerinde yaptığımız tüm işlemlerin ortak noktası, veri aktarımıdır. YouTube’da video izlemek, Instagram’da fotoğraflara göz atmak ya da bir web sitesinde araştırma yapmak — tüm bu eylemler, veri alışverişine dayanır.

Bu veriler cihazlarımızda yerel olarak bulunmadığından, erişmek istediğimizde ilgili sunuculardan talep ederiz. Örneğin Instagram’da bir fotoğrafı görüntülediğimizde, tarayıcımız veya uygulamamız o görselin kaydedildiği sunucuya bir veri isteği (request) gönderir. Sunucu bu isteğe yanıt olarak ilgili veriyi, yani fotoğrafı, cihazımıza geri gönderir (response).

Bu sürecin temelinde IP adresleri bulunur. Ancak dikkat ederseniz, internette gezinirken IP adreslerini manuel olarak kullanmayız. Örneğin “172.217.169.14” yazmak yerine www.google.com yazarız.

Peki IP adreslerini bizim yerimize kim buluyor? Cevap basit: DNS (Domain Name System).

## DNS'in Görevi

DNS, internetin “telefon rehberi” olarak tanımlanabilir. Biz internette **alan adları (domain name)** kullanarak geziniriz — örneğin www.google.com veya www.instagram.com. Ancak cihazlarımız bu alan adlarını anlamaz; iletişim kurabilmeleri için karşılık gelen IP adresine ihtiyaç duyarlar.

DNS sunucuları, alan adları ile IP adresleri arasında bir eşleştirme sağlar. Bir kullanıcı tarayıcıya bir alan adı girdiğinde, tarayıcı bu bilgiyi DNS sunucusuna iletir. DNS sunucusu, alan adına karşılık gelen IP adresini bulur ve tarayıcıya geri döner. Tarayıcı bu IP adresini kullanarak ilgili sunucuya bağlanır ve veri aktarımı başlar.

**Özetle süreç şu şekilde işler:**

> Alan adı (URL girilir) → Tarayıcı (Chrome, Firefox vb.) → DNS (alan adını IP adresine çevirir) → Tarayıcı (hedef IP’ye istek gönderir) → Sunucu (veriyi yanıtlar)

![URL](/img/url.png)

## DNS Sunucularının Hiyerarşisi

DNS sistemi tek bir sunucudan oluşmaz; aksine katmanlı ve dağıtık bir yapıya sahiptir. Bu yapı sayesinde dünya genelinde yapılan milyarlarca DNS sorgusu, saniyeler içinde yanıtlanabilir. DNS sunucuları, belirli bir hiyerarşi içinde çalışır ve sorgular bu sıralamaya göre değerlendirilir.

## DNS Sorgulama Süreci

### 1. Tarayıcı Önbelleği (Browser Cache)

Tarayıcı, yeni bir DNS sorgusu göndermeden önce kendi önbelleğini kontrol eder. Eğer daha önce aynı alan adı için bir çözümleme yaptıysa ve IP adresi hâlâ geçerliyse, DNS sorgusuna gerek kalmadan doğrudan bu adresi kullanır.

### 2. Yerel Ağ Önbelleği (Local Network Cache)

Tarayıcı önbelleğinde kayıt bulunmuyorsa, sistem yerel ağ (örneğin modem veya yönlendirici) üzerinde saklanan DNS önbelleğini kontrol eder. Bazı modemler ve yönlendiriciler, sık erişilen alan adlarını kendi hafızalarında tutarak sorgu süresini kısaltır.

### 3. Root DNS Sunucuları

Eğer IP adresi hala bulunamadıysa, istek **Root DNS** Sunucularına yönlendirilir. Bu sunucular, hangi **TLD (Top Level Domain)**’nin sorumlu olduğunu belirler. Örneğin:

- `.com` alan adları için ayrı TLD sunucuları,
- `.org`, `.io`, `.me` gibi uzantılar içinse kendi TLD sunucuları vardır.

Root DNS, ilgili TLD sunucusunun adresini belirler ve tarayıcıyı o sunucuya yönlendirir.

### 4. Nihai IP Adresi

TLD sunucusu, istenen alan adına ait yetkili (authoritative) DNS sunucusunu işaret eder. Bu son adımda, ilgili IP adresi bulunur ve tarayıcıya geri döner. Tarayıcı, bu IP adresi üzerinden hedef sunucuya bağlanarak veri iletimini başlatır.

> Tarayıcı → Root DNS → TLD Sunucuları → Yetkili DNS → IP Adresi

![DNS Sunucuları](/img/dns-servers.png)

---

DNS, internetin görünmeyen ama en hayati bileşenlerinden biridir. Kullanıcıların karmaşık IP adreslerini hatırlamadan internette gezinebilmesini sağlar. Bu sistem sayesinde “www.google.com” yazmak, aslında milyonlarca dolarlık sunucu ağı arasında doğru IP adresine yönlendirilmiş bir isteği başlatır.

İnternetin teknik altyapısı ve güvenlik prensiplerini daha derinlemesine anlamak istiyorsanız, serinin devam yazılarını takip edebilirsiniz. Daha kapsamlı bilgi için aşağıdaki yazılara göz atabilirsiniz:

- [İnternet nedir, nasıl çalışır? Sahibi kimdir?](https://aysedemirel.github.io/#/article/what-is-the-internet)
- [İnternet 101 — IP ve DNS](https://aysedemirel.github.io/#/article/ip-dns)
- [İnternet 101- Veri nasıl iletilir?](https://aysedemirel.github.io/#/article/how-to-transfer-data)
- [İnternet 101 — Şifreleme ve Güvenlik](https://aysedemirel.github.io/#/article/encryption-security)
- [Bir web sitesinin IP adresi nasıl bulunur?](https://aysedemirel.github.io/#/article/how-find-website-ip)

Ayrıca DNS sürecinin görsel ve mizahi biçimde anlatıldığı şu kaynak oldukça öğreticidir:

[How DNS works](https://howdns.works/)

Sonraki yazılarda görüşmek üzere 👋

**Kaynaklar:**

- [What is a TLD?](https://www.quora.com/What-is-a-TLD)
- [What are root name servers?](https://www.netnod.se/i-root/what-are-root-name-servers)
- [DNS in One Picture](https://roadmap.sh/guides/dns-in-one-picture)
