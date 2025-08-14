"use client";

import type React from "react";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Award,
  Send,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { useState } from "react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <section className="relative pt-30 pb-20 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="absolute inset-0">
          {/* change image */}
          <img
            src="/placeholder.svg?height=400&width=1200"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-yellow-400">Touch</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to start your German journey? Our expert team is here to
              guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50 lg:px-20 md:px-10 px-6">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to get in touch with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Phone Call</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our consultants
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  01-4500234
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">
                  Quick responses via WhatsApp
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-green-50 hover:bg-green-100"
                >
                  Chat Now: 9860005601
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600 mb-4">
                  Detailed inquiries via email
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  pinnaclesprachakademie@gmail.com
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">
                  Come to our office for consultation
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 bg-white lg:px-20 md:px-10 px-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes 2/3 of the space */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {`Fill out the form below and we'll get back to you within 24
                    hours. All fields marked with `}
                    * are required.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        {`Thank you for contacting us. We'll get back to you
                        within 24 hours.`}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              placeholder="Enter your first name"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              placeholder="Enter your last name"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Contact Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              placeholder="Enter your phone number"
                              required
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <Label htmlFor="country">Country/Region</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="india">India</SelectItem>
                              <SelectItem value="nepal">Nepal</SelectItem>
                              <SelectItem value="bangladesh">
                                Bangladesh
                              </SelectItem>
                              <SelectItem value="pakistan">Pakistan</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Service Interest */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Service Interest
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="service">Primary Service *</Label>
                            <Select required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select primary service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="german-classes">
                                  German Language Classes
                                </SelectItem>
                                <SelectItem value="au-pair-visa">
                                  Au Pair Visa Processing
                                </SelectItem>
                                <SelectItem value="study-visa">
                                  Study Visa Processing
                                </SelectItem>
                                <SelectItem value="work-visa">
                                  Work Visa Processing
                                </SelectItem>
                                <SelectItem value="consultation">
                                  General Consultation
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="urgency">Urgency Level</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="How urgent is your inquiry?" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="urgent">
                                  Urgent (Within 1 week)
                                </SelectItem>
                                <SelectItem value="soon">
                                  Soon (Within 1 month)
                                </SelectItem>
                                <SelectItem value="planning">
                                  Planning (3-6 months)
                                </SelectItem>
                                <SelectItem value="exploring">
                                  Just Exploring
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* German Level (conditional) */}
                      <div>
                        <Label htmlFor="germanLevel">
                          Current German Level (if applicable)
                        </Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your German level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">
                              Complete Beginner (A0)
                            </SelectItem>
                            <SelectItem value="a1">Elementary (A1)</SelectItem>
                            <SelectItem value="a2">
                              Pre-Intermediate (A2)
                            </SelectItem>
                            <SelectItem value="b1">
                              Intermediate (B1)
                            </SelectItem>
                            <SelectItem value="b2">
                              Upper-Intermediate (B2)
                            </SelectItem>
                            <SelectItem value="c1">Advanced (C1)</SelectItem>
                            <SelectItem value="c2">Proficient (C2)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message">Your Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Please tell us about your goals, timeline, and any specific questions you have..."
                          rows={5}
                          required
                        />
                      </div>

                      {/* Preferred Contact Method */}
                      <div>
                        <Label>Preferred Contact Method</Label>
                        <div className="flex flex-wrap gap-4 mt-2">
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="email"
                              className="text-blue-600"
                            />
                            <span>Email</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="phone"
                              className="text-blue-600"
                            />
                            <span>Phone Call</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="whatsapp"
                              className="text-blue-600"
                            />
                            <span>WhatsApp</span>
                          </label>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-gray-600">01-4500234</div>
                      <div className="text-sm text-gray-500">
                        Mon-Sat: 9 AM - 7 PM
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">
                        pinnaclesprachakademie@gmail.com
                      </div>
                      <div className="text-sm text-gray-500">
                        Response within 24 hours
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-gray-600">
                        Putalisadak, Kathmandu
                        <br />
                        Nepal
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">Office Hours</div>
                      <div className="text-gray-600">
                        Sun-Fri: 9:00 AM - 7:00 PM
                        <br />
                        Saturday: Closed
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Free Consultation */}
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    Free Consultation
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Book a free 30-minute consultation with our experts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4 text-blue-100">
                    <li>• Personalized guidance</li>
                    <li>• Course recommendations</li>
                    <li>• Visa process overview</li>
                    <li>• Timeline planning</li>
                  </ul>
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                    <Award className="mr-2 h-4 w-4" />
                    Schedule Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 lg:px-20 md:px-10 px-6">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How long does visa processing take?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Visa processing typically takes 4-8 weeks depending on the
                  type of visa and individual circumstances.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you offer online German classes?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer both online and in-person German language
                  classes to accommodate different learning preferences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What is your success rate?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We maintain a 95% success rate for visa approvals and have
                  helped over 2000 students achieve their goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you provide post-arrival support?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we provide comprehensive post-arrival support including
                  accommodation assistance and cultural orientation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
