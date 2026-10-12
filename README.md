# Commadesk Landing Page

Trang giới thiệu chính thức cho nền tảng điều hành doanh nghiệp đa phân hệ **Commadesk** (Enterprise Multi-Module SaaS Platform).

Dự án được xây dựng trên nền tảng **Next.js 16 (App Router)**, **React 19**, **TypeScript** và **Tailwind CSS v4**.

---

## 📋 Yêu Cầu Môi Trường

Tùy vào phương thức chạy, bạn cần chuẩn bị một trong hai môi trường sau:

- **Chạy Native (Local Development)**:
  - **Node.js**: Phiên bản `>= 24.x`
  - **npm**: Phiên bản `>= 10.x`.
- **Chạy Docker (Production / Staging / Máy chủ khác)**:
  - **Docker Engine**: `>= 24.x`
  - **Docker Compose**: `>= v2.x`

---

## 🚀 Hướng Dẫn Chạy Bằng Docker (Khuyên Dùng Trên Server / Môi Trường Khác)

Hệ thống đã được đóng gói sẵn với **Multi-stage Dockerfile** chạy trên nền **Node.js 24 Alpine** kết hợp **Next.js Standalone mode**, giúp image siêu nhẹ (~150MB), khởi động nhanh và chạy dưới quyền user an toàn (non-root).

### Cách 1: Sử dụng Docker Compose (Nhanh & Tiện lợi nhất)

#### 1. Khởi động ứng dụng

Chạy lệnh sau tại thư mục gốc của dự án:

```bash
docker compose up -d --build
```

> Lệnh trên sẽ tự động build image và chạy container ở chế độ nền (detached). Ứng dụng sẽ khả dụng tại: `http://localhost:3000`.

#### 2. Kiểm tra trạng thái và xem log

```bash
# Xem log thời gian thực
docker compose logs -f

# Kiểm tra trạng thái container
docker compose ps
```

#### 3. Dừng và gỡ container

```bash
docker compose down
```

#### 4. Tùy chỉnh cổng (Port) nếu cần

Mặc định ứng dụng chạy ở cổng `3000`. Nếu cổng 3000 đã bị chiếm dụng, bạn có thể truyền biến môi trường `PORT` khi chạy:

```bash
# Ví dụ chạy ở cổng 8080 trên máy host
PORT=8080 docker compose up -d
```

Hoặc tạo tệp `.env` tại thư mục gốc với nội dung:

```env
PORT=8080
```

---

### Cách 2: Sử dụng Docker CLI truyền thống

Nếu môi trường máy chủ không cài sẵn Docker Compose, bạn có thể dùng các lệnh Docker tiêu chuẩn:

#### 1. Build Docker Image

```bash
docker build -t commadesk-landingpage:latest .
```

#### 2. Khởi chạy Container

```bash
docker run -d \
  -p 3000:3000 \
  --name commadesk-landingpage \
  --restart unless-stopped \
  commadesk-landingpage:latest
```

#### 3. Các lệnh quản lý

```bash
# Xem log
docker logs -f commadesk-landingpage

# Dừng container
docker stop commadesk-landingpage

# Khởi động lại
docker restart commadesk-landingpage

# Xóa container khi cần cập nhật bản mới
docker stop commadesk-landingpage && docker rm commadesk-landingpage
```

---

## 💻 Hướng Dẫn Chạy Native (Không dùng Docker)

Dành cho phát triển giao diện trực tiếp trên máy lập trình viên:

### 1. Cài đặt thư viện phụ thuộc

```bash
npm install
```

### 2. Chạy môi trường Development

```bash
npm run dev
```

Truy cập trình duyệt tại: `http://localhost:3000` (hoặc cổng hiển thị trong terminal).

### 3. Build và chạy Production cục bộ

```bash
# Biên dịch mã nguồn tối ưu cho production
npm run build

# Khởi chạy production server
npm run start
```

---

## 📁 Cấu Trúc Dự Án

```
commadesk-landingpage/
├── .agent/                 # Ký ức kỹ thuật, quy tắc thiết kế & lịch sử cập nhật
├── public/                 # Ảnh, logo Commadesk, icons, font & static assets
├── src/
│   ├── app/                # Next.js App Router (trang chủ, layout, global styles)
│   │   ├── products/       # Các trang chi tiết sản phẩm / phân hệ giải pháp
│   │   ├── docs/           # Tài liệu kỹ thuật & API
│   │   └── deployment/     # Tài liệu kiến trúc & triển khai hạ tầng
│   ├── components/         # Các thành phần giao diện (Clean Architecture)
│   │   ├── header/         # Floating Navbar & Mega Flyout Submenu
│   │   ├── hero/           # Hero 1 Graphic Network & Hero 2 Dual Orbit
│   │   ├── features/       # Bento Grid 5 thẻ tương tác
│   │   ├── integrations/   # 3D Arc Carousel tương tác
│   │   ├── testimonials/   # Words of Appreciation (3D Fan-out)
│   │   ├── subpage/        # Showcase công nghệ 3D của các trang con
│   │   └── footer/         # Responsive Footer 12 cột thông minh
│   ├── data/               # Dữ liệu tĩnh, nội dung phân hệ
│   └── i18n/               # Đa ngôn ngữ song ngữ Tiếng Anh (en) / Tiếng Việt (vi)
├── Dockerfile              # Cấu hình Multi-stage Docker (Node 24 Alpine)
├── docker-compose.yml      # Cấu hình Docker Compose triển khai nhanh
├── .dockerignore           # Danh sách loại trừ khi build image
├── next.config.mjs         # Cấu hình Next.js (Standalone output)
└── package.json            # Định nghĩa dependencies và scripts
```

---

## 🛡️ Đặc Tính Kỹ Thuật Của Bản Đóng Gói Docker

1. **Next.js Standalone**: Tự động tree-shake và đóng gói chỉ các module phụ thuộc thực tế, giảm 80% dung lượng so với đóng gói toàn bộ `node_modules`.
2. **Alpine Base**: Nền tảng `node:24-alpine` siêu nhẹ, tiết kiệm RAM và ổ cứng.
3. **Non-Root User**: Container được cấu hình chạy dưới tài khoản `nextjs:nodejs` (UID/GID 1001), hạn chế rủi ro bảo mật hệ thống máy chủ.
4. **Tương thích cao**: Hoạt động mượt mà trên mọi hệ điều hành (Ubuntu, Debian, CentOS, macOS, Windows) có cài Docker.
