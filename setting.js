
const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var { updateCMDStore,isbtnID,getCMDStore,getCmdForCmdId,connectdb,input,get, updb,updfb } = require("../lib/database")

let BOTOW = '';

if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot හි හිමිකරු හෝ උපපරිපාලකයෙකු නොවේ !*";
} else {
  BOTOW = "*You are not the bot's owner or moderator !*";
}



cmd({
    pattern: "work_type",
    react: "🔁",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, msr, isGroup, isSudo, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, isDev, isCreator, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if ( !isSudo && !isOwner && !isMe ) return await reply('*OWNER COMMAND ⛔*') 
if(!q) return 
	
if(q === "private"){
let gett = await get("WORK_TYPE")
if(gett === q) return await reply("*All ready worktype PRIVATE🧐*")  
await input("WORK_TYPE", q)

await reply("*🌐 WORK_TYPE  - PRIVATE*")
await conn.sendMessage(from, { react: { text: `✔`, key: mek.key } })
	
} else if (q === "only_group"){
let gett = await get("WORK_TYPE")
if(gett === q) return await reply('*All ready worktype ONLY_GROUP🧐*')  
await input("WORK_TYPE", q)

await reply("*🌐 WORK_TYPE  - ONLY_GROUP*")
await conn.sendMessage(from, { react: { text: `✔`, key: mek.key } })
	
} else if (q === "public"){
let gett = await get("WORK_TYPE")
if(gett === q) return await reply('*All ready worktype PUBLIC🧐*')  
await input("WORK_TYPE", q)

await reply("*🌐 WORK_TYPE  - PUBLIC*")
await conn.sendMessage(from, { react: { text: `✔`, key: mek.key } })
}  else if (q === "inbox"){
let gett = await get("WORK_TYPE")
if(gett === q) return await reply('*All ready worktype INBOX🧐*')  
await input("WORK_TYPE", q)

await reply("*🌐 WORK_TYPE  - INBOX*")
await conn.sendMessage(from, { react: { text: `✔`, key: mek.key } })
} else {
const invalid = await conn.sendMessage(from, { text: msr.valid_con }, { quoted: mek })
await conn.sendMessage(from, { react: { text: `❓`, key: invalid.key } })
}
} catch (e) {
await conn.sendMessage(from, { react: { text: `❌`, key: mek.key } })
console.log(e)
reply(`Error !!\n\n*${e}*`)
}
})


cmd({
    pattern: "button",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, isSudo, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe && !isSudo) return await reply('*OWNER COMMAND ⛔*') 

const isAnti = async(teks) => {
let getdata = await get(teks)
for (let i=0;i<getdata.length;i++) {
if(getdata[i] === from) return true
}
return false
}


if(q === "on"){
let gett = await get("BUTTON")
if(gett === true) return reply("*This settings all ready updated ☑️*")
await input("BUTTON", true)
await reply("*BUTTON ➜ true ✅*")
} else{
let gett = await get("BUTTON")
if(gett === false) return reply("*This settings all ready updated ☑️*")
await input("BUTTON", false)
await reply("*BUTTON ➜ false ❌*")
}
} catch (e) {
reply('*Error !!*')
l(e)
}

})
