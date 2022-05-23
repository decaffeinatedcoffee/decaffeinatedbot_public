var express = require('express');
var app = express();
const fetch = require('node-fetch');
var cors = require('cors'); 
let process = require('process');
require('dotenv').config();
app.use(express.json());
app.use(cors());
var app = express();
var serveIndex = require('serve-index');
app.set("view engine", "ejs");
app.use('/images', express.static(__dirname + '/images'), serveIndex(__dirname + '/images'));
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
const Keyv = require('keyv');
const fs = require('fs');
const keyv = new Keyv(process.env.MONGODB);
keyv.on('error', err => console.error('Keyv connection error:', err));

app.get('/', function (req, res) {
  (async () => {
  var users = await keyv.get("totalusers");
  var guilds = await keyv.get("totalguilds");
  res.render('index', { totalguilds: guilds, "totalusers": users});
  })();

});

app.get('/commands', function (req, res) {
  res.sendFile(__dirname + '/public/commands.html');
});

app.get('/favicon', function (req, res) {
  res.sendFile(__dirname + '/public/avatar.png');
});


app.get('/avatar', function (req, res) {
  let datebase = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
  var getdate = new Date(datebase)
  var dia = getdate.getDate()
  var mes = getdate.getMonth() + 1;

  if(mes == 2 && dia == 14){
  res.sendFile(__dirname + "/avatar/valentines.png")
   }
   else if(dia >= 15 && mes == 10){
  res.sendFile(__dirname + "/avatar/halloween.png")
  } else if(dia >= 19 && mes == 11){
    res.sendFile(__dirname + "/avatar/bday.png")
  }else if(mes == 12){
    res.sendFile(__dirname + "/avatar/xmas.png")
  }else{
    res.sendFile(__dirname + "/avatar/avatar.png")
  }
});


app.get('/profile', async ({ query }, res) => {
  const { code } = query;

  if (code) {
    try {
      const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams({
          client_id: process.env.BOTID,
          client_secret: process.env.CLIENT_SECRET,
          code,
          grant_type: 'authorization_code',
          redirect_uri: `https://decaffeinatedbot.herokuapp.com/profile`,
          scope: 'identify',
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const oauthData = await oauthResult.json();

      const accessToken = oauthData.access_token;
      const tokenType = 'Bearer';
      fetch('https://discord.com/api/users/@me', {
        headers: {
          authorization: `${tokenType} ${accessToken}`,
        },
      })
        .then(result => result.json())
        .then(response => {
          (async () => {
            const { username, discriminator, id, avatar } = response;
            var usernamefilter;
            if (username) {
              usernamefilter = username.replace(/[&\/\\#,+`$~%'":;*<>{}]/g, '');
            }
            let totalcoins = await keyv.get(id);
            let cookies = await keyv.get(id + "cookie");
            let fortunecookies = await keyv.get(id + "fortunecookies");
            let padlocks = await keyv.get(id + "padlock");
            let gifts = await keyv.get(id + "gifts");
            let warns = await keyv.get(id + "warns");
            let bdaym = await keyv.get(id + "mesniver");
            let bdayd = await keyv.get(id + "dianiver");
            let bdayy = await keyv.get(id + "anoniver");
            if (bdayd < 10) {
              bdayd = "0" + bdayd;
            }
            if (bdaym < 10) {
              bdaym = "0" + bdaym;
            }
            if (!totalcoins) {
              totalcoins = 0;
            }
            if (!cookies) {
              cookies = 0;
            }
            if (!fortunecookies) {
              fortunecookies = 0;
            }
            if (!padlocks) {
              padlocks = 0;
            }
            if (!gifts) {
              gifts = 0;
            }
            if (!warns) {
              warns = 0;
            }
            let warnsData = [];
            let warnsinfo;
            for (var i = 1; i < warns + 1; i++) {
              warnsinfo = await keyv.get(id + "warns" + i)
              warnsData.push(JSON.parse(warnsinfo))
            }

            return res.render('profile', { username: usernamefilter, discriminator: discriminator, id: id, avatar: avatar, coins: totalcoins, cookies: cookies, fortunecookies: fortunecookies, padlocks: padlocks, gifts: gifts, warns: warns, warnsinfo: JSON.stringify(warnsData), bdaym: bdaym, bdayd: bdayd, bdayy: bdayy });
          })();
        })
        .catch(console.error);



    } catch (error) {
      console.error(error);
      res.render('index', { totalguilds: client.guilds.cache.size });
    }
  } else {
    res.send('<script>location.replace("/")</script>')
  }

});

server.listen(process.env.PORT || 5000, () => {
    console.log("Listening Ports 5000 and " + process.env.PORT)
  })