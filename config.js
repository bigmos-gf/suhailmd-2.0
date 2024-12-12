const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_09_12_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg5LFxuICAgICAgICA4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMxLFxuICAgICAgICA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDczLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc3LFxuICAgICAgICA5MyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDY0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDksXG4gICAgICAgIDY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDcxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzLFxuICAgICAgICA3MixcbiAgICAgICAgODcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZcUp6ZTJSeEpJbjMrNDFVWnNBWlI3ZWVrMWIzdFI5ZWczM2IrSlE1N0VBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpdzliay00WFFreU1PNnpEMFRqcXZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQwMGFiZjc5LTYxNDItNGRiMy1hN2M1LTFhMGM0NTQ5YzhmZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICA0NSxcbiAgICAgIDE5MCxcbiAgICAgIDI2LFxuICAgICAgMjA4LFxuICAgICAgNDQsXG4gICAgICAyMDYsXG4gICAgICAyMzIsXG4gICAgICAxMTcsXG4gICAgICAyOCxcbiAgICAgIDU2LFxuICAgICAgMTU4LFxuICAgICAgMTQ4LFxuICAgICAgOTUsXG4gICAgICAyMjgsXG4gICAgICAxMjYsXG4gICAgICAxNDAsXG4gICAgICAzNixcbiAgICAgIDE2LFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMyxcbiAgICAgIDIxNCxcbiAgICAgIDIwNCxcbiAgICAgIDE1OCxcbiAgICAgIDk4LFxuICAgICAgMTE2LFxuICAgICAgNzAsXG4gICAgICAyNSxcbiAgICAgIDUyLFxuICAgICAgMjIyLFxuICAgICAgMTE0LFxuICAgICAgMzEsXG4gICAgICAyMzIsXG4gICAgICAxOTgsXG4gICAgICA4NCxcbiAgICAgIDQ2LFxuICAgICAgMzUsXG4gICAgICA1NixcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCQUpFRkw4Q1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MDY5NDg0NzozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcwMjYxNDQ1ODk0MjM1OjMwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xLZjVLUUJFUG1rNjdvR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUWRYa1VDTGdVSEhFdjRaRk9tNVY0U1NKN1VzZ2piSlVqaSsxUnNScDFYYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4akVTdUV3Z082SFBlNy9qQWJwTTNaVlVDRnFpd3pHVVJienU4QkFEVkFyWHdIYWswaDYrNTVhbHYrODQ4Z2VpaU1hSmt1MjNXd21IeTRVRFFOaGJDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5QVo0T2k2TXB0Y29mamY1VnJQRlN1WC9DWWNIVHd6NlY2KzkwaWRVNVR2S3ZXNS9GSE4vSXh0bUZzWEpIWHZzWElNQ3FKLy9ZYkVZWXdjK25DSDhCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQwNjk0ODQ3OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQwMDUzNzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQbEJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBsQi5qc29uIjogIntcImtleURhdGFcIjpcIlBOOGp4M1RKQ29EV09ZdjJQTkJOVExEbC9seWVWMlU2SURyaElmd1BESHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQ1NTc1MzQ2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM5Nzg3OTc2MzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
