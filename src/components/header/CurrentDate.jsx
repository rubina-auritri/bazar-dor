"use client";

import { useEffect, useState } from "react";

export default function CurrentDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString("bn-BD"));
  }, []);

  return <span>{date}</span>;
}