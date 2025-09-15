"use client";
import ErrorPage from "@/components/error/ErrorPage";

export default function Error({ error, reset }: ErrorProps) {
  return <ErrorPage error={error} reset={reset} />;
}
