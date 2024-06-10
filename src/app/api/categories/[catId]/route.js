import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";
import { Category } from "../../../../models/Category";

export async function PUT(request) {
  await mongooseConnect();
  try {
    const { name, parentCategory, _id } = await request.json();

    const categoryDoc = await Category.updateOne(
      { _id },
      { name, parent: parentCategory || undefined }
    );

    const response = NextResponse.json(
      {
        message: "success ",
        success: true,
        data: categoryDoc,
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
    if (!params.catId) {
      return new NextResponse("request id is required", { status: 400 });
    }

    await Category.deleteOne({ _id: params.catId });

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
