![Java](/img/java.png)

The **Java Development Kit (JDK)** is a software package that contains the necessary tools for developing Java applications. This package includes the **Java Runtime Environment (JRE)** and the **Java Virtual Machine (JVM)** components.

The **JRE** provides the API class libraries, Java compiler, Web Start component, and auxiliary files required for running Java applications.
If you only intend to **run** an existing Java program, installing the JRE is sufficient.
However, for **developing** Java applications, the JRE alone is not adequate; therefore, installing the JDK is mandatory.

[Access JDK 15 documentation](https://docs.oracle.com/en/java/javase/15/)

[Access JDK 25 documentation](https://docs.oracle.com/en/java/javase/25/)

## Installation Steps

1. Download the executable file (`.exe`, `.dmg`, or `.deb`) appropriate for your operating system.

2. Follow the steps provided by the installation wizard. Example steps for Windows are given below.

3. After installation, configure the required environment variables.

> **Note:** If your system already contains another JDK version, you can find all installed versions under the directory `C:\Program Files\Java`. Multiple versions may coexist on the same system, and the active version can be managed through environment variables.

## Download Links

You can download the installer for your operating system using the links below:

- [Windows (x64 Installer)](https://www.oracle.com/java/technologies/downloads/?er=221886#jdk25-windows)
- [Linux (x64 Debian Package)](https://www.oracle.com/java/technologies/downloads/?er=221886#jdk25-linux)
- [macOS (x64 DMG Installer)](https://www.oracle.com/java/technologies/downloads/?er=221886#jdk25-mac)

For other versions, please visit:

- [Oracle Java SE Downloads](https://www.oracle.com/java/technologies/javase-downloads.html)

## Installation on Windows

Once the executable file has been downloaded, you can proceed with the installation process.

The following steps describe the JDK 15 installation on Windows. The procedure is similar for other versions and operating systems.

1. **Run the Installer**

   Run the downloaded `.exe` file.
   In the setup window, click **“Next >”** to continue.

   ![Java](/img/jdk-installation/1.png)

2. **Specify the Installation Directory**

   By default, the JDK is installed under `C:\Program Files\Java`.
   It is generally recommended not to modify this directory.
   Click **“Next”** to proceed.

   ![Java](/img/jdk-installation/2.png)

   > **Important:** Changing the installation directory may prevent certain build tools from locating the JDK correctly.

3. **Complete the Installation**

   Once all files have been successfully installed, click **“Close”** to finish the process.

   ![Java](/img/jdk-installation/3.png)

4. **Verify the Installation Directory**

   Open the `C:\Program Files\Java` directory to confirm that the installed version (e.g., `jdk-15.0.1`) appears in the list.

> **Note:** It is normal to have multiple JDK versions in the same directory. The active version is determined by environment variables.

## Configuring Environment Variables

After installation, the system must be able to recognize the JDK directories.
This requires configuring the `JAVA_HOME` and `PATH` variables.

### Adding the `JAVA_HOME` Variable

1. Navigate to the directory where JDK is installed (default: `C:\Program Files\Java`).
2. Right-click on **“This PC”** on your desktop and select **“Properties.”**

   - If the desktop icon is not visible, open **File Explorer** and right-click on **This PC** from there.

3. In the opened window (Control Panel > System and Security > System), click **“Advanced system settings.”**

4. Under the “System Properties” window, click **“Environment Variables…”**

5. The “Environment Variables” window contains two sections: User variables and System variables. The `JAVA_HOME` variable will be added as a system variable. To do this, click the **‘New’** button in the **“System variables”** section.

   - If a `JAVA_HOME` variable already exists, select it and click **“Edit”**

6. In the “New System Variable” dialog, enter the following:

   - **Variable name:** `JAVA_HOME`
   - **Variable value:** the installation path (e.g., `C:\Program Files\Java\jdk-15.0.1`)

Click **“OK”**. You should now see `JAVA_HOME` listed among system variables.

### Updating the `PATH` Variable

1. Go to the `bin` folder inside the JDK installation directory, e.g. `C:\Program Files\Java\jdk-15.0.1\bin`.
2. In the “Environment Variables” window, find the `Path` variable under **User variables** and click **“Edit”**

   - If `Path` does not exist, create it by clicking **“New”**

3. Click **“New”** and add the path `C:\Program Files\Java\jdk-15.0.1\bin`.

   - Alternatively, you can add `%JAVA_HOME%\bin` which is preferred if `JAVA_HOME` is already defined.

4. Click **“OK”** to save the changes and close all windows.

## Verifying the Installation

After configuring environment variables, verify that the installation was successful.

1. Press Windows + R, type `cmd`, and press **Enter** to open the command prompt.

2. Run the following command:

3. To test whether the system recognizes Java, enter the following command:

```
 javac -version
```

![Java](/img/jdk-installation/12.png)

4. If the command displays a version number, the installation is successful.

   - If not, review the steps above carefully.

5. To check the installation directory of the Java compiler, run:

```
   where javac
```

---

Stay tuned for more Java-related articles.

See you in the next guide! 👋

### References

- [java.com](https://www.java.com)
