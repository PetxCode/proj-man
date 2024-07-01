import React from "react";

const page = async ({ params }: any) => {
  const { inboxID } = params;
  return <div>page: {inboxID}</div>;
};

export default page;
