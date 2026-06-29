import 'dotenv/config';
const _prefixes = process.env.PREFIXES ? process.env.PREFIXES.split(',') : ['.', '!', '/', '#'];
const config = {
    // Bot Identity
    botName: process.env.BOT_NAME || 'TAHA-MD',
    botOwner: process.env.BOT_OWNER || 'TAHA BABU',
    ownerNumber: process.env.OWNER_NUMBER || '923474771404',
    author: process.env.AUTHOR || 'sharifvau',
    packname: process.env.PACKNAME || 'TAHA-MD',
    description: process.env.DESCRIPTION || 'High performance multi-device WhatsApp bot',
    version: '6.0.0',
    // Bot Config
    prefixes: _prefixes,
    prefix: _prefixes[0],
    commandMode: process.env.COMMAND_MODE || 'public',
    timeZone: process.env.TIMEZONE || 'Asia/Karachi',
    // Links
    channelLink: process.env.CHANNEL_LINK || 'https://whatsapp.com/channel/0029Vb7e7Xd0wajm0hUt2b1R',
    updateZipUrl: process.env.UPDATE_URL || 'https://whatsapp.com/channel/0029Vb7e7Xd0wajm0hUt2b1R',
    ytChannel: process.env.YT_CHANNEL || '@tahachandia',
    // Session
    sessionId: process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"6BdzKVDos+rNs5EIVkf9bFSKjiZLXKCpqWkGjTd06nY="},"public":{"type":"Buffer","data":"KKZ3tWSv5KinXPjI6H7QVTKaoa9T9OvchCyCgQGISnE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"ILIYPxSL6vpDYRx43uonHg1PLPsDNTQ7sjALvUchr10="},"public":{"type":"Buffer","data":"wBPsf+08e3Lcvbpw5WlKiZFy+cFPFvGRQpA31+u58zU="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aDAovcKomYa31h4s0/FWfgrvdeHZMAX8g58knI67hlM="},"public":{"type":"Buffer","data":"c6eHsLds+2pKkbbivqbi1NwCJ5Pck+P7Mzcs4VumXng="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"sFglQnQAu0ckyFHXCdEv9YGokJIBRuaCYajE4Z3C4Gg="},"public":{"type":"Buffer","data":"GH+oddJ+Wu5qaWLyU/AHQUSBWAdioPCnFmjzawsUnmU="}},"signature":{"type":"Buffer","data":"11Nw4bBwRedCXvfNm2ONV7aoexEZFQ/Dq7XFRa5SIb3Zk1sEVH2PflM2iZ3LmjR+3YWeA85AkEGjTsslItX+BQ=="},"keyId":1},"registrationId":147,"advSecretKey":"cEnMXxC0/J02TWQCPZT2ZUQKkxQBKf5KdHKbn5harA0=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"J5X6NA92","me":{"id":"923291489055:13@s.whatsapp.net","name":"I'm not your"},"account":{"details":"COq2qesDEPjEiNIGGAEgACgA","accountSignatureKey":"LQPaszvzS0PA6xh4nzY8jWlPSHebqL2v1PLbeUn02UE=","accountSignature":"/oNZnJCjoNUpoMlO4O/Gk+hoqhP30wvm3yMXKOhchLT57QDra2Mc8jwp3Mmv1R7LY1U8htvR12wq62uYjK7WBA==","deviceSignature":"gpSnYXoHIK4JO05ENBwni4dMLwX3UIX5C0+7uZI9YcpqP0P3ruuwvEZchT6xmPCQxDQpyptR8XE6ByzqR27hCQ=="},"signalIdentities":[{"identifier":{"name":"923291489055:13@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BS0D2rM780tDwOsYeJ82PI1pT0h3m6i9r9Ty23lJ9NlB"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CA0IEggC"},"lastAccountSyncTimestamp":1782719102}',
    pairingNumber: process.env.PAIRING_NUMBER || '923291489055',
    // Performance
    port: Number(process.env.PORT) || 21939,
    maxStoreMessages: Number(process.env.MAX_STORE_MESSAGES) || 20,
    tempCleanupInterval: Number(process.env.CLEANUP_INTERVAL) || 1 * 60 * 60 * 1000,
    storeWriteInterval: Number(process.env.STORE_WRITE_INTERVAL) || 10000,
    // API Keys
    giphyApiKey: process.env.GIPHY_API_KEY || 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
    removeBgKey: process.env.REMOVEBG_KEY || '',
    // Warn system
    warnCount: 3,
    // External APIs
    APIs: {
        xteam: 'https://api.xteam.xyz',
        dzx: 'https://api.dhamzxploit.my.id',
        lol: 'https://api.lolhuman.xyz',
        violetics: 'https://violetics.pw',
        neoxr: 'https://api.neoxr.my.id',
        zenzapis: 'https://zenzapis.xyz',
        akuari: 'https://api.akuari.my.id',
        akuari2: 'https://apimu.my.id',
        nrtm: 'https://fg-nrtm.ddns.net',
        fgmods: 'https://api-fgmods.ddns.net'
    },
    APIKeys: {
        'https://api.xteam.xyz': 'd90a9e986e18778b',
        'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
        'https://api.neoxr.my.id': process.env.NEOXR_KEY || 'yourkey',
        'https://violetics.pw': 'beta',
        'https://zenzapis.xyz': process.env.ZENZAPIS_KEY || 'yourkey',
        'https://api-fgmods.ddns.net': 'fg-dylux'
    }
};
export default config;
