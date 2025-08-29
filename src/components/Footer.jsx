import { LINKEDIN_URL } from "../utils/constants";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-900 text-white text-center py-4 mt-10 fixed bottom-0 left-0 w-full z-50">
      Created By
      <span className="mx-1">❤️</span>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 underline"
      >
        Vishal Awana
      </a>
      <span className="mx-1">&copy;</span>
      {year}
      <strong className="ml-1">
        Tasty <span className="text-yellow-400">Trails</span>
      </strong>
    </div>
  );
};

export default Footer;
