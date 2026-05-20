const ZONE_ID = "e29fc7fde8ab110462fd22c8be847284";
const HOSTNAMES = ["bakrbadr.xyz"];

export default {
  async scheduled(event, env, ctx) {
    console.log("Cron triggered at:", event.scheduledTime);

    // Send the purge request
    await fetch(`https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache`, {
      method: 'POST',
      headers: {
        'X-Auth-Email': 'bakrbadr1@gmail.com',
        'X-Auth-Key': '098e2907a36193bd5af6d1872d8672c7f4b34',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ hosts: HOSTNAMES }),
    });
  },
}
