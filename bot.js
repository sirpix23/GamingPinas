const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", function(message) {
    console.log("Ready");   
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "GP! invite" || message.content == "gp! invite" || 
        message.content == "GP! Invite" || message.content == "gp! Invite" ||
        message.content == "GP! INVITE" || message.content == "gp! INVITE") {
        
        message.channel.sendMessage("This is a discord community server for filipino gamers!");
    
    }

});

bot.on("serverNewMember", function (server, user) {
           mybot.addMemberToRole(user, server.roles.get("name", "Guest"), function (err) { if (err) console.log(err) })
});

bot.login(process.env.BOT_TOKEN);
