# IP Logger

این پروژه یک ابزار ساده برای ثبت آدرس IP کاربر است که آدرس IP و کد کشور بر اساس مکان‌یابی جغرافیایی آن با استفاده از API IPinfo.io را بازیابی می‌کند. اطلاعات ثبت شده در یک فایل JSON (`ip-log.json`) ذخیره شده و در صفحه وب به صورت جدول نمایش داده می‌شود.

## ویژگی‌ها

- بازیابی آدرس IP کاربر و کد کشور.
- ثبت آدرس IP به همراه تاریخ و زمان و کد کشور در فایل `ip-log.json`.
- نمایش آدرس‌های IP ثبت شده به صورت جدول قابل مرتب‌سازی با قابلیت حذف.

## راه‌اندازی و استفاده

برای راه‌اندازی و اجرای این پروژه به صورت محلی، مراحل زیر را دنبال کنید:

1. **کلون کردن مخزن کد:**

   ```
   git clone https://github.com/your-username/ip-logger.git
   cd ip-logger
   ```

2. **نصب وابستگی‌ها:**

   برای اجرای این پروژه نیاز به نصب Node.js و npm دارید.

   ```
   npm install
   ```

3. **تنظیم توکن API IPinfo.io:**

   - توکن API را از [IPinfo.io](https://ipinfo.io/signup) دریافت کنید.
   - توکن `YOUR_IPINFO_TOKEN` را در فایل `script.js` با توکن خود جایگزین کنید.

4. **اجرای برنامه:**

   ```
   node server.js
   ```

5. **دسترسی به برنامه:**

   مرورگر وب خود را باز کنید و به `http://localhost:3000` مراجعه کنید.

## استفاده

- صفحه وب آدرس IP و کد کشور فعلی شما را نمایش می‌دهد.
- دکمه "Toggle Log Table" قابلیت نمایش و مخفی کردن جدول لاگ را فراهم می‌کند.
- آدرس‌های IP ثبت شده به صورت جدول با تاریخ و زمان و کد کشور نمایش داده می‌شوند.
- شما می‌توانید ورودی‌های لاگ را با کلیک بر روی دکمه "Delete" حذف کنید.

## فناوری‌های استفاده شده

- Node.js
- Express.js
- Fetch API (برای ارسال درخواست‌های HTTP)
- HTML/CSS
- JavaScript

## مجوز

این پروژه تحت مجوز MIT منتشر شده است. برای جزئیات بیشتر می‌توانید فایل [LICENSE](LICENSE) را مطالعه کنید.

---

# IP Logger

This project is a simple tool for logging user IP addresses, which retrieves the user's IP address and country code based on their geolocation using the IPinfo.io API. It stores the logged data in a JSON file (`ip-log.json`) and displays it in a sortable table format on the web page.

## Features

- Fetches the user's IP address and geolocation (country code).
- Logs the IP address along with the timestamp and country code to `ip-log.json`.
- Displays the logged IP addresses in a table format with delete functionality.

## Setup and Usage

To set up and run this project locally, follow these steps:

1. **Clone the repository:**

   ```
   git clone https://github.com/your-username/ip-logger.git
   cd ip-logger
   ```

2. **Install dependencies:**

   This project requires Node.js and npm to be installed on your machine.

   ```
   npm install
   ```

3. **Set up IPinfo.io API Token:**

   - Obtain an API token from [IPinfo.io](https://ipinfo.io/signup).
   - Replace `YOUR_IPINFO_TOKEN` in `script.js` with your API token.

4. **Run the application:**

   ```
   node server.js
   ```

5. **Access the application:**

   Open your web browser and navigate to `http://localhost:3000`.

## Usage

- The web page will display your current IP address and country code.
- The "Toggle Log Table" button toggles the visibility of the log table.
- Logged IP addresses are displayed in a table format with timestamps and country codes.
- You can delete individual log entries by clicking the "Delete" button next to each entry.

## Technologies Used

- Node.js
- Express.js
- Fetch API (for making HTTP requests)
- HTML/CSS
- JavaScript

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.