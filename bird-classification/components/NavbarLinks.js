import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarLinks = () => {
  const router = useRouter();

  return (
    <>
      <Link href="/about-us" passHref>
        <span
          className={`text-xl text-black hover:text-blue-500 ${
            router.pathname === '/about-us' ? 'font-bold' : ''
          }`}
        >
          About Us
        </span>
      </Link>
      <Link href="/contact-us" passHref>
        <span
          className={`text-xl text-black hover:text-blue-500 ${
            router.pathname === '/contact-us' ? 'font-bold' : ''
          }`}
        >
          Contact Us
        </span>
      </Link>
      <Link href="/privacy-policy" passHref>
        <span
          className={`text-xl text-black hover:text-blue-500 ${
            router.pathname === '/privacy-policy' ? 'font-bold' : ''
          }`}
        >
          Privacy Policy
        </span>
      </Link>
    </>
  );
};

export default NavbarLinks;