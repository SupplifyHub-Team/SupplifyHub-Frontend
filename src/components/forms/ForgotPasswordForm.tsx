"use client";
import FormInput from "../forms-fields/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { forgotPasswordSchema } from "@/schemas/authSchema";
import Spinner from "../ui/spinner";
import useForgotPassword from "@/hooks/auth/useForgotPassword";

export default function ForgotPasswordForm() {
  const { mutate, isPending } = useForgotPassword();

  const form = useForm<forgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: forgotPasswordSchema) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormInput<forgotPasswordSchema>
          control={form.control}
          name="email"
          placeholder="البريد الإلكتروني"
          Icon={<Mail className="size-4 text-indigo-500" />}
          autoComplete="email"
          className="h-13"
        />

        <Button
          disabled={isPending}
          className="w-full text-white py-2 transition rounded-2xl"
        >
          {isPending ? <Spinner /> : "استعادة كلمة المرور"}
        </Button>
      </form>
    </Form>
  );
}
