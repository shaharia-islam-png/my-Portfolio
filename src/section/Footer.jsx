
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space  border-t border-neutral-700">
      <div className="mb-7 bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
      <div className="flex gap-2">
        <p className="ml-5 ">Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <p className="mr-5">© 2025 Ali. All rights reserved.</p>
    </section>
  );
};

export default Footer;