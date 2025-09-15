import AuthLayout from "@/layouts/AuthLayout";

export default function layout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
