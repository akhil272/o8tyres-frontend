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

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(16),
});

const SignInPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (values) => {
    console.log("submitted", values);
  };

  return (
    <div className="flex flex-col py-10 justify-center h-full">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <p>Enter your credentials to access your account</p>
      <div className="py-20 w-1/2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-lg">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter registered email" {...field} />
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
                    <Input placeholder="Enter registered password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="py-4">
              <Button className="w-full" type="submit">
                Continue
              </Button>
              <p className="py-2">Forgot your password?</p>
            </div>
          </form>
        </Form>
      </div>

      <p className="text-center w-full">Don&apos;t have an account? Sign Up</p>
    </div>
  );
};

export default SignInPage;
