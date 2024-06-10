{
  // Encode
  const url = "https://contoh.com/?name=Muh Andi Matulada";
  console.log(url);

  const encoded = encodeURI(url);
  console.log(encoded);

  // Decode
  const decode = decodeURI(encoded);
  console.log(decode);
}

console.log(`
==========================
`);

{
  // Encode UrlComponent
  const value = "Muh&Andi=Matulada";
  const url = "https://contoh.com/?name=";
  console.log(url + value);

  const encoded = encodeURIComponent(value);
  console.log(url + encoded);

  // Decode UrlComponent
  const decode = decodeURIComponent(encoded);
  console.log(url + decode);
}
