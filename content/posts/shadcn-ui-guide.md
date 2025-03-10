---
title: "shadcn/ui로 아름다운 UI 구축하기"
description: "shadcn/ui 컴포넌트 라이브러리를 활용하여 아름답고 접근성 높은 UI를 구축하는 방법을 소개합니다."
date: "2023-07-10"
category: "UI/UX"
readTime: "6분"
slug: "shadcn-ui-guide"
---

# shadcn/ui로 아름다운 UI 구축하기

shadcn/ui는 Radix UI를 기반으로 한 재사용 가능한 컴포넌트 모음으로, 아름답고 접근성 높은 UI를 쉽게 구축할 수 있게 해줍니다. 이 글에서는 shadcn/ui를 사용하여 멋진 UI를 구축하는 방법을 알아보겠습니다.

## shadcn/ui의 특징

shadcn/ui는 다음과 같은 특징을 가지고 있습니다:

1. **복사-붙여넣기 방식**: 패키지로 설치하는 것이 아니라 필요한 컴포넌트만 프로젝트에 복사하여 사용합니다.
2. **높은 커스터마이징 가능성**: 컴포넌트 코드를 직접 수정할 수 있어 프로젝트에 맞게 커스터마이징이 가능합니다.
3. **접근성 중심**: Radix UI를 기반으로 하여 높은 접근성을 제공합니다.
4. **Tailwind CSS 통합**: Tailwind CSS와 함께 사용하도록 설계되어 있습니다.

## 시작하기

shadcn/ui를 시작하려면 다음 명령어를 사용합니다:

```bash
npx shadcn-ui@latest init
```

이 명령어는 필요한 의존성을 설치하고 설정 파일을 생성합니다.

## 컴포넌트 추가하기

필요한 컴포넌트를 추가하려면 다음 명령어를 사용합니다:

```bash
npx shadcn-ui@latest add button
```

이 명령어는 버튼 컴포넌트를 프로젝트에 추가합니다.

## 컴포넌트 사용 예제

### 버튼 컴포넌트

```tsx
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="space-y-4">
      <Button variant="default">기본 버튼</Button>
      <Button variant="destructive">삭제 버튼</Button>
      <Button variant="outline">아웃라인 버튼</Button>
      <Button variant="ghost">고스트 버튼</Button>
      <Button variant="link">링크 버튼</Button>
    </div>
  );
}
```

### 카드 컴포넌트

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>계정 생성</CardTitle>
        <CardDescription>시작하려면 아래 정보를 입력하세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {/* 폼 필드 */}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">취소</Button>
        <Button>계정 생성</Button>
      </CardFooter>
    </Card>
  );
}
```

## 테마 커스터마이징

shadcn/ui는 Tailwind CSS를 사용하므로 `tailwind.config.js` 파일에서 테마를 쉽게 커스터마이징할 수 있습니다:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0070f3",
          foreground: "#ffffff",
        },
        // 다른 색상 추가
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.25rem",
        sm: "0.125rem",
      },
    },
  },
};
```

## 결론

shadcn/ui는 아름답고 접근성 높은 UI를 빠르게 구축할 수 있는 훌륭한 도구입니다. 복사-붙여넣기 방식으로 필요한 컴포넌트만 가져와 사용할 수 있고, 프로젝트에 맞게 커스터마이징할 수 있어 유연성이 높습니다. Tailwind CSS와의 통합으로 스타일링도 쉽게 할 수 있어 개발 생산성을 크게 향상시킬 수 있습니다. 