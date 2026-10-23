const FooterBottom = () => {
return ( 
    <div className="mt-14 pt-7 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/40"> 
        <p> © {new Date().getFullYear()} Maxim Biocare. All Rights Reserved. </p>


        <p>
          Quality • Innovation • Care
        </p>
    </div>
    );
};

export default FooterBottom;
