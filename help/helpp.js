const help = (prefix, pushname2, premi, tanggal, pepolu, hayuk ) => {
    return `┏━━━━━━━━━━🅔🅨🅑🅞🅣ꕥ
┃ ▒▒▒▒▒▒▒▓
┃ ▒▒▒▒▒▒▒▓▓▓
┃ ▒▓▓▓▓▓▓░░░▓
┃ ▒▓░░░░▓░░░░▓
┃ ▓░░░░░░▓░▓░▓
┃ ▓░░░░░░▓░░░▓
┃ ▓░░▓░░░▓▓▓▓
┃ ▒▓░░░░▓▒▒▒▒▓
┃ ▒▒▓▓▓▓▒▒▒▒▒▓
┃ ▒▒▒▒▒▒▒▒▓▓▓▓
┃ ▒▒▒▒▒▓▓▓▒▒▒▒▓
┃ ▒▒▒▒▓▒▒▒▒▒▒▒▒▓
┃ ▒▒▒▓▒▒▒▒▒▒▒▒▒▓
┃ ▒▒▓▒▒▒▒▒▒▒▒▒▒▒▓
┃ ▒▓▒▓▒▒▒▒▒▒▒▒▒▓
┃ ▒▓▒▓▓▓▓▓▓▓▓▓▓
┃ ▒▓▒▒▒▒▒▒▒▓
┃ ▒▒▓▒▒▒▒▒▓
┣━━━━━━━━━━━━━━━ꕥ
┃PLEASE    
┃SEND ME YOUR
┃PAP T_T
┣━━━━━━━━━━━━━━━ꕥ
┃⌦ TYPE USER
┣━━━━━━━━━━━━━━━ꕥ
┣✎ ${premi}
┣━━━━━━━━━━━━━━━ꕥ
┃⌦ LIST MENU
┣━━━━━━━━━━━━━━━ꕥ
┣✎ ${prefix}islammenu
┣✎ ${prefix}mediamenu
┣✎ ${prefix}filmmenu
┣✎ ${prefix}animemenu
┣✎ ${prefix}randommenu
┣✎ ${prefix}funmenu
┣✎ ${prefix}sertimenu
┣✎ ${prefix}creatormenu
┣✎ ${prefix}primbonmenu
┣✎ ${prefix}makermenu
┣✎ ${prefix}newsmenu
┣✎ ${prefix}infomenu
┣✎ ${prefix}musicmenu
┣✎ ${prefix}voicechmenu
┣✎ ${prefix}adminmenu
┣✎ ${prefix}ownermenu
┣━━━━━━━━━━━━━━━ꕥ
┃⌦ REGISTER
┣━━━━━━━━━━━━━━━ꕥ
┣✎ ${prefix}daftar
┣✎ ${prefix}owner
┣✎ ${prefix}donate
┣✎ ${prefix}listadmin
┣✎ ${prefix}report [pesan]
┣✎ ${prefix}request [pesan]
┗━━━━━━━━━━━━━━━ꕥ`
}
exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

const donate = (sender) => {
    return `┏━━━━━━━━━━━━━━━ꕥ
┃⌦ DONASI
┣━━━━━━━━━━━━━━━ꕥ
┣⌦ Pulsa : 0815-2772-7737
┣⌦ Gopay : 0815-2772-7737
┣━━━━━━━━━━━━━━━ꕥ
┣⌦「 īnstagram.com 」
┣⌦ FOLLOW : @riljaa
┗━━━━━━━━━━━━━━━ꕥ`
}
exports.donate = donate

const bahasa = () => {
    return `
List Bahasa :
  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa
