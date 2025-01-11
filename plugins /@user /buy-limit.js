exports.default = {
   names: ['قائمة المستخدم'],
   tags: ['buylimit'],
   command: ['buylimit'],
   start: async (m, {
      conn,
      text
   }) => {
      if (!text) return m.reply('ادخل المعلات مثال: .buylimit 1`);
      if (db.users[m.sender].uang < 10) return m.reply(`ليس لديك ما يكفي من المال أو نفد المال لشراء الحد\ يرجى سداد الديون إذا كانت لديك ديون\ اكتب .claimuang للحصول على المال اليومي\ أو اكتب .my للتحقق من رصيد المال`);
      let deduct, upgrade;
      if (/^[1-9]\d*$/.test(text)) {
         let jumlahLimit = parseInt(text);
         let hargaLimit = jumlahLimit * 10          
         db.users[m.sender].limit += jumlahLimit
         db.users[m.sender].uang -= hargaLimit         
         conn.adReply(m.chat, `لقد نجحت في الشراء ${jumlahLimit} الحد بالسعر ${hargaLimit} uang`, cover, m);
      } else {
         return m.reply(`أدخل قيمة رقمية صحيحة`);
      }
   }
};
