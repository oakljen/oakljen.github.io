// Replace this with your real webhook URL:
const webhookURL = 'https://discord.com/api/webhooks/1403018440754856061/UtGY58wWuHV8JNT2mdlmhkJGOhJf2j-gh96MzSxjT-YuoCqco7n3qUBEM5ulcDQKj-aI';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // stop the normal form POST

    // collect values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // build content payload
    const content = `**New Contact Form Submission**\n` +
                    `**Name:** ${name}\n` +
                    `**Email:** ${email}\n` +
                    `**Message:**\n${message}`;

    try {
      const resp = await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`Discord responded ${resp.status}: ${text}`);
      }

      alert('Your message has been sent — thank you! 🎉');
      form.reset();
    } catch (err) {
      console.error('Error sending webhook:', err);
      alert('Oops, something went wrong. Please try again later.');
    }
  });
});
