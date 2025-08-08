import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

async function POST(req: Request) {
  const payload = await req.json();
  try {
    const {
      fullName,
      email,
      phone,
      address,
      academicQualification,
      purpose,
      interestedCourse,
    } = payload;
    //send mail
    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `Admission Inquiry: ${fullName}`,
      text: `
      Name: ${fullName}
      Email: ${email} 
      Phone no.: ${phone} 
      Address: ${address} 
      Qualification: ${academicQualification}
      Purpose: ${purpose} 
      Interested Course: ${interestedCourse}`,
      html: `
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone no.:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Qualification:</strong> ${academicQualification}</p>
      <p><strong>Purpose:</strong> ${purpose}</p>
      <p><strong>Interested Course:</strong> ${interestedCourse}</p>`,
    };
    await transporter.sendMail(mailOptions);

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}

export { POST };
