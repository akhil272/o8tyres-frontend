import React, { useState } from "react";
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
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { cn, passwordSchema } from "@/lib/utils";
import { useSignUpBusinessMutation } from "@/redux/services/authApi";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { useFindPinCodesQuery } from "@/redux/services/userApi";
import { ErrorResponse } from "@/redux/types";
interface BusinessData {
  companyName: string;
  gstNumber: string;
  officeNumber: string;
  email: string;
  password: string;
}
interface AddressData {
  addressLine01: string;
  addressLine02?: string;
  pinCode: {
    id: number;
    code: number;
  };
}
interface EmployeeData {
  accountManagerName: string;
  accountManagerPhoneNumber: string;
  employeeOneName: string;
  employeeOnePhoneNumber: string;
  employeeTwoName?: string;
  employeeTwoPhoneNumber?: string;
}
const businessFormSchema = z.object({
  companyName: z.string(),
  gstNumber: z.string(),
  officeNumber: z.string(),
  email: z.string().email(),
  password: passwordSchema,
});
const confirmPasswordSchema = passwordSchema;
const validationSchema = z
  .object({
    ...businessFormSchema.shape,
    confirmPassword: confirmPasswordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
const addressFormSchema = z.object({
  addressLine01: z.string(),
  addressLine02: z.string().optional(),
  pinCode: z.object({
    id: z.number(),
    code: z.number(),
  }),
});
const employeeFormSchema = z.object({
  accountManagerName: z.string(),
  accountManagerPhoneNumber: z.string(),
  employeeOneName: z.string(),
  employeeOnePhoneNumber: z.string(),
  employeeTwoName: z.string().optional(),
  employeeTwoPhoneNumber: z.string().optional(),
});

const SignUpFormBusiness = () => {
  const [page, setPage] = useState<number>(1);
  const [showPinCodeList, setShowPinCodeList] = useState(false);
  const [businessData, setBusinessData] = useState<BusinessData>({
    companyName: "",
    gstNumber: "",
    officeNumber: "",
    email: "",
    password: "",
  });
  const [addressData, setAddressData] = useState<AddressData>({
    addressLine01: "",
    pinCode: {
      id: 0,
      code: 0,
    },
  });
  const cart = useAppSelector((state) => state.cart.cart);
  const [signUpBusiness, { isLoading }] = useSignUpBusinessMutation();
  const { data: pinCodesData } = useFindPinCodesQuery(null);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
  });
  const addressForm = useForm<z.infer<typeof addressFormSchema>>({
    resolver: zodResolver(addressFormSchema),
  });
  const employeeForm = useForm<z.infer<typeof employeeFormSchema>>({
    resolver: zodResolver(employeeFormSchema),
  });

  const onBusinessSubmit = (data: BusinessData) => {
    setBusinessData(data);
    setPage(2);
  };
  const onAddressSubmit = (data: AddressData) => {
    setAddressData(data);
    setPage(3);
  };
  const onClickGoBack = () => {
    switch (page) {
      case 2:
        setPage(1);
        break;
      case 3:
        setPage(2);
        break;
      default:
        break;
    }
  };
  const onFinalSubmit = async (data: EmployeeData) => {
    const {
      pinCode: { id: pinCode },
      addressLine01,
      addressLine02,
    } = addressData;
    try {
      const response = await signUpBusiness({
        ...businessData,
        ...data,
        pinCode,
        addressLine01,
        addressLine02,
      }).unwrap();
      if (response.success) {
        toast({
          title: "Account created successfully.",
          duration: 3000,
        });
        if (cart.length > 0) {
          router.push("/checkout");
        } else router.push("/");
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
    <>
      <div className="flex flex-col items-center pb-6">
        <h5 className="font-semibold text-lg">
          {page === 1 ? "Business" : page === 2 ? "Address" : "Employee"}{" "}
          Information
        </h5>
        <p className="font-light text-sm">
          Step {page === 1 ? "1" : page === 2 ? "2" : "3"} out 3
        </p>
      </div>
      {page == 1 && (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onBusinessSubmit)}
              className="flex flex-col space-y-6"
            >
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem className="w-full xl:w-1/2 xl:pr-2 ">
                    <FormLabel className="font-medium text-lg">
                      Company Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="*Enter company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="xl:flex xl:space-x-4 space-y-6 xl:space-y-0">
                <FormField
                  control={form.control}
                  name="gstNumber"
                  render={({ field }) => (
                    <FormItem className="w-full ">
                      <FormLabel className="font-medium text-lg">
                        GST Number
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="*Enter gst number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="officeNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="font-medium text-lg">
                        Office Number
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="*Enter office number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="xl:w-1/2 w-full xl:pr-2">
                    <FormLabel className="font-medium text-lg">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="*Enter office email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="xl:flex w-full xl:space-x-4 justify-between  space-y-6 xl:space-y-0">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="font-medium text-lg">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="*Enter a password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="font-medium text-lg">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="*Enter confirm password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="py-4 space-y-2 flex flex-col">
                <Button type="submit" className="w-full xl:w-1/2">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </>
      )}

      {page === 2 && (
        <>
          <Form {...addressForm}>
            <div className="flex justify-end">
              <Button size={"sm"} onClick={() => setPage(1)} variant={"link"}>
                Go back
              </Button>
            </div>
            <form
              onSubmit={addressForm.handleSubmit(onAddressSubmit)}
              className="flex flex-col xl:space-y-6"
            >
              <FormField
                control={addressForm.control}
                name="addressLine01"
                render={({ field }) => (
                  <FormItem className="w-full ">
                    <FormLabel className="font-medium text-lg">
                      Address Line 01
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="*Enter address line 01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addressForm.control}
                name="addressLine02"
                render={({ field }) => (
                  <FormItem className=" w-full">
                    <FormLabel className="font-medium text-lg">
                      Address Line 01
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address line 02" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addressForm.control}
                name="pinCode"
                render={({ field }) => (
                  <FormItem className="xl:w-1/2 flex w-full flex-col">
                    <FormLabel className="font-medium text-lg">
                      Pin Code
                    </FormLabel>
                    <Popover
                      open={showPinCodeList}
                      onOpenChange={setShowPinCodeList}
                    >
                      <PopoverTrigger asChild>
                        <FormControl>
                          <div className="relative w-full">
                            <Button
                              type="button"
                              className="xl:w-full w-1/2  flex justify-between"
                              variant="outline"
                              role="combobox"
                            >
                              {field.value
                                ? pinCodesData?.data.find(
                                    (pinCode) => pinCode.id === field.value.id
                                  )?.code
                                : "Pin Code"}

                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </div>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="p-0">
                        <Command>
                          <CommandInput placeholder="Search pin code..." />
                          <CommandEmpty>
                            Not available for shipping.
                          </CommandEmpty>
                          <CommandGroup>
                            {pinCodesData?.data.map((pinCode) => (
                              <CommandItem
                                value={String(pinCode.code)}
                                key={pinCode.id}
                                onSelect={() => {
                                  addressForm.setValue("pinCode", {
                                    id: pinCode.id,
                                    code: pinCode.code,
                                  });
                                  setShowPinCodeList(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    pinCode.id ===
                                      (field.value ? field.value.id : undefined)
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {pinCode.code}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="py-4 space-y-2 flex flex-col">
                <Button type="submit" className="w-full xl:w-1/2">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </>
      )}
      {page === 3 && (
        <>
          <Form {...employeeForm}>
            <div className="flex justify-end">
              <Button size={"sm"} onClick={onClickGoBack} variant={"link"}>
                Go back
              </Button>
            </div>
            <form
              onSubmit={employeeForm.handleSubmit(onFinalSubmit)}
              className="flex flex-col xl:space-y-6"
            >
              <div className="xl:flex xl:space-x-4 space-y-6 xl:space-y-0">
                <FormField
                  control={employeeForm.control}
                  name="accountManagerName"
                  render={({ field }) => (
                    <FormItem className="w-full xl:w-1/2 xl:pr-2">
                      <FormLabel className="font-medium text-lg">
                        Account Manager Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="*Enter account manager name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={employeeForm.control}
                  name="accountManagerPhoneNumber"
                  render={({ field }) => (
                    <FormItem className="xl:w-1/2 w-full">
                      <FormLabel className="font-medium text-lg">
                        Account Manager Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="*Enter account manager phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="xl:flex xl:space-x-4 space-y-6 xl:space-y-0">
                <FormField
                  control={employeeForm.control}
                  name="employeeOneName"
                  render={({ field }) => (
                    <FormItem className="xl:w-1/2 w-full">
                      <FormLabel className="font-medium text-lg">
                        Employee One Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="*Enter employee one name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={employeeForm.control}
                  name="employeeOnePhoneNumber"
                  render={({ field }) => (
                    <FormItem className="xl:w-1/2 w-full">
                      <FormLabel className="font-medium text-lg">
                        Employee One Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="*Enter Employee One Phone Number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="xl:flex xl:space-x-4 space-y-6 xl:space-y-0">
                <FormField
                  control={employeeForm.control}
                  name="employeeTwoName"
                  render={({ field }) => (
                    <FormItem className="xl:w-1/2 w-full">
                      <FormLabel className="font-medium text-lg">
                        Employee Two Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Employee Two Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={employeeForm.control}
                  name="employeeTwoPhoneNumber"
                  render={({ field }) => (
                    <FormItem className="xl:w-1/2 w-full">
                      <FormLabel className="font-medium text-lg">
                        Employee Two Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Employee Two Phone Number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="py-4 space-y-2 flex flex-col">
                <Button type="submit" className="w-full xl:w-1/2">
                  {isLoading ? "Processing..." : "Sign Up"}
                </Button>
              </div>
            </form>
          </Form>
        </>
      )}
    </>
  );
};

export default SignUpFormBusiness;
