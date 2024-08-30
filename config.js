const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = false;


global.Owner = ["447519773574"]; //like 2347080968564 
global.OwnerName =  "Spiđer";
global.BotName = "♱MAKINO-MD-V2♱♡⃤";
global.packname = "♱MAKINO-MD-V2♱♡⃤";                             //Do not change.
global.author = "Spîdĕr";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!


global.sessID = process.env.sessID |{"noiseKey":{"private":{"type":"Buffer","data":"0CKoRuf7dJkKy8k42ELPQv47H449J3p68bdCXX9ZO3g="},"public":{"type":"Buffer","data":"S5RoNBwy0X3PEH/je9KVlko1LM/+elm0yD+IFD12h2s="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"0ABusg1RRraOSy+QWPFGtauKZltIdjEjQnDWFhOH9EY="},"public":{"type":"Buffer","data":"JiZR+KJcVIN+86B28lcDpr1vybzh3jFMhIl5nWK1glo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"GLeEEhGCny5k+X5DXDTIOJ/WVgorDmFnhfm3wM5abHs="},"public":{"type":"Buffer","data":"5L56x9HMY4DUyll1fwBNUc2yJw/bqjTjFKIlAVJNVWg="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"gFE3E4iBleoapQWuQw73xGcBhrWp/puU6mpv2SKb7Xk="},"public":{"type":"Buffer","data":"SjnSCMc0jQoXRpKeA+KK44evrOs5WPJuxX/+9jSAwHY="}},"signature":{"type":"Buffer","data":"hZKem2Do/PdS1UQ4JzIf282M061SRTj96NVwed4WNg2Vvzg53fKaKsf3eIErm/+MwOHsbhCBs7EmOK6JeejSCg=="},"keyId":1},"registrationId":35,"advSecretKey":"8op39X7/RLSK2GPgQx2wmFBpapK79YDxpfnZ+L5pMTI=","processedHistoryMessages":[{"key":{"remoteJid":"447519773574@s.whatsapp.net","fromMe":true,"id":"6877B7BA22157CC2B0AD2FCFC846DFC6"},"messageTimestamp":1724987834}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"dg3k4-0WQsa4EFoZtj2QAQ","phoneId":"fdf4784f-f763-400b-b641-65365660138a","identityId":{"type":"Buffer","data":"V68wrp2oQbyOWWX/RPOQ08UMUAU="},"registered":true,"backupToken":{"type":"Buffer","data":"vECKAP68+1e5+tuBKFu5J6P+V00="},"registration":{},"pairingCode":"XFGWGV4F","me":{"id":"447519773574:30@s.whatsapp.net","name":"Ryăn🧊🕸"},"account":{"details":"CPvZtbUBEKrzxLYGGAEgACgA","accountSignatureKey":"uLDI0WjYSlog2A1HlsRmrmq8eeGODDV77ghQpWLdZDg=","accountSignature":"otWrUxqsuYqM6Ge7P4WKNx29yIFyMAXUtf0ZxD1Gr3pfZ6h16c42Ro2r0cP2qG7LQ3syyAa0idF2aRhxp+u+CQ==","deviceSignature":"8jwOe9D8CMZYLoZfsLS1cKH1xEDZvDZV+lgsN/0UWaf/UDdKdk99v8xsT1+qmo7MPsPgEOACwoO3MhUJAN1FBg=="},"signalIdentities":[{"identifier":{"name":"447519773574:30@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BbiwyNFo2EpaINgNR5bEZq5qvHnhjgw1e+4IUKVi3WQ4"}}],"platform":"android","lastAccountSyncTimestamp":1724987831,"myAppStateKeyId":"AAAAAA9U"}| ``
global.prefa = ['','!','.',','] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.OwnerNumber = [""] //Ignore,Unused

//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
