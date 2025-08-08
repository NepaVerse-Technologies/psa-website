"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import axios from "axios";

const admissionFormSchema = z.object({
  fullName: z.string().min(1, "Please enter your full name"),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().regex(/^\d{10}$/, {
    message: "Please enter a valid 10-digit phone number",
  }),
  address: z.string().min(1, "Please enter your address"),
  academicQualification: z
    .string()
    .min(1, "Please select your qualification level"),
  purpose: z.string().min(1, "Please select your purpose of admission"),
  interestedCourse: z
    .string()
    .min(1, "Please select a course you are interested in"),
  remarks: z.string().optional(),
});

const AdmissionForm = () => {
  const [status, setStatus] = useState<string>("");
  const [isRequestProcessing, setIsRequestProcessing] =
    useState<boolean>(false);
  const admissionFormComponent = useForm<z.infer<typeof admissionFormSchema>>({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      academicQualification: "",
      purpose: "",
      interestedCourse: "",
      remarks: "",
    },
  });

  //test cases
  // email ok <> sheet ok -> --ok
  // email ok <> sheet url not defined -> --ok --data insertion fails, email still sent
  // email ok <> sheet url wrong -> --ok --data insertion fails, email still sent
  // email fail (trigger by commenting env vars of email) <> sheet ok -> --success indication i.e. saved in db --email not sent in background
  // email fail <> sheet fail -> --email error, data insertion fails
  async function handleSubmit(values: z.infer<typeof admissionFormSchema>) {
    setIsRequestProcessing(true);
    axios.post("/api/admission/email", values);
    try {
      await axios.post("/api/admission/data", values);
      setStatus("Admission Form Submitted Successfully!");
      admissionFormComponent.reset();
    } catch (error: unknown) {
      console.log(error);
      if (error instanceof Error) {
        setStatus(error.message);
      }
    }
    setIsRequestProcessing(false);
  }

  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h2 className="text-dark-blue">Apply For Admission</h2>
        <p>
          To start consultantion and admission, kindly fill up the form, one of
          our advisers will contact you via email or phone in less than 24 hours
        </p>
      </div>
      <div className=" flex items-center justify-center">
        <Form {...admissionFormComponent}>
          <form
            onSubmit={admissionFormComponent.handleSubmit(handleSubmit)}
            className="space-y-8 flex flex-col max-sm:w-full"
          >
            <div className="flex justify-center max-md:flex-col gap-16">
              <div className="space-y-4">
                <FormField
                  name="fullName"
                  control={admissionFormComponent.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="flex gap-1">
                        Full Name<span className="text-red-700 text-lg">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          value={field?.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={admissionFormComponent.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="flex gap-1">
                        Email<span className="text-red-700 text-lg">*</span>
                      </FormLabel>{" "}
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="john.doe@example.com"
                          value={field?.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="address"
                  control={admissionFormComponent.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="flex gap-1">
                        Address<span className="text-red-700 text-lg">*</span>
                      </FormLabel>{" "}
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Balkumari, Kathmandu"
                          value={field?.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="phone"
                  control={admissionFormComponent.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="flex gap-1">
                        Phone <span className="text-red-700 text-lg">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="9XXXXXXXXX"
                          value={field?.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="outline h-70 self-center max-md:hidden"></div>
              <div className="space-y-4">
                <FormField
                  name="academicQualification"
                  control={admissionFormComponent.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="flex gap-1">
                        Academic Qualification{" "}
                        <span className="text-red-700 text-lg">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="lg:w-96 max-sm:w-full">
                            <SelectValue placeholder="Education Level" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="SEE/SLC">SEE/SLC</SelectItem>
                            <SelectItem value="+2">+2</SelectItem>
                            <SelectItem value="Bachelors">Bachelors</SelectItem>
                            <SelectItem value="Diploma">Diploma</SelectItem>
                            <SelectItem value="Masters">Masters</SelectItem>
                            <SelectItem value="PhD">PhD</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="purpose"
                  control={admissionFormComponent.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="flex gap-1">
                        Purpose <span className="text-red-700 text-lg">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="lg:w-96 max-sm:w-full">
                            <SelectValue placeholder="Purpose of Admission" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="german-language-classes">
                              German Language Classes
                            </SelectItem>
                            <SelectItem value="au-pair-visa">
                              Au Pair Visa
                            </SelectItem>
                            <SelectItem value="student-visa">
                              Student Visa
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="interestedCourse"
                  control={admissionFormComponent.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="flex gap-1">
                        Interested Course{" "}
                        <span className="text-red-700 text-lg">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Nursing"
                          value={field?.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              name="remarks"
              control={admissionFormComponent.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="flex gap-1">Remarks</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Type a message to us here"
                      value={field?.value ?? ""}
                      className="min-h-26"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isRequestProcessing ? (
              <Loader2 className="w-5 h-5 animate-spin text-dark-blue" />
            ) : (
              ""
            )}
            {status ? <p className="text-red-500 -mt-4">{status}</p> : ""}
            <Button className="w-fit self-center">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AdmissionForm;
