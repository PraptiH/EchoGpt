import logo from "@/public/assets/images/logo.png"
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-around border-b border-line bg-white py-3">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <p className="font-semibold text-ink">EchoGpt</p>
      </div>

      <div className="flex items-center gap-6 text-muted">
        <Link href="/" className="hover:text-ink">Home</Link>
        <Link href="/Features" className="hover:text-ink">Features</Link>
        <Link href="/model" className="hover:text-ink">Models</Link>
        <Link href="/pricing" className="hover:text-ink">Pricing</Link>
        <Link href="/faq" className="hover:text-ink">FAQ</Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-ink hover:bg-surface">Sign In</button>
        <button className="bg-primary text-white px-4 py-2">Get Started</button>
      </div>
    </div>
  );
}
