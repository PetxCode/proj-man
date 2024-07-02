import { PAYSTACK } from "@/utils/constant";
import axios from "axios";
// import https from "node:https";

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
          Authorization: `Bearer sk_test_c9f764c9d687cf28275c9cd131eb835393e87df6`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const verifyPayment = async (reference: string) => {
  try {
    const url: string = `https://api.paystack.co/transaction/verify/${reference}`;

    return await axios.get(url, {
      headers: {
        Authorization: `Bearer ${PAYSTACK}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// export const paystackPayment = async () => {
//   const params = JSON.stringify({
//     email: "customer@email.com",
//     amount: "20000",
//   });

//   const options = {
//     hostname: "api.paystack.co",
//     port: 443,
//     path: "/transaction/initialize",
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${PAYSTACK}`,
//       "Content-Type": "application/json",
//     },
//   };

//   const req = https.request(options, (res) => {
//     let data = "";

//     res.on("data", (chunk) => {
//       data += chunk;
//     });

//     res.on("end", () => {
//       //   console.log(JSON.parse(data));
//       return JSON.parse(data);
//     });
//   });
//   // .on("error", (error) => {
//   //   console.error(error);
//   // });

//   req.write(params);
//   req.end("Write");

//   //   console.log(req);

//   //   return req;
// };
