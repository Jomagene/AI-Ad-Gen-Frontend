"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useGoogleAuth } from "@/domains/auth/api/useGoggleAuth";
import { LoadingButton } from "@/domains/auth/components/loading-button";
import Image from "next/image";
import googlelogo from "../../../../public/google.svg";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;
interface SignInFormProps {
  type: "signin" | "signup";
}

export function SignInForm({ type }: SignInFormProps) {
  const { handleGoogleLogin, isLoading: isGoogleLoading } = useGoogleAuth();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  return (
    <Card className="min-w-[320px] max-w-[550px] w-full mx-auto border rounded-lg">
      <CardContent className="pt-6 pb-8 px-5 sm:px-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            className="p-0 h-auto text-foreground hover:bg-transparent font-medium text-base leading-"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="size-5 mr-2" />
              Back
            </Link>
          </Button>
        </div>

        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            {type == "signin" ? "Welcome Back" : "Sign Up"}
          </h1>
          <p className="text-muted-foreground">Continue with google</p>
        </div>

        <Form {...form}>
          <form onSubmit={() => {}} className="space-y-6">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <LoadingButton
                type="button"
                className="w-full sm:w-[400px] border-[1px] border-[#E9E9E9] bg-white hover:bg-gray-100 text-black my-2 py-6 mx-auto"
                isLoading={isGoogleLoading}
                onClick={handleGoogleLogin}
              >
                <Image src={googlelogo} alt="Google" width={20} height={20} />{" "}
                <p>Continue With Google</p>
              </LoadingButton>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
