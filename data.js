const products = [
  // ================= TRACE MINERALS =================
  {
    image: "https://media.istockphoto.com/id/1390982572/photo/customer-asking-medicine-to-pharmacist-by-showing-doctor-proscription-at-pharma-retail-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=7Ig-Ovy2Pyd7pH2Fb8HupRpEdjLCZvEDlAhJdMiMX2c=",
    type: "Syp.",
    name: "Sipmin-9",
    category: "Trace Minerals & Antioxidants",
    description:
      "Cell integrity antioxidant and liquid immunity booster containing essential trace minerals.",
    composition:
      "Zinc, Copper, Manganese, Chromium, Selenium, Iron, Molybdenum, Iodine & Fluorine",
  },

  // ================= RENAL NUTRITION =================
  {
    type: "Sachet",
    name: "NEF Diet HP",
    category: "Renal Nutrition",
    description:
      "High-protein, low-electrolyte, sucrose-free renal nutritional supplement.",
    composition: "High Protein, Low Electrolytes",
  },

  // ================= CONSTIPATION =================
  {
    type: "Sachet",
    name: "Constileave",
    category: "Constipation Management",
    description:
      "Fiber and prebiotic based powder containing Lactitol, Inulin and Isabgol.",
    composition: "Lactitol, Inulin & Isabgol Powder",
  },

  // ================= ANTIEMETIC =================
  {
    type: "Tab.",
    name: "Vomileave MD",
    category: "Antiemetic",
    description:
      "Mouth-dissolving tablet containing Prochlorperazine Maleate.",
    composition: "Prochlorperazine Maleate 5 mg",
  },

  // ================= MULTIVITAMINS =================
  {
    type: "Tab.",
    name: "Poolvita D",
    category: "Multivitamins & Antioxidants",
    description:
      "Multivitamin and antioxidant formulation with vitamins and essential nutrients.",
    composition:
      "Methylcobalamin, Alpha Lipoic Acid, Vitamin D3, Folic Acid & Pyridoxine",
  },

  {
    type: "Tab.",
    name: "Poolvita CZ",
    category: "Multivitamins & Antioxidants",
    description:
      "Multivitamin formulation supplemented with zinc.",
    composition: "Multivitamins with Zinc",
  },

  {
    type: "Tab.",
    name: "CoEngine",
    category: "Multivitamins & Antioxidants",
    description:
      "Nutritional antioxidant formulation containing Co-enzyme Q10, Omega-3 and Vitamin E.",
    composition:
      "Co-enzyme Q10 300 mg, Omega-3 Fatty Acid 300 mg & Vitamin E Acetate 100 mg",
  },

  // ================= CALCIUM =================
  {
    type: "Tab.",
    name: "CoraMaxim",
    category: "Calcium & Trace Elements",
    description:
      "Calcium and trace element supplement containing calcium, vitamin D3, magnesium and zinc.",
    composition:
      "Coral Calcium 500 mg, Vitamin D3 500 IU, Magnesium 100 mg, Zinc 4 mg & Vitamin K2-7",
  },

  // ================= PPI & ANTACID =================
  {
    type: "Cap.",
    name: "Rgood DSR",
    category: "PPI & Antacid",
    description:
      "Capsule formulation containing a proton pump inhibitor and sustained-release domperidone.",
    composition: "Rabeprazole 20 mg & Domperidone 30 mg SR",
  },

  {
    type: "Syp.",
    name: "RaftMaxim",
    category: "GERD, Indigestion & Antacid",
    description:
      "Antacid formulation designed for management of acid-related digestive discomfort.",
    composition:
      "Sodium Alginate 250 mg, Sodium Bicarbonate 133.5 mg & Calcium Carbonate 80 mg",
  },

  // ================= PLATELET SUPPORT =================
  {
    type: "Tab.",
    name: "Platehenz",
    category: "Platelet Support",
    description:
      "Nutritional formulation containing Carica Papaya, Tinospora Cordifolia, Goat Milk Powder and Vitamin E.",
    composition:
      "Carica Papaya 1100 mg, Tinospora Cordifolia 100 mg, Goat Milk Powder 100 mg & Vitamin E 10 mg",
  },

  // ================= UTI =================
  {
    type: "Tab.",
    name: "ManoMax",
    category: "UTI Management",
    description:
      "Nutritional formulation containing D-Mannose and Cranberry extract.",
    composition: "D-Mannose 600 mg & Cranberry 300 mg",
  },

  // ================= ANTIPYRETIC =================
  {
    type: "Tab.",
    name: "PYMOFY-1GM",
    category: "Antipyretic",
    description:
      "Paracetamol bilayer tablet with immediate-release and sustained-release components.",
    composition:
      "Paracetamol Immediate Release 300 mg & Sustained Release 700 mg",
  },

  // ================= CORTICOSTEROID =================
  {
    type: "Tab.",
    name: "Defagrand",
    category: "Corticosteroid",
    description:
      "Tablet containing Deflazacort.",
    composition: "Deflazacort 6 mg",
  },

  // ================= CRITICAL CARE =================
  {
    type: "Inj.",
    name: "MVIPool-CP",
    category: "Critical Care - Multivitamins & Antioxidants",
    description:
      "Combination injectable pack containing vitamin C, methylcobalamin, folic acid and nicotinamide.",
    composition:
      "Vitamin C 150 mg, Methylcobalamin 2500 mcg, Folic Acid 0.7 mg & Nicotinamide 12 mg",
  },

  {
    type: "Inj.",
    name: "MVIPool",
    category: "Critical Care - Multivitamins",
    description:
      "Multivitamin injection containing methylcobalamin, nicotinamide, pyridoxine and D-panthenol.",
    composition:
      "Methylcobalamin 1500 mcg, Nicotinamide 100 mg, Pyridoxine 100 mg & D-Panthenol 50 mg",
  },

  // ================= PPI INJECTION =================
  {
    type: "Inj.",
    name: "Maxeso",
    category: "PPI",
    description:
      "Proton pump inhibitor injection containing Esomeprazole.",
    composition: "Esomeprazole 40 mg",
  },

  // ================= ANTIBIOTICS =================
  {
    type: "Inj.",
    name: "CefMaxim",
    category: "Antibiotics",
    description:
      "Antibiotic injection containing Cefoperazone and Sulbactam.",
    composition: "Cefoperazone 1000 mg & Sulbactam 500 mg",
  },

  {
    type: "Inj.",
    name: "LactoCheck 1.125 Gm",
    category: "Antibiotics",
    description:
      "Fourth-generation cephalosporin antibiotic combination with beta-lactamase inhibitor.",
    composition: "Cefepime 1 gm & Tazobactam 125 mg",
  },

  {
    type: "Inj.",
    name: "Meromaxim",
    category: "Antibiotics",
    description:
      "Carbapenem antibiotic injection containing Meropenem.",
    composition: "Meropenem 1 gm / 500 mg",
  },

  {
    type: "Inj.",
    name: "MeroMaxim-S",
    category: "Antibiotics",
    description:
      "Carbapenem antibiotic combination containing Meropenem and Sulbactam.",
    composition: "Meropenem 1 gm & Sulbactam 500 mg",
  },
];

export default products;