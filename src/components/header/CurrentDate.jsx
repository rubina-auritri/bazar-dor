
"use client";

export default function CurrentDate() {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <p className="text-sm font-medium text-base-content">
      {date}
    </p>
  );
}
