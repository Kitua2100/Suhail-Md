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


global.devs = "254717640862" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254717640862";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_07_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMjEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICA5NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyLFxuICAgICAgICAzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM1LFxuICAgICAgICA1NixcbiAgICAgICAgMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgODgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDYwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NixcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg4LFxuICAgICAgICA0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0LFxuICAgICAgICA3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid0xaRWlpSDJkS2V0dHlTSzNsbVAxRW9DbEIxdTlrak03UFpDMDJUSTV1Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUnBOZ0hCdmNRTFd0cDl6ckJuZGkyQVwiLFxuICBcInBob25lSWRcIjogXCJkYjJmZTkwMC0zMzI1LTRiMjItOGMxMi1mN2UxZjNjZDJkZTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgNzcsXG4gICAgICAyMDQsXG4gICAgICAxNzksXG4gICAgICA5NixcbiAgICAgIDE5MyxcbiAgICAgIDIyMyxcbiAgICAgIDEyOCxcbiAgICAgIDE0NixcbiAgICAgIDk2LFxuICAgICAgNTAsXG4gICAgICA4MixcbiAgICAgIDcwLFxuICAgICAgMzYsXG4gICAgICAyNDgsXG4gICAgICAyMDUsXG4gICAgICAyMSxcbiAgICAgIDIxMyxcbiAgICAgIDE4LFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDI0MixcbiAgICAgIDczLFxuICAgICAgMjQ4LFxuICAgICAgNjMsXG4gICAgICAxOTEsXG4gICAgICAxNjAsXG4gICAgICAyMzQsXG4gICAgICAyMTksXG4gICAgICAxNTMsXG4gICAgICAxOTAsXG4gICAgICAyMDksXG4gICAgICAzLFxuICAgICAgMjE2LFxuICAgICAgMTkzLFxuICAgICAgODEsXG4gICAgICAxMTgsXG4gICAgICAxNjQsXG4gICAgICAyMTcsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlo0UVNMU0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyMjc0MTM3NTozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg5MTI0ODU4MzU1OTU0OjM5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p5RnRTNFEwT3ZJdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY29lTmNKMTU4ajNYcWJmd0dmRmtJb1dEaUxpaVl6M3dsV045UVFyZ0ZVZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZc0tYTUJiRHhSZ0lSSWlKL2d6aHlZbDJwMFpkdDZDVVNoalZTclUydDRtNkx3eW13ejI5M1gxd0ZwaXNOWHhkUWt6M1pUdjFWMUZYalFRdGFjZDlDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0eU1jS0VSUnkwb2FnTGpBNjc5TER2dDE5OHhTdEFqNFA1UzBkOXhsZnloU3dhTm5hai9FN2NCRDEzRmVpanJxK3oxbHgwWmJRYjJuU3hROStseGpqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MjI3NDEzNzU6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg1ODA2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdzelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3N6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQzRCUytXWGRqU2lDMisxOGNMOTZCaVJCVGhkYU9qc2kwWHZZdU1Ielc0ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NzMzODAxMSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Francis",


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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
