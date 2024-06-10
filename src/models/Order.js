import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expirationDate: { type: String, required: true },
    cvc: { type: String, required: true },
    products: { type: [Object], required: true },
  },
  {
    timestamps: true,
  }
);

//   {
//     line_items: Object,
//     name: String,
//     email: String,
//     city: String,
//     zip: String,
//     address: String,
//     country: String,
//     paid: Boolean,
//   },
//   {
//     timestamps: true,
//   }
// );

export const Order = models?.Order || model("Order", OrderSchema);
