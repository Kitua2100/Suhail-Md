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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_48_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3LFxuICAgICAgICA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDgwLFxuICAgICAgICA5NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcyLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDcxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDY1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDczLFxuICAgICAgICAxODQsXG4gICAgICAgIDMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg3LFxuICAgICAgICA0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZOVRJNWxxUHRrRG1hcUdJeG8xck8ySjJGTmZMRlhCQUZWRTkwdTMzcnljPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlSWtYSUlLblF4bTI1bFZOSWlCMGNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNkOTFmOWVjLWQwOGQtNGQ4OS1iZDA5LThmMGFkZThlMGY0M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAxNzUsXG4gICAgICA1MixcbiAgICAgIDIyOCxcbiAgICAgIDE0MixcbiAgICAgIDM4LFxuICAgICAgNCxcbiAgICAgIDkxLFxuICAgICAgMjE1LFxuICAgICAgMjE1LFxuICAgICAgOTQsXG4gICAgICAxNjAsXG4gICAgICAyOSxcbiAgICAgIDM2LFxuICAgICAgMjQxLFxuICAgICAgMjQzLFxuICAgICAgMjQ3LFxuICAgICAgMTI2LFxuICAgICAgMjMyLFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgMjE4LFxuICAgICAgNzYsXG4gICAgICAxNTIsXG4gICAgICAyMTgsXG4gICAgICAxMTQsXG4gICAgICAxMzksXG4gICAgICA2MSxcbiAgICAgIDQwLFxuICAgICAgMjE3LFxuICAgICAgMTg5LFxuICAgICAgMjE3LFxuICAgICAgMjA2LFxuICAgICAgMTUwLFxuICAgICAgNixcbiAgICAgIDUwLFxuICAgICAgMTcsXG4gICAgICAxNDYsXG4gICAgICAyNTAsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLVEI1SkxGUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzE3NjQwODYyOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDU1MTAyMTY5Mzc0ODE6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm5vNktJSEVQbUx0clFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5bVFkOGZsKzFLbm9GMHZFeTFTRFZ1Sy9NME5KWjdGdjk5clZaWElTUG5nPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRLc2NEb01wVUhpR0RsQnlza1k3L2RXa3BKZ0IwVkgyMDVWemsxbkEwenhubCt0c0lmYlhQTmUrSkc1cjU0cU5MT1h0dkRWdGVHTUV3ZGZpRVBDakN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVzZmF6VjRUZERSSTVuWnpnaVhuMzU3MTcrTVU5UVV0Y1JOVWtmMWRsUWNMN0JMaFZXSWFNU0Y0eFdkTkNyY2FLVURvTmZzcENaYkY4bG92V2tKempRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxNzY0MDg2MjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTUwOTEwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
