![internet](/img/encryption.png)

İnternet üzerinde her gün büyük miktarda veri paylaşırız: kredi kartı bilgilerimiz, banka hesaplarımız, parolalarımız ve kişisel verilerimiz bu iletişimin bir parçasıdır. Peki bu bilgiler nasıl korunur?

Veri, şifrelenmeden gönderilseydi, araya giren bir saldırgan **_(man-in-the-middle)_** paketi ele geçirip içeriğini okuyabilir, ardından hedefe geri gönderebilirdi. Hedef sistem bu durumu fark etmezdi çünkü paket görünüşte ulaşmıştır. Bu tür tehditlere karşı veriler **şifrelenerek (encryption)** gönderilir ve yalnızca hedefte **çözülerek (decryption)** okunabilir hale gelir.

## Şifreleme Yöntemleri

Tarihte bilinen en eski şifreleme tekniklerinden biri **Sezar Şifrelemesi (Caesar Cipher)**’dir. Bu yöntemde alıcı ve gönderici ortak bir “anahtar sayı” belirler; mesajdaki her harf bu sayı kadar alfabede kaydırılır. Örneğin anahtar 3 ise, `A → D, B → E` şeklinde bir dönüşüm uygulanır.

![internet](/img/ceasar-cipher.png)

Bu yöntem basit olduğu kadar kırılması da kolaydır. Çünkü alfabe uzunluğu kadar olası anahtar vardır; bir saldırgan tüm kombinasyonları deneyerek kısa sürede şifreyi çözebilir. Anahtar karmaşıklığını artırmak —örneğin her harf için farklı bir kaydırma değeri belirlemek— saldırıyı zorlaştırabilir, ancak modern bilgisayarlar bu şifreleri yine de saniyeler içinde kırabilir.

Günümüzde güvenli iletişim kanalları genellikle 256-bit anahtar uzunluğu kullanan algoritmalarla şifrelenir. Bu, olası kombinasyon sayısını astronomik düzeye çıkarır. Ancak teknoloji geliştikçe işlem gücü artar ve bu nedenle “güvenli” kabul edilen şifreleme yöntemleri zamanla yenilenir.

## Simetrik ve Asimetrik Şifreleme

Eğer gönderici ve alıcı aynı anahtarı kullanarak hem şifreleme hem de çözme işlemini yapıyorsa bu yöntem **simetrik şifreleme** olarak adlandırılır.
Simetrik sistemlerde en büyük zorluk, bu gizli anahtarın taraflar arasında güvenli bir biçimde paylaşılmasıdır. Fiziksel dünyada bu mümkündür; ancak internet ortamında, araya girme riski yüksek olduğundan güvenli değildir.

Bu nedenle internet iletişiminde genellikle **asimetrik şifreleme** tercih edilir. Bu yöntemde iki farklı anahtar bulunur:

- **Genel anahtar (public key)** – herkesle paylaşılır ve veriyi şifrelemek için kullanılır.
- **Özel anahtar (private key)** – yalnızca alıcıda bulunur ve veriyi çözmek için kullanılır.

> Herkes genel anahtarla mesajı şifreleyebilir, ancak sadece özel anahtara sahip kişi mesajı okuyabilir.

Bu yapıyı bir posta kutusu benzetmesiyle açıklayabiliriz: Posta atma bölmesi herkesin erişimine açıktır (genel anahtar), ancak posta alma bölmesi sadece size özeldir (özel anahtar). Bu model, iki tarafın önceden ortak bir anahtar belirlemesine gerek kalmadan güvenli iletişimi mümkün kılar.

Günümüzdeki **TLS** ve **SSL** protokolleri, bu asimetrik şifreleme prensibine dayanarak güvenli bağlantılar oluşturur.

## Siber Güvenlik Tehditleri

İnternetteki en yaygın siber tehditler arasında **virüsler**, **DDoS saldırıları** ve **phishing (oltalama)** yer alır.

### Virüsler

Virüsler, genellikle zararsız görünen bir dosya veya yazılım aracılığıyla sisteme bulaşır.
Bir kez çalıştırıldığında, dosyaları silebilir, kişisel verileri çalabilir veya sistemi uzaktan kontrol edebilir.

Bazı virüsler, enfekte bilgisayarları bir araya getirerek bir **botnet** oluşturur. Botnet ağına dâhil olduğunuzda, farkında olmadan başka sistemlere saldırı düzenleyebilir veya büyük bir siber operasyonun parçası hâline gelebilirsiniz.

### DDoS (Distributed Denial of Service)

DDoS saldırılarında hedef, bir web sitesini veya servisi aşırı sayıda istekle meşgul ederek çökertmektir. Saldırgan, kontrol ettiği binlerce botnet cihazını aynı anda hedefe yönlendirir. Bu yoğun trafik, sistemin kaynaklarını tüketir ve hizmet verilemez hâle getirir.

### Phishing (Oltalama)

Phishing, kullanıcıyı kandırarak kimlik bilgilerini veya finansal verilerini elde etme yöntemidir. Genellikle sahte e-postalar, sahte giriş sayfaları veya inandırıcı mesajlar yoluyla gerçekleştirilir. Kullanıcı, farkında olmadan bilgilerini saldırgana iletir.

---

Bu yazıda internet üzerindeki güvenliğin temelini oluşturan şifreleme yöntemleri ve yaygın siber tehditler hakkında kısa bir giriş sundum. İnternetin teknik altyapısı ve güvenlik prensiplerini daha derinlemesine anlamak istiyorsanız, serinin devam yazılarını takip edebilirsiniz.

Sonraki yazılarda görüşmek üzere 👋

**Kaynaklar:**

- [Sezar Şifrelemesi – Vikipedi](https://tr.wikipedia.org/wiki/Sezar_%C5%9Fifrelemesi)
- [What Is Encryption and How Does It Work? – Medium](https://medium.com/searchencrypt/what-is-encryption-how-does-it-work-e8f20e340537)
