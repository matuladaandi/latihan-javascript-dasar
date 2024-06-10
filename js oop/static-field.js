class Configuration {

   static name = 'Belajar Javascript OOP'
   static version =1.0
   static author = 'andi matulada'
  
}

const config = new Configuration();
// console.log(config.name); // undefined krn bukan bagian dr instance object

// sifatnya global
// ubah misalnya
Configuration.name = 'awalia';

// cara akses NamaClass lalu property nya
console.log(Configuration.name);  
console.log(Configuration.version);  
