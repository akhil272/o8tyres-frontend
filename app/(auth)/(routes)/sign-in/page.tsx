"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useSignInMutation } from "@/redux/services/authApi";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { getTimeBasedGreeting } from "@/lib/utils";
import { ErrorResponse } from "@/redux/types";

const passwordSchema = z
  .string()
  .refine(
    (password) =>
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /\W|_/.test(password),
    {
      message:
        "Password must be at least 8 characters long and include a mix of uppercase and lowercase letters, numbers, and special characters",
    }
  );

const formSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

const SignInPage = () => {
  const [signIn, { isLoading }] = useSignInMutation();
  const router = useRouter();
  const { toast } = useToast();
  const greeting = getTimeBasedGreeting();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await signIn(data).unwrap();
      if (response.success) {
        toast({
          duration: 3000,
          title: `${greeting}, ${response.data.user.username}`,
          description: "Good to see you back",
        });
        router.push("/");
      }
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null) {
        const err = error as ErrorResponse;
        if (err.data && err.data.message) {
          toast({
            variant: "destructive",
            duration: 5000,
            title: `${
              err.status === 401 || err.status === 400
                ? "Invalid Credentials"
                : "Server error"
            }`,
            description: err.data.message,
          });
        }
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Sign In</h1>
      <p>Enter your credentials to access your account</p>
      <div className="xl:py-20 py-4 lg:w-1/2 w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col xl:space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-lg">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter registered email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-lg">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter registered password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="py-4 space-y-2 flex flex-col">
              <Button className="w-full" type="submit">
                {isLoading ? "Processing" : "Continue"}
              </Button>
              <Link href="/forgot-password">Forgot your password?</Link>
            </div>
          </form>
        </Form>
      </div>

      <p className="text-center w-full">
        Don&apos;t have an account?
        <Link className="font-bold" href="/sign-up">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignInPage;
