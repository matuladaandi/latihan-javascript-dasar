// base64 itu bukan Encryption
// digunakan ketika ingin mengirim data ke server
const original = "Muh&Andi=Matulada"
console.log(original);

// Encode
const encoded = btoa(original)
console.log(encoded);

// Decode
const decode = atob(encoded) 
console.log(decode);


