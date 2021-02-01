var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry : ["@babel/polyfill","./src/index.js"], //entry'ye bir array veriyoruz ve diyoruz ki ilk önce src'nin içinde index.js'e bak
    output : { // index.js'e baktığımız zaman bütün js ler tek bir dosya haline gelicek ve output içinde dosya adını ve klasör adını ve yolunu veriyrouz.
        path:path.resolve(__dirname,"bundles"), // __dirname şu anki projemizin yolunu veriyor ve içinde bundles klasörünü oluşturacak
        filename: 'bundle.js' // bağlanmış js dosyaları bundle.js şeklinde oluşacak
    },
    mode : "development", // dev ortamında olduğumuz için mode : development
    module: { // webpack ile babel arasındaki ilişkiyi kuruyor
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader', // loader olarak babel-loader kullan (babel/cli'a bu yüzden ihtiyaç duymadık)
              options: {
                presets: ['@babel/preset-env'] // ve buna göre yazdığımız kodları çevir.
              }
            }
          }
        ]
      }
}