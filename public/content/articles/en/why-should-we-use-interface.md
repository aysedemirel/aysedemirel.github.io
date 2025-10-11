![internet](/img/interface.png)

In Java, the interface construct allows the declaration of methods and variables, much like classes do. However, methods within an interface are purely declarative; they specify what should be done, not how it should be accomplished. This design defines the behaviors a class must exhibit, while leaving the implementation details to the class itself.

> Methods in an interface specify what to do, not how to do it.

If a class does not provide implementations for all methods defined in an interface, it must be marked as abstract.

## When to Use Interfaces

If there is no predetermined way to access a certain functionality, prototype-scoped objects can be created instead of using a singleton.

Using interfaces is essential for reducing dependencies and establishing a flexible software architecture.

If a class directly handles a specific task and contains the **core business logic**, defining an interface is unnecessary — the class alone suffices.

However, if the class represents how a task is performed rather than the task itself, defining an interface is beneficial. This approach makes the codebase more descriptive and comprehensible.

Interfaces are particularly important within the context of the **Dependency Rule and the Dependency Inversion Principle (the “D” principle in SOLID)**. They prevent high-level modules from depending on low-level modules. As a result, changes in lower-level classes do not affect higher-level components, allowing the system to remain stable. This principle is also emphasized by _Robert C. Martin in Clean Architecture_.

## Defining an Interface

```
interface <interface_name> {
    // Common method declarations
    // Common variable declarations
    // Values defined in an interface are implicitly public and abstract
}
```

To implement an interface, the `implements` keyword is used within a class:

```
public class ExampleClass implements IExampleInterface {
     @Override
     public void exampleMethod() {
         // method body
     }
}
```

> When multiple classes exhibit the same behavior, using an interface standardizes those behaviors and improves code readability.

A class, abstract class, nested class, enum, or dynamic proxy can implement an interface.

## Interface vs Abstract Class

Both interfaces and abstract classes provide **abstraction**, but they differ in several key aspects:

- In an abstract class, variables can be non-final, whereas interfaces do not allow this. (As a side note, defining variables within an interface is generally discouraged.)
- In an abstract class, you can choose to implement some methods while leaving others abstract. In contrast, interfaces allow only declarations (although since JDK 8, default methods can include implementations).
- Because Java does not support multiple class inheritance, interfaces enable a class to include multiple functionalities. While inheritance allows extending only one superclass, a class can implement multiple interfaces.

For these reasons, interfaces are highly functional when establishing clear, general rules. They strengthen classes and can be used alongside inheritance.

## Interface Inheritance

Interfaces, like classes, can inherit from each other. In fact, they are not limited to inheriting from just one interface. They can extend multiple interfaces. In addition to their own methods, they also possess the methods of the interfaces they extend.

```
public interface ISuperOrnek extends ISubOrnek1,ISubOrnek2 {
   public void ornekMethod();
}
```

This distinction is crucial: interface inheritance transfers the behavioral contract only — not the implementation. This allows an interface to extend the capabilities of another interface, creating a more comprehensive structure. This makes it easier to manage common behaviors in a structured way, especially in modular architectures.

```
interface Animal {
    void makeSound();
}

interface Bird extends Animal {
    void fly();
}

class Sparrow implements Bird {
    @Override
    public void makeSound() {
        System.out.println("Chirp chirp!");
    }

    @Override
    public void fly() {
        System.out.println("The sparrow is flying.");
    }
}
```

In this example, the `Bird` interface extends `Animal`, and the `Sparrow` class concretizes both behaviors. Interface inheritance thus provides **hierarchical behavioral standardization**.

## Implementing Multiple Interfaces

A class can implement multiple interfaces simultaneously, which provides a safe mechanism for achieving multiple inheritance in Java.

Because Java disallows multiple class inheritance, interfaces serve as a reliable alternative without introducing issues such as the “diamond problem.”

```
interface A {
    void write();
}

interface B {
    void read();
}

class C implements A, B {
    @Override
    public void write() {
        System.out.println("Writing...");
    }

    @Override
    public void read() {
        System.out.println("Reading...");
    }
}
```

This design allows a single class to assume multiple roles. For example, class C could handle both reading and writing operations in a database by implementing both A and B.

## Achieving Loose Coupling

Interfaces enable **loose coupling**. Suppose we are developing a painting feature for image formats. Initially, the format might be PNG, but other formats could be added later. Instead of hardcoding different types, we can define an interface to handle this extensibly.

Let's define the fixed color we painted and our painting method within the interface:

```
interface IImageFormat {
    static final Color COLOR = Color.RED;
    void paint();
}
```

When working with the PNG format, let's add the interface using implements:

```
public class PngPainter implements IImageFormat {
    @Override
    public void paint() {
        // PNG-specific painting operations
    }
}
```

We can use the class that directly implements the interface, or we can include all classes that implement the interface by defining it. In the following example, whatever implements the IResimFormat interface can be passed as a variable to the ResimFormatci class.

```
public class ImageProcessor {
  private IImageFormat painter;
  public ImageProcessor(IImageFormat painter) {
    this.painter = painter;
  }
  public void process() {
    painter.paint();
  }
}
```

## Default and Static Methods (Java 8+)

Since Java 8, interfaces can also include default and static methods. This enables interfaces to serve not only as abstract contracts but also as behavioral providers.

### Default Methods

`default` methods contain a predefined implementation. They were introduced to allow adding new behaviors to existing interfaces while maintaining backward compatibility.

```
interface Loggable {
    default void log(String message) {
        System.out.println("Log: " + message);
    }
}
```

### Static Methods

`static` methods belong to the interface itself and can be invoked without an instance. They are typically used for utility functions.

```
interface MathUtil {
    static int add(int a, int b) {
        return a + b;
    }
}
```

Usage of the above method:

```
MathUtil.add(2, 3);
```

## Interfaces and Polymorphism

Interfaces are a cornerstone of **polymorphism** — the concept that an object can take many forms depending on the interface it implements.

This principle supports **Dependency Inversion**, which states that high-level modules should depend on abstractions, not concrete implementations.

```
interface Notification {
    void send(String message);
}

class EmailNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Email sent: " + message);
    }
}

class SmsNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("SMS sent: " + message);
    }
}
```

Thanks to this structure, NotificationService can operate without knowing what type of notification will be used:

```
class NotificationService {
    private final Notification notification;

    public NotificationService(Notification notification) {
        this.notification = notification;
    }

    public void notify(String message) {
        notification.send(message);
    }
}
```

This design improves **flexibility, testability, and extensibility**. Adding a new notification type requires only creating a new class that implements Notification — without altering existing code.

## Marker Interfaces

A marker interface is an empty interface used to indicate a special property or behavior of a class. Though it defines no methods, it classifies a class into a specific category, enabling type-based operations or metadata tagging.

Meaningful naming is crucial here; otherwise, the codebase becomes confusing and unreadable.

## Nested Interfaces

You can also create an interface within an interface or a class. When you create an interface within a class, you can access it using `class_name.interface_name`. When you create an interface within an interface, you can access it using the same logic: first, the name of the outermost interface, which we call the parent interface, followed by the name of the inner interface (child): `parent_interface_name.child_interface_name`.

If you'd like to see how it's used with a short example, you can take a look at the following project:

[GitHub Repository](https://github.com/aysedemirel/oop-with-java)

## Generic Interfaces

A generic interface allows for type-safe abstraction. Let's try to create an example for this. Let's say we are generating product lists for a factory. Our first task is to list the car product line, and then we will work on other products in the factory. Since other products will come later, we created an interface like the following:

```
public interface IFactory {
    public Car produce();
}
```

Implementation:

```
public class CarFactory implements IFactory {
  public Car produce() {
    return new Car();
  }
}
```

Usage:

```
IFactory carFactory = new CarFactory();
Car car = (Car) carFactory.produce();
```

However, this ties the interface directly to Car. To decouple it, we can use generics:

```
public interface IFactory<T> {
    public T produce();
}
```

Now, each product type can define its own factory:

```
public class CarFactory implements IFactory<Car> {
  public Car produce() {
    return new Car();
  }
}

public class TruckFactory implements IFactory<Truck> {
  public Truck produce() {
    return new Truck();
  }
}
```

We created two different types of production and obtained the results. Note that in both cases, we used the produce() method from the interface. In both cases, different types of returns were obtained. Thus, we obtained an interface not for a single production line, but for multiple production lines. We call the class as follows:

```
IFactory<Car> carFactory = new CarFactory();
Car car = carFactory.produce();

IFactory<Truck> truckFactory = new TruckFactory();
Truck truck = truckFactory.produce();
```

The complete version of this example can be found on [Github repository](https://github.com/aysedemirel/oop-with-java)

## Summary

- An interface cannot be used as an object without being implemented anywhere.
- Multiple interfaces can be implemented in a class.
- An interface can extend another interface.
- When an interface is implemented, all methods must be defined within the class.
- All methods in an interface are public and abstract. Variable declarations are public, static, and final. This is the case even if you do not write these keywords.
- An interface is used to provide multiple inheritance.
- An interface is used to provide loose coupling.

## Conclusion

Interfaces are one of Java's most powerful abstraction tools. They reduce code dependency, increase flexibility, and clarify boundaries between layers.
This allows software to adapt more easily to changing requirements and maintain architectural integrity.

Ultimately, interfaces are not merely “connectors” — they are foundational architectural constructs that make systems more understandable, maintainable, and scalable.

Stay tuned for more Java and OOP articles. See you in the next posts 👋

**For further reading:**

- Clean Architecture – Robert C. Martin
- Effective Java – Joshua Bloch
- Head First Design Patterns – Freeman & Robson

**References**

- [Java Interface - GeeksforGeeks](https://www.geeksforgeeks.org/java/interfaces-in-java/)
- [Java Interfaces](http://tutorials.jenkov.com/java/interfaces.html)
