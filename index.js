const discord = require("discord.js");
const bot = new discord.Client();
const mongoose = require("mongoose");
const chalk = require("chalk");
const { bold, red, green, blue, magenta, cyan, white, gray, black } = require("chalk");
const cf = require("cfonts")
const claudette = require("./module/links.js");
const fetch = require("node-fetch");
const config = require("./config.json");

mongoose.connect(config.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false
}).then(() => {
    console.log(chalk.green("(/) Initiating:")+chalk.white(" MongooseDatabase"))
}).catch(a => {
    console.log(chalk.green("(X) Error: ")+chalk.red(a))
});

setInterval(function() {
claudette.find({}, function(err, docs) {
if (err) console.log(err);
if (!docs) return;
    docs.forEach(docs => {
            fetch(docs.link);
    });
});
}, 30000)
 
bot.on("ready", () => {
 var _0xe2cf=["\x4A\x6F\x69\x6E\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x73\x63\x6F\x6C\x69\x6E\x6B\x2E\x67\x61\x2F\x64\x69\x73\x63\x6F\x72\x64","\x6C\x6F\x67","\x3C\x33\x20\x2E\x67\x67\x2F\x61\x7A\x75\x72\x79","\x64\x73\x63\x6F\x6C\x69\x6E\x6B\x2E\x67\x61\x2F\x64\x69\x73\x63\x6F\x72\x64","\x50\x4C\x41\x59\x49\x4E\x47","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x77\x69\x74\x63\x68\x2E\x74\x76\x2F\x23","\x73\x65\x74\x41\x63\x74\x69\x76\x69\x74\x79","\x75\x73\x65\x72"];console[_0xe2cf[1]](cyan(`${_0xe2cf[0]}`));console[_0xe2cf[1]](`${_0xe2cf[2]}`);bot[_0xe2cf[7]][_0xe2cf[6]](_0xe2cf[3],{type:_0xe2cf[4],url:_0xe2cf[5]})
});

require("./dashboard/server.js")(bot)
bot.login(process.env.token);
