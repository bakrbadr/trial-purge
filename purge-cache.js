var ZONE_ID = "e29fc7fde8ab110462fd22c8be847284";
var HOSTNAMES = ["bakrbadr.xyz"];

var purge_cache_default = {
  async scheduled(event, env, ctx) {
    console.log("Cron triggered at:", event.scheduledTime);
    
    // Read the variables from the 'env' parameter
    const authEmail = env.CF_AUTH_EMAIL;
    const authKey = env.CF_AUTH_KEY;

    await fetch(`https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache`, {
      method: "POST",
      headers: {
        "X-Auth-Email": authEmail,
        "X-Auth-Key": authKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ hosts: HOSTNAMES })
    });
  },
  
  async fetch(request, env, ctx) {
    return new Response("Cron worker active.", { status: 200 });
  }
};

export {
  purge_cache_default as default
};
