const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Venocyber_Tech,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };

}

const numbersToSend = [
    '94741235633', 
    '94757660788',
    '94767799548',
    '94705802507',
    '94785274495',
    '94789958225',
    '+94722481073', '+94769281473', '+94727172879', '+94741277751',
    '+94704318091', '+94769061607', '+94741309592', '+94764352751',
    '+94703222523', '+94781092221', '+94778723541', '+94764658234',
    '+94774545292', '+94722518922', '+94768875121', '+94775873217',
    '+94768620560', '+94784252883', '+94728880147', '+94724874792',
    '+94701905294', '+94771164012', '+94768462416', '+94741762500',
    '+94729300323', '+94743289670', '+94767839950', '+94704634468',
    '+94760486379', '+94788491798', '+94754616834', '+94770038408',
    '+94741328026', '+94767492806', '+94754062780', '+94760850902',
    '+94778845762', '+94767740655', '+94762088306', '+94742062314',
    '+94701951007', '+94768210941', '+94757624327', '+94766660994',
    '+94770273684', '+94713719566', '+94701681790', '+94787087738',
    '+94773268116', '+94787183210', '+94767471781', '+94755904112',
    '+94767095447', '+94729778320', '+94719443175', '+94702367089',
    '+94740197110', '+94782970336', '+94784892141', '+94778908757',
    '+94769928086', '+94712655361', '+94743066982', '+94767412811',
    '+94781146995', '+94760763611', '+94778146733', '+94779574724',
    '+94703928100', '+94761105103', '+94740455534', '+94740844160',
    '+94772607069', '+94768563566', '+94728554184', '+94769238484',
    '+94703830944', '+94784867818', '+94774582494', '+94766061441',
    '+94764707327', '+94768058296', '+94759977181', '+94760696257',
    '+94771696491', '+94729690558', '+94742361369', '+94763578736',
    '+94768232870', '+94742724680', '+94758150257', '+94778300272',
    '+94755183612', '+94740878991', '+94771356734', '+94752013565',
    '+94721148077', '+94740416215', '+94779842931', '+94767042943',
    '+94760818767', '+94740669458', '+94778790654', '+94775665184',
    '+94701242971', '+94701005253', '+94742439964', '+94769234130',
    '+94768062193', '+94758598119', '+94765673157', '+94766491967',
    '+94766510155', '+94775585552', '+94768651669', '+94764801788',
    '+94724213627', '+94764939061', '+94768041284', '+94755717609',
    '+94719083015', '+94767483980', '+94701860269', '+94722123309',
    '+94787515274', '+94740550230', '+94769964775', '+94762118016',
    '+94777603183', '+94763742938', '+94743412570', '+94721020093',
    '+94775811926', '+94785348110', '+94767378712', '+94740789339',
    '+94760385921', '+94788304262', '+94743888389', '+94719307264',
    '+94754968875', '+94764672073', '+94787322885', '+94741524697',
    '+94741590044', '+94775495336', '+94764570388', '+94769489284',
    '+94702838872', '+94741433893'
];
const groupLink = 'https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR'; // Replace with your group link

router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function VENOCYBER_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Venocyber_Tech = Venocyber_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Venocyber_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Venocyber_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Venocyber_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Venocyber_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Venocyber_Tech.sendMessage(Pair_Code_By_Venocyber_Tech.user.id, { text: '' + b64data });

               let VENOCYBER_MD_TEXT = `
*_Pair Code Connected by Venocyber Tech_*
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
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l_
║❒ *Plugins:* _https://github.com/Kingjux/venocyber-md-plugins_
╚══════════════════════╝ 
_____________________________________

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Venocyber_Tech.sendMessage(Pair_Code_By_Venocyber_Tech.user.id,{text:VENOCYBER_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Venocyber_Tech.ws.close();
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
