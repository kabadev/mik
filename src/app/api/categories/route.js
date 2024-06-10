import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";
import { Category } from "../../../models/Category";

export async function POST(request) {
  await mongooseConnect();
  try {
    const { name, parentCategory } = await request.json();

    const categoryDoc = {
      name,
      parent: parentCategory || undefined,
    };

    const newpCategory = new Category(categoryDoc);
    const saveCategory = await newpCategory.save();

    const response = NextResponse.json(
      {
        message: "New Category created successfully",
        success: true,
        data: saveCategory,
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
    const Categories = await Category.find();

    const response = NextResponse.json(
      {
        message: "success",
        success: true,
        data: Categories,
      },
      { status: 200 }
    );
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
