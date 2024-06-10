import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request, { params }) {
  await mongooseConnect();
  try {
    const { title, description, price, _id, images, category, details } =
      await request.json();
    if (!params.productId) {
      return new NextResponse("request id is required", { status: 400 });
    }

    await Product.updateOne(
      { _id },
      {
        title,
        description,
        price,
        _id,
        images,
        category,
        details,
      }
    );

    const response = NextResponse.json(
      {
        message: "success ",
        success: true,
      },
      { status: 200 }
    );
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function GET(req, { params }) {
  await mongooseConnect();
  try {
    if (!params.productId) {
      return new NextResponse("request id is required", { status: 400 });
    }

    const data = await Product.findById(params.productId);

    const response = NextResponse.json(
      {
        message: "success ",
        success: true,
        data: data,
      },
      { status: 200 }
    );
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await mongooseConnect();
  try {
    if (!params.productId) {
      return new NextResponse("request id is required", { status: 400 });
    }

    await Product.deleteOne({ _id: params.productId });

    const response = NextResponse.json(
      {
        message: "Deleted ",
        success: true,
      },
      { status: 200 }
    );
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
