const Footer = () => {
  return (
    <footer className="border-t border-base-300 bg-red-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 font-bold px-4 py-5 text-sm text-red-900 md:flex-row md:items-center md:justify-between">
        
        {/* Left */}
        <p>
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        {/* Right */}
        <p className="md:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>

      </div>
    </footer>
  );
};

export default Footer;