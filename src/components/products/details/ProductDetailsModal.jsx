import { useEffect } from "react";

import ModalHeader from "./ModalHeader";
import ProductOverview from "./ProductOverview";
import ProductComposition from "./ProductComposition";
import ProductInformation from "./ProductInformation";
import ProductFeatures from "./ProductFeatures";
import ProductIndications from "./ProductIndications";
import ProductBrochure from "./ProductBrochure";
import ModalFooter from "./ModalFooter";

function ProductDetailsModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl sm:rounded-3xl"
      >
        <ModalHeader onClose={onClose} />

        <ProductOverview product={product} />

        <ProductComposition
          composition={product.composition}
        />

        <ProductInformation product={product} />

        <ProductFeatures
          features={product.keyFeatures}
        />

        <ProductIndications
          indications={product.indications}
        />

        <ProductBrochure
          brochure={product.brochure}
        />

        <ModalFooter onClose={onClose} />
      </div>
    </div>
  );
}

export default ProductDetailsModal;