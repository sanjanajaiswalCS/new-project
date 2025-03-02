import React from "react";
import { useParams } from "react-router-dom";

const Brand = () => {
  const { brandname } = useParams();

  // Brand logos
  const brandLogos = {
    samsung: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
    lg: "https://kreafolk.com/cdn/shop/articles/lg-logo-design-history-and-evolution-kreafolk_03aeb70a-1702-4330-a3d7-91c344688e97.jpg?v=1717725016&width=1024",
    voltas: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Voltas-Logo-PNG.png",
    daikin: "https://e7.pngegg.com/pngimages/269/383/png-clipart-logo-daikin-electronics-red-army-brand-daijin-blue-electronics.png",
    symphony: "https://coolersonline.ae/wp-content/uploads/2022/03/WhatsApp_Image_2022-10-03_at_21.52.50-removebg-preview.png",
    hitachi: "https://1000logos.net/wp-content/uploads/2018/01/Hitachi-logo.jpg",
    carrier: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Logo_of_the_Carrier_Corporation.svg/2560px-Logo_of_the_Carrier_Corporation.svg.png",
    mitsubishi: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Mitsubishi-logo.png",
    bluestar: "https://logovtor.com/wp-content/uploads/2020/01/blue-star-limited-logo-vector.png",
    whirlpool: "https://upload.wikimedia.org/wikipedia/commons/1/10/Whirlpool_Corporation_Logo.png",
    lloyd: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-288849,resizemode-75,msid-100319675/industry/cons-products/durables/lloyd-will-adopt-aggressive-pricing-strategy-to-gain-market-share-revenue-yogesh-gupta.jpg",
    godrej: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/2560px-Godrej_Logo.svg.png",
    ifb: "https://seeklogo.com/images/I/ifb-logo-CDA98EC536-seeklogo.com.png",
    haier: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Haier_logo.svg/2560px-Haier_logo.svg.png"
  };    

  // Ensure the brandname is lowercase and fetch the corresponding logo
  const logoUrl = brandLogos[brandname?.toLowerCase()] || "";

  // Format brand name to Title Case (e.g., "samsung" → "Samsung")
  const formattedBrandName = brandname
    ? brandname.charAt(0).toUpperCase() + brandname.slice(1).toLowerCase()
    : "Brand";

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      
      {/* Beautiful Brand Name */}
      <h1 style={{ textAlign: "center", fontSize: "36px", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
        {formattedBrandName} AC Service & Repair
      </h1>

      {/* Header Section with Logo and Call Now Button */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {logoUrl ? (
          <img 
            src={logoUrl} 
            alt={`${brandname} Logo`} 
            style={{ width: "500px", height: "auto" }}
          />
        ) : (
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>Brand logo not available</p>
        )}
        <a 
          href="tel:18002022413" 
          style={{ backgroundColor: "blue", color: "white", padding: "15px 25px", fontSize: "24px", fontWeight: "bold", textDecoration: "none", borderRadius: "8px" }}
        >
          Call Now 18002022413
        </a>
      </div>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginTop: "20px" }}>
        Our team of skilled technicians ensures top-notch repair and maintenance services, giving your AC a new life.
      </p>

      <div style={{ fontSize: "20px", lineHeight: "1.8" }}>
        <ul>
          <li>✔ Expert Technicians – Certified and trained professionals for accurate diagnosis.</li> 
          <li>✔ Same-Day Service – Quick and efficient repairs to restore cooling instantly.</li>
          <li>✔ Affordable Pricing – Transparent rates with no hidden charges.</li>
          <li>✔ Genuine Spare Parts – 100% original components for durability.</li>
          <li>✔ Service Warranty – Guaranteed satisfaction with every repair.</li>
        </ul>
      </div>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginTop: "20px", fontWeight: "bold" }}>
        We provide AC Service with our expert technicians at your doorstep in Mumbai, Navi Mumbai, Thane.
      </p>

      {/* Services Section */}
      <h3 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "20px" }}>Services :-</h3>
      <ul style={{ fontSize: "20px", lineHeight: "1.8" }}>
        <li>✅ Installation & Uninstallation – Setting up new AC units or removing existing ones.</li> 
        <li>✅ General Maintenance – Cleaning filters, coils, and checking refrigerant levels.</li>
        <li>✅ Repairs & Troubleshooting – Fixing issues like gas leaks, compressor failures, or electrical faults.</li>
        <li>✅ Gas Refilling & Leak Repair – Checking and refilling refrigerant gas if required.</li>
        <li>✅ Replacement of Parts – Changing faulty components like compressors, capacitors, or thermostats.</li>
        <li>✅ Deep Cleaning – High-pressure cleaning of indoor and outdoor units.</li>
        <li>✅ Duct Cleaning & Servicing – For central AC systems, ensuring clean and efficient airflow.</li>
      </ul>

      {/* Contact Section - Fixed */}
      <div style={{ fontSize: "20px", lineHeight: "1.8", marginTop: "20px", fontWeight: "bold" }}>
        <ul>
          <li><a href="tel:18002022413">📞 Call Now: 18002022413</a></li> 
          <li>📅 Book a Service Appointment Today!</li>    
        </ul>  
      </div>
    </div>
  );
};

export default Brand;
