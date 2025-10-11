![internet](/img/interface.png)

Java'da interface yapısı, sınıflar gibi metot ve değişken tanımlamalarına izin verir. Ancak burada metotlar yalnızca bildirim niteliğindedir; yani ne yapılacağı belirtilir, nasıl yapılacağı değil. Bu sayede bir sınıfın hangi davranışları sergilemesi gerektiği tanımlanır, fakat bu davranışların uygulanma şekli sınıfa bırakılır.

> Interface’lerdeki metotlar "ne yapılacağını" bildirir, "nasıl yapılacağını" değil.

Bir sınıf, uyguladığı interface’deki tüm metotları tanımlamıyorsa, abstract olarak işaretlenmelidir.

## Interface Ne Zaman Kullanılır?

Bir özelliğe ulaşmak için belirlediğiniz bir yolunuz yoksa, Singleton oluşturmak yerine prototype scope nesneler oluşturulabilir.

Interface kullanımı, yazılımın bağımlılıklarını azaltmak ve esnek bir mimari oluşturmak açısından önemlidir.

Eğer bir sınıf belirli bir işi doğrudan üstleniyorsa ve **temel iş mantığını** barındırıyorsa, bu durumda interface tanımlamak gereksizdir — yalnızca sınıfın kendisi yeterlidir.

Ancak sınıf, doğrudan iş mantığını değil, **o işin nasıl yapılacağını tanımlayan bir detay içeriyorsa**, bu durumda interface kullanmak faydalıdır. Bu yaklaşım, kodun daha açıklayıcı ve anlaşılır olmasını sağlar.

Interface yapıları özellikle **Dependency Rule ve Dependency Inversion Principle (SOLID’in D ilkesi)** kapsamında önemlidir. Üst seviye sınıfların alt seviye sınıflara bağımlı olmasını engeller. Alt seviye sınıflardaki değişikliklerin, üst seviye sınıfları etkilemeden sistemin çalışmasını sürdürmesine olanak tanır. Robert C. Martin, Clean Architecture kitabında da bu prensibi vurgular.

## Interface Tanımlama

```
interface <interface_name> {
    // Ortak metot bildirimi
    // Ortak değişken tanımı
    // interface içinde tanımlanan değerlerin public ve abstract olduğunu kabul edersiniz
}
```

Interface’leri uygulamak için sınıf içerisinde `implements` anahtar kelimesi kullanılır:

```
public class OrnekSinif implements IOrnekArayuz {
     @Override
     public void ornekMetod()
     {
         // metod icerigi
     }
}
```

> Aynı davranışı sergileyen birden fazla sınıf varsa, interface kullanımı bu davranışları standartlaştırır ve kodun anlaşılabilirliğini artırır.

Interface implement etmek için sınıf, abstract sınıf, nested sınıf, enum veya dinamik proxy olması gerekir.

## Interface vs Abstract Sınıf

Hem interface’ler hem de abstract sınıflar soyutlama (abstraction) sağlar; ancak bazı önemli farklara sahiptirler:

- Abstract sınıf içinde değişken tanımlamalarınız final olmayan değişkenler olabilirken, interface buna izin vermez. (Ara bir not olarak belirtmekte fayda var: interface içinde değişken tanımlanması pek de tavsiye edilen bir durum değildir.)
- Abstract sınıf içinde istediğiniz metodlarda sadece tanımlama yapıp, istediğiniz metodlarda metod içini doldurabilirsiniz. Interface ise sadece tanımlamaya izin verir (JDK 8 ile birlikte default tanımlamalar yapılmasına izin veriliyor).
- Java'da birden fazla sınıf extends edilemediği için interface ile birden çok özelliği sınıfa dahil edebiliriz. Miras olarak sadece bir sınıftan alabiliyorken, interface ile birden çok gruba dahil olabiliriz.

Bu sebeplerle, interface ile genel kuralları koyarken net çizgiler sunmasından dolayı oldukça işlevseldir. Interface kullanımıyla sınıfımızı daha güçlü hale getirebiliriz. Hem kalıtım hem de interface birlikte kullanılabilir.

## Interface'lerde Kalıtım

