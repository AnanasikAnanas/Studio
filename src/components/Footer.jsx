import Terms from "./Icons/Terms";

const Footer = () => {
  return (
    <footer className="px-20 h-[100px] bg-white flex justify-between items-center text-black">
      <div className="flex gap-6 items-center">
        <a href="#" className="text-2xl font-bold">
          студия баранова
        </a>
        <p>@ 2023 baranov, Inc. All rights reserved.</p>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex gap-2 items-center">
          <Terms />
          <a href="#">Terms</a>
        </div>
        <a href="#">Privacy</a>
        <a href="#">Support</a>
      </div>
    </footer>
  );
};

export default Footer;
