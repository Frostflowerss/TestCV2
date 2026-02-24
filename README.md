# CV Website (Next.js + Tailwind) — deploy to Vercel

## 1) Yêu cầu
- Node.js 18+ (khuyến nghị 20)
- Git

## 2) Chạy local
```bash
npm install
npm run dev
```
Mở: http://localhost:3000

## 3) Cập nhật nội dung
- Sửa file: `data/cv.json`
- Thay avatar: `public/avatar.jpg`
- Thay PDF CV: `public/cv.pdf`

## 4) Push lên GitHub
```bash
git init
git add .
git commit -m "init cv website"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

## 5) Deploy Vercel
- Vercel → Add New → Project → Import repo GitHub
- Framework preset: Next.js (auto)
- Deploy

## 6) Gắn domain riêng
Vercel → Project → Settings → Domains → Add domain  
Trỏ DNS theo hướng dẫn Vercel (thường:
- A record `@` → `76.76.21.21`
- CNAME `www` → `cname.vercel-dns.com`
)

## 7) Mục tiêu “giống CV PDF”
Template đã bám sát phong cách: dark poster, accent gold, divider hairline, timeline, skill bars.
Để giống hơn nữa: thay đúng font (nếu bạn có), và tinh chỉnh spacing theo ảnh CV.
