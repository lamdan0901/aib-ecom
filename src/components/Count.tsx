"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function Count2() {
  const [countz, setCountz] = useState(0);
  const notify = () => toast("Wow so easy!");
  return (
    <div>
      <button onClick={() => setCountz((p) => p + 1)}>Increase Count</button>
      <p>{countz}</p>
      <button onClick={notify}>Notify!</button>
      <h1 className="text-3xl font-bold">Hello world!</h1>
    </div>
  );
}
