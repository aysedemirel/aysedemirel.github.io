![Java](../../img/java.png)

Java Development Kit (JDK), Java programlarının geliştirilmesi için gerekli olan araçları içeren bir yazılım paketidir. Bu paket, Java Runtime Environment (JRE) ve Java Virtual Machine (JVM) bileşenlerini kapsar.

JRE; API sınıf kütüphanelerini, Java derleyicisini, Web Start bileşenini ve Java uygulamalarının çalıştırılması için gerekli yardımcı dosyaları içerir. Mevcut bir Java uygulaması çalıştırılacaksa JRE kurulumu yeterlidir. Ancak bir Java uygulamasının geliştirilmesi için yalnızca JRE yeterli değildir; bu nedenle JDK’nın kurulması zorunludur.

[JDK 15 dokümantasyonuna ulaşmak için](https://docs.oracle.com/en/java/javase/15/)

[JDK 25 dokümantasyonuna ulaşmak için](https://docs.oracle.com/en/java/javase/25/)

## Kurulum Adımları

1. İşletim sisteminize uygun yürütülebilir dosyayı (`.exe`, `.dmg` veya `.deb`) indirin.
2. Kurulum sihirbazında yer alan adımları takip edin. Aşağıda Windows işletim sistemi için örnek kurulum adımları verilmiştir.
3. Kurulumun ardından gerekli ortam değişkenlerini tanımlayın.

> Not: Eğer sisteminizde önceden başka bir JDK sürümü bulunuyorsa, `C:\Program Files\Java` dizininde mevcut sürümleri görebilirsiniz. Farklı sürümler aynı anda sistemde bulunabilir ve sürümler yönetilerek kullanılabilir.

## İndirme Bağlantıları

Aşağıdaki bağlantılardan işletim sisteminize uygun kurulum dosyasını indirebilirsiniz:

- [Windows (x64 Installer)](https://www.oracle.com/java/technologies/downloads/?er=221886#jdk25-windows)
- [Linux (x64 Debian Package)](https://www.oracle.com/java/technologies/downloads/?er=221886#jdk25-linux)
- [macOS (x64 DMG Installer)](https://www.oracle.com/java/technologies/downloads/?er=221886#jdk25-mac)

Diğer sürümler için şu adresi ziyaret edebilirsiniz:

- [Oracle Java SE Downloads](https://www.oracle.com/java/technologies/javase-downloads.html)

## Windows İşletim Sisteminde Kurulum Adımları

Yürütülebilir dosya indirildikten sonra kurulum aşamasına geçilir.

Aşağıda, JDK 15 kurulumu için Windows işletim sistemine ait adımlar açıklanmıştır. Diğer işletim sistemleri ve sürümler için süreç benzerlik göstermektedir.

1. **Kurulum Dosyasını Çalıştırma**

   İndirilen `.exe` dosyasını çalıştırın. Açılan kurulum ekranında **"Next >"** butonuna tıklayın.

   ![Java](../../img/jdk-installation/1.png)

2. **Kurulum Dizini Belirleme**

   Varsayılan olarak kurulum dizini `C:\Program Files\Java` olarak belirlenmiştir. Bu dizin genellikle değiştirilmemelidir.**“Next”** butonuna tıklayarak devam edin.

   ![Java](../../img/jdk-installation/2.png)

   > **Önemli:** Kurulum dizininin değiştirilmesi, bazı derleme araçlarının JDK’yı bulamamasına neden olabilir.

3. **Kurulumu Tamamlama**

   Dosyaların yüklenmesi tamamlandıktan sonra **“Close”** butonuna tıklayarak kurulumu sonlandırın.

   ![Java](../../img/jdk-installation/3.png)

4. **Kurulum Kontrolü**

   Kurulumun başarıyla tamamlandığını doğrulamak için `C:\Program Files\Java `dizinini açın. Kurduğunuz sürümün (örneğin `jdk-15.0.1`) listede göründüğünden emin olun.

   ![Java](../../img/jdk-installation/4.png)

> **Not:** Aynı dizinde birden fazla JDK sürümü bulunması olağandır; hangi sürümün kullanılacağı ortam değişkenleri aracılığıyla belirlenir.

## Ortam Değişkenlerinin Yapılandırılması

Kurulum sonrası, JDK dizinlerinin sistem tarafından tanınması için ortam değişkenlerinin tanımlanması gerekir. Bu aşamada `JAVA_HOME` ve `PATH` değişkenlerine ekleme yapılacaktır.

### JAVA_HOME Değişkeninin Eklenmesi

1. JDK’nın kurulu olduğu dizine gidin (varsayılan: `C:\Program Files\Java`).
2. Ortam değişkenleri penceresini açmak için masaüstünde **“Bu Bilgisayar”** simgesine sağ tıklayıp **“Özellikler”** seçeneğini seçin.

   ![Java](../../img/jdk-installation/5.png)

   - İkon masaüstünde bulunmuyorsa herhangi bir dosya gezginini açarak aynı işlemi yapabilirsiniz.

   ![Java](../../img/jdk-installation/6.png)

3. Açılan pencerede (Denetim Masası > Sistem ve Güvenlik > Sistem) "Gelişmiş sistem ayarları" seçeneğine tıklayın.

   ![Java](../../img/jdk-installation/7.png)

4. "Sistem Özellikleri" penceresinin alt kısmında bulunan "Ortam Değişkenleri..." butonuna tıklayın.

   ![Java](../../img/jdk-installation/8.png)

5. "Ortam Değişkenleri" penceresinde iki bölüm bulunur: Kullanıcı değişkenleri ve Sistem değişkenleri. `JAVA_HOME` değişkeni sistem değişkeni olarak eklenecektir. Bunun için "Sistem değişkenleri" bölümünde "Yeni" butonuna tıklayın.

   ![Java](../../img/jdk-installation/9.png)

   - Eğer `JAVA_HOME` değişkeni daha önce tanımlanmışsa, değişkene tıklayıp "Düzenle" butonunu kullanın.

6. "Yeni Sistem Değişkeni" penceresinde:

   - **Değişken adı:** `JAVA_HOME`
   - **Değişken değeri:** Kurulum dizini (Örnek: `C:\Program Files\Java\jdk-15.0.1`)

Bilgileri girdikten sonra "Tamam" butonuna tıklayın. `JAVA_HOME` değişkeninin sistem değişkenleri listesine eklendiğini göreceksiniz.

![Java](../../img/jdk-installation/10.png)

### PATH Değişkenine Ekleme Yapılması

1. JDK kurulum dizini içindeki `bin` klasörüne gidin. Varsayılan kurulum yapıldıysa dizin `C:\Program Files\Java\jdk-15.0.1\bin` olmalıdır.
2. "Ortam Değişkenleri" penceresinde "Kullanıcı değişkenleri" bölümünde `Path` değişkenini bulun ve "Düzenle" butonuna tıklayın.

   ![Java](../../img/jdk-installation/11.png)

   - Eğer `Path` değişkeni mevcut değilse "Yeni" butonuna tıklayarak oluşturun.

3. "Ortam Değişkenini Düzenle" penceresinde "Yeni" butonuna tıklayın ve `C:\Program Files\Java\jdk-15.0.1\bin` dizinini ekleyin.

   - Alternatif olarak `%JAVA_HOME%\bin` şeklinde de giriş yapılabilir. Bu yöntem, `JAVA_HOME` sistem değişkeni tanımlı olduğundan önerilir.

4. Ekleme işleminden sonra "Tamam" butonlarına tıklayarak tüm pencereleri kapatın.

## Kurulum Doğrulaması

Ortam değişkenleri yapılandırıldıktan sonra kurulumun doğrulanması gerekmektedir.

1. Windows + R tuşlarına basarak "Çalıştır" penceresini açın.
2. `cmd` yazarak komut satırını başlatın.
3. Sistemin Java'yı tanıyıp tanımadığını test etmek için şu komutu girin:

```
 javac -version
```

![Java](../../img/jdk-installation/12.png)

4. Komut sonucunda sürüm bilgisi görüntüleniyorsa kurulum başarıyla tamamlanmıştır.

   - Sürüm bilgisi görüntülenmiyorsa yukarıdaki adımları kontrol ediniz.

5. JDK'nın kurulu olduğu dizini kontrol etmek için aşağıdaki komutu kullanabilirsiniz. Bu komut, kurulu dizinlerin listesini gösterecektir:

```
   where javac
```

---

Daha fazla Java yazısı için takipte kalın.

👏 ile bu seriyi destekleyebilirsiniz. Eksik/yanlış gördüğünüz kısımları yorumlara yazarak katkı sağlayabilirsiniz.

Sonraki yazılarda görüşmek üzere 👋

### Kaynaklar

- [java.com](https://www.java.com)
- [Java geliştirme paketi, JDK kurulumu ve ortam değişkenleri ayarlama (Medium)](https://medium.com/@mesutbeysulen/java-geli%CC%87%C5%9Fti%CC%87rme-paketi%CC%87-jdk-kurulumu-ve-ortam-de%C4%9Fi%CC%87%C5%9Fkenleri%CC%87ni%CC%87-ayarlama-7f3d8380c36e)
