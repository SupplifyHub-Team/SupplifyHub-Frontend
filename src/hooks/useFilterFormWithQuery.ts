"use client";

import { useEffect, useLayoutEffect, useMemo } from "react";
import { UseFormReturn } from "react-hook-form";
import useDebounce from "./useDebounce";
import { useRouter, useSearchParams } from "next/navigation";

interface UseFilterFormOptions<T extends Record<string, any>> {
  form: UseFormReturn<T>;
  debounceTime?: number;
  baseKey: string;
}

export function useFilterFormWithQuery<T extends Record<string, any>>({
  form,
  debounceTime = 500,
  baseKey,
}: UseFilterFormOptions<T>) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Convert URLSearchParams to object and strip baseKey
  const initialValues = useMemo(() => {
    const entries: Partial<T> = {};
    searchParams.forEach((value, key) => {
      if (key.startsWith(baseKey + "-")) {
        const originalKey = key.slice(baseKey.length + 1);
        entries[originalKey as keyof T] = value as any;
      }
    });
    return entries;
  }, [baseKey, searchParams]);

  useLayoutEffect(() => {
    form.reset(initialValues as T);
  }, []);

  const watchedValues = form.watch();
  const debouncedValuesString = useDebounce(
    JSON.stringify(watchedValues),
    debounceTime,
  );
  const debouncedValues = useMemo(
    () => JSON.parse(debouncedValuesString),
    [debouncedValuesString],
  );
  useEffect(() => {
    const query = new URLSearchParams();

    Object.entries(debouncedValues).forEach(([key, value]) => {
      if (value !== "" && value !== null && value !== undefined) {
        query.set(`${baseKey}-${key}`, String(value));
      }
    });

    const newUrl = `${window.location.pathname}?${query.toString()}`;
    if (newUrl !== window.location.href) {
      router.replace(newUrl, { scroll: false }); // prevent instant jump
      window.scrollTo({ top: 300, behavior: "smooth" }); // smooth scroll
    }
  }, [debouncedValues, baseKey, router]);
}
