import { Container } from "../shared/conainer";
import logo from "../../assets/icon.svg";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 rounded-t-3xl bg-box-bg overflow-hidden">
      <Container>
        <div className="border-t border-box-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="EdgeAI Logo" className="w-8 h-8" />
              <span className="text-lg font-semibold text-heading-1">
                EdgeAI
              </span>
            </div>

            <ul className="flex flex-wrap justify-center gap-6 text-heading-1">
              {navItems.map((item, idx) => (
                <NavItem key={idx} href={item.href} text={item.text} />
              ))}
            </ul>
          </div>

          <p className="mt-6 text-sm text-heading-2 text-center">
            © {new Date().getFullYear()} EdgeAI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
