![internet](/img/ip-2.png)

Bir noktadan diğerine veri iletimi sağlanırken, bu verinin yolculuğunu mümkün kılan sistemler bütününe **ağ (network)** adı verilir. Ancak burada temel bir soru ortaya çıkar: Veri, hedef noktasını nasıl bulur?

## Basit Ağ Yapısı

Eğer yalnızca iki cihazı doğrudan bir kabloyla birbirine bağlasaydık, veri doğrudan karşı cihaza ulaşırdı ve yönlendirme gereksinimi ortaya çıkmazdı. Ancak sisteme üçüncü bir cihaz eklendiğinde, verinin hangi cihaza gitmesi gerektiğini belirlemek karmaşık bir hale gelir. Bu noktada **yönlendiriciler (routers)** devreye girer.

![internet](/img/data-tr.png)

## Yönlendiriciler (Routers) ve Ağ İletişimi

Modern ağlarda binlerce, hatta milyonlarca cihaz bulunabilir. Tüm cihazları doğrudan birbirine bağlamak fiziksel olarak mümkün değildir. Yönlendiriciler, bu karmaşık yapıyı düzenleyerek veri trafiğini yönetir.

İnternete bağlandığımızda aslında doğrudan hedef siteye ulaşmayız. Önce bulunduğumuz yerel ağa bağlı bir yönlendiriciye erişiriz; ardından veri paketleri, birbirine bağlı çok sayıda yönlendirici üzerinden adım adım hedef noktaya taşınır.

![internet](/img/internet-broadcasting.png)

Yönlendiriciler bu işlemi gerçekleştirirken bir **yönlendirme tablosu (routing table)** kullanır. Bu tablo, her hedef adres için en uygun yönü (rota) belirler.

![internet](/img/routing.png)

Yukarıdaki şemalarda, yönlendiricilerin hangi yolları tercih ettiğini ve verinin hangi rotayı izlediğini görebiliriz. Kare semboller yönlendiricileri, daireler ise uç cihazları temsil eder. Okların yönü gidilecek ilerlenebilecek yönleri, üstündeki sayılar ise hedefin adresine karar vermek için yönlendirme bilgileridir. Sayıların yanında "!" işareti varsa, o sayı hariç diğer router'lar gidilebilir olarak kabul edilir.

## Örnek: Veri Yönlendirme Senaryosu

![internet](/img/routing-1.png)

Yukarıdaki basit örnekte, 1 numaralı cihazdan 5 numaralı cihaza veri gönderimi yapılmaktadır:

- 1 numaralı cihaz, hedefin kendisi olmadığını anlayarak veriyi bağlı olduğu yönlendiriciye iletir.
- İlk yönlendirici, hedef adresin 2 değil, 3-4-5-6 numaralı cihazlardan birine olduğunu belirler ve veriyi bir alt yönlendiriciye yönlendirir.
- İkinci yönlendirici, 5 numaralı hedef için uygun yolu belirler ve üçüncü yönlendiriciye gönderir: "Eğer 3'e gitmek istersen yukarı, 6'ya gitmek istersen aşağıdaki 6 numaralı cihaza, 4 veya 5 numaralı cihazlardan birine gitmek istersen aşağıdaki diğer yönlendiriciye git."
- Üçüncü yönlendirici, veriyi doğrudan 5 numaralı cihaza ulaştırır.

Gerçekte internet üzerindeki veri yönlendirme süreci bundan çok daha karmaşıktır; ancak temel mantık aynıdır. Cihazlara numaralar yerine IP adresleri atanır ve bu adresler üzerinden yönlendirme yapılır.

## IP Adresleri

İnternetteki her cihaza özgü bir kimlik numarası bulunur. Buna **IP (Internet Protocol) adresi** denir. İki temel IP sürümü vardır:

- **IPv4 Örneği:** `192.168.1.1`
- **IPv6 Örneği:** `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

Bilgisayarınızın IP adresini öğrenmek için bir komut satırı açıp (Windows+R tuşuna basıp gelen ekranda cmd yazabilirsiniz) `ipconfig` komutunu çalıştırabilirsiniz. IP adresi bulmakla ilgili sorularınız için "[Bir web sitesinin IP adresi nasıl bulunur?](https://aysedemirel.github.io/#/article/how-find-website-ip)" yazısına göz atabilirsiniz.

## IP Protokolünün Özellikleri

Ağ cihazları doğrudan birbirine bağlansaydı, iletişim çok daha hızlı olurdu; ancak bu yaklaşım hem maliyetli hem de yönetimi zor olurdu. IP protokolü, bu zorlukları aşmak için geliştirilmiştir.

Veri, IP protokolüyle paketlere (data packets) bölünerek gönderilir. Bu sayede ağ üzerindeki farklı rotalardan aynı anda taşınabilir. Ancak paketlerden bazıları kaybolabilir veya gecikebilir. Bu durum iletişimde kesintilere yol açabilir. Ayrıca çok fazla paket trafiği yönlendiriciler üzerinde yük oluşturarak ağ performansını düşürebilir.

### Connectionless (Bağlantısız) Yapı

IP protokolü connectionless (bağlantısız) bir yapıya sahiptir. Bu, veri gönderimi sırasında cihazlar arasında kalıcı bir bağlantı kurulmadığı anlamına gelir. Her bir veri paketi, ağın durumuna göre farklı yönlendiriciler üzerinden hedefe ulaşabilir. Böylece ağ trafiği daha dengeli yönetilir.

### Unreliable (Güvenilmez) Protokol

IP protokolü, verinin hedefe ulaşacağını garanti etmez. Paket kayıpları, hatalı iletimler veya yönlendirme hataları meydana gelebilir. Bu nedenle IP, unreliable (güvenilmez) bir protokol olarak tanımlanır. Ancak IP, genellikle **TCP (Transmission Control Protocol)** gibi güvenilir protokollerle birlikte kullanıldığında veri iletimi güvence altına alınır.

---

Sonuç olarak, IP protokolü internetin temel yapı taşlarından biridir. Her veri paketinin bağımsız bir yol izleyebilmesi, interneti esnek ve ölçeklenebilir kılar. Ancak bu esneklik, güvenilirlik sorunlarını da beraberinde getirir; bu yüzden IP genellikle üst katman protokollerle desteklenir.

İnternetin teknik altyapısı ve güvenlik prensiplerini daha derinlemesine anlamak istiyorsanız, serinin devam yazılarını takip edebilirsiniz. IP ile alakalı diğer yazılar:

- [Bir web sitesinin IP adresi nasıl bulunur?](https://aysedemirel.github.io/#/article/how-find-website-ip)
- [İnternet 101 — IP ve DNS](https://aysedemirel.github.io/#/article/ip-dns)

Sonraki yazılarda görüşmek üzere 👋

**Kaynaklar:**

- [What is a network switch? | Switch vs. router](https://www.cloudflare.com/learning/network-layer/what-is-a-network-switch/)
- [What is: IP Address](https://www.wpbeginner.com/glossary/ip-address/)
- [Transmission Control Protocol (TCP)](https://www.tutorialspoint.com/internet_technologies/internet_protocols.htm)
