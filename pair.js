const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: makeWASocket,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys");



function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function VENOCYBER_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "debug"}).child({level: "debug"}),
                browser: Browsers.windows('safari'),
                         });
             if(!sock.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await sock.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            sock.ev.on('creds.update', saveCreds)
            sock.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await sock.sendMessage(sock.user.id, { text: '' + b64data });

               let VENOCYBER_MD_TEXT = `
*_Pair Code Connected by auanoko tech_*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『 WOW YOU CHOOSEN VENOCYBER-MD 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚══════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _youtube.com/@JASTINMTEWA-vn9pl_
║❒ *Owner:* _https://wa.me/message/A4QG2JZKBXFTN1_
║❒ *Repo:* _https://github.com/Kingjux/venocyber-md_
║❒ *WaGroup:* _https://chat.whatsapp.com/HSln3blDuuuKvC8njxyCCN_
_
║❒ *Plugins:* _https://github.com/Kingjux/venocyber-md-plugins_
╚══════════════════════╝ 
_____________________________________

_Don't Forget To Give Star To My Repo_`
 await sock.sendMessage(sock.user.id,{text:VENOCYBER_MD_TEXT},{quoted:session})
 

        await delay(100);
        await sock.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    VENOCYBER_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await VENOCYBER_MD_PAIR_CODE()
});
module.exports = router
