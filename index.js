const { channel } = require("diagnostics_channel");
const Discord = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');
let process = require('process');
const os = require("os");
var express = require('express');
var app = express();
const { ocrSpace } = require('ocr-space-api-wrapper');
const fetch = require('node-fetch');
var cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors());
var app = express();
app.set("view engine", "ejs");
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MEMBERS", "GUILD_INVITES"], partials: ["CHANNEL", "SEND_TTS_MESSAGES"] });
const Keyv = require('keyv');
const { compileFunction } = require("vm");
const { joinVoiceChannel, createAudioResource, AudioPlayerStatus, createAudioPlayer, AudioResource, StreamType, play, getVoiceConnection } = require('@discordjs/voice');
const audioPlayer = createAudioPlayer();
const fs = require('fs');
const ytdl = require("ytdl-core");
const { set } = require("express/lib/application");
const keyv = new Keyv(process.env.MONGODB);
const dailySet = new Set();
const trabalhoSet = new Set();
const roubarSet = new Set();
const clearSet = new Set();
const bdaymessage = new Set();
const xpSet = new Set();
keyv.on('error', err => console.error('Keyv connection error:', err));
var presencaatual = 0;
var presencasetada;
var estadoatual;
var playing = 0;
var playchannel = 0;
var segundos;
var horas;
var minutos;
var getdate;
var dia;
var anos;
var mes;
var allowed;
var deskometer = 0;


let resultcookie = [

  "won nothing 😢",
  "won 400 coins 🪙",
  "won 100 coins 🪙",
  "it says 'pizza is good 🍕'",
  "it says 'bread 🍞'",
  "it says 'don't give up! ❤️'",
  "it says 'don't let me go! 🥺'",
  "won 50 coins 🪙",
  "won 20000 coins 🤑"
]
let cookievalues = [0, 400, 100, 0, 0, 0, 0, 50, 2000]

const chutesgif = [
  "https://tenor.com/view/punt-kick-baby-grandma-gif-8217719",
  "https://tenor.com/view/stickman-smile-kick-little-girl-gif-17124777",
  "https://tenor.com/view/kick-cartoon-silly-wacky-gif-9316304",
  "https://tenor.com/view/drop-kick-kick-fall-flying-kick-painful-gif-4838544"
]
const martelosgif = [
  "https://tenor.com/view/thor-banned-ban-hammer-thor-hammer-thor-chris-hemsworth-gif-11035060",
  "https://tenor.com/view/307th-ban-hammer-bad-boi-ricardo-admin-gif-15154041",
  "https://tenor.com/view/anime-ban-pound-hammer-mad-gif-9491505",
  "https://tenor.com/view/ban-hammer-gif-19698183",
  "https://tenor.com/view/bongocat-banhammer-ban-hammer-bongo-gif-18219363",
  "https://tenor.com/view/thor-banhammer-discord-banned-banned-by-admin-gif-12646581"
]

const presences = [
  "!help",
  "",
  "You can't teach coding to a banana",
  "Pizza",
  "You",
  "Im too lazy to fix the bugs",
  "Vroom Vroom",
  "PayPal me 30000 USD",
  "Potatos can't fly",
  "Bonk da honk",
];

const estados = [
  "PLAYING",
  "STREAMING",
  "WATCHING",
  "PLAYING",
  "LISTENING",
  "PLAYING",
  "WATCHING",
  "STREAMING",
  "LISTENING",
];

function setarhora() {

  let datebase = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
  getdate = new Date(datebase)
  horas = getdate.getHours();
  minutos = getdate.getMinutes();
  segundos = getdate.getSeconds();
  dia = getdate.getDate()
  mes = getdate.getMonth() + 1;
  anos = getdate.getFullYear()
  if (horas == 0 && minutos == 0 && segundos == 10) {
    var totalsize = presences.length;
    presences.splice(10, totalsize);
  }
  setTimeout(setarhora, 1000)

}


client.on("ready", (client) => {
  setarhora();
  startTimestamp = Date.now();
  console.log(`
  _       __________   __________  __  _________                       
  | |     / / ____/ /  / ____/ __ \/  |/  / ____/                       
  | | /| / / __/ / /  / /   / / / / /|_/ / __/                          
  | |/ |/ / /___/ /__/ /___/ /_/ / /  / / /___                          
  |__/|__/_____/_____\____/\____/_/__/_/_____/__________    ____________
     / __ )/   | / ____/ //_/     / __ \/ ____/ ____/   |  / ____/ ____/
    / __  / /| |/ /   / ,<       / / / / __/ / /   / /| | / /_  / /_    
   / /_/ / ___ / /___/ /| |_    / /_/ / /___/ /___/ ___ |/ __/ / __/    
  /_____/_/  |_\____/_/ |_( )  /_____/_____/\____/_/  |_/_/   /_/       
                          |/                          
  `);
  keepBotAlive();
  console.log("O bot foi iniciado com sucesso")
  console.log("Verificando latencia...")
  function pingboot() {
    console.log("Latencia da api: " + client.ws.ping + "ms");
    console.log("estou em " + client.guilds.cache.size + " servidores");
    console.log("Tudo certo!");
    console.log("[" + ('0' + dia).slice(-2) + "/" + ('0' + mes).slice(-2) + "/" + ('0' + anos).slice(-2) + " " + ('0' + horas).slice(-2) + ":" + ('0' + minutos).slice(-2) + ":" + ('0' + segundos).slice(-2) + "]");
  }
  setTimeout(pingboot, 3000);

  proximapresença();


  function proximapresença() {
    if (presencaatual < presences.length) {
      presencaatual++;
      presencasetada = presences[presencaatual];
      if (presencaatual == 10 && presences.length == 10) {
        presencasetada = "🎂 No birthdays today";
      }
      if (presencaatual == 1) {
        presencasetada = "to " + client.guilds.cache.size + " servers!"
      }
      if (presencaatual <= 9) {
        estadoatual = estados[presencaatual];
      } else {
        estadoatual = estados[4];
      }
      setTimeout(proximapresença, 5000);
    }
    else {
      presencaatual = 0;
      presencasetada = presences[presencaatual];
      estadoatual = estados[presencaatual];
      setTimeout(proximapresença, 5000);
    }

    client.user.setActivity(presencasetada, { type: estadoatual })
  }
})






