{
  // create time
  const date1 = new Date();
  console.log(date1);

  const date2 = new Date(2000, 3, 7);
  console.log(date2.toDateString());

  const date3 = new Date(2024, 6, 7, 21, 22, 9, 12);
  console.log(date3);
}

console.log(`
==================
`);

{
  // epoch and unix timestamp
  //   rekomed utk digunakan krn tiap bhs pembrograman berbeda waktu nya
  const date1 = new Date();
  console.log(date1.getDate());
  //   expect : 6

  console.log(Date.now()); // waktu saat ini dalam bentuk second

  //   use epoch time,translate to local time
  //   get epoch time now
  const currentEpochTime = Date.now();
  //   create object date from epoch time At the moment
  const currentDate = new Date(currentEpochTime);

  console.log(currentDate.toString());
}
{
  // date parsing
  const time = Date.parse("2000-4-6");
  console.log(time);
}
console.log(`
`);
{
  // getter & setter

  const date = new Date();
  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDay());
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(date.getMilliseconds());
  console.log(date.getTimezoneOffset()); // di conver menjadi menit
}
