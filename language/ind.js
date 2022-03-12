const a = '```'

exports.wrongf = () => {
	return`*「❗KESALAHAN 」*\n\nKeyword yang anda masukkan salah/Text kosong\n\nīnstagram.com/riljaa`
}

exports.noregis = () => {
	return`*「❗BELUM DAFTAR 」*\n\nCara daftar :\n${prefix}daftar Namakamu|Umur\nContoh :\n${prefix}daftar EyJee|17\n\nīnstagram.com/riljaa`
}

exports.rediregis = () => {
	return`*「❗SUDAH DAFTAR 」*\n\nKamu sudah terdaftar di database EYBOT\n\nīnstagram.com/riljaa`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「❗HARTA TAHTA 」*\n\nKamu sudah terdaftar dengan data \n\n┏━⊱Nama :\n┗⊱${namaUser}\n┏━⊱Nomer :\n┗⊱Wa.me/${sender.split("@")[0]}\n┏━⊱Umur :\n┗⊱${umurUser}\n┏━⊱Waktu pendaftaran :\n┗⊱${time}\n\n┏━❉ NS ❉━\n┣⊱${serialUser}\n┗⊱NOTE : Jangan sampai lupa nomer ini karena ini penting:v\n\nīnstagram.com/riljaa`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}