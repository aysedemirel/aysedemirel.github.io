![internet](../../img/internet.png)

Günümüzde dünya nüfusunun büyük bir kısmı internet kullanıcısıdır. Yazılım geliştirme alanına baktığımızda, geliştiricilerin önemli bir bölümünün web programlama ile ilgilendiğini görüyoruz. Frontend veya backend geliştirme yapıyor olun, internet mimarisi yaptığımız işlerin merkezinde yer alıyor.

İnternet mimarisini daha iyi anlamak için çıktığım bu yolda “İnternet 101” şeklinde bir yazı dizisi hazırlamayı planlıyorum. Serimizin başlangıç noktası ise “İnternet nasıl çalışır?” konusu.

![internet](../../img/many-nodes.png)

## İnternet Nasıl Ortaya Çıktı?

İnternetin tarihçesine ilişkin kaynaklara baktığımızda ilk olarak **ARPANET (Advanced Research Projects Agency Network)** projesiyle karşılaşıyoruz. Soğuk savaş döneminde kesintisiz bir iletişim ağı oluşturma çalışmaları sırasında ortaya çıkan bu sistem, günümüzde Netflix, YouTube ve Instagram gibi sıklıkla kullandığımız platformların var olduğu internetin öncüsüdür.

Savaş koşullarında kesintisiz ağ oluşturmak için **merkezi yönetimli (centralized)** sistemden **dağıtık (distributed)** mimariye geçiş yapılmış ve bu geçiş internetin temelini oluşturmuştur. Günümüzde de dağıtık mimari ile internet kullanılmaya devam ediliyor ve merkezi bir yönetim bulunmuyor. Bu mimari sayesinde internetin tek bir sahibi yoktur. İnternetin gücü, bu dağıtık sistemden kaynaklanır: herkesin eşit erişim hakkı vardır; ancak güçlü altyapıya sahip ağlar, iletişimde daha avantajlı konumda bulunur.

## İnternette Verilerin Formatı

İnternet üzerinde bilgi aktarımı **"bit"** formatında gerçekleşir. Aktarım için fiziksel bir ortam gerekir ve bu ortam ağlar, kablosuz bağlantılar (Wi-Fi) ve kablolar aracılığıyla sağlanır.

İnternet üzerinde aktarılan bilgiler bit'lerden oluşur ve bu yapı **"binary bilgi"** olarak adlandırılır. Bit, iki durumlu bir yapıdır: 0 kapalı/yok durumunu, 1 ise açık/var durumunu temsil eder. Bu ikili yapı nedeniyle bit sistemine **"binary code" (ikili kod)** denir. 8 bit bir araya gelerek 1 byte oluşturur, 1000 byte ise 1 kilobyte yapar.

İnternet paketlerinde belirtilen hız bilgisine dikkat ettiniz mi? Örneğin 16 Mbps gibi değerler görüyoruz. **Mbps (Mega Bit Per Second)**, internetin standart hız birimidir ve saniyede aktarılan megabit sayısını ifade eder. Bu değer ne kadar yüksek olursa, veri aktarımı o kadar hızlı gerçekleşir. Örneğin “16 Mbps” değeri, saniyede 16 megabit veri aktarılabileceği anlamına gelir. Bu hız, kullanılan fiziksel altyapıya (örneğin bakır kablo, fiber optik hat) bağlıdır. Daha yüksek hızlara ulaşmak için fiber optik gibi gelişmiş teknolojiler tercih edilmektedir.

## İnternette Veri Nasıl Aktarılır?

Veriler binary formata dönüştükten sonra fiziksel olarak elektrik, ışık ve radyo dalgaları kullanılarak iletilir. Bu sistem 0 ve 1 mantığı üzerine kuruludur.

Örneğin, bilgisayarınızdan arkadaşınıza e-posta gönderdiğinizde mesaj öncelikle binary sisteme, yani bit'lere dönüştürülür. Bu aşamadan sonra mesaj yalnızca 0 ve 1'lerden oluşur. Kaynak sizin bilgisayarınız, hedef ise arkadaşınızın e-postasını açtığı cihazdır. Bu iki cihaz arasındaki iletişim, aralarındaki kablolar sayesinde sağlanır.

İnternet bağlantısı kurulduğunda evinize kadar kablo döşenir. Modemden çıkan kablolara dikkat ederseniz, mutlaka dışarıdan gelen bir kablo göreceksiniz. Wi-Fi veya mobil bağlantı kullanıyor olsanız bile, iletişim zincirinin bir noktasında kablolu altyapı bulunur.

Bit'lere dönüşmüş mesaj, kablolar üzerinden hedefine ulaşır ve tekrar bit'ten sayısal veya alfabetik karakterlere dönüştürülerek okunabilir hale gelir. Böylece iletim tamamlanmış olur.