Interface’ler de tıpkı sınıflar gibi birbirlerinden kalıtım alabilirler (inheritance). Hatta sınıflar gibi bir tane miras almak zorunda da değildir. Birden çok interface'i extend edebilir. Kendi metodlarının yanında extend ettiği interface'lerin metodlarına da sahip olur.

```
public interface ISuperOrnek extends ISubOrnek1,ISubOrnek2 {
   public void ornekMethod();
}
```

Ancak burada önemli bir fark vardır: interface kalıtımı yalnızca davranış sözleşmesinin (contract) aktarımını sağlar, uygulama (implementation) aktarımı yapmaz. Bu sayede bir interface, başka bir interface’in yeteneklerini genişleterek daha kapsamlı bir yapı oluşturabilir. Bu durum, özellikle modüler mimarilerde ortak davranışları düzenli biçimde yönetmeyi kolaylaştırır.

```
interface Hayvan {
    void sesCikar();
}

interface Kus extends Hayvan {
    void uc();
}

class Serce implements Kus {
    @Override
    public void sesCikar() {
        System.out.println("Cik cik!");
    }

    @Override
    public void uc() {
        System.out.println("Serçe uçuyor.");
    }
}
```

Bu örnekte `Kus` interface’i, `Hayvan` interface’ini genişletmektedir. `Serce` sınıfı ise her iki interface’in de davranışlarını somutlaştırır. Yani interface’lerin kalıtımı, **hiyerarşik davranış standardizasyonu** sağlar.

## Birden Fazla Interface Kullanımı

Bir sınıf birden fazla interface’i eşzamanlı olarak uygulayabilir (multiple implementation). Bu, Java’da çoklu miras (multiple inheritance) ihtiyacını güvenli bir şekilde karşılamak için kullanılan bir mekanizmadır.

Çünkü Java, sınıflar arasında çoklu kalıtıma izin vermez; ancak interface’lerde bu durumun getirdiği risk (örneğin “diamond problem”) bulunmadığı için güvenlidir.

```
interface A {
    void yaz();
}

interface B {
    void oku();
}

class C implements A, B {
    @Override
    public void yaz() {
        System.out.println("Yazılıyor...");
    }

    @Override
    public void oku() {
        System.out.println("Okunuyor...");
    }
}
```

Bu yapı, bir sınıfın farklı roller üstlenebilmesini sağlar. Örneğin bir C hem A hem B interface’lerini uygulayarak veritabanı işlemlerinde hem okuma hem yazma davranışlarını belirleyebilir.

## Loose Coupling Sağlama

Interface'ler, **Loose coupling** uygulamamızı sağlar. Örneğin bir resim formatı için boyama özelliği geliştiriyoruz. Resim formatımız ilk başta PNG idi ancak daha sonradan farklı formatların gelme olasılığı var. Bu noktada eğer tüm türler için ayrı işlemler yaparsak işleri karmaşıklaştırırız. Ancak aşağıdaki gibi bir interface yazarsak ve kullanırken de interface üzerinden değişken tanımlarsak, sonradan gelebilecek işlere önceden yatırım yapmış ve işleri hızlandırmış oluruz.

Boyadığımız sabit rengi ve boyama metodumuzu interface içinde tanımlayalım:

```
interface IResimFormat
{
 static final Color = Color.RED;
 void boya();
}
```

PNG formatında işlem yaparken interface'i implements ile ekleyelim:

```
public class PngBoyama implements IResimFormat
{
    @Override
    void boya()
    {
      // png özelinde boyama işlemleri
    }
}
```

Doğrudan interface'in uygulandığı sınıfı kullanabileceğimiz gibi, interface ile tanımlama yaparak uygulandığı tüm sınıfları olaya dahil edebiliriz. Aşağıdaki örnekte IResimFormat interface'ini kim implements ediyorsa ResimFormatci sınıfına değişken olarak gelebilir.

```
public class ResimFormatcisi{
  private IResimFormat formatci;
  public ResimFormatci(IResimFormat formatci)
  {
    this.formatci=formatci;
  }
  public void islemler(){
    formatci.boya();
  }
}
```