client.on("messageCreate", (msg) => {
  (async () => {
    if (msg.content.startsWith('!') || msg.channel.type == "DM" && msg.author.id != process.env.BOTID) {
      var blacklistcheck = await keyv.get(msg.author.id + "blacklist");
      if (blacklistcheck) {
        msg.reply("❌ Hm, sorry but you was blacklisted on the bot with cause " + blacklistcheck + " and can't use commands.")
        allowed = false;
      }
      else {
        allowed = true;
      }
    }
  })()
    .then(function () {
      if (allowed == true) {



        if (msg.channel.type == "DM" && msg.content.startsWith('!')) {
          msg.reply('❌ Commands are disabled on DM channel');
        }
        else {
          if (msg.content.toLocaleLowerCase() == "!daily") {
            (async () => {

              var bypass = 0;
              var horad = await keyv.get(msg.author.id + "horadaily")
              var minutod = await keyv.get(msg.author.id + "minutodaily")
              var diad = await keyv.get(msg.author.id + "diadaily")
              var mesd = await keyv.get(msg.author.id + "mesdaily")
              var stamptmr = await keyv.get(msg.author.id + "tomorrowstamp")

              const total = stamptmr - new Date().valueOf();
              const segre = Math.floor((total % (1000 * 60)) / 1000);
              const minre = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
              const hore = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

              if (!stamptmr) {
                bypass = 1;
              }
              if (hore >= 1 || minre >= 1) {
                msg.channel.send(`You already have claimed your daily coins, please come back in ` + hore + " hours and " + minre + " minutes.")
              }

              else {
                let usuarioperfil = msg.author.id;

                var accounttotal = await keyv.get(usuarioperfil);
                if (accounttotal) {
                  await keyv.set(usuarioperfil, parseInt(accounttotal) + 1000);
                  msg.reply("You have received 1000 daily coins");
                  dailySet.add(msg.author.id)
                  await keyv.set(msg.author.id + "horadaily", horas)
                  await keyv.set(msg.author.id + "minutodaily", minutos)
                  await keyv.set(msg.author.id + "diadaily", dia)
                  await keyv.set(msg.author.id + "mesdaily", mes)
                  await keyv.set(msg.author.id + "tomorrowstamp", new Date(new Date()).setDate(new Date(new Date()).getDate() + 1))

                }

                else {
                  msg.reply("Sorry, but you need a account to receive the coins, please use !createaccount")
                }

              }

            })();
          }

          //////////////XP SYSTEM CODE LINES/////////////
          if (msg.channel.type != "DM") {
            if (xpSet.has(msg.guild.id + msg.author.id) || msg.author.id == process.env.BOTID || msg.channel.type == "DM") {
              console.log("No XP added to the user on " + msg.guild.name)
            }
            else {
              (async () => {
                var xpatual = await keyv.get(msg.guild.id + msg.author.id + 'xp');
                if (!xpatual) {
                  xpatual = 0;
                }
                var levelcheck = Math.trunc(parseInt(xpatual) / 1000);
                await keyv.set(msg.guild.id + msg.author.id + 'xp', parseInt(xpatual) + 30);
                var xpnow = await keyv.get(msg.guild.id + msg.author.id + 'xp');
                var levelnow = Math.trunc(parseInt(xpnow) / 1000);
                if (levelnow != levelcheck) {
                  msg.author.send('✅ Congrats ' + msg.author.username + '! you just advanced to level ' + levelnow + ' with ' + xpnow + ' XP on ' + msg.guild.name + ' server!')
                    .catch(err => {
                      msg.channel.send('✅ Congrats <@' + msg.author.id + '>! you just advanced to level ' + levelnow + ' with ' + xpnow + ' XP on this server!');
                    })
                }
                xpSet.add(msg.guild.id + msg.author.id);
                setTimeout(() => xpSet.delete(msg.guild.id + msg.author.id), 60000);
              })();
            }
          } else if (msg.author.id != process.env.BOTID && msg.channel.type == "DM") {
            console.log(msg.author.tag + ' sent "' + msg.content + '" on bot DM at ' + dia + "/" + mes + "/" + anos + " " + horas + ':' + minutos + ':' + segundos);

          }

          if (msg.content.toLowerCase().startsWith('!rank')) {
            var ping = msg.mentions.members.first();
            var userxp;
            if (ping) {
              userxp = ping;
            } else {
              userxp = msg.author.id;
            }
            (async () => {
              var xp;
              xp = await keyv.get(msg.guild.id + userxp + 'xp');
              if (!xp) {
                xp = 0;
              }
              if (ping) {
                msg.reply('🦆 <@' + ping + '> is level ' + Math.trunc(xp / 1000) + ' with ' + xp + ' XP on this server');
              } else {
                msg.reply('🦆 You are level ' + Math.trunc(xp / 1000) + ' with ' + xp + ' XP on this server');
              }
            })();
          }



          if (msg.content.toLowerCase().startsWith('!setxp')) {
            if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
              var userset = msg.mentions.members.first();
              var amountxp = msg.content.match(/^(\S+)\s(.*)/)
              if (amountxp) {
                var amount1 = amountxp.slice(1)
                if (amount1[1].match(/^(\S+)\s(.*)/)) {
                  var amount = amount1[1].match(/^(\S+)\s(.*)/).slice(1)
                  if (isNaN(amount[1]) || amount[1] <= 0) {
                    msg.reply("Please enter a valid XP value!")
                  }
                  else {
                    (async () => {
                      await keyv.set(msg.guild.id + userset + 'xp', amount[1])
                      var nomexp = "<@" + userset + ">";
                      msg.reply('✅ The user XP was edited successfully!');
                      let c = msg.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
                      const embedxp = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setAuthor("Responsible mod: " + msg.author.username, "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png")
                        .setThumbnail("https://cdn.discordapp.com/avatars/" + userset.id + "/" + userset.user.avatar + ".png")
                        .setTitle('Edited user:')
                        .addFields(
                          { name: 'Nickname', value: nomexp },
                          { name: 'Amount', value: amount[1].toString() },
                        )
                        .setTimestamp()
                        .setFooter('The user XP was edited successfully!');
                      if (c) {
                        c.send({ embeds: [embedxp] });
                      }
                    })();
                  }
                }
              }
              else {
                msg.reply('Please enter a valid XP value!');
              }
            }
            else {
              msg.reply("❌ You can't use this command!");
            }
          }

          if (msg.content.toLowerCase().startsWith('!resetxp')) {
            if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
              var user = msg.mentions.members.first();
              (async () => {
                await keyv.set(msg.guild.id + user + 'xp', 0);
                var nomexp = "<@" + user + ">";
                msg.reply('✅ The user XP was reseted successfully!');
                let c = msg.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
                const embedxp = new Discord.MessageEmbed()
                  .setColor('#0099ff')
                  .setAuthor("Responsible mod: " + msg.author.username, "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png")
                  .setThumbnail("https://cdn.discordapp.com/avatars/" + user.id + "/" + user.user.avatar + ".png")
                  .setTitle('Reseted user:')
                  .addFields(
                    { name: 'Nickname', value: nomexp },
                  )
                  .setTimestamp()
                  .setFooter('The user XP was reseted successfully!');
                if (c) {
                  c.send({ embeds: [embedxp] });
                }



              })();
            } else {
              msg.reply("❌ You can't use this command!");
            }
          }

          ///////////////////////////////////////////////

          if (msg.content.toLowerCase() == "!createaccount") {
            (async () => {
              let usuarioperfil = msg.author.id;
              var bloquearregistro = await keyv.get(usuarioperfil);
              if (bloquearregistro) {
                msg.reply("You already have an account");
              }
              else {
                await keyv.set(usuarioperfil, "0");
                msg.channel.send("Okay, lemme create your account").then((feedback) => setTimeout(() => feedback.edit("***✅ Account created succesfully***"), 2000))

              }
            })();

          }

          if (msg.content.toLowerCase() == "!work") {
            if (trabalhoSet.has(msg.author.id)) {
              msg.channel.send(`Please wait 1 hour to work again!`)
            }
            else {
              (async () => {
                var serverusado = msg.guild.id;
                var impostos = await keyv.get(serverusado);
                if (!impostos) {
                  await keyv.set(serverusado, 0);
                  impostos = 0;
                }
                let usuarioperfil = msg.author.id;
                var salarioaleatorio = Math.floor(Math.random() * 100);
                var lucroserver = (impostos / 100) * salarioaleatorio;
                var salariofinal = salarioaleatorio - lucroserver;
                var salarioconvertido = salariofinal.toString();
                var salariocortado = salarioconvertido.slice(0, 5);
                var valordoserverwork = await keyv.get(serverusado + "coins");
                if (!valordoserverwork) {
                  valordoserverwork = 0;
                }
                var valoremconta = await keyv.get(usuarioperfil);
                if (valoremconta) {
                  await keyv.set(usuarioperfil, parseInt(valoremconta) + salariofinal);
                  await keyv.set(serverusado + "coins", valordoserverwork + lucroserver);
                  msg.reply("Your worked and earned " + Math.round(salarioaleatorio) + " coins paying " + impostos + "% of server taxes, and your final salary was " + Math.round(salariocortado) + " coins");
                  trabalhoSet.add(msg.author.id)
                  setTimeout(() => {
                    trabalhoSet.delete(msg.author.id)
                    msg.channel.send('Hey, <@' + msg.author.id + '> you can already work again')
                  }, 3600000)
                }
                else {
                  msg.reply("Sorry, but you need a acccount to receive the coins, please use !createaccount")
                }
              })();
            }
          }



          if (msg.content.startsWith("!taxes")) {
            if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
              (async () => {
                var valueof = msg.content.length;
                var porcentagem = msg.content.slice(7, valueof);
                var serverusado = msg.guild.id;
                var impostosempercent = porcentagem.replace("%", "");
                if (isNaN(impostosempercent)) {
                  msg.reply("Please use a valid number")
                }
                else {
                  if (impostosempercent > 100) {

                    msg.reply("The max value is 100%")
                  }
                  else {
                    await keyv.set(serverusado, impostosempercent);
                    msg.reply("The server tax was setted as " + porcentagem + " successfully!")
                    let c = msg.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
                    const embedxp = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setAuthor("Responsible mod: " + msg.author.username, "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png")
                      .setThumbnail(msg.guild.iconURL())
                      .setTitle('The server taxes value was changed')
                      .addFields(
                        { name: 'Taxes value', value: impostosempercent + "%" },
                      )
                      .setTimestamp()
                      .setFooter('The user XP was reseted successfully!');
                    if (c) {
                      c.send({ embeds: [embedxp] });
                    }

                  }
                }
              })();
            }
            else {

              msg.reply("Hey! you need to be a mod to use it!")
            }
          }






          if (msg.content.startsWith("!serverbank")) {
            if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
              (async () => {
                var serverusado = msg.guild.id;
                var valorserver = Math.round(await keyv.get(serverusado + "coins"));
                const bankembed = new Discord.MessageEmbed()
                  .setColor('#36e36d')
                  .setTitle('Server Bank')
                  .addFields(
                    { name: 'Balance', value: valorserver + " Coins" },

                  )
                  .setTimestamp()

                msg.channel.send({ embeds: [bankembed] });

              })();
            }
            else {
              msg.reply("Hey! you need to be a mod to use it!")
            }
          }





          if (msg.content.toLowerCase() == "!store") {


            const embedstore = new Discord.MessageEmbed()
              .setColor('#b1f054')
              .setTitle('Welcome to the decaff store!')
              .setDescription('Look how many cool things we have')
              .addFields(
                { name: 'Cookie 🍪', value: '250 coins' },
                { name: 'Fortune Cookie 🥠 (you can earn up to 2k coins)', value: '1500 coins' },
                { name: 'Gift for your friend 🎁', value: '670 coins' },
                { name: 'Padlock 🔒', value: '3000 coins' },
                { name: 'Nothing', value: '10.000 coins' },
                { name: '!jukebox', value: '150 coins' },
              )
              .setTimestamp()
              .setFooter('Use !buy [item name] or [!gift [mention] for the gift');

            msg.channel.send({ embeds: [embedstore] });


          }

          if (msg.content.toLocaleLowerCase() == "!buy cookie") {

            (async () => {
              let usuarioperfil = msg.author.id;
              var contaserver = await keyv.get(msg.guild.id + "coins");
              var valoremconta = await keyv.get(usuarioperfil);
              var impostos = await keyv.get(msg.guild.id);
              var lucroserver = (impostos / 100) * 250;
              if (valoremconta) {
                var cookies = await keyv.get(usuarioperfil + "cookie");
                if (!cookies) {
                  cookies = 0;
                }
                if (valoremconta >= 250) {
                  await keyv.set(usuarioperfil, parseInt(valoremconta) - 250);
                  await keyv.set(usuarioperfil + "cookie", cookies + 1);
                  await keyv.set(msg.guild.id + "coins", parseInt(contaserver) + lucroserver);
                  msg.reply("Yaaaay, use !eat and enjoy your cookie!");
                } else {
                  await keyv.set(usuarioperfil, parseInt(valoremconta) - 350);
                  await keyv.set(usuarioperfil + "cookie", cookies + 1);
                  await keyv.set(msg.guild.id + "coins", parseInt(contaserver) + lucroserver + 100);
                  msg.reply("Yaaaay, you paid 100 coins overdraft fees, use !eat and enjoy your cookie! (and your overdraft fees 😳)");
                }
              }
              else {
                msg.reply("Sorry, but you need a acccount to buy, please use !createaccount")
              }
            })();
          }



          if (msg.content.toLocaleLowerCase() == "!buy fortune cookie") {

            (async () => {
              let usuarioperfil = msg.author.id;
              var valoremconta = await keyv.get(usuarioperfil);
              var contaserver = await keyv.get(msg.guild.id + "coins");
              var impostos = await keyv.get(msg.guild.id);
              var lucroserver = (impostos / 100) * 1500;
              if (valoremconta) {
                var fcookies = await keyv.get(usuarioperfil + "fortunecookies");
                if (!fcookies) {
                  fcookies = 0;
                }
                if (valoremconta >= 1500) {
                  await keyv.set(usuarioperfil, parseInt(valoremconta) - 1500);
                  await keyv.set(usuarioperfil + "fortunecookies", fcookies + 1);
                  await keyv.set(msg.guild.id + "coins", parseInt(contaserver) + lucroserver);
                  msg.reply("YAAAAY, use !open to see your prize!");
                } else {
                  await keyv.set(usuarioperfil, parseInt(valoremconta) - 1600);
                  await keyv.set(usuarioperfil + "fortunecookies", fcookies + 1);
                  await keyv.set(msg.guild.id + "coins", parseInt(contaserver) + lucroserver + 100);
                  msg.reply("YAAAAY, use !open to see your prize! (You paid 100 coins overdraft fees!)");
                }
              }
              else {
                msg.reply("Sorry, but you need a acccount to buy, please use !createaccount")
              }
            })();
          }


          if (msg.content.toLocaleLowerCase() == "!open") {
            (async () => {
              let usuarioperfil = msg.author.id;
              var fcookies = await keyv.get(usuarioperfil + "fortunecookies");
              var valoremconta = await keyv.get(usuarioperfil);
              if (valoremconta) {
                if (fcookies > 0) {
                  randomgen = Math.floor(Math.random() * 8);
                  msg.reply("You opened the fortune cookie and " + resultcookie[randomgen])
                  await keyv.set(usuarioperfil + "fortunecookies", fcookies - 1);
                  await keyv.set(usuarioperfil, parseInt(valoremconta) + cookievalues[randomgen]);
                }
                else {
                  msg.reply("You don't have a fortune cookie! use !buy fortune cookie to buy one.")
                }
              }
              else {
                msg.reply("Sorry, but you need a acccount to use this, please use !createaccount")
              }
            })();
          }

          if (msg.content.toLocaleLowerCase() == "!eat") {
            (async () => {
              let usuarioperfil = msg.author.id;
              var cookies = await keyv.get(usuarioperfil + "cookie");
              var valoremconta = await keyv.get(usuarioperfil);
              if (valoremconta) {
                if (cookies > 0) {
                  randomgen = Math.floor(Math.random() * 8);
                  msg.reply("You ate a cookie and it was amazing 🍪")
                  await keyv.set(usuarioperfil + "cookie", cookies - 1);
                }
                else {
                  msg.reply("You don't have a cookie! use !buy cookie to buy one.")
                }
              }
              else {
                msg.reply("Sorry, but you need a acccount to use this, please use !createaccount")
              }
            })();
          }



          if (msg.content.toLocaleLowerCase().startsWith('!gift')) {
            if (msg.content.length <= 7) {
              msg.reply("Please ping a valid user!")
            }
            else {
              var intencao = msg.mentions.members.first();

              if (intencao === undefined) {
                msg.reply("Please ping a valid user!");
                return;
              }
              (async () => {
                let usuarioperfil = msg.author.id;
                var valoremconta = await keyv.get(usuarioperfil);
                var contaserver = await keyv.get(msg.guild.id + "coins");
                var impostos = await keyv.get(msg.guild.id);
                var lucroserver = (impostos / 100) * 670;
                var prizeuser = intencao.id;
                var prizes = await keyv.get(prizeuser + "gifts");
                if (!prizes) {
                  prizes = 0;
                }
                if (valoremconta) {
                  if (valoremconta >= 670) {
                    await keyv.set(usuarioperfil, parseInt(valoremconta) - 670);
                    await keyv.set(msg.guild.id + "coins", parseInt(contaserver) + lucroserver);
                    await keyv.set(prizeuser + "gifts", parseInt(prizes) + 1);
                    msg.reply("Hey, <@" + prizeuser + ">, <@" + msg.author.id + "> thinks you are cool and sent you a gift! ❤️")
                  }
                  else {
                    await keyv.set(usuarioperfil, parseInt(valoremconta) - 770);
                    await keyv.set(msg.guild.id + "coins", parseInt(contaserver) + lucroserver + 100);
                    await keyv.set(prizeuser + "gifts", parseInt(prizes) + 1);
                    msg.reply("Hey, <@" + prizeuser + ">, <@" + msg.author.id + "> REALLY thinks you are cool and sent you a gift (cuz paid 100 coins overdraft fees to)!❤️")
                  }
                }
                else {
                  msg.reply("Sorry, but you need a acccount to use this, please use !createaccount")
                }
              })();
            }
          }


          if (msg.content.toLocaleLowerCase() == "!buy padlock") {

            (async () => {
              let usuarioperfil = msg.author.id;
              var valoremconta = await keyv.get(usuarioperfil);
              var contaserver = await keyv.get(msg.guild.id + "coins");
              var impostos = await keyv.get(msg.guild.id);
              var lucroserver = (impostos / 100) * 3000;
              if (valoremconta) {
                var lock = await keyv.get(usuarioperfil + "padlock");
                if (!lock) {
                  lock = 0;
                }
                if (lock >= 3) {
                  msg.reply("You can only have 3 padlocks 😳");
                } else {
                  if (valoremconta >= 3000) {
                    await keyv.set(usuarioperfil, parseInt(valoremconta) - 3000);
                    await keyv.set(usuarioperfil + "padlock", lock + 1);
                    await keyv.set(msg.guild.id + "coins", parseInt(contaserver) + lucroserver);
                    msg.reply("Yaaaay, Now you have a padlock!");
                  } else {
                    await keyv.set(usuarioperfil, parseInt(valoremconta) - 3100);
                    await keyv.set(usuarioperfil + "padlock", lock + 1);
                    await keyv.set(msg.guild.id + "coins", parseInt(contaserver) + lucroserver + 100);
                    msg.reply("Yaaaay, Now you have a padlock! (and -100 coins fees)");
                  }
                }
              }
              else {
                msg.reply("Sorry, but you need a acccount to buy, please use !createaccount")
              }
            })();
          }

          if (msg.content.toLocaleLowerCase() == "!buy nothing") {

            (async () => {
              let usuarioperfil = msg.author.id;
              var valoremconta = await keyv.get(usuarioperfil);
              var contaserver = await keyv.get(msg.guild.id + "coins");
              var impostos = await keyv.get(msg.guild.id);
              var lucroserver = (impostos / 100) * 10000;
              if (valoremconta) {

                if (valoremconta >= 10000) {
                  await keyv.set(usuarioperfil, parseInt(valoremconta) - 10000);
                  msg.reply("Yaaaay, you spent 10k successfully");
                } else {
                  await keyv.set(usuarioperfil, parseInt(valoremconta) - 10100);
                  msg.reply("Yaaaay, you spent 10.1k overdraft coins successfully");
                }
              }
              else {
                msg.reply("Sorry, but you need a acccount to buy, please use !createaccount")
              }
            })();
          }



          if (msg.content.toLocaleLowerCase() == "!inventory") {
            (async () => {
              let usuarioperfil = msg.author.id;
              var totalpadlock = await keyv.get(usuarioperfil + "padlock");
              var totalfortune = await keyv.get(usuarioperfil + "fortunecookies");
              var totalcookies = await keyv.get(usuarioperfil + "cookie");
              var totalgifts = await keyv.get(usuarioperfil + "gifts");

              if (!totalpadlock) {
                totalpadlock = 0;
              }
              if (!totalfortune) {
                totalfortune = 0;
              }
              if (!totalcookies) {
                totalcookies = 0;
              }
              if (!totalgifts) {
                totalgifts = 0;
              }
              const embedinv = new Discord.MessageEmbed()
                .setColor('#347aeb')
                .setTitle('Here is your inventory')
                .setDescription('Look all the things you have')
                .addFields(
                  { name: 'Cookie 🍪', value: totalcookies.toString() },
                  { name: 'Fortune Cookie 🥠', value: totalfortune.toString() },
                  { name: 'Padlock 🔒', value: totalpadlock.toString() + "/3" },
                  { name: 'Gifts 🎁', value: totalgifts.toString() }
                )
                .setTimestamp()
                .setFooter('Bye');

              msg.channel.send({ embeds: [embedinv] });

            })();

          }

          if (msg.content.toLocaleLowerCase().startsWith('!money')) {
            if (msg.content.length <= 7) {
              var intencao = msg.author;
            }
            else {
              var intencao = msg.mentions.members.first();
            }
            if (intencao === undefined) {
              msg.reply("Please ping a valid user!")
              return;
            }
            (async () => {
              var userdinheros = intencao.id;
              var valoruser = await keyv.get(userdinheros);
              if (valoruser) {

                if (valoruser >= 0) {
                  var color = '#27ab32'
                }
                else {
                  var color = '#f52222'
                }
                const embedbank = new Discord.MessageEmbed()
                  .setColor(color)
                  .setTitle('Bank 🏦')
                  .setDescription("<@" + userdinheros + ">'s account")
                  .addFields(
                    { name: 'Balance', value: Math.round(valoruser).toString() + " coins" },
                  )
                  .setTimestamp()
                  .setFooter('You are welcome!');

                msg.channel.send({ embeds: [embedbank] });
              }
              else {
                msg.reply("This user doesnt have an account yet, sorry 😭")
              }
            })();
          }

          if (msg.content.toLowerCase().startsWith("!ruleschannel")) {
            var rchannelid = msg.content.slice(14).toLowerCase();
            if (rchannelid == "delete") {
              (async () => {
                let rchan = await keyv.get(msg.guild.id + "ruleschannel");
                if (rchan) {
                  await keyv.delete(msg.guild.id + "ruleschannel");
                  msg.reply("✅ The rules channel was deleted successfully!");
                }
                else {
                  msg.reply("❌ This server dont have a rules channel yet!");
                }
              })();
            }
            else {
              if (!rchannelid || isNaN(rchannelid) || msg.guild.channels.cache.get(rchannelid) === undefined) {
                msg.reply("❌ Please put a valid channel ID");
              }
              else {
                if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
                  (async () => {
                    await keyv.set(msg.guild.id + "ruleschannel", rchannelid);
                    msg.reply("✅ The rules channel was setted as <#" + rchannelid + "> successfully!");
                  })();
                } else {
                  msg.reply("❌ You need to be a mod to use this!");
                }
              }
            }
          }
          if (msg.content.toLowerCase().startsWith("!setrule")) {
            var newrule = msg.content.slice(9);
            if (!newrule) {
              msg.reply("❌ Please set a rule!");
            } else {
              if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
                (async () => {
                  var ruleschannel = await keyv.get(msg.guild.id + "ruleschannel");
                  if (!ruleschannel || isNaN(ruleschannel)) {
                    msg.reply("❌ This server dont have a rules channel setted yet, use !ruleschannel [channel ID] to set");
                  } else {
                    try {
                      let ruleSender = client.channels.cache.get(ruleschannel);
                      ruleSender.send(newrule);
                      msg.reply('✅ The rule "' + newrule + '" was added to the rules channel successfully!');
                    }
                    catch {
                      msg.reply("❌ Error setting rule, check if the channel <#" + ruleschannel + "> still exists");
                    }
                  }
                })();
              }
              else {
                msg.reply("❌ You need to be a mod to use this!");
              }
            }
          }

          if (msg.content.toLocaleLowerCase().startsWith('!steal')) {
            if (msg.content.length <= 7) {
              msg.reply("Please ping a valid user!")
            }
            else {
              if (roubarSet.has(msg.author.id)) {
                msg.channel.send(`Please wait 30 seconds to use this again!`)
              }
              else {
                (async () => {
                  var intencao = msg.mentions.members.first();

                  if (intencao === undefined) {
                    msg.reply("Please ping a valid user!")
                    return;
                  }
                  var user = intencao.id;
                  var valoremcontaroubar = await keyv.get(user);
                  var valorladrao = await keyv.get(msg.author.id);

                  if (valorladrao) {
                    if (msg.author.id == user) {
                      msg.reply("You can not steal yourself... or can you?.....")
                    }
                    else {

                      if (valoremcontaroubar >= 1) {
                        var padlock = await keyv.get(user + "padlock");
                        if (padlock >= 1) {
                          await keyv.set(user + "padlock", padlock - 1);
                          msg.reply("eeeeew, <@" + user + "> has a padlock and you was caught! You paid 1k.");
                          await keyv.set(msg.author.id, parseInt(valorladrao) - 1000);
                          roubarSet.add(msg.author.id)
                          setTimeout(() => {
                            roubarSet.delete(msg.author.id)
                          }, 30000)
                        }
                        else {
                          var valorroubado = Math.floor(Math.random() * valoremcontaroubar);
                          await keyv.set(user, valoremcontaroubar - valorroubado);
                          await keyv.set(msg.author.id, parseInt(valorladrao) + valorroubado);
                          msg.reply("WOW, u got " + valorroubado + " coins from this user!")
                          roubarSet.add(msg.author.id)
                          setTimeout(() => {
                            roubarSet.delete(msg.author.id)
                          }, 30000)
                        }
                      }
                      else {
                        msg.reply("<@" + user + "> is poor, please go away!")
                        roubarSet.add(msg.author.id)
                        setTimeout(() => {
                          roubarSet.delete(msg.author.id)
                        }, 30000)
                      }
                    }
                  }
                  else {
                    msg.reply("Sorry, but you need a acccount to use it!, please use !createaccount")
                  }
                }

                )();
              }
            }
          }




          if (msg.content.toLocaleLowerCase().startsWith("!pay")) {

            var paying = msg.mentions.members.first();
            if (paying.id == msg.author.id) {
              msg.reply('You can not send money from you to yourself');
            } else {
              var amountpre = msg.content.match(/^(\S+)\s(.*)/)
              if (amountpre) {
                var amount1 = amountpre.slice(1)
                if (amount1[1].match(/^(\S+)\s(.*)/)) {
                  var amount = amount1[1].match(/^(\S+)\s(.*)/).slice(1)
                  let usuarioperfil = msg.author.id;
                  if (isNaN(amount[1]) || amount[1] <= 0 || amount[1].toLowerCase().includes("e")) {
                    msg.reply("Please enter a valid value!")
                  } else if (amount[1] > 10000) {
                    msg.reply("The limit is 10000 coins per transaction");
                  }
                  else {
                    (async () => {
                      var valoremconta = await keyv.get(usuarioperfil);
                      var valorpagador = await keyv.get(paying.id);
                      if (valoremconta) {
                        if (valorpagador) {

                          await keyv.set(paying.id, parseInt(valorpagador) + parseInt(amount[1]))
                          await keyv.set(usuarioperfil, parseInt(valoremconta) - amount[1])
                          msg.reply("You paid " + amount[1] + " coins to <@" + paying + "> succesfully!")
                        }
                        else {
                          msg.reply("Sorry but this user doesnt have an account!")
                        }
                      }
                      else {
                        msg.reply("You dont have a account! please create one using !createaccount")
                      }
                    })();
                  }
                }
                else {
                  msg.reply("Please enter a valid value!")
                }
              }
              else {
                msg.reply("Invalid usage method, please use !pay [user] [value]")
              }
            }
          }



          if (msg.content.toLocaleLowerCase().startsWith("!kick")) {
            (async () => {
              var membrokick = msg.mentions.members.first();
              let attachment;
              let attachments = msg.attachments.first();
              if (attachments) {
                attachment = attachments.url
              }
              if (membrokick == msg.author.id) {
                msg.reply("Oof, you can not kick yourself!")
              }
              else {
                const msgArr = msg.content.split(' ');
                const arg = msgArr.slice(2).filter(val => val !== '')
                const motivo = arg.join(' ')
                var nomekick = "<@" + membrokick + ">";
                if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
                  if (!motivo) {
                    motivo = "No cause setted"
                  }
                  else {
                    if (membrokick == undefined) {
                      msg.reply("Please ping a valid user!")
                    }
                    var gifkick = Math.floor(Math.random() * 3);
                    membrokick.kick(motivo).then(function () {
                      let c = msg.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
                      const embedkick = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setAuthor("Responsible mod: " + msg.author.username, "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png")
                        .setThumbnail("https://cdn.discordapp.com/avatars/" + membrokick.id + "/" + membrokick.user.avatar + ".png")
                        .setTitle('Punished user:')
                        .addFields(
                          { name: 'Nickname', value: nomekick },
                          { name: 'Cause', value: motivo },
                        )
                        .setTimestamp()
                        .setFooter('User kicked successsfully!');
                      if (c) {
                        c.send({ content: "Proofs: " + attachment, embeds: [embedkick], })
                      }
                      msg.reply("The user was kicked successfully! " + chutesgif[gifkick])

                    })

                      .catch(function (err) {
                        msg.reply("I cant kick this user, probably their role is higher than mine, sorry );");
                      })
                  }
                }
                else {
                  msg.reply("You need to be a mod to use this!")
                }

              }
            })();

          }


          if (msg.content.toLocaleLowerCase().startsWith("!ban")) {
            if (msg.content != '!bank') {
              (async () => {
                var membroban = msg.mentions.members.first();
                let attachment;
                let attachments = msg.attachments.first();
                if (attachments) {
                  attachment = attachments.url
                }
                if (membroban == msg.author.id) {
                  msg.reply("Oof, you can not ban yourself!")
                }
                else {
                  const msgArr = msg.content.split(' ');
                  const arg = msgArr.slice(2).filter(val => val !== '')
                  const motivo = arg.join(' ')
                  var nomeban = "<@" + membroban + ">";
                  if (!motivo) {
                    motivo = "No cause setted"
                  }
                  if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
                    if (membroban == undefined) {
                      msg.reply("Please ping a valid user")
                    }
                    else {
                      var gifban = Math.floor(Math.random() * 5);
                      membroban.ban({
                        reason: motivo,
                      }).then(function () {
                        let c = msg.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
                        const embedban = new Discord.MessageEmbed()
                          .setColor('#0099ff')
                          .setAuthor("Responsible mod: " + msg.author.username, "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png")
                          .setThumbnail("https://cdn.discordapp.com/avatars/" + membroban.id + "/" + membroban.user.avatar + ".png")
                          .setTitle('Punished user:')
                          .addFields(
                            { name: 'Nickname', value: nomeban },
                            { name: 'Cause', value: motivo },
                          )
                          .setTimestamp()
                          .setFooter('The user was banned successfully!');
                        if (!attachment) {
                          attachment = "No attached proofs"
                        }
                        if (c) {
                          c.send({ content: "Proofs: " + attachment, embeds: [embedban], })
                        }
                        msg.reply("The user was banned successfully! " + martelosgif[gifban])

                      })

                        .catch(function (err) {
                          msg.reply("I cant ban this user, probably their role is higher than mine, sorry );");
                        })
                    }

                  }
                  else {
                    msg.reply("You need the to be a mod to use this!")
                  }

                }

              })();
            }
          }



          if (msg.content.toLocaleLowerCase().startsWith("!mute")) {
            (async () => {
              var membromute = msg.mentions.members.first();
              let attachment;
              let attachments = msg.attachments.first();
              if (attachments) {
                attachment = attachments.url
              }
              if (membromute == msg.author.id) {
                msg.reply("Oof, you can not mute yourself!")
              }
              else {
                const msgArr = msg.content.split(' ');
                const arg = msgArr.slice(2).filter(val => val !== '')
                const motivo = arg.join(' ')
                var nomemute = "<@" + membromute + ">";
                if (!motivo) {
                  motivo = "No cause setted"
                }
                if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
                  if (membromute == undefined) {
                    msg.reply("Please ping a valid user")
                  }
                  else {
                    var role = membromute.guild.roles.cache.find(role => role.name === "Muted");
                    membromute.roles.add(role).then(function () {
                      let c = msg.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
                      const embedmute = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setAuthor("Responsible mod: " + msg.author.username, "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png")
                        .setThumbnail("https://cdn.discordapp.com/avatars/" + membromute.id + "/" + membromute.user.avatar + ".png")
                        .setTitle('Punished user:')
                        .addFields(
                          { name: 'Nickname', value: nomemute },
                          { name: 'Cause', value: motivo },
                        )
                        .setTimestamp()
                        .setFooter('The user was muted successfully!');
                      if (!attachment) {
                        attachment = "No attached proofs"
                      }
                      if (c) {
                        c.send({ content: "Proofs: " + attachment, embeds: [embedmute], })
                      }
                      membromute.send({ content: `You were muted on the ${msg.guild.name} server! proofs: ` + attachment, embeds: [embedmute], })
                        .catch(err => {
                          console.error(`Error while sending a DM mute.`);
                        });
                      msg.reply("The user was muted successfully! ")
                      msg.channel.send("https://media.discordapp.net/attachments/273509180747415555/920146895245025280/Shut.png");

                    })

                      .catch(function (err) {
                        msg.reply("I cant mute this user, probably their role is higher than mine, sorry );");
                      })
                  }

                }
                else {
                  msg.reply("You need the to be a mod to use this!")
                }

              }

            })();


          }

          if (msg.content.toLocaleLowerCase().startsWith("!unmute")) {
            (async () => {
              var membromute = msg.mentions.members.first();
              if (membromute == msg.author.id) {
                msg.reply("Oof, you can not unmute yourself cuz u are unmuted!")
              }
              else {
                const msgArr = msg.content.split(' ');
                const arg = msgArr.slice(2).filter(val => val !== '')
                const motivo = arg.join(' ')
                var nomemute = "<@" + membromute + ">";
                if (!motivo) {
                  motivo = "No cause setted"
                }
                if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
                  if (membromute == undefined) {
                    msg.reply("Please ping a valid user")
                  }
                  else {
                    if (membromute.roles.cache.some(role => role.name === 'Muted')) {
                      var role = membromute.guild.roles.cache.find(role => role.name === "Muted");
                      membromute.roles.remove(role).then(function () {
                        let c = msg.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
                        const embedmute = new Discord.MessageEmbed()
                          .setColor('#0099ff')
                          .setAuthor("Responsible mod: " + msg.author.username, "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png")
                          .setThumbnail("https://cdn.discordapp.com/avatars/" + membromute.id + "/" + membromute.user.avatar + ".png")
                          .setTitle('Unpunished user:')
                          .addFields(
                            { name: 'Nickname', value: nomemute },
                            { name: 'Cause', value: motivo },
                          )
                          .setTimestamp()
                          .setFooter('The user was unmuted successfully!');
                        if (c) {
                          c.send({ embeds: [embedmute] });
                        }
                        membromute.send({ content: `You were unmuted on the ${msg.guild.name} server!`, embeds: [embedmute], })
                          .catch(err => {
                            console.error(`Error while sending a DM unmute.`);
                          });
                        msg.reply("The user was unmuted successfully! ")
                        msg.channel.send("https://media.discordapp.net/attachments/273509180747415555/920146895026946088/Unshut.png");

                      })
                        .catch(function (err) {
                          msg.reply("I cant unmute this user, probably their role is higher than mine, sorry );");
                        })
                    }
                    else {
                      msg.reply("This user are not muted already!")
                    }
                  }
                }
                else {
                  msg.reply("You need the to be a mod to use this!")
                }

              }

            })();


          }



          if (msg.content.toLocaleLowerCase().startsWith("!timeout")) {
            var timeoutmember = msg.mentions.members.first();
            let attachment;
            let attachments = msg.attachments.first();
            if (attachments) {
              attachment = attachments.url
            }
            if (timeoutmember == msg.author.id || timeoutmember == process.env.BOTID) {
              msg.reply("Oof, you can not timeout yourself or me!")
            }
            else {
              const msgArr = msg.content.split(' ');
              const arg = msgArr.slice(2).filter(val => val !== '')
              var totaltime = arg.join(' ')
              var timeoutname = "<@" + timeoutmember + ">";
              if (!totaltime || isNaN(totaltime)) {
                totaltime = 5;
              }
              if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
                if (timeoutmember == undefined) {
                  msg.reply("Please ping a valid user")
                }
                else {
                  totaltime = parseInt(totaltime)

                  timeoutmember.timeout(totaltime * 60 * 1000).then(function () {
                    let c = msg.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
                    const embedtimeout = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setAuthor("Responsible mod: " + msg.author.username, "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png")
                      .setThumbnail("https://cdn.discordapp.com/avatars/" + timeoutmember.id + "/" + timeoutmember.user.avatar + ".png")
                      .setTitle('Punished user:')
                      .addFields(
                        { name: 'Nickname', value: timeoutname },
                        { name: 'Time', value: totaltime.toString() + " mins" },
                      )
                      .setTimestamp()
                      .setFooter('The user received a timeout successfully!');
                    if (!attachment) {
                      attachment = "No attached proofs"
                    }
                    if (c) {
                      c.send({ content: "Proofs: " + attachment, embeds: [embedtimeout], })
                    }

                    timeoutmember.send({ content: `You received a timeout on the ${msg.guild.name} server! proofs: ` + attachment, embeds: [embedtimeout], })
                      .catch(err => {
                        console.error('Error while sending a DM timeout.');
                      });

                    msg.reply("The user <@" + timeoutmember.id + "> received a " + totaltime + " mins timeout successfully! ")
                    msg.channel.send("https://c.tenor.com/Tp6pUkz1oR8AAAAM/breaks-keyboard.gif")
                  })
                    .catch(function (err) {
                      msg.reply("I cant timeout this user, probably their role is higher than mine, sorry");
                    })
                }
              }
              else {
                msg.reply("You need the to be a mod to use this!")
              }

            }
          }


          if (msg.content.toLocaleLowerCase().startsWith("!warn")) {
            (async () => {
              var membrowarn = msg.mentions.members.first();
              let attachment;
              let attachments = msg.attachments.first();
              if (attachments) {
                attachment = attachments.url
              }
              if (membrowarn == msg.author.id || membrowarn == process.env.BOTID) {
                msg.reply("Oof, you can not warn yourself or me!")
              }
              else {
                const msgArr = msg.content.split(' ');
                const arg = msgArr.slice(2).filter(val => val !== '')
                var motivo = arg.join(' ')
                var nomewarn = "<@" + membrowarn + ">";
                if (!motivo) {
                  motivo = "no cause setted";
                } else {
                  motivo = motivo.replace(/[&\/\\#,+`$~%'":;*<>{}]/g, '');
                }
                if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
                  if (membrowarn == undefined) {
                    msg.reply("Please ping a valid user")
                  }
                  else {
                    try {
                      let warnsnow = await keyv.get(membrowarn + "warns");
                      if (!warnsnow) {
                        warnsnow = 0;
                      }
                      var totalwarns = parseInt(warnsnow) + 1;
                      let warntime = dia + "/" + mes + "/" + anos + " " + horas + ":" + minutos;
                      let thiswarn = { cause: motivo, mod: msg.author.username.replace(/[&\/\\#,+`$~%'":;*<>{}]/g, ''), guild: msg.guild.name.replace(/[&\/\\#,+`$~%'":;*<>{}]/g, ''), time: warntime }
                      await keyv.set(membrowarn + "warns", parseInt(warnsnow) + 1);
                      await keyv.set(membrowarn + "warns" + totalwarns, JSON.stringify(thiswarn));
                      let c = msg.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
                      const embedwarn = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setAuthor("Responsible mod: " + msg.author.username, "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png")
                        .setThumbnail("https://cdn.discordapp.com/avatars/" + membrowarn.id + "/" + membrowarn.user.avatar + ".png")
                        .setTitle('Punished user:')
                        .addFields(
                          { name: 'Nickname', value: nomewarn },
                          { name: 'Cause', value: motivo },
                        )
                        .setTimestamp()
                        .setFooter('The user were warned successfully!');
                      if (!attachment) {
                        attachment = "No attached proofs"
                      }
                      if (c) {
                        c.send({ content: "Proofs: " + attachment, embeds: [embedwarn], })
                      }

                      membrowarn.send({ content: 'You were warned on the ' + msg.guild.name + ' server! proofs: ' + attachment, embeds: [embedwarn], })
                        .catch(err => {
                          console.error(`Error while sending a DM warn.`);
                        });

                      msg.reply("The user <@" + membrowarn.id + "> was warned successfully! ")
                      msg.channel.send("https://tenor.com/view/funne-warn-discord-tenor-meme-gif-21067897");

                    }

                    catch {
                      msg.reply("I cant warn this user, probably their role is higher than mine, sorry );");
                    }
                  }
                }
                else {
                  msg.reply("You need the to be a mod to use this!")
                }

              }
            })();


          }

          if (msg.content.toLowerCase().startsWith('$blacklist')) {
            if (msg.author.id != process.env.OWNERID) {
              msg.reply("❌ Only the bot owner can use this command!");
            }
            else {


              var pingbl = msg.mentions.members.first();

              if (pingbl) {
                var userbl = pingbl;
                var reason = msg.content.slice(33);
              }
              else {
                var userbl = msg.content.slice(11, 29);
                var reason = msg.content.slice(30);
              }



              if (!reason) {
                reason = "No reason setted";
              }


              if (!userbl) {
                msg.reply("Please ping a valid user");
              }

              else {
                (async () => {
                  var checkbl = await keyv.get(userbl + "blacklist");
                  if (!checkbl) {
                    await keyv.set(userbl + "blacklist", reason);
                    msg.reply("✅ The user was blacklisted with reason " + reason + " successfully!");
                  }
                  else {
                    await keyv.delete(userbl + "blacklist");
                    msg.reply("✅ The user was removed from blacklist successfully!");
                  }
                })();
              }
            }
          }



          if (msg.content.toLocaleLowerCase().startsWith("!clear")) {

            if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
              if (clearSet.has(msg.guild.id)) {
                msg.reply("Im already cleaning on this server, please wait.")
              }
              else {
                mensagenslimpartotal = msg.content.slice(7);
                var mensagenslimpar = parseInt(mensagenslimpartotal) + 1;
                if (!isNaN(mensagenslimpar) && mensagenslimpar <= 100 && mensagenslimpar > 0) {
                  msg.channel.bulkDelete(mensagenslimpar).then(() => {
                    msg.channel.send("The last " + mensagenslimpar + " messages were deleted").then(msg => setTimeout(() => { msg.delete() }, 2000));
                  });
                }
                else {
                  msg.reply("i can only clear up to 99 messages!")
                }
              }
            } else {
              msg.reply("You need the to be a mod to use this!")
            }
          }

          if (msg.content.toLocaleLowerCase().startsWith('!about')) {
            if (msg.content.length <= 7) {
              msg.reply('Please ping a valid user!');
            }
            else {
              var intencao = msg.mentions.members.first();

              if (intencao == undefined) {
                msg.reply("Please ping a valid user!")
                return;
              }
              (async () => {
                var user = intencao;
                var marrystatus;
                var valoruser = await keyv.get(user.id);
                var xpuser = await keyv.get(msg.guild.id + user + 'xp');
                var warns = await keyv.get(user + "warns");
                var marry = await keyv.get(user + "marry");
                if(marry){
                  marry = JSON.parse(marry)
                  marrystatus = "Yes, to " + marry.username
                }else{
                  marrystatus = "No"
                }
                if (!valoruser) {
                  valoruser = 0;
                }
                if (!xpuser) {
                  xpuser = 0;
                }

                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                if (user.presence == null) {
                  var status = "◯ Offline"
                  var color = "#9ea39e"
                  var condicao = status
                } else {
                  if (user.presence.status.toLowerCase() == 'online') {
                    var status = "🟢 Online"
                  } else if (user.presence.status.toLowerCase() == 'dnd') {
                    var status = "🔴 Do not disturb"
                  } else if (user.presence.status.toLowerCase() == 'idle') {
                    var status = "🌙 Idle"
                  }

                  if (!user.presence.activities[0]) {
                    var condicao = status
                    var urlpresence = "";
                  } else if (user.presence.activities[0]) {
                    if (user.presence.activities[0].id == "custom") {
                      var condicao = "";
                      for (var i = 1; i < user.presence.activities.length; i++) {
                        condicao += user.presence.activities[i].type.toUpperCase().slice(0, 1) + user.presence.activities[i].type.toLowerCase().slice(1) + " " + user.presence.activities[i].name + " - " + user.presence.activities[i].state + " - " + user.presence.activities[i].details + "\r\n"
                      }
                      condicao = status + ' with custom status "' + user.presence.activities[0].state + '"' + "\r\n" + condicao;
                    }
                    else {
                      condicao = "";
                      for (var i = 0; i < user.presence.activities.length; i++) {
                        condicao += user.presence.activities[i].type.toUpperCase().slice(0, 1) + user.presence.activities[i].type.toLowerCase().slice(1) + " " + user.presence.activities[i].name + " - " + user.presence.activities[i].state + " - " + user.presence.activities[i].details + "\r\n"
                      }
                      condicao = status + "\r\n" + condicao;
                    }

                  }
                  if (user.presence.status.toLowerCase() == 'online') {
                    var color = "#42db60"
                  } else if (user.presence.status.toLowerCase() == 'dnd') {
                    var color = "#e32b2b"
                  } else if (user.presence.status.toLowerCase() == 'idle') {
                    var color = "#d2eb17"
                  }
                }

                /////////////////////////////////////////////////////////////////


                if (user.user.bot == false) {
                  var isbot = "No"
                }
                else {
                  var isbot = 'Yes'
                }
                if (!warns) {
                  warns = 0;
                }

                let time = Date.parse(user.user.createdAt) / 1000;
                const embedabout = new Discord.MessageEmbed()
                  .setColor(color)
                  .setTitle('User info')
                  .setDescription("<@" + user.id + ">'s account info")
                  .setThumbnail("https://cdn.discordapp.com/avatars/" + user.id + "/" + user.user.avatar + ".png")
                  .addFields(
                    { name: 'ID', value: user.id },
                    { name: 'Is a bot?', value: isbot },
                    { name: 'Status', value: condicao },
                    { name: 'Account creation', value: '<t:' + time + '>' },
                    { name: 'Bank Balance', value: Math.round(valoruser.toString()) + " coins" },
                    { name: 'Rank', value: xpuser.toString() + ' XP (level ' + Math.trunc(xpuser / 1000) + ')' },
                    { name: 'Married', value: marrystatus.toString() },
                    { name: 'Total Warns', value: warns.toString() }
                  )
                  .setTimestamp()
                msg.channel.send({ embeds: [embedabout] });
              })();
            }
          }


          if (msg.content.toLocaleLowerCase() == "!random color") {

            var colorrandom = Math.random() * (146 - 0) + 0;
            msg.reply("Here, the color is " + colornames[Math.round(colorrandom)])
          }

          if (msg.content.toLocaleLowerCase() == "!random number") {

            var randomnum = Math.random() * (999 - 0) + 0;
            msg.reply("Here, the number is " + Math.round(randomnum))
          }

          if (msg.content.toLocaleLowerCase() == "!random name") {

            var namerandom = Math.random() * (150 - 0) + 0;
            msg.reply("Here, the name is " + names[Math.round(namerandom)])
          }

          if (msg.content.toLocaleLowerCase() == "!random animal") {

            var animalrandom = Math.random() * (222 - 0) + 0;
            msg.reply("Here, the animal is " + animals[Math.round(animalrandom)])
          }

          if (msg.content.toLowerCase() == "!botcock") {
            msg.reply("😳");
          }

          if (msg.content.toLowerCase().startsWith("!hug")) {
            var userhug = msg.mentions.members.first();
            if (userhug !== undefined) {
              if (userhug.id !== msg.author.id) {
                const hugs = [

                  '<@' + msg.author.id + "> tried to hug <@" + userhug + ">, but was too shy to.",
                  '<@' + msg.author.id + "> hugged <@" + userhug + "> and invited to eat a pizza.",
                  '<@' + msg.author.id + "> was going to hug <@" + userhug + "> but got a call from their boss.",
                  '<@' + msg.author.id + "> hugs <@" + userhug + ">.",
                  '<@' + msg.author.id + "> went to hug <@" + userhug + "> and their phone fell from the pocket",
                  '<@' + msg.author.id + "> loves <@" + userhug + "> and so want to give a hug",
                ]
                var hugrandom = Math.random() * (5 - 0) + 0;
                msg.reply(hugs[Math.round(hugrandom)])
              }
              else {
                msg.reply("<@" + msg.author.id + "> just hugged theirself because they love themselves")
              }
            }
            else {
              msg.reply("Please ping a valid user!")
            }
          }







          if (msg.content.toLowerCase().startsWith("!ocr")) {
            (async () => {
              let imgfile = msg.attachments.first();
              if (!imgfile) {
                msg.reply("Please attach a file!");
              } else {
                if (imgfile.contentType.startsWith("image/")) {


                  let imagetext = await ocrSpace(imgfile.url, { apiKey: process.env.OCRAPIKEY });
                  if (imagetext.OCRExitCode == 1 || imagetext.OCRExitCode == 2) {
                    if (imagetext.ParsedResults[0]['ParsedText']) {
                      msg.reply(imagetext.ParsedResults[0]['ParsedText']);
                    } else {
                      msg.reply("No text found on this image!");
                    }
                  }
                  else if (imagetext.ErrorMessage == "File failed validation. File size exceeds the maximum size limit. Maximum size limit 1024 KB") {
                    msg.reply("Error, The max file size is 1MB");
                  } else {
                    msg.reply("Error, try again or test using other file!");
                  }
                } else {
                  msg.reply("Please attach a valid PNG, JPG or PDF file!");
                }
              }
            })();
          }





          if (msg.content.startsWith("!jukebox")) {
            (async () => {
              let file = msg.attachments.first();
              var usercoins = await keyv.get(msg.author.id)
              if (!msg.member.voice.channel) {
                msg.reply("You need to join a voice channel!");
                return;
              }
              else {
                if (playing == 0 || playing == msg.guild.id) {
                  if (usercoins >= 150) {

                    try {
                      await keyv.set(msg.author.id, usercoins.toString() - 150);
                      if (file.contentType == 'audio/mpeg') {
                        msg.reply("Allright! You paid 150 coins and the jukebox is now playing **" + file.name.replace('_', ' ') + ".** \r\n Use !leave if you want to stop (No refund). \r\n **Also, by sending files to play you agree you have all the rights to the file.**")
                        playing = msg.guild.id
                        playchannel = msg.channel
                        let channel = msg.member.voice.channel;
                        const connection = joinVoiceChannel({
                          channelId: channel.id,
                          guildId: channel.guild.id,
                          adapterCreator: channel.guild.voiceAdapterCreator,
                        });

                        conexaoaudio = connection;
                        connection.subscribe(audioPlayer);

                        const resource = createAudioResource(file.attachment, {
                          inputType: StreamType.Arbitrary,
                          inlineVolume: true,
                          bitrate: 192000
                        });

                        audioPlayer.play(resource);


                      }

                      else {
                        msg.reply("Please send a valid audio file!")
                      }
                    }
                    catch {
                      msg.reply("Please attach the audio file (By sending files to play you agree you have all the rights to the file!)")
                    }

                  }
                  else {
                    msg.reply("Sorry but you need to have at least 150 coins to use the jukebox!")
                  }
                }
                else {
                  msg.reply("Sorry but someone is using the jukebox on another server, try again later.")
                }
              }
            })();
          }
          else if (msg.content.toLocaleLowerCase() == "!leave") {
            if (playing != 0 && playing == msg.guild.id) {
              playing = 0
              const connection = getVoiceConnection(msg.guild.id)
              connection.disconnect()
              playchannel = 0;
              msg.reply("Thank you for helping me 💜")
            }
            else {
              msg.reply("Im not on a voice channel on this server!")
            }
          }


          if (msg.content.toLocaleLowerCase().startsWith('!pfp')) {
            if (msg.content.length <= 5) {
              msg.reply("Please ping a valid user!")
            }
            else {
              var intencao = msg.mentions.members.first();

              if (intencao === undefined) {
                msg.reply("Please ping a valid user!")
                return;
              }
              var user = intencao;
              if (user.user.avatar) {
                msg.reply("https://cdn.discordapp.com/avatars/" + user.id + "/" + user.user.avatar + ".png?size=2048")
              }

              else {
                msg.reply("I think this user dont have a PFP yet, sorry!")
              }
            }
          }



          if (msg.content.toLocaleLowerCase() == "!help") {



            const embedhelp = new Discord.MessageEmbed()
              .setColor("#d3db39")
              .setTitle('!HELP')
              .setDescription("Hi " + msg.author.username + ", here are almost all the commands:")
              .addFields(
                { name: '!createaccount', value: "Creates a account on the bot bank" },
                { name: '!money', value: "Show the user account balance" },
                { name: '!store', value: "List all the store products" },
                { name: '!work', value: "Work and give you a random coins value" },
                { name: '!daily', value: "Gives 1000 daily coins" },
                { name: '!pfp [user]', value: "Sends the user PFP" },
                { name: '!about [user]', value: "Show infos about an user" },
                { name: '!botinfo', value: "Show bot infos" },
                { name: '!dice [amount]', value: "Roll the dice for the chance to win the bet value" },
                { name: '!steal [user]', value: "Steal a random coins amount from the user" },
                { name: '!jukebox [attach a audio file]', value: "Pay 150 coins and play a audio file inside the voice channel" },
                { name: '!ocr [attach a image or PDF]', value: "Sends the text from a image on the chat" },
                { name: '!random color', value: "Generates a random color name" },
                { name: '!random number', value: "Generates a random number" },
                { name: '!random animal', value: "Generates a random animal" },
                { name: '!random name', value: "Generates a random first name" },
                { name: '!botclock', value: "Shows the bot system current time" },
                { name: '!taxes [value%]', value: "Set the server taxes" },
                { name: '!serverbank', value: "Show the server account balance" },
                { name: '!ruleschannel [channel ID]', value: "Set the server rules channel" },
                { name: '!setrule [rule]', value: "Add a new rule to the rules channel" },
                { name: '!giverole [@user] [@role]', value: "Gives a role to an user" },
                { name: '!takerole [@user] [@role]', value: "Removes a role from an user" },
                { name: '!kick [@user] [cause]', value: "Kick an user" },
                { name: '!ban [@user] [cause]', value: "Ban an user" },
                { name: '!mute [@user] [cause]', value: "mute an user" },
                { name: '!warn [@user] [cause]', value: "Warn an user" },
                { name: '!timeout [@user] [time in minutes]', value: "Timeouts an user" }
              )
              .setFooter("I hope I helped you 💜")
              .setTimestamp()
            msg.react('✅');
            setTimeout(() => msg.delete(), 2500);
            msg.author.send({ content: "You can see all the commands in https://decaffeinatedbot.herokuapp.com/commands", embeds: [embedhelp] })
              .catch(err => {
                msg.channel.send({ content: "You can see all the commands in https://decaffeinatedbot.herokuapp.com/commands", embeds: [embedhelp] });
              });

          }

          if (msg.content.toLowerCase().includes('thanks')) {
            if (msg.channel.type == "DM") {
              msg.reply("Nope lmao 💜")
            }


          }


          if (msg.content.toLowerCase().includes('tanks')) {
            if (msg.channel.type == "DM") {
              msg.reply("https://tenor.com/view/tank-conquest-army-train-gif-17242572")
            }


          }


          if (msg.content.toLowerCase() == "!ping") {
            msg.channel.send("lorem ipsum dolor sit amet consectetur adipisicing elit. pariatur, assumenda est? ratione in alias nulla repudiandae, incidunt nisi recusandae consequuntur quidem quasi placeat reiciendis. quidem aliquid repudiandae sequi officiis nihil?").then(pingo => {
              var ping = pingo.createdTimestamp - msg.createdTimestamp;


              const pingEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setDescription("Soccer! ⚽")
                .addFields(
                  { name: "The server latency is ", value: ping + "ms" },
                  { name: "The API latency is ", value: client.ws.ping + "ms" },
                )

                .setTimestamp()
              pingo.delete();
              msg.reply({ embeds: [pingEmbed] });
            });


          }


          if (msg.content.toLocaleLowerCase().startsWith("!dice")) {
            (async () => {
              var bet = msg.content.slice(6);
              if (bet) {
                if (!isNaN(bet)) {
                  var accounttotal = await keyv.get(msg.author.id);

                  if (accounttotal) {
                    if (accounttotal >= bet) {
                      msg.channel.send(msg.author.username + " throws the dice for " + bet + " coins")
                      var dado1 = Math.round(Math.random() * (6 - 1) + 1)
                      var dado2 = Math.round(Math.random() * (6 - 1) + 1)
                      var dado3 = Math.round(Math.random() * (6 - 1) + 1)
                      var dado4 = Math.round(Math.random() * (6 - 1) + 1)

                      var totaloponente = dado1 + dado2;
                      var totalplayer = dado3 + dado4;

                      if (totaloponente > totalplayer) {
                        msg.channel.send(msg.author.username + " have " + dado3 + " and " + dado4)
                        msg.channel.send("The opponent have " + dado1 + " and " + dado2)
                        await keyv.set(msg.author.id, parseInt(accounttotal) - parseInt(bet));
                        msg.reply(msg.author.username + " lost " + bet + " coins!")
                      } else if (totaloponente == totalplayer) {
                        msg.reply("We tied with " + dado1 + " and " + dado2 + " and no one lost or won")
                      } else if (totalplayer > totaloponente) {
                        msg.channel.send(msg.author.username + " have " + dado3 + " and " + dado4)
                        msg.channel.send("The opponent have " + dado1 + " and " + dado2)
                        await keyv.set(msg.author.id, parseInt(accounttotal) + parseInt(bet));
                        msg.reply(msg.author.username + " won " + bet + " coins!")
                      }
                    }
                    else {
                      msg.reply("Sorry but you dont have a positive account balance and cant play dice.")
                    }
                  }
                  else {
                    msg.reply("Sorry but you need to have an account to use this, please create one using !createaccount")
                  }


                }
                else {
                  msg.reply("Please set a valid bet value!")
                }
              }
              else {
                msg.reply("Please set the bet value!")
              }
            })();
          }


          if (msg.content.toLowerCase() == "!servercount") {
            msg.reply("I'm currently in " + client.guilds.cache.size + " servers!");

          }

          if (msg.content.toLowerCase() == "$listservers") {
            if (msg.author.id != process.env.OWNERID) {
              msg.reply("❌ Only the bot owner can use this command!");
            }
            else {
              var gdcounter = 0;
              client.guilds.cache.forEach(guild => {

                gdcounter++;
                var servericon = guild.iconURL();
                const embedlist = new Discord.MessageEmbed()
                  .setColor('#b1f054')
                  .setTitle('Server number ' + gdcounter)
                  .setThumbnail(servericon)
                  .addFields(
                    { name: 'Server name', value: guild.name },
                    { name: 'Server ID', value: guild.id },
                  )

                  .setTimestamp()
                msg.channel.send({ embeds: [embedlist] });

              })
            }
          }

          if (msg.content.toLowerCase().startsWith("$eval")) {
            (async () => {
              if (msg.author.id == process.env.OWNERID) {
                var result = msg.content.split(" ").slice(1).join(" ");
                let evaled = await eval(result)
                  .catch(function (err) {
                    msg.reply("❌ Error! ```" + err + "```");
                  })
              } else {
                msg.reply("❌ only the bot owner can use this!");
                console.log(msg.author.tag + " on " + msg.guild.name + " tried to use eval command!");
              }
            })()
          }






          if (msg.content.toLocaleLowerCase().startsWith("$invite")) {
            if (msg.author.id != process.env.OWNERID) {
              msg.reply("❌ Only the bot owner can use this command!");
            }
            else {
              (async () => {
                var guildid = msg.content.slice(8);
                var wantedguild = client.guilds.cache.get(guildid)
                const systemchannel = client.channels.cache.get(wantedguild.systemChannelId);
                let newInvite = await systemchannel.createInvite({
                  maxUses: 1,
                  unique: true,
                  maxAge: 86400
                });
                msg.reply("Here is your invite " + newInvite.url);
              })()
                .catch(function () {
                  msg.reply("Hm, sorry but i can't create invites for this server")
                })
            }
          }


          if (msg.content.toLowerCase().startsWith("!giverole")) {
            if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
              var roleuser = msg.mentions.members.first();
              var roleping = msg.mentions.roles.first();
              if (roleping) {
                let fetchrole = msg.guild.roles.cache.find(m => m.id == roleping);
                roleuser.roles.add(fetchrole).then(function () {
                  msg.reply("✅ The role was added!");
                })
                  .catch(function () {
                    msg.reply("❌ I can't add this role to this user, check my perms!");
                  })
              }
              else {
                msg.reply("❌ Please enter a role!");
              }
            }
            else {
              msg.reply("❌ You need to be a mod to use this command!");
            }
          }


          if (msg.content.toLowerCase().startsWith("!takerole")) {
            if (msg.member.permissions.has(["MANAGE_ROLES", "BAN_MEMBERS"])) {
              var roleuser = msg.mentions.members.first();
              var roleping = msg.mentions.roles.first();
              if (roleping) {
                let fetchrole = msg.guild.roles.cache.find(m => m.id == roleping);
                roleuser.roles.remove(fetchrole).then(function () {
                  msg.reply("✅ The role was removed!");
                })
                  .catch(function () {
                    msg.reply("❌ I can't remove this role from this user, check my perms!");
                  })
              }
              else {
                msg.reply("❌ Please enter a role!");
              }
            }
            else {
              msg.reply("❌ You need to be a mod to use this command!");
            }
          }


          if (msg.content.toLowerCase() == '!botclock') {
            if (horas < 10) { horas = "0" + horas }
            if (minutos < 10) { minutos = "0" + minutos }
            if (segundos < 10) { segundos = "0" + segundos }
            if (dia < 10) {
              dia = "0" + dia;
            }
            if (mes < 10) {
              mes = "0" + mes;
            }
            msg.reply("📆 " + dia + "/" + mes + "/" + anos + " " + clocks[horas] + ' ' + horas + ':' + minutos + ':' + segundos + ' UTC-3');
          }



          if (msg.content.toLowerCase() == "!botinfo") {
            var totalHeap = (process.memoryUsage().heapTotal / (1000 * 1000)).toFixed(2);
            var usedHeap = (process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2);
            var totalRss = (process.memoryUsage().rss / (1000 * 1000)).toFixed(2);
            var arch = process.arch;
            var totalram = (os.totalmem() / (1000 * 1000)).toFixed(2);
            var cores = os.cpus().length;
            var cmodel = os.cpus()[1].model;
            var cspeed = os.cpus()[1].speed;
            var platf = os.platform();
            var osys = os.version()
            var usedram = ((os.totalmem() - os.freemem()) / (1000 * 1000)).toFixed(2);
            const totaluptime = startTimestamp - new Date().valueOf();
            const totalsecs = Math.floor((totaluptime % (1000 * 60)) / 1000);
            const totalmins = Math.floor((totaluptime % (1000 * 60 * 60)) / (1000 * 60));
            const totalhours = Math.floor((totaluptime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const totaldays = Math.floor(totaluptime / (1000 * 60 * 60 * 24));
            const botinfoEmbed = new Discord.MessageEmbed()

              .setColor('#79d930')
              .setDescription("🤖 Heres the bot info")
              .addFields(
                { name: "Created at", value: "<t:1637344715>" },
                { name: "RSS", value: totalRss + "MB" },
                { name: "Heap", value: usedHeap + "MB/" + totalHeap + "MB used" },
                { name: "RAM", value: usedram + "MB/" + totalram + "MB used" },
                { name: "CPU cores", value: cores.toString() },
                { name: "Model", value: cmodel.toString() },
                { name: "Clock", value: cspeed.toString() + "MHz" },
                { name: "Arch", value: arch },
                { name: "OS", value: osys },
                { name: "Platform", value: platf },
                { name: "Uptime", value: Math.abs(totaldays + 1) + " days, " + Math.abs(totalhours + 1) + " hours, " + Math.abs(totalmins + 1) + " minutes, " + Math.abs(totalsecs + 1) + " seconds" },
              )

              .setTimestamp()
            msg.reply({ embeds: [botinfoEmbed] });
          }


          if (msg.content.toLocaleLowerCase().startsWith("!bday")) {
            var year;
            let datebase = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
            (async () => {
              var userbday = msg.mentions.members.first();
              if (!userbday) {
                userbday = msg.author;
              }
              var diabday = await keyv.get(userbday.id + "dianiver")
              var mesbday = await keyv.get(userbday.id + "mesniver")
              var anobday = await keyv.get(userbday.id + "anoniver")
              if (!diabday || !mesbday) {
                msg.reply("This user doesnt have setted their birthday yet, sorry")
              } else {
                var anoatual = new Date(datebase).getFullYear();
                var mesatual = new Date(datebase).getMonth() + 1;
                var diaatual = new Date(datebase).getDate();
                var age;
                if (mesatual < mesbday) {
                  year = anoatual;
                  if (anobday) {
                    age = year - anobday;
                  }
                } else if (mesatual == mesbday && diaatual > diabday) {
                  year = anoatual + 1;
                  if (anobday) {
                    age = year - anobday;
                  }
                } else if (mesatual == mesbday && diaatual < diabday) {
                  year = anoatual;
                  if (anobday) {
                    age = year - anobday;
                  }
                }
                else {
                  year = anoatual + 1;
                  if (anobday) {
                    age = year - anobday;
                  }
                }
                var atual = new Date(datebase).getTime();
                var end = new Date(meses[mesbday].slice(0, 3) + ' ' + diabday + ' , ' + year + ' 00:00:00').getTime();
                var restante = end - atual;
                var dias = Math.floor(restante / (1000 * 60 * 60 * 24));
                var horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
                var segundos = Math.floor((restante % (1000 * 60)) / 1000);
                if (diaatual == diabday && mesatual == mesbday) {
                  if (msg.author.id == userbday.id) {
                    if (!bdaymessage.has(msg.author.id)) {
                      presences.push('🎂 Happy bday ' + userbday.username);
                      bdaymessage.add(msg.author.id);
                    }
                    if (!anobday) {
                      msg.reply("Today is your birthday! <@" + msg.author.id + "> 🎂 happy birthday!")
                    } else {
                      msg.reply("Today is your " + (parseInt(age) - 1) + " birthday! <@" + msg.author.id + "> 🎂 Happy birthday!")

                    }
                  }
                  else {
                    if (!anobday) {
                      msg.reply("Today is <@" + userbday.id + ">'s birthday! 🎂 use !gift @" + userbday.user.tag + " to tell you like them")
                    } else {
                      msg.reply("Today is <@" + userbday.id + ">'s " + (parseInt(age) - 1) + " birthday! 🎂 use !gift @" + userbday.user.tag + " to tell you like them")

                    }
                  }
                } else {
                  bdaymessage.delete(userbday.id);
                  if (anobday) {
                    msg.reply(dias + " days and " + horas + " hours remaining until <@" + userbday.id + ">'s " + age + " birthday in **" + meses[mesbday] + ', ' + days[diabday] + '**')
                  } else {
                    msg.reply(dias + " days and " + horas + " hours remaining until <@" + userbday.id + ">'s birthday in **" + meses[mesbday] + ', ' + days[diabday] + '**')
                  }
                }
              }
            })();
          }



          if (msg.content.toLowerCase() == "!removebday") {
            var user = msg.author.id;
            (async () => {
              var diabday = await keyv.get(user + "dianiver");
              var mesbday = await keyv.get(user + "mesniver");
              var anobday = await keyv.get(user + "anoniver");
              if (diabday) {
                await keyv.delete(user + "dianiver");
                await keyv.delete(user + "mesbday");
                if (anobday) {
                  await keyv.delete(user + "anoniver");
                }
                msg.reply("Your birthday data was removed successfully!");
              }
              else {
                msg.reply("You don't have a birthday setted");
              }
            })();


          }

          if (msg.content.toLocaleLowerCase().startsWith("!setbday")) {
            var user = msg.author.id;
            var values = msg.content.slice(9);
            var splitval = values.split("/");
            if (splitval[0] > 31 || splitval[0] <= 0 || !splitval[0] || splitval[1] > 12 || !splitval[1] || splitval[1] <= 0 || isNaN(splitval[0]) || isNaN(splitval[1])) {
              msg.reply("Please set a valid date on format DD/MM or DD/MM/YYYY")
            }
            else if (splitval[1] == 2 && splitval[0] >= 30) {
              msg.reply("Please set a valid date on format DD/MM or DD/MM/YYYY");
            }
            else {
              (async () => {
                var diaarray = parseInt(splitval[0]);
                var mesarray = parseInt(splitval[1]);
                var anoarray = parseInt(splitval[2]);
                var diabday = await keyv.get(user + "dianiver")
                var mesbday = await keyv.get(user + "mesniver")
                if (!diabday || !mesbday) {
                  await keyv.set(user + "dianiver", parseInt(splitval[0]))
                  await keyv.set(user + "mesniver", parseInt(splitval[1]))
                  if (anoarray) {
                    await keyv.set(user + "anoniver", parseInt(splitval[2]))
                  }
                  msg.reply("Your birthday was setted to " + meses[mesarray] + ", " + days[diaarray])
                }
                else {
                  await keyv.delete(user + "dianiver")
                  await keyv.delete(user + "mesniver")
                  await keyv.delete(user + "anoniver")
                  await keyv.set(user + "dianiver", parseInt(splitval[0]))
                  await keyv.set(user + "mesniver", parseInt(splitval[1]))
                  if (anoarray) {
                    await keyv.set(user + "anoniver", parseInt(splitval[2]))
                  }
                  msg.reply("Your birthday was changed to " + meses[mesarray] + ", " + days[diaarray])
                }
              })();
            }
          }


          if (msg.content.toLocaleLowerCase().startsWith("!marry")) {
            var user = msg.mentions.members.first();
            if (user.id == msg.author.id) {
              msg.reply('You can not marry yourself!');
            } else {
              var cause = msg.content.match(/^(\S+)\s(.*)/)
              if (cause) {
                var causeslice = cause.slice(1)
                if (causeslice[1].match(/^(\S+)\s(.*)/)) {
                  var cause = causeslice[1].match(/^(\S+)\s(.*)/).slice(1)
                  var userauthor = msg.author;

                  (async () => {
                    let userAMarriage = await keyv.get(user.id + "marry");
                    let userBMarriage = await keyv.get(userauthor.id + "marry");


                    if (userAMarriage) {
                      userAMarriage = JSON.parse(userAMarriage);
                      if (userAMarriage.id == userauthor.id) {
                        msg.reply("You are already married to <@" + user.id + ">")
                      } else {
                        msg.reply("This user is already married to " + userAMarriage.username)
                      }
                    } else {
                      if (userBMarriage) {
                        userBMarriage = JSON.parse(userBMarriage);
                        msg.reply("You are already married to " + userBMarriage.username)
                      } else {
                        let nojson = { 'a': "n", "uid": user.id, "aid": msg.author.id, };
                        let yesjson = { 'a': "y", "uid": user.id, "aid": msg.author.id, };
                        let usernames = JSON.stringify({ "uname": user.user.username, "aname": msg.author.username });
                        await keyv.set(msg.author.id + user.id + "marriagetry", usernames)
                        const yes = new MessageActionRow()
                          .addComponents(
                            new MessageButton()
                              .setCustomId(JSON.stringify(yesjson))
                              .setLabel('Yes i do')
                              .setStyle('SUCCESS'),
                          );
                        const no = new MessageActionRow()
                          .addComponents(
                            new MessageButton()
                              .setCustomId(JSON.stringify(nojson))
                              .setLabel("No i don't")
                              .setStyle('DANGER'),
                          );
                        let a = await msg.channel.send({ content: "Hello, <@" + user.id + ">, <@" + userauthor.id + "> loves you too much and said that wants to marry you because " + cause[1] + ", Will you accept? you have 30 seconds", components: [yes, no] });
                        setTimeout(() => a.delete().then(()=> msg.reply("<@" + user.id + "> ignored you" )), 30000)
                      }
                    }
                  })();
                }
                else {
                  msg.reply("You need to say why do you wanna marry <@" + user.id + ">")
                }
              }
              else {
                msg.reply("Invalid usage method, please use !marry [user] [cause]")
              }
            }
          }

          if (msg.content.toLocaleLowerCase().startsWith("!divorce")) {
            var user = msg.mentions.members.first();
            if (user.id == msg.author.id) {
              msg.reply('You can not divorce yourself!');
            } else {
              var cause = msg.content.match(/^(\S+)\s(.*)/)
              if (cause) {
                var causeslice = cause.slice(1)
                if (causeslice[1].match(/^(\S+)\s(.*)/)) {
                  var cause = causeslice[1].match(/^(\S+)\s(.*)/).slice(1)
                  var userauthor = msg.author;

                  (async () => {
                    let userAdivorce = await keyv.get(msg.author.id + "marry");
                    userAdivorce = JSON.parse(userAdivorce)
                    if (userAdivorce) {
                      if (userAdivorce.id == user.id) {
                        await keyv.delete(user.id + "marry");
                        await keyv.delete(userauthor.id + "marry");
                        msg.reply("You divorced <@" + user.id + "> cause " + cause[1])
                      } else {
                        msg.reply("You are not married to this user")
                      }
                    }
                  })();
                }
                else {
                  msg.reply("You need to say why do you wanna divorce <@" + user.id + ">")
                }
              }
              else {
                msg.reply("Invalid usage method, please use !divorce [user] [cause]")
              }
            }
          }
          ////////////////////


        }
      }
    });
  //End of blacklist else



})

