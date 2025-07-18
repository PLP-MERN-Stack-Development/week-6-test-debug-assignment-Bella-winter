// client/src/components/layout/Footer.jsx

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-100 text-center text-sm text-gray-600 mt-auto">
      &copy; {new Date().getFullYear()} Bug Tracker. All rights reserved.
    </footer>
  );
};

export default Footer;