## Default ve Static Metotlar (Java 8 ve Sonrası)

Java 8 itibarıyla interface’lerde default ve static metot tanımlamaları da mümkündür. Bu özellik, interface’lerin sadece soyut sözleşmeler değil, aynı zamanda davranış sağlayıcılar (behavior providers) olarak da işlev görmesini sağlar.

### Default Metotlar

`default` metotlar, interface içerisinde varsayılan bir method içerir. Bu özellik, mevcut interface’lere yeni davranışlar eklerken geriye dönük uyumluluğu (backward compatibility) korumak için getirilmiştir.

```
interface Loggable {
    default void log(String mesaj) {
        System.out.println("Log: " + mesaj);
    }
}
```

### Static Metotlar

`static` metotlar ise interface seviyesinde çağrılır ve sınıf örneği oluşturmadan kullanılabilir. Bu, yardımcı (utility) işlemler için kullanışlıdır.

```
interface Matematik {
    static int topla(int a, int b) {
        return a + b;
    }
}
```

Yukarıdaki metodu aşağıdaki şekilde çağırabiliriz:

```
Matematik.topla(2,3);
```

## Interface ve Polimorfizm

Interface’ler, **polimorfizmin (çok biçimlilik)** temel araçlarından biridir. Bir nesne, uyguladığı interface’in türüyle referans alındığında, o interface’in davranışlarını farklı şekillerde gerçekleştirebilir.

Bu yaklaşım, **bağımlılık tersine çevirme (Dependency Inversion)** prensibinin de temelini oluşturur:
Üst seviye modüller, alt seviye modüllere değil, **soyutlamalara (interface’lere)** bağımlı olmalıdır.

```
interface Bildirim {
    void gonder(String mesaj);
}

class EmailBildirim implements Bildirim {
    @Override
    public void gonder(String mesaj) {
        System.out.println("E-posta gönderildi: " + mesaj);
    }
}

class SmsBildirim implements Bildirim {
    @Override
    public void gonder(String mesaj) {
        System.out.println("SMS gönderildi: " + mesaj);
    }
}
```

Bu yapı sayesinde BildirimServisi, hangi tür bildirimin kullanılacağını bilmeden çalışabilir:

```
class BildirimServisi {
    private final Bildirim bildirim;

    public BildirimServisi(Bildirim bildirim) {
        this.bildirim = bildirim;
    }

    public void bildirimGonder(String mesaj) {
        bildirim.gonder(mesaj);
    }
}
```

Bu yaklaşım, uygulamanın daha **esnek, test edilebilir ve genişletilebilir** olmasını sağlar. Yeni bir bildirim türü eklendiğinde, mevcut sistemdeki diğer bileşenleri değiştirmeye gerek kalmaz. Sadece yeni bir sınıfın ilgili interface’i uygulaması yeterlidir.

## Marker Interface (Boş Interface)

Bazen boş interface içeriklerinin implement edildiğini görürsünüz. "Peki neden implement edildi ki, ne işe yaradı?" diye sormuştum ilk gördüğümde. Boş interface belirterek is-a ilişkisi oluşturuyoruz. Interface içinden metod almıyoruz belki ama sınıfı bir gruba dahil etmiş oluyoruz. Onun işlevinin ne olduğuna dair destekleyici bir yapı kullanmış oluyoruz. Tabii her şeyden önce isimlendirmeler anlamlı olmalı. Değilse ne yaparsanız yapın kodunuz çöplük görünümünde olacaktır.

## İç İçe Interface Yapıları

Interface içinde interface veya sınıf içinde interface de oluşturabilirsiniz. Sınıf içinde interface oluşturduğunuzda `sınıf_adı.interface_adı` ile ulaşabilirsiniz. Interface içi interface oluşturduğunuzda da aynı mantıkta parent interface dediğimiz en dıştaki interface adını, sonrada içteki interface (child) adlarını kullanarak ulaşabilirsiniz: `parent_interface_adı.child_interface_adı`.

Kısa bir örnekle kullanımını görmek isterseniz aşağıdaki projeye göz atabilirsiniz:

