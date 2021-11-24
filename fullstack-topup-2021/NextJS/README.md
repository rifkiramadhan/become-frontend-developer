# NextJS
### React Framework yang siap untuk Production (Production Ready)
- Adalah Framework React yang siap untuk Production, jadi kalau kita mensetup project kita dengan menggunakan NextJS, maka secara automatice sudah siap untuk production, artinya sangat mudah sekali untuk kita deploy dan untuk kita jadikan Production

### Kenapa Perlu Menggunakan NextJS
- Mudah untuk setup project
  - Jadi kita hanya perlu menjalankan script seperti create-react-app yaitu npx, create-next-app, dll
- Routing yang mudah
  - Sangat mudah sekali untuk setup routing nya, dimana kalau kita biasa membuat aplikasi React dari create-react-app maka kita perlu menambahkan package salah satunya untuk routing
  - Sedangkan jika menggunakan NextJS kita dengan mudah menyiapkan Routing nya, yaitu semua di folder pages akan menjadi Routing page nya
- Performa yang baik dengan code splitting, client-side navigation, dan prefetching
  - Code Splitting, NextJS hanya akan merender JavaScript saat page nya di load, jadi kalau kita punya ada puluhan page dengan automatice puluhan JavaScript nya juga, maka NextJS hanya akan meload page dengan JavaScript di page tersebut saja, sehingga Speed nya sangat cepat
  - Client-Side Navigation, Jadi kalau kita menggunakan fitur link punya NextJS maka di akan memiliki component yang bernama link, dan jika kita menggunakan navigasi untuk link ini, maka perpindahan antar page nya itu sama seperti dengan single page application, jadi dia tidak akan mereload browser nya
  - Prefetching, Jadi kalau kita lebih dalam menggunakan NextJS, maka kita akan melihat bahwa semua page yang di load di dalam NextJS ini, akan di siapkan page nya sebelum page nya muncul
- Easy to deploy
  - Ketika kita menggunakan NextJS maka kita bisa dengan mudah mendeploy menggunakan Vercel, dan di Vercel ini cukup menarik karena kita cukup mengintegrasikan dengan Repository kita, maka deploy nya akan sangat mudah sekali
- SEO Friendly
  - Pre Rendering (Using Next JS)
    - Ketika initial load, jadi ketika page nya di load paling pertama, maka dia sudah ada HTML nya, jadi HTML nya sudah muncul sehingga kalau dia dibaca oleh bot nya google maka HTML sudah ada, sehingga dia bisa mengcrow web kita ada datanya atau ada isinya, kemudian setelah JavaScriptnya diload, maka NextJS nya sudah bisa berjalan, UI nya sudah ada kemudian JavaScriptnya muncul, maka sudah bisa di klik-klik segala macam nya
  - No Pre-rendering (Plain React.js app)
    - Ketika pertama kali initial load, apps nya pasti kosong karena dia akan membaca index.html nya yang masih kosong, nah di kosong tersebut ketika di load oleh bot, maka dia tidak akan bisa mendapat data apapun jadi akan kosong, kemudian setelah JavaScriptnya di load, di render React nya, DOM nya di manipulasi, maka barulah ada UI dalam proses hidration nya, jadi konten nya sudah dapat ketika initial load ketika menggunakan NextJS
  - Dengan NextJS sudah support SEO nya dengan sangat baik
- Pre-Rendering Page (Static Generator dan Server Side)
  - NextJS
    - Dari server sudah ada bundle React nya, dia sudah disiapkan HTML nya, jadi sebelum dia masuk ke browser ketika browser request sebuah halaman, maka HTML nya sudah ready dahulu, kemudian dia masuk ke browser dia sudah dalam bentuk HTML, dan bundle JS di dalam nya, sehingga jadi dia sudah ready semuanya, sudah berjalan
  - Create React App (CRA)
    - Ketika kita panggil ke server, masuk ke browser masih bundle JavaScript atau bundle React nya, barulah di dalam client atau di dalam browser, dia memanipulasi DOM nya, sehingga muncullah HTML UI yang biasa kita lihat