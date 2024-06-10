import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  await mongooseConnect();
  try {
    const { title, description, price, images, category, details } =
      await request.json();

    const productDoc = {
      title,
      description,
      price,
      images,
      category,
      details,
    };
    const newproduct = new Product(productDoc);
    const saveProduct = await newproduct.save();

    const response = NextResponse.json(
      {
        message: "New Product created successfully",
        success: true,
        data: newproduct,
      },
      { status: 200 }
    );
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await mongooseConnect();
  try {
    const products = await Product.find();

    const response = NextResponse.json(
      {
        message: "success",
        success: true,
        data: products,
      },
      { status: 200 }
    );
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