[Github projesi](https://github.com/aysedemirel/oop-with-java)

## Generic Interface

Generic interface dediğimiz, bir tipe özgü interface'ler de oluşturabiliriz. Belirttiğimiz tipe özgü çalışırlar. Bunun için bir örnek oluşturmaya çalışalım. Bir fabrika için ürün listeleri çıkarıyoruz diyelim. İlk görevimiz araba ürün hattında listeleme yapmak, daha sonra da fabrikadaki diğer ürünler üzerine çalışma yapacağız. Başka ürünler de geleceği için aşağıdaki gibi bir interface oluşturduk:

```
public interface IFabrika{
    public Araba uret();
}
```

Implement aşaması:

```
public class ArabaUretim implements IFabrika{
  public Araba uret()
  {
    return new Araba();
  }
}
```

Kullanırken:

```
IFabrika arabaUretim = new ArabaUretim();
Araba araba = (Araba) arabaUretim.uret();
```

İşlem bittiğinde ne görüyoruz? Evet, IFabrika ile bir nebze olsun soyutlama sağladık ama hala Araba nesnesi ile net bir bağlantımız var. Generic tipler vererek bu durumdan kurtulabiliriz.

Interface'de küçük bir değişiklik yapalım:

```
public interface IFabrika <T>{
    public T uret();
}
```

Interface üzerindeki araba bağımlılığını kopardık. Peki implement ederken ne değişecek?

```
public class ArabaUretim implements IFabrika<Araba>{
  public Araba uret()
  {
    return new Araba();
  }
}
public class KamyonUretim implements IFabrika<Kamyon>{
  public Kamyon uret()
  {
    return new Kamyon();
  }
}
```

İki farklı tür üretim yaptık ve sonuçlarını aldık. İkisinde de interface'den gelen uret() metodunu kullandığımıza dikkat edin. İkisinde de farklı tiplerde dönüş sağlandı. Böylelikle tek bir üretim hattı için değil, birden çok üretim hattı için interface elde etmiş olduk. Sınıfı da aşağıdaki gibi çağırıyoruz:

```
IFabrika<Araba> arabaUretim = new ArabaUretim();
Araba araba = arabaUretim.uret();
IFabrika<Kamyon> kamyonUretim = new KamyonUretim();
Kamyon kamyon= kamyonUretim.uret();
```

Yukarıdaki örneğin tam haline [Github projemden](https://github.com/aysedemirel/oop-with-java) erişebilirsiniz.

## Özet

- Hiçbir yerde implements edilmeden interface nesne gibi kullanılamaz.
- Bir sınıfta birden çok interface implement edilebilir.
- Bir interface başka bir interface'i miras alabilir.
- Bir interface implement edildiğinde, sınıf içinde tüm metodlar tanımlanmalıdır.
- Interface'deki tüm metodlar public ve abstract'tır. Değişken tanımlamaları public, static ve final'dır. Bu anahtar kelimeleri yazmasanız bile öyledir.
- Interface, çoklu miras (multiple inheritance) sağlamak için kullanılır.
- Interface, loose coupling sağlamak için kullanılır.

## Sonuç

Interface’ler, Java’nın en güçlü soyutlama araçlarından biridir. Kodun bağımlılık seviyesini azaltır, esneklik kazandırır ve katmanlar arası sınırları netleştirir.
Bu sayede yazılım, değişen gereksinimlere daha kolay adapte olabilir ve mimari bütünlüğünü korur.

Kısacası, interface’ler yalnızca bir “ara yüz” değil, sistemin anlaşılır, sürdürülebilir ve ölçeklenebilir hale gelmesini sağlayan temel bir mimari ilkedir.

Daha fazla Java ve OOP yazısı için takipte kalın. Sonraki yazılarda görüşmek üzere 👋

**Ek Okuma Önerileri:**

- Clean Architecture – Robert C. Martin
- Effective Java – Joshua Bloch
- Head First Design Patterns – Freeman & Freeman

**Kaynaklar**

- [Java Interface - GeeksforGeeks](https://www.geeksforgeeks.org/java/interfaces-in-java/)
- [Java Interfaces](http://tutorials.jenkov.com/java/interfaces.html)
