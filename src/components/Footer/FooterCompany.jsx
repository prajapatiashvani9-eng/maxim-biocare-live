const FooterCompany = () => {
return ( 
    <div> 
        <h4 className="font-semibold mb-5">Company </h4>

        <div className="flex flex-col space-y-3 text-white/50">
            <a href="/#about" className="footer-link">
                About Us
            </a>

            <a href="/products" className="footer-link">
                Products
            </a>

            <a href="/#research" className="footer-link">
                Research
            </a>

            <a href="/#contact" className="footer-link">
                Contact
            </a>
        </div>
    </div>
    );
};

export default FooterCompany;