audioPlayer.on(AudioPlayerStatus.Idle, () => {
  if (playing != 0) {
    const connection = getVoiceConnection(playing)
    connection.disconnect()
    playchannel.send("✅ ***The audio was ended, the bot is now Idle!***")
    playchannel = 0
    playing = 0
  }
});



client.on("guildCreate", (guild) => {
  (async () => {

    const updatedRoles = [];
    let mutedrole = guild.roles.cache.find(m => m.name === "Muted");

    if (!mutedrole) {
      try {
        let role = await guild.roles.create({
          name: "Muted",
          color: "black",
        })
        const updatedPermissions = role.permissions.remove('SEND_MESSAGES');
        await role.setPermissions(updatedPermissions.bitfield);
        updatedRoles.push(member.user.presence.status);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      guild.channels.create('bot-logs', {
        type: 'GUILD_TEXT',
      }).then(function channel(chan) {
        chan.send("This channel was generated by decaffeinatedbot, here all the moderation logs will be displayed.")
      })
    }
    catch {
      console.log("error");
    }
  })();

});


client.on('interactionCreate', interaction => {
  if (!interaction.isButton()) return;
  let json = JSON.parse(interaction.customId);
  let userAMarriage = json.aid;
  let userBMarriage = json.uid;
  let yesno = json.a;
  if (interaction.user.id != userBMarriage) {
    interaction.reply({ ephemeral: true, content: "Sorry but you can't reply to this" })
  } else {
    (async () => {
      let names = await keyv.get(userAMarriage + userBMarriage + "marriagetry")
      names = JSON.parse(names);
      if (yesno == "y") {
        let useraprofile = { "username": names.uname, "id": userBMarriage }
        let userbprofile = { "username": names.aname, "id": userAMarriage }
        await keyv.set(userAMarriage + "marry", JSON.stringify(useraprofile));
        await keyv.set(userBMarriage + "marry", JSON.stringify(userbprofile));
        await keyv.delete(userAMarriage + userBMarriage + "marriagetry")
        interaction.reply("Congrats <@" + userAMarriage + "> you are now married to <@" + userBMarriage + ">")
        interaction.message.delete();
      }
      if (yesno == "n") {
        interaction.reply("<@" + userBMarriage + "> denied <@" + userAMarriage + ">")
        interaction.message.delete();
        await keyv.delete(userAMarriage + userBMarriage + "marriagetry")
      }

    })();
  }


});









////////////////////////////////logger lines/////////////////////////////


client.on('messageDelete', function (msg, channel) {

  let c = msg.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
  if (c && msg.content) {
    try {
      const embeddelete = new Discord.MessageEmbed()
        .setColor("#00FFFF")
        .setTitle('Message deleted in ' + msg.channel.name + " channel")
        .setAuthor("By " + msg.author.tag, "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png")
        .addFields(
          { name: 'Content:', value: msg.content },
        )
        .setTimestamp()
      c.send({ embeds: [embeddelete] })
    }
    catch {
      console.log("error")
    }
  }
});


client.on('messageUpdate', function (msg, newmsg) {

  let c = msg.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
  if (c && msg.content) {
    try {
      const embededit = new Discord.MessageEmbed()
        .setColor("#00FFFF")
        .setTitle('Message edited in ' + msg.channel.name + " channel")
        .setAuthor("By " + msg.author.tag, "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png")
        .addFields(
          { name: 'Old content:', value: msg.content },
          { name: 'New content:', value: newmsg.content },
        )
        .setTimestamp()
      c.send({ embeds: [embededit] })
    } catch {
      console.log("error")
    }
  }
});

client.on("guildMemberUpdate", function (memberb4, memberafter) {
  let c = memberafter.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
  if (c) {
    if (memberb4.roles.cache.size > memberafter.roles.cache.size) {
      const embedrole = new Discord.MessageEmbed()
        .setColor("#00FFFF")
        .setTitle('Role removed from ' + memberafter.user.tag)
        .setTimestamp()
      memberb4.roles.cache.forEach(role => {
        if (!memberafter.roles.cache.has(role.id)) {
          embedrole.addField("Removed role:", role.name);
        }
      });
      c.send({ embeds: [embedrole] })
    }
    if (memberb4.roles.cache.size < memberafter.roles.cache.size) {
      const embedrole = new Discord.MessageEmbed()
        .setColor("#00FFFF")
        .setTitle('Role added for ' + memberafter.user.tag)
        .setTimestamp()
      memberafter.roles.cache.forEach(role => {
        if (!memberb4.roles.cache.has(role.id)) {
          embedrole.addField("Added role:", role.name);
        }
      });
      c.send({ embeds: [embedrole] })
    }
  }
});

client.on("channelCreate", function (channel) {
  let c = channel.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
  if (c) {
    console.log(channel)
    const embedchannel = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle('Channel "' + channel.name + '" was created')
      .setTimestamp()
    c.send({ embeds: [embedchannel] })
  }
});

client.on("channelDelete", function (channel) {
  let c = channel.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
  if (c) {
    console.log(channel)
    const embedchannel = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle('Channel "' + channel.name + '" was deleted')
      .setTimestamp()
    c.send({ embeds: [embedchannel] })
  }
});

client.on("channelUpdate", function (channel, chan) {
  let c = channel.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");

  if (c) {
    if (channel.name != chan.name) {
      const embedchannel = new Discord.MessageEmbed()
        .setColor("#00FFFF")
        .setTitle('Channel "' + channel.name + '" was edited')
        .setTimestamp()
        .addFields(
          { name: 'Old name:', value: channel.name },
          { name: 'New name:', value: chan.name },
        )
      c.send({ embeds: [embedchannel] })
    }
  }
});

client.on('inviteCreate', function (newInvite) {
  let c = newInvite.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
  if (c) {
    const embedinvite = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle("Invite generated")
      .setAuthor("By " + newInvite.inviter.tag, "https://cdn.discordapp.com/avatars/" + newInvite.inviter.id + "/" + newInvite.inviter.avatar + ".png")
      .setTimestamp()
      .addFields(
        { name: 'Invite code', value: newInvite.code },
      )
    c.send({ embeds: [embedinvite] })
  }
})

client.on('guildMemberAdd', function (member) {
  console.log(member)
  let c = member.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
  if (c) {
    const embedjoin = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle("User joined")
      .setAuthor(member.user.tag + " joined the server", "https://cdn.discordapp.com/avatars/" + member.id + "/" + member.user.avatar + ".png")
      .setTimestamp()
    c.send({ embeds: [embedjoin] })
  }
})

client.on('guildMemberRemove', function (member) {
  console.log(member)
  let c = member.guild.channels.cache.find(c => c.name.toLowerCase() === "bot-logs" || c.name.toLowerCase() === "bot_logs");
  if (c) {
    const embedleft = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle("User left")
      .setAuthor(member.user.tag + " left the server", "https://cdn.discordapp.com/avatars/" + member.id + "/" + member.user.avatar + ".png")
      .setTimestamp()
    c.send({ embeds: [embedleft] })
  }
})
/////////////////////////////////////////////////////////////////////////



client.login(process.env.DISCORDTOKEN);


server.listen(process.env.PORT || 5000, () => {
  console.log("Listening Ports 5000 and " + process.env.PORT)
})




////////////WEB SERVER LINES //////////////////////////////////////

app.get('/', function (req, res) {
  res.render('index', { totalguilds: client.guilds.cache.size });

});

app.get('/commands', function (req, res) {
  res.sendFile(__dirname + '/public/commands.html');
});

app.get('/favicon', function (req, res) {
  res.sendFile(__dirname + '/public/avatar.png');
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

function keepBotAlive() {
  fetch('https://decaffeinatedbot.herokuapp.com/')  //////////////Its cause i need a worked dyno, but worker dynos cant handle web requests, i should fix it on next versions
  setTimeout(keepBotAlive, 600000)
}


//////////////////////////////////////////////////////////////////













// CSS Color Names
// Compiled on github by @bobspace. https://gist.github.com/bobspace/2712980  147 colors
const colornames = [
  "Alice Blue",
  "Antique White",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "Blanched Almond",
  "Blue",
  "Blue Violet",
  "Brown",
  "Burly Wood",
  "Cadet Blue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "Corn flower Blue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "Dark Blue",
  "Dark Cyan",
  "Dark Golden Rod",
  "Dark Gray",
  "Dark Grey",
  "Dark Green",
  "Dark Khaki",
  "Dark Magenta",
  "Dark Olive Green",
  "Dark Orange",
  "Dark Orchid",
  "Dark Red",
  "Dark Salmon",
  "Dark Sea Green",
  "Dark Slate Blue",
  "Dark Slate Gray",
  "Dark Slate Grey",
  "Dark Turquoise",
  "Dark Violet",
  "Deep Pink",
  "Deep Sky Blue",
  "Dim Gray",
  "Dim Grey",
  "Dodger Blue",
  "Fire Brick",
  "Floral White",
  "Forest Green",
  "Fuchsia",
  "Gainsboro",
  "Ghost White",
  "Gold",
  "Goldenrod",
  "Gray",
  "Grey",
  "Green",
  "Green Yellow",
  "Honey Dew",
  "Hot Pink",
  "Indian Red",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "Lavender Blush",
  "Lawn Green",
  "Lemon Chiffon",
  "Light Blue",
  "Light Coral",
  "Light Cyan",
  "Light Goldenrod Yellow",
  "Light Gray",
  "Light Grey",
  "Light Green",
  "Light Pink",
  "Light Salmon",
  "Light Sea Green",
  "Light Sky Blue",
  "Light Slate Gray",
  "Light Slate Grey",
  "Light Steel Blue",
  "Light Yellow",
  "Lime",
  "Lime Green",
  "Linen",
  "Magenta",
  "Maroon",
  "Medium Aquamarine",
  "Medium Blue",
  "Medium Orchid",
  "Medium Purple",
  "Medium Sea Green",
  "Medium Slate Blue",
  "Medium Spring Green",
  "Medium Turquoise",
  "Medium Violet Red",
  "Midnight Blue",
  "Mint Cream",
  "Misty Rose",
  "Moccasin",
  "Navajo White",
  "Navy",
  "Old Lace",
  "Olive",
  "Olive Drab",
  "Orange",
  "Orange Red",
  "Orchid",
  "Pale Goldenrod",
  "Pale Green",
  "Pale Turquoise",
  "Pale Violet Red",
  "Papaya Whip",
  "Peach Puff",
  "Peru",
  "Pink",
  "Plum",
  "Powder Blue",
  "Purple",
  "Rebecca Purple",
  "Red",
  "Rosy Brown",
  "Royal Blue",
  "Saddle Brown",
  "Salmon",
  "Sandy Brown",
  "Sea Green",
  "Sea Shell",
  "Sienna",
  "Silver",
  "Sky Blue",
  "Slate Blue",
  "Slate Gray",
  "Slate Grey",
  "Snow",
  "Spring Green",
  "Steel Blue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "White Smoke",
  "Yellow",
  "Yellow Green",
];


//First names array php by @brysonian https://gist.github.com/brysonian/99430   151 names
//converted for js by decaffeinatedcoffee
const names = [
  'Allison',
  'Arthur',
  'Ana',
  'Alex',
  'Arlene',
  'Alberto',
  'Barry',
  'Bertha',
  'Bill',
  'Bonnie',
  'Bret',
  'Beryl',
  'Chantal',
  'Cristobal',
  'Claudette',
  'Charley',
  'Cindy',
  'Chris',
  'Dean',
  'Dolly',
  'Danny',
  'Danielle',
  'Dennis',
  'Debby',
  'Erin',
  'Edouard',
  'Erika',
  'Earl',
  'Emily',
  'Ernesto',
  'Felix',
  'Fay',
  'Fabian',
  'Frances',
  'Franklin',
  'Florence',
  'Gabielle',
  'Gustav',
  'Grace',
  'Gaston',
  'Gert',
  'Gordon',
  'Humberto',
  'Hanna',
  'Henri',
  'Hermine',
  'Harvey',
  'Helene',
  'Iris',
  'Isidore',
  'Isabel',
  'Ivan',
  'Irene',
  'Isaac',
  'Jerry',
  'Josephine',
  'Juan',
  'Jeanne',
  'Jose',
  'Joyce',
  'Karen',
  'Kyle',
  'Kate',
  'Karl',
  'Katrina',
  'Kirk',
  'Lorenzo',
  'Lili',
  'Larry',
  'Lisa',
  'Lee',
  'Leslie',
  'Michelle',
  'Marco',
  'Mindy',
  'Maria',
  'Michael',
  'Noel',
  'Nana',
  'Nicholas',
  'Nicole',
  'Nate',
  'Nadine',
  'Olga',
  'Omar',
  'Odette',
  'Otto',
  'Ophelia',
  'Oscar',
  'Pablo',
  'Paloma',
  'Peter',
  'Paula',
  'Philippe',
  'Patty',
  'Rebekah',
  'Rene',
  'Rose',
  'Richard',
  'Rita',
  'Rafael',
  'Sebastien',
  'Sally',
  'Sam',
  'Shary',
  'Stan',
  'Sandy',
  'Tanya',
  'Teddy',
  'Teresa',
  'Tomas',
  'Tammy',
  'Tony',
  'Van',
  'Vicky',
  'Victor',
  'Virginie',
  'Vince',
  'Valerie',
  'Wendy',
  'Wilfred',
  'Wanda',
  'Walter',
  'Wilma',
  'William',
  'Kumiko',
  'Aki',
  'Miharu',
  'Chiaki',
  'Michiyo',
  'Itoe',
  'Nanaho',
  'Reina',
  'Emi',
  'Yumi',
  'Ayumi',
  'Kaori',
  'Sayuri',
  'Rie',
  'Miyuki',
  'Hitomi',
  'Naoko',
  'Miwa',
  'Etsuko',
  'Akane',
  'Kazuko',
  'Miyako',
  'Youko',
  'Sachiko',
  'Mieko',
  'Toshie',
  'Junko'];

//Animal names array by @borlaym https://gist.github.com/borlaym/585e2e09dd6abd9b0d0a  223 animals
const animals = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Anteater",
  "Antelope",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Boar",
  "Buffalo",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Coyote",
  "Crab",
  "Crane",
  "Crocodile",
  "Crow",
  "Curlew",
  "Deer",
  "Dinosaur",
  "Dog",
  "Dogfish",
  "Dolphin",
  "Dotterel",
  "Dove",
  "Dragonfly",
  "Duck",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Gnat",
  "Gnu",
  "Goat",
  "Goldfinch",
  "Goldfish",
  "Goose",
  "Gorilla",
  "Goshawk",
  "Grasshopper",
  "Grouse",
  "Guanaco",
  "Gull",
  "Hamster",
  "Hare",
  "Hawk",
  "Hedgehog",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Human",
  "Hummingbird",
  "Hyena",
  "Ibex",
  "Ibis",
  "Jackal",
  "Jaguar",
  "Jay",
  "Jellyfish",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Kouprey",
  "Kudu",
  "Lapwing",
  "Lark",
  "Lemur",
  "Leopard",
  "Lion",
  "Llama",
  "Lobster",
  "Locust",
  "Loris",
  "Louse",
  "Lyrebird",
  "Magpie",
  "Mallard",
  "Manatee",
  "Mandrill",
  "Mantis",
  "Marten",
  "Meerkat",
  "Mink",
  "Mole",
  "Mongoose",
  "Monkey",
  "Moose",
  "Mosquito",
  "Mouse",
  "Mule",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Oryx",
  "Ostrich",
  "Otter",
  "Owl",
  "Oyster",
  "Panther",
  "Parrot",
  "Partridge",
  "Peafowl",
  "Pelican",
  "Penguin",
  "Pheasant",
  "Pig",
  "Pigeon",
  "Pony",
  "Porcupine",
  "Porpoise",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Red panda",
  "Reindeer",
  "Rhinoceros",
  "Rook",
  "Salamander",
  "Salmon",
  "Sand Dollar",
  "Sandpiper",
  "Sardine",
  "Scorpion",
  "Seahorse",
  "Seal",
  "Shark",
  "Sheep",
  "Shrew",
  "Skunk",
  "Snail",
  "Snake",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Stinkbug",
  "Stork",
  "Swallow",
  "Swan",
  "Tapir",
  "Tarsier",
  "Termite",
  "Tiger",
  "Toad",
  "Trout",
  "Turkey",
  "Turtle",
  "Viper",
  "Vulture",
  "Wallaby",
  "Walrus",
  "Wasp",
  "Weasel",
  "Whale",
  "Wildcat",
  "Wolf",
  "Wolverine",
  "Wombat",
  "Woodcock",
  "Woodpecker",
  "Worm",
  "Wren",
  "Yak",
  "Zebra"
]


let meses = [
  'VoidMonth',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

let days = [
  'neverst',
  '1st',
  '2nd',
  '3rd',
  '4th',
  '5th',
  '6th',
  '7th',
  '8th',
  '9th',
  '10th',
  '11th',
  '12th',
  '13th',
  '14th',
  '15th',
  '16th',
  '17th',
  '18th',
  '19th',
  '20th',
  '21st',
  '22nd',
  '23rd',
  '24th',
  '25th',
  '26th',
  '27th',
  '28th',
  '29th',
  '30th',
  '31st',
]

let clocks = [
  '🕛',
  '🕐',
  '🕑',
  '🕒',
  '🕓',
  '🕔',
  '🕕',
  '🕖',
  '🕗',
  '🕘',
  '🕙',
  '🕚',
  '🕛',
  '🕐',
  '🕑',
  '🕒',
  '🕓',
  '🕔',
  '🕕',
  '🕖',
  '🕗',
  '🕘',
  '🕙',
  '🕚'
]
