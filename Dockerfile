# syntax=docker/dockerfile:1

# ==========================================
# Giai đoạn 1: Cài đặt Dependencies (deps)
# Khớp với Node.js v24 hiện tại (node:24-alpine)
# ==========================================
FROM node:24-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy tệp khai báo package và cài đặt chính xác các phụ thuộc
COPY package.json package-lock.json ./
RUN npm ci

# ==========================================
# Giai đoạn 2: Build ứng dụng (builder)
# ==========================================
FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Tắt telemetry của Next.js khi build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Thực hiện build Next.js (output standalone mode)
RUN npm run build

# ==========================================
# Giai đoạn 3: Production Runner (runner)
# Tối ưu kích thước, bảo mật không dùng quyền root
# ==========================================
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Tạo group và user non-root để đảm bảo an ninh
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy tài nguyên tĩnh public
COPY --from=builder /app/public ./public

# Phân quyền cho thư mục cache Next.js
RUN mkdir .next && chown nextjs:nodejs .next

# Copy bản build độc lập (standalone) và static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
