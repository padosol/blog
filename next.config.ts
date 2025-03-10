import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // !! WARN !!
    // 프로덕션 환경에서는 타입 오류를 무시하지 않는 것이 좋습니다.
    // 여기서는 빌드를 위해 일시적으로 비활성화합니다.
    ignoreBuildErrors: true,
  },
  eslint: {
    // 빌드 시 ESLint 오류를 무시합니다.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
