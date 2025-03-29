# پروژه محاسبه فرمول‌ها با استفاده از ورودی‌های HTML و جاوا اسکریپت

این پروژه یک قابلیت ساده برای محاسبه فرمول‌ها به‌صورت آنی بر اساس ورودی‌های کاربر در صفحه‌ی HTML پیاده‌سازی می‌کند. به‌طور دقیق‌تر، با تغییر مقادیر ورودی‌ها، نتیجه‌ی فرمول‌ها به‌صورت لحظه‌ای در صفحه نمایش داده می‌شود.

## ویژگی‌ها

- **محاسبه فرمول‌ها بر اساس ورودی‌های عددی**: محاسبات ریاضی به‌صورت لحظه‌ای با تغییر مقادیر ورودی‌ها انجام می‌شود.
- **نمایش نتیجه در یک المان خاص** (`<formula>`): نتیجه‌ی محاسبات در المان‌های HTML که به‌طور خاص برای نمایش نتایج تعریف شده‌اند، نمایش داده می‌شود.
- **بررسی ورودی‌ها**: در صورت وارد کردن ورودی غیرعدد (حروف یا نشانه‌های خاص)، پیام خطا "Invalid Formula" نمایش داده می‌شود.
- **پشتیبانی از چندین فرمول در یک صفحه**: می‌توان چندین فرمول مختلف را در یک صفحه قرار داد که هرکدام به‌صورت جداگانه محاسبه می‌شوند.
- **طراحی واکنش‌گرا** (Responsive): صفحه به‌گونه‌ای طراحی شده که در دستگاه‌های مختلف (موبایل، تبلت، دسکتاپ) به‌درستی نمایش داده شود.
- **استفاده از JavaScript برای به‌روزرسانی نتایج به‌صورت آنی**: هر تغییری در ورودی‌ها به‌صورت آنی باعث تغییر در نتایج می‌شود.


## پیش‌نیازها

برای اجرای این پروژه هیچ‌گونه پیش‌نیازی نیاز ندارید. فقط کافی است فایل‌های HTML، CSS و JavaScript را در سیستم خود قرار داده و در مرورگر باز کنید.

## ساختار پروژه

این پروژه از سه بخش اصلی تشکیل شده است:

1. **HTML**: در این فایل، ورودی‌ها و فرمول‌ها تعریف شده‌اند.
2. **CSS**: برای استایل‌دهی به صفحه و طراحی واکنش‌گرا (Responsive).
3. **JavaScript**: برای انجام محاسبات و به‌روزرسانی لحظه‌ای نتایج فرمول‌ها.

### جزئیات فایل‌ها:

#### 1. **HTML (index.html)**:
در این فایل، فرم‌ها و المان‌های ورودی تعریف شده‌اند. این فایل شامل المان‌های `input` برای وارد کردن مقادیر ورودی و المان‌های `<formula>` برای نمایش نتایج محاسبات است.

#### 2. **CSS (style.css)**:
این فایل برای استایل‌دهی به صفحه استفاده می‌شود. با استفاده از CSS، طراحی واکنش‌گرا و جذاب برای صفحه فراهم شده است.

#### 3. **JavaScript (script.js)**:
این فایل برای انجام محاسبات استفاده می‌شود. در این فایل، کد جاوا اسکریپت قرار دارد که با تغییر ورودی‌ها، نتایج محاسبات را به‌صورت آنی در المان‌های `<formula>` به‌روزرسانی می‌کند.

## نحوه استفاده

برای استفاده از این پروژه کافیست:
1. به آدرس `https://github.com/SajjadZr/web-homeworks.git` در گیت‌هاب بروید.
2. فولدر `formula-calculator` را که حاوی فایل های `index.html`, `style.css`, و `script.js` هست دانلود کنید.
3. فایل `index.html` را در مرورگر باز کنید.
4. مقادیر ورودی را در فیلدهای مربوطه وارد کنید.
5. نتیجه‌ی محاسبات به‌صورت آنی در بخش مربوطه نمایش داده خواهد شد.

