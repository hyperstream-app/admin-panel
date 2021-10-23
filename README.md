## Overview 🪟
Hyperstream is an application that facilitates simple and easy self-service at supermarkets, eliminating long lines for customers and reducing running costs for supermarkets.


## Inspiration 💡
Have you ever been to the supermarket and been out in less than 2 minutes? The answer for most of you would be no. The inspiration for building such an app comes as building something for my mother who being an entrepreneur works day and night as a result finds it difficult to spend so much time in just the shopping mart. Apart from my mother, there are more than 150 million shoppers all over the world who on an average spend 29 minutes lining up in the queue which makes it approx. 7,172 years in the shopping market itself.


## What it does 🤔
Instead of waiting around in the cashier line, our app **hyperstream is your own personal cashier**. What it does is allows you to scan the items present in the store and add them directly to your virtual cart. You can easily increase and decrease the quantity of the item as well as remove it from the cart anytime. At the end when you are satisfied with your cart and the items you have put in your basket, you can easily checkout through the app itself (which has a payment integration as well). When the payment is completed, the store admin receives a quick notification and an invoice as well stating that the user has bought all the items successfully.


## Some questions to be answered / FAQs❓
**Q. How do you plan to prevent theft which might take place?**
Ans: At the end of payment, a QR code is generated which is basically for the verification that a particular user has bought all these items and is carrying out only those items to which he or she is entitled to. Further a notification and a copy of the invoice generated at the user side is sent to the store admin as well for further proofs and verification.

**Q. How do you integrate the barcode system into your app?**
Ans: As each store has it's own database of items and their codes stored (as you see the cashier scanning it using a device), the same database can be extended to our app which with the help of a barcode-scanning library would be able to successfully scan the item.

**Q. Why do you think your app is useful if services like Amazon deliver stuff and even groceries directly at your home?**
Ans: Even though there are general items home delivery app, we shall not miss the fact that [according to a study](https://ripen.com/blog/ecommerce_survey), 92% of the retail purchases still happen offline.
<br>
![image](https://i.ibb.co/LdQwBwR/blog-retail-purchase.jpg)
<br>
_source: ripen.com_


## How we built it ⚙️
We first planned out the idea and it's detailed features so as to prevent any kind of technical errors at the end. We did all of this on a sheet of paper listing the logic flows and how to make the system more optimised. At last we came up with an implementation plan. 

All three having in expertise in frontend (HTML, CSS, JavaScript) and backend(PHP OOP and Laravel), we decided to assign equal amounts of frontend and backend work to each member. One of our team member was tasked with building up the store admin panel while the other two were tasked with building and organising the main app.


## Challenges we ran into 🚧
Major challenges were using new libraries for scanning of Store QR Codes and Item Barcodes. We used two different libraries namely InstascanJS and QuaggaJS which track QRs and barcodes in real time respectively. Another major challenge was handling of multiple data at the same time and performing simultaneous Asynchronous Javascript Calls to the backend.
Another major challenge was sleep deprivation as we later realised that the app we're trying to build is not a simple one with basic features :)


## Accomplishments that we're proud of ✨
Accomplishments we're proud of are successfully implementing the logic flow we had decided at the beginning of the hackathon and that too upto our expectations. We're also proud of the web application that we were able to build with libraries which we had never heard of during the hackathon itself.


## What we learned 🙌
We majorly learned on how to collaborate and manage time in these kinds of hackathon. We also learned to use the PDF library for converting HTML invoices to a PDF format and also implementing the mail verification system using PHPMailer library.


## What's next for Hyperstream 🚀
In the future, Hyperstream can also be converted to a startup for changing user lifestyle. Even though we did not research much about how a business works, we still did come up with a few implementable revenue models that can be used. They include - 
- Charging the user a flat fee 
- Charging the user a total of 1% extra on the bill generated
- Charging the store owner a monthly fee for the implementation of our software.

We found the third one to be the most suitable as users would never have to pay anything extra than the items bought and also reducing the cashiers (as each person is its own) will further help in increasing the revenue.

To view the demonstration video for the admin panel, [please click here](https://youtu.be/uG2zbBTm3is)