Saniyede bir bit aktarımı yeterli olur mu? Ne yazık ki hayır. Bir harfin 8 bit'ten oluştuğunu düşünürsek, sadece bir harf için 8 saniye iletim süresi oldukça yetersiz kalır. İletilen bit sayısını artırmak için **_bant genişliğini (bandwidth)_** artırmamız gerekir.

**Bant genişliği**, bir cihazın maksimum iletim kapasitesini ifade eder ve bit oranı (bit rate) ile ölçülür. Bu ölçüm genellikle saniyede gönderilebilen bit sayısını belirtir.

Bir diğer önemli ölçüm de **gecikme süresidir (latency)**. Bu metrik, kaynaktan hedefe iletimin ne kadar sürede gerçekleştiğini gösterir.

### Işık ile Veri İletimi

Kablolar aracılığıyla elektrik ile bilgi iletimi ucuzdur ancak sinyal kaybına neden olabilir. Yakın mesafelerde sorun yaşanmazken, uzun mesafeli iletişimlerde elektrik yeterli hızı sağlayamaz. Bu noktada ışık tabanlı iletim devreye girer.

Bit'ler, fiber optik kablolar kullanılarak ışık demetleri halinde iletilir. Bu kablolar, ışığı yansıtacak şekilde tasarlanmış cam fiber yapısındadır. Kabloda ilerleyen bit'ler ışık aracılığıyla iletilir. Işık doğrusal ilerler ve kablo içinde yansıma yaparak yoluna devam eder. Işık ile iletilen bilgi, kablo içerisinde zikzak çizerek hareket eder. Bu yapı, birden fazla bit'in aynı anda gönderilmesini sağlar.

Fiber optik kablolar ile iletim son derece hızlıdır ve elektrikli iletimin aksine sinyal kaybı yaşanmaz. Ancak maliyeti yüksektir ve kurulumu zordur. Kıtalararası haberleşme için kullanılan bu teknolojide, okyanus tabanlarına fiber optik kablolar döşenir. Bu kablolarda fiziksel hasar meydana geldiğinde iletişim kesintiye uğrar.

### Radyo Dalgaları ile Veri İletimi

Elektrik ve ışık tabanlı iletimde ana bileşen kablolardır. Bu sistemlerde sinyal yavaşlaması veya yüksek maliyet sorunları yaşanır. Peki kablolar olmadan bu iş nasıl yapılır? Cevap: **radyo dalgaları**.

**Kablosuz (wireless) iletişimde** radyo dalgaları kullanılır. Dalgalar bit'leri nasıl taşır? Burada da 0 ve 1'ler vardır, veri formatımız değişmez. Bu sefer farklı frekanslara dönüştürülerek iletim yapılır.

Radyo dalgaları bilgiyi tamamen taşınabilir hale getirir; ancak sinyal bozulma olmadan uzak mesafelere ulaşamaz. Radyo dalgaları aslında Wi-Fi'lerin temelini oluşturur. Örneğin bir kafede Wi-Fi ile internet erişimi sağlayabilirsiniz; ancak belirli bir mesafenin ötesinde bağlantı kopar.

Wi-Fi bağlantısı kurulurken öncelikle bir **internet servis sağlayıcısına (ISP - Internet Service Provider)** bağlanılır. Bu servis sağlayıcı sayesinde diğer cihazlara erişim sağlanır.

## Veri İletim Yöntemleri Özet

Özetle veri iletim yöntemlerinin avantaj ve dezavantajları aşağıdaki tabloda sunulmuştur:

![internet](../../img/data-translation-methods.png)

> İnternet, temelde bir **tasarım felsefesi**dir ve bir dizi **protokolle ifade edilen mimari bir yapı**dır. Bu tasarım, protokoller aracılığıyla hayata geçer. Protokol, tüm tarafların kullanmaya izin verdiği ve sorunsuz iletişim sağlayan bir dizi kural ve standart bütünüdür.

---

İnternet; mantık yapısı, kullanılan araçlar ve kavramları ile oldukça geniş bir alandır. Bu yazıda internetin ortaya çıkış mantığı ve somut oluşum sürecine değinmeye çalıştım.

Bu yazı, "[What is the Internet?](https://roadmap.sh/guides/what-is-internet)" ve "[Many Nodes, One Distributed System](https://medium.com/baseds/many-nodes-one-distributed-system-9921f85205c4)" kaynaklarından yararlanılarak hazırlanmıştır.

İnternet kavramlarının daha ayrıntılı açıklandığı yazılar için takipte kalın.

Sonraki yazılarda görüşmek üzere 👋
