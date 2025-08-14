"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  FileText,
  User,
  GraduationCap,
  Globe,
} from "lucide-react";

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",

    // Service Selection
    primaryService: "",
    languageLevel: "",
    preferredStartDate: "",
    studyMode: "",

    // Educational Background
    highestEducation: "",
    institution: "",
    graduationYear: "",
    fieldOfStudy: "",

    // Visa Information
    visaType: "",
    hasPassport: "",
    passportExpiry: "",
    previousVisaApplication: "",

    // Additional Information
    germanExperience: "",
    motivation: "",
    specialRequirements: "",
    hearAboutUs: "",

    // Terms
    agreeToTerms: false,
    agreeToMarketing: false,
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
    alert(
      "Application submitted successfully! We'll contact you within 24 hours."
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-30 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply Now</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your German journey. Fill out our
            comprehensive application form and let us guide you to success.
          </p>
          <div className="flex items-center justify-center space-x-4 text-blue-100">
            <CheckCircle className="h-5 w-5" />
            <span>Free Consultation</span>
            <CheckCircle className="h-5 w-5" />
            <span>Expert Guidance</span>
            <CheckCircle className="h-5 w-5" />
            <span>24/7 Support</span>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Application Form
              </h2>
              <span className="text-sm text-gray-600">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            <Progress value={progress} className="h-2" />

            {/* Step Indicators */}
            <div className="flex justify-between mt-4 text-sm">
              <div
                className={`flex items-center ${
                  currentStep >= 1 ? "text-blue-600" : "text-gray-400"
                }`}
              >
                <User className="h-4 w-4 mr-1" />
                Personal Info
              </div>
              <div
                className={`flex items-center ${
                  currentStep >= 2 ? "text-blue-600" : "text-gray-400"
                }`}
              >
                <Globe className="h-4 w-4 mr-1" />
                Service Selection
              </div>
              <div
                className={`flex items-center ${
                  currentStep >= 3 ? "text-blue-600" : "text-gray-400"
                }`}
              >
                <GraduationCap className="h-4 w-4 mr-1" />
                Education
              </div>
              <div
                className={`flex items-center ${
                  currentStep >= 4 ? "text-blue-600" : "text-gray-400"
                }`}
              >
                <FileText className="h-4 w-4 mr-1" />
                Visa Info
              </div>
              <div
                className={`flex items-center ${
                  currentStep >= 5 ? "text-blue-600" : "text-gray-400"
                }`}
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                Review
              </div>
            </div>
          </div>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Personal Information
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Please provide your basic personal details
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) =>
                          handleInputChange("dateOfBirth", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="nationality">Nationality *</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("nationality", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your nationality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="indian">Indian</SelectItem>
                          <SelectItem value="pakistani">Pakistani</SelectItem>
                          <SelectItem value="bangladeshi">
                            Bangladeshi
                          </SelectItem>
                          <SelectItem value="nepali">Nepali</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      placeholder="Enter your full address"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="w-full">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                        placeholder="Enter your city"
                        className="!w-62"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) =>
                          handleInputChange("postalCode", e.target.value)
                        }
                        placeholder="Enter postal code"
                        className="!w-62"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("country", value)
                        }
                      >
                        <SelectTrigger className="!w-62">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="pakistan">Pakistan</SelectItem>
                          <SelectItem value="bangladesh">Bangladesh</SelectItem>
                          <SelectItem value="nepal">Nepal</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Service Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Service Selection
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {`Choose the service you're interested in`}
                    </p>
                  </div>

                  <div>
                    <Label className="text-base font-medium">
                      Primary Service *
                    </Label>
                    <RadioGroup
                      value={formData.primaryService}
                      onValueChange={(value) =>
                        handleInputChange("primaryService", value)
                      }
                      className="mt-3"
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem
                          value="german-language"
                          id="german-language"
                        />
                        <Label
                          htmlFor="german-language"
                          className="flex-1 cursor-pointer"
                        >
                          <div className="font-medium">
                            German Language Classes
                          </div>
                          <div className="text-sm text-gray-600">
                            Learn German from A1 to C2 level
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem
                          value="au-pair-visa"
                          id="au-pair-visa"
                        />
                        <Label
                          htmlFor="au-pair-visa"
                          className="flex-1 cursor-pointer"
                        >
                          <div className="font-medium">
                            Au Pair Visa Processing
                          </div>
                          <div className="text-sm text-gray-600">
                            Complete assistance for Au Pair visa application
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="study-visa" id="study-visa" />
                        <Label
                          htmlFor="study-visa"
                          className="flex-1 cursor-pointer"
                        >
                          <div className="font-medium">
                            Study Visa Processing
                          </div>
                          <div className="text-sm text-gray-600">
                            Guidance for student visa and university admission
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.primaryService === "german-language" && (
                    <div>
                      <Label htmlFor="languageLevel">
                        Current German Language Level
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("languageLevel", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your current level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="complete-beginner">
                            Complete Beginner (No German)
                          </SelectItem>
                          <SelectItem value="a1">A1 (Basic)</SelectItem>
                          <SelectItem value="a2">A2 (Elementary)</SelectItem>
                          <SelectItem value="b1">B1 (Intermediate)</SelectItem>
                          <SelectItem value="b2">
                            B2 (Upper Intermediate)
                          </SelectItem>
                          <SelectItem value="c1">C1 (Advanced)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="preferredStartDate">
                        Preferred Start Date
                      </Label>
                      <Input
                        id="preferredStartDate"
                        type="date"
                        value={formData.preferredStartDate}
                        onChange={(e) =>
                          handleInputChange(
                            "preferredStartDate",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="studyMode">Preferred Study Mode</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("studyMode", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select study mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online">Online Classes</SelectItem>
                          <SelectItem value="offline">
                            In-Person Classes
                          </SelectItem>
                          <SelectItem value="hybrid">
                            Hybrid (Online + Offline)
                          </SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Educational Background */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Educational Background
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Tell us about your educational qualifications
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="highestEducation">
                      Highest Level of Education *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("highestEducation", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your highest education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">
                          High School (12th Grade)
                        </SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="bachelors">
                          {`Bachelor's Degree`}
                        </SelectItem>
                        <SelectItem value="masters">{`Master's Degree`}</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="institution">
                        Institution/University Name *
                      </Label>
                      <Input
                        id="institution"
                        value={formData.institution}
                        onChange={(e) =>
                          handleInputChange("institution", e.target.value)
                        }
                        placeholder="Enter institution name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="graduationYear">
                        Year of Graduation *
                      </Label>
                      <Input
                        id="graduationYear"
                        type="number"
                        min="1990"
                        max="2030"
                        value={formData.graduationYear}
                        onChange={(e) =>
                          handleInputChange("graduationYear", e.target.value)
                        }
                        placeholder="e.g., 2023"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="fieldOfStudy">Field of Study *</Label>
                    <Input
                      id="fieldOfStudy"
                      value={formData.fieldOfStudy}
                      onChange={(e) =>
                        handleInputChange("fieldOfStudy", e.target.value)
                      }
                      placeholder="e.g., Computer Science, Business Administration"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="germanExperience">
                      Previous German Language Experience
                    </Label>
                    <Textarea
                      id="germanExperience"
                      value={formData.germanExperience}
                      onChange={(e) =>
                        handleInputChange("germanExperience", e.target.value)
                      }
                      placeholder="Describe any previous German language learning experience, courses taken, or certifications"
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Visa Information */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Visa Information
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Provide details about your visa requirements
                    </p>
                  </div>

                  {(formData.primaryService === "au-pair-visa" ||
                    formData.primaryService === "study-visa") && (
                    <div>
                      <Label className="text-base font-medium">
                        Type of Visa Required
                      </Label>
                      <RadioGroup
                        value={formData.visaType}
                        onValueChange={(value) =>
                          handleInputChange("visaType", value)
                        }
                        className="mt-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="student-visa"
                            id="student-visa"
                          />
                          <Label htmlFor="student-visa">Student Visa</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="au-pair-visa"
                            id="au-pair-visa-type"
                          />
                          <Label htmlFor="au-pair-visa-type">
                            Au Pair Visa
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="language-course-visa"
                            id="language-course-visa"
                          />
                          <Label htmlFor="language-course-visa">
                            Language Course Visa
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="not-sure" id="not-sure" />
                          <Label htmlFor="not-sure">
                            Not Sure / Need Guidance
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  <div>
                    <Label className="text-base font-medium">
                      Do you have a valid passport? *
                    </Label>
                    <RadioGroup
                      value={formData.hasPassport}
                      onValueChange={(value) =>
                        handleInputChange("hasPassport", value)
                      }
                      className="mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="passport-yes" />
                        <Label htmlFor="passport-yes">
                          Yes, I have a valid passport
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="expired" id="passport-expired" />
                        <Label htmlFor="passport-expired">
                          {`Yes, but it's expired`}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="passport-no" />
                        <Label htmlFor="passport-no">
                          {`No, I don't have a passport`}
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.hasPassport === "yes" && (
                    <div>
                      <Label htmlFor="passportExpiry">
                        Passport Expiry Date
                      </Label>
                      <Input
                        id="passportExpiry"
                        type="date"
                        value={formData.passportExpiry}
                        onChange={(e) =>
                          handleInputChange("passportExpiry", e.target.value)
                        }
                      />
                    </div>
                  )}

                  <div>
                    <Label className="text-base font-medium">
                      Have you applied for a German visa before?
                    </Label>
                    <RadioGroup
                      value={formData.previousVisaApplication}
                      onValueChange={(value) =>
                        handleInputChange("previousVisaApplication", value)
                      }
                      className="mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="never" id="never-applied" />
                        <Label htmlFor="never-applied">Never applied</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="approved"
                          id="previously-approved"
                        />
                        <Label htmlFor="previously-approved">
                          Yes, and it was approved
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="rejected"
                          id="previously-rejected"
                        />
                        <Label htmlFor="previously-rejected">
                          Yes, but it was rejected
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Step 5: Review and Submit */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Additional Information & Review
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Final details and review your application
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="motivation">
                      Why do you want to learn German or move to Germany?
                    </Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) =>
                        handleInputChange("motivation", e.target.value)
                      }
                      placeholder="Share your motivation and goals..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialRequirements">
                      Any special requirements or questions?
                    </Label>
                    <Textarea
                      id="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={(e) =>
                        handleInputChange("specialRequirements", e.target.value)
                      }
                      placeholder="Let us know if you have any specific needs or questions..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="hearAboutUs">
                      How did you hear about us?
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("hearAboutUs", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="social-media">
                          Social Media
                        </SelectItem>
                        <SelectItem value="friend-referral">
                          Friend/Family Referral
                        </SelectItem>
                        <SelectItem value="advertisement">
                          Advertisement
                        </SelectItem>
                        <SelectItem value="website">Website</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) =>
                          handleInputChange("agreeToTerms", checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="terms"
                        className="text-sm leading-relaxed"
                      >
                        I agree to the{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Terms and Conditions
                        </a>{" "}
                        and
                        <a
                          href="#"
                          className="text-blue-600 hover:underline ml-1"
                        >
                          Privacy Policy
                        </a>
                        . I understand that submitting this application does not
                        guarantee admission or visa approval.
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="marketing"
                        checked={formData.agreeToMarketing}
                        onCheckedChange={(checked) =>
                          handleInputChange(
                            "agreeToMarketing",
                            checked as boolean
                          )
                        }
                      />
                      <Label
                        htmlFor="marketing"
                        className="text-sm leading-relaxed"
                      >
                        I agree to receive marketing communications and updates
                        about courses and services via email and SMS.
                      </Label>
                    </div>
                  </div>

                  {/* Application Summary */}
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Application Summary
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Name:</span>{" "}
                        {formData.firstName} {formData.lastName}
                      </div>
                      <div>
                        <span className="font-medium">Email:</span>{" "}
                        {formData.email}
                      </div>
                      <div>
                        <span className="font-medium">Service:</span>{" "}
                        {formData.primaryService
                          ?.replace("-", " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </div>
                      <div>
                        <span className="font-medium">Nationality:</span>{" "}
                        {formData.nationality?.replace(/\b\w/g, (l) =>
                          l.toUpperCase()
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-8 bg-transparent"
                >
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    onClick={nextStep}
                    className="px-8 bg-blue-600 hover:bg-blue-700"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.agreeToTerms}
                    className="px-8 bg-green-600 hover:bg-green-700"
                  >
                    Submit Application
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                  <p className="text-blue-100">
                    Our experts are here to assist you with your application
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="border-white text-blue-600 bg-white hover:bg-gray-100"
                >
                  Contact Us Now!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
