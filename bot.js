const Discord = require("discord.js");

const TOKEN = "NDMyMzQ2MzExNzY5OTgwOTI4.DasCkw.2QGObh0JhKtqb6SYjjqhvOXVH7k"


var bot = new Discord.Client();

bot.on("ready", function(message) {
    console.log("Ready");   
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "What is this" || message.content == "what is this" || 
    message.content == "What is this?" || message.content == "what is this?") {
        message.channel.sendMessage("This is a discord community server for filipino gamers!");
    }

});

bot.on("serverNewMember", function (server, user) {
           mybot.addMemberToRole(user, server.roles.get("name", "Guest"), function (err) { if (err) console.log(err) })
});

bot.login(TOKEN);
