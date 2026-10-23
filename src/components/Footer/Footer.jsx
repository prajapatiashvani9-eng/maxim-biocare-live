import FooterBrand from "./FooterBrand";
import FooterCompany from "./FooterCompany";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

const Footer = () => {
return ( 
    <footer className="bg-slate-950 text-white"> 
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
            {/* Footer Sections */}
            <div className="grid md:grid-cols-4 gap-12">
                <FooterBrand />
                <FooterCompany />
                <FooterContact />
            </div>
            {/* Copyright Section */}
            <FooterBottom />
        </div>
    </footer>
    );
};

export default Footer;
