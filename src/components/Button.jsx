import { useState } from "react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  // 👉 এখানে তোমার আসল email দাও
  const email = "islamshaharia2006@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      alert("Failed to copy!");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={copyToClipboard}
        className="px-6 py-3 text-sm rounded-full font-medium bg-white text-black w-48 cursor-pointer hover:scale-105 transition shadow-md"
      >
        {copied ? "Email Copied ✅" : "Copy Email Address"}
      </button>
    </div>
  );
};

export default CopyEmailButton;
