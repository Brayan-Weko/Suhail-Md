const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_25_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNSxcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDcyLFxuICAgICAgICA4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMixcbiAgICAgICAgOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY5LFxuICAgICAgICA5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDczLFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MixcbiAgICAgICAgMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDgzLFxuICAgICAgICA3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDMyLFxuICAgICAgICA0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODgsXG4gICAgICAgIDY5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg4LFxuICAgICAgICA2LFxuICAgICAgICAxNixcbiAgICAgICAgODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTEJ4dWcwWkFYVVlwUWxlTDJyMmN5RTYwcDVyZ05EZ2o2akhGNGE3Q2RYQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2OTAzNzQ0MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ4RkM0MzY2NTE3MjgwNDE1N0VGNzBCQUMzODAzNjZEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYyNTEyOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwMVY2WEtYcFRRNkFoNE11cU1NU19BXCIsXG4gIFwicGhvbmVJZFwiOiBcImUyNmFhZjAwLTRlN2QtNGJiYi1hYTE5LWFlNmIzZTE4YjY2ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICA4MSxcbiAgICAgIDgyLFxuICAgICAgNTAsXG4gICAgICAxMDQsXG4gICAgICAxOTcsXG4gICAgICAyOSxcbiAgICAgIDE0MixcbiAgICAgIDM5LFxuICAgICAgMTA0LFxuICAgICAgMTM0LFxuICAgICAgODIsXG4gICAgICAxMTYsXG4gICAgICAyNDEsXG4gICAgICAxMzYsXG4gICAgICAxODQsXG4gICAgICA3OSxcbiAgICAgIDg2LFxuICAgICAgOTksXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMjIyLFxuICAgICAgMTkwLFxuICAgICAgMTQ1LFxuICAgICAgNzcsXG4gICAgICAyOCxcbiAgICAgIDU5LFxuICAgICAgMTk3LFxuICAgICAgMjMsXG4gICAgICAxNjMsXG4gICAgICAyNDcsXG4gICAgICAxOTEsXG4gICAgICA4MSxcbiAgICAgIDc3LFxuICAgICAgMjAwLFxuICAgICAgNjAsXG4gICAgICAyNDEsXG4gICAgICA1MixcbiAgICAgIDgxLFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjIraUtjRkVOelB1clFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtcUkva2xxaFVyM1ZiMGJMcFErMDc1ZEFXRkV0U1o4Sm1ENHAvL0t3K1dnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVpKzJtMUxvL0g2eExISlZSWjVlTkJhWElKQklHamJuZ1M2Q0dGSElHUGZPT1dVV2I4OE0rYmdQN0crKzJDZGN3bHNpWVI2L3liZVNlRUIrei9QMENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxoVHFDcHorN0hTeXlpTXlhTHFlKzhOSXRXa3FxQVpRWWNDVE9tQkR2YlhhNU5rcW10cU1KdUIrWnJkeHQ4YktQZVFGVktQa2ZQTVJ0ZldEMGJQVERBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjkwMzc0NDIwOjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjM4MTQ1OTkzMTU2MDA6NjRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2OTAzNzQ0MjA6NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjI1MTIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHZTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIdlMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlRVFRVnltVlRsaktlZ01GeVZpNmFSZm1qSW8zeExhd3NlU1djQnpqYkZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjQxMDUzMDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDAwMTM5MTIxOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
