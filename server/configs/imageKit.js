// import ImageKit from '@imagekit/nodejs';

// var imagekit = new ImageKit({
//     publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
//     privateKey: process.env.IMAGEKIT_PRIVATE_KEY, 
//     urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT 
// })

// export default imagekit


import ImageKit from "imagekit";
import dotenv from "dotenv";

// .env dosyasını yükle
dotenv.config();

// KONTROL: Private Key eksikse hata ver (Vercel sorunu varsa hemen anlarız)
if (!process.env.IMAGEKIT_PRIVATE_KEY) {
    console.error("❌ HATA: IMAGEKIT_PRIVATE_KEY bulunamadı! Vercel Environment Variables ayarlarını kontrol et.");
}

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

export default imagekit;