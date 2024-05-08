      async function sendContact(ev) {
        ev.preventDefault();

        const senderEmail = document
          .getElementById('emailInput').value;
        const senderMessage = document
          .getElementById('messageInput').value;

        const webhookBody = {
          embeds: [{
            title: 'Contact Form Submitted',
            fields: [
              { name: 'Sender', value: senderEmail },
              { name: 'Message', value: senderMessage }
            ]
          }],
        };

        const webhookUrl = '';

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookBody),
        });

        if (response.ok) {
          alert('I have received your message!');
        } else {
          alert('There was an error! Try again later!');
        }
      }




/* Main Intro Text */
let titles = ['Unrivaled Quality', 'Unrivaled Prices', 'Unrivaled Performance']; // Fixed typo in "Performance"
let currentIndex = 0;
let aSpan = document.getElementById('title');

setInterval(() => {
   aSpan.innerHTML = `<br><span>${titles[currentIndex]}</span>`; // Wrap the text in the span tag

   currentIndex++;

   if (currentIndex === 3)
    currentIndex = 0;

   // Reapply the gradient styling
   let span = aSpan.querySelector('span');
   span.style.background = `-webkit-linear-gradient(white, #38495a)`;
   span.style.webkitBackgroundClip = `text`;
   span.style.webkitTextFillColor = `transparent`;

}, 2000);
