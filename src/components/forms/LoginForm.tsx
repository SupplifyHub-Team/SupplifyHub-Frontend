"use client";
import FormInput from "../forms-fields/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import FormCheckbox from "../forms-fields/FormCheckbox";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import FormPassword from "../forms-fields/FormPassword";
import { loginSchema } from "@/schemas/authSchema";
import Spinner from "../ui/spinner";
import useLogin from "@/hooks/auth/useLogin";
import { Link } from "@/i18n/navigation";
import { setFormErrors } from "@/utils/handleApiError";

export default function LoginForm() {
  const { mutate, isPending } = useLogin();

  const form = useForm<loginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });
  function onSubmit(values: loginSchema) {
    mutate(values, {
      onError: (err) => {
        setFormErrors(form, err);
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormInput<loginSchema>
          control={form.control}
          name="email"
          placeholder="البريد الإلكتروني"
          Icon={<Mail className="size-4 text-indigo-500" />}
          autoComplete="email"
        />
        <FormPassword<loginSchema>
          control={form.control}
          name="password"
          placeholder="كلمة المرور"
          autoComplete="current-password"
        />
        <div className="flex justify-between">
          <FormCheckbox<loginSchema>
            control={form.control}
            name="rememberMe"
            label="تذكرني"
          />
          <Link
            href="/forgot-password"
            className="text-indigo-500 hover:underline">
            نسيت كلمة المرور؟
          </Link>
        </div>
        <Button
          disabled={isPending}
          className="w-full text-white py-2 transition rounded-2xl">
          {isPending ? <Spinner /> : "تسجيل الدخول"}
        </Button>
      </form>
    </Form>
  );
}
