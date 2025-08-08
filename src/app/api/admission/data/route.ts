import { NextResponse } from "next/server";
import axios from "axios";

async function POST(req: Request) {
  const payload = await req.json();
  try {
    const sheetDbUrl = process.env.SHEETDB_API_URL;
    if (!sheetDbUrl)
      throw new Error("No sheet db url defined in environment variables");

    await axios.post(sheetDbUrl, payload);

    return new NextResponse(null, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to save data" },
      { status: 500 }
    );
  }
}

export { POST };
