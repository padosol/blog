# 기술 블로그

Next.js 15, React 19, TypeScript, TailwindCSS로 구축된 현대적이고 반응형 기술 블로그입니다. MDX를 통한 콘텐츠 작성, 다크 모드, 깔끔한 미니멀 디자인을 제공합니다.

## 주요 기능

- 📝 구문 강조가 지원되는 MDX 기반 블로그 포스트
- 🎨 다크/라이트 테마 지원
- 📱 완벽한 반응형 디자인
- 🔍 카테고리 기반 포스트 구성
- 🖼️ Next.js Image를 통한 이미지 최적화
- ⚡ Next.js App Router를 통한 빠른 페이지 로드
- 🎯 SEO 최적화
- 📊 Vercel Speed Insights 통합

## 기술 스택

- **프레임워크:** Next.js 15
- **언어:** TypeScript
- **스타일링:** TailwindCSS
- **UI 컴포넌트:** Radix UI
- **콘텐츠:** MDX
- **배포:** Vercel (권장)

## 시작하기

### 필수 조건

- Node.js 18.17 이상
- pnpm (권장) 또는 npm

### 설치 방법

1. 저장소 클론:
```bash
git clone [your-repo-url]
cd my-blog
```

2. 의존성 설치:
```bash
pnpm install
```

3. 개발 서버 실행:
```bash
pnpm dev
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

## 프로젝트 구조

```
├── content/          # MDX 형식의 블로그 포스트
├── public/           # 정적 자산
├── src/
│   ├── app/         # Next.js App Router 페이지
│   ├── components/  # React 컴포넌트
│   ├── lib/         # 유틸리티 함수
│   └── styles/      # 전역 스타일
└── ...
```

## 포스트 작성하기

1. `content/posts` 디렉토리에 새로운 `.mdx` 파일을 생성합니다
2. frontmatter에 제목, 설명, 날짜, 카테고리를 추가합니다
3. MDX 형식으로 내용을 작성합니다

Frontmatter 예시:
```yaml
---
title: 포스트 제목
desc: 포스트에 대한 간단한 설명
date: 2024-04-03
category: tech
thumbnail: /path/to/thumbnail.jpg
---
```

## 기여하기

기여는 언제나 환영합니다! Pull Request를 자유롭게 제출해 주세요.

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다 - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.