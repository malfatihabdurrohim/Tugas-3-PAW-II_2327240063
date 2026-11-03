# si5b_kuis1_m. alfatih abdurrohim_2327240063

RESTful API Express.js (topik: Buku) dengan arsitektur terstruktur.

## Struktur
```
├── controllers/   bukuController.js
├── middlewares/   logger.js, cekApiKey.js, errorHandler.js
├── models/        bukuModel.js
├── routes/        bukuRoutes.js
├── server.js
├── .env.example
└── requests.http
```

## Menjalankan
```bash
npm install
cp .env.example .env     # lalu isi API_KEY
npm start
```

## Endpoint
| Method | URL | API key |
|---|---|---|
| GET | /api/buku | - |
| GET | /api/buku/:id | - |
| POST | /api/buku | x-api-key |
| PUT | /api/buku/:id | x-api-key |
| DELETE | /api/buku/:id | x-api-key |
