import { mongooseConnect } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import { Order } from "../../../models/Order";

export async function POST(request) {
  await mongooseConnect();
  try {
    const requestDoc = await request.json();

    const newOrder = new Order(requestDoc);
    const savedOrder = await newOrder.save();

    const response = NextResponse.json(
      {
        message: "New order created successfully",
        success: true,
        data: savedOrder,
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
    const orders = await Order.find().sort({ createdAt: -1 });

    const response = NextResponse.json(
      {
        message: "success",
        success: true,
        data: orders,
      },
      { status: 200 }
    );
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
