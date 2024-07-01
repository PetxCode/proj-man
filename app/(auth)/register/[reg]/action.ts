import { PAYSTACK } from "@/utils/constant";
import axios from "axios";

export const makePayment = async (email: string, cost: number) => {
  try {
    const url: string = "https://api.paystack.co/transaction/initialize";

    return await axios.post(
      url,
      {
        email,
        amount: `${cost * 100}`,
        callback_url: "http://localhost:3000/confirm",
        metadata: {
          cancel_action: "http://localhost:3000/register",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
