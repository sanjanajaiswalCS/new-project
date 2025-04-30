import React from "react";
import { useParams } from "react-router-dom";
const Brand = () => {
  const { brandname } = useParams();
  console.log(brandname);
  const brandLogos = {
    samsung: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
    lg: "https://kreafolk.com/cdn/shop/articles/lg-logo-design-history-and-evolution-kreafolk_03aeb70a-1702-4330-a3d7-91c344688e97.jpg?v=1717725016&width=1024",
    voltas: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Voltas-Logo-PNG.png",
    daikin: "https://e7.pngegg.com/pngimages/269/383/png-clipart-logo-daikin-electronics-red-army-brand-daijin-blue-electronics.png",
    ogeneral: "https://coolersonline.ae/wp-content/uploads/2022/03/WhatsApp_Image_2022-10-03_at_21.52.50-removebg-preview.png",
    hitachi: "https://1000logos.net/wp-content/uploads/2018/01/Hitachi-logo.jpg",
    carrier: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Logo_of_the_Carrier_Corporation.svg/2560px-Logo_of_the_Carrier_Corporation.svg.png",
    mitsubishi: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Mitsubishi-logo.png",
    bluestar: "https://logovtor.com/wp-content/uploads/2020/01/blue-star-limited-logo-vector.png",
    whirlpool: "https://upload.wikimedia.org/wikipedia/commons/1/10/Whirlpool_Corporation_Logo.png",
    lloyd: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-288849,resizemode-75,msid-100319675/industry/cons-products/durables/lloyd-will-adopt-aggressive-pricing-strategy-to-gain-market-share-revenue-yogesh-gupta.jpg",
    godrej: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/2560px-Godrej_Logo.svg.png",
    ifb: "https://seeklogo.com/images/I/ifb-logo-CDA98EC536-seeklogo.com.png",
    haier: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Haier_logo.svg/2560px-Haier_logo.svg.png",
    panasonic: "https://kreafolk.com/cdn/shop/articles/panasonic-logo-design-history-and-evolution-kreafolk_e22aef50-03d3-44ad-9c51-839d87728434.jpg?v=1717725026&width=2048"
  };
 
  // Ensure the brandname is lowercase and fetch the corresponding logo
  const logoUrl = brandLogos[brandname?.toLowerCase()] || "";

  // Format brand name to Title Case (e.g., "samsung" → "Samsung")
  const formattedBrandName = brandname
    ? brandname.toLowerCase() === "lg" // Check if the brand name is "lg" (case-insensitive)
      ? "LG" // Convert "lg" to "LG"
      : brandname.charAt(0).toUpperCase() + brandname.slice(1).toLowerCase() // Capitalize the first letter and lowercase the rest
    : "Brand"; // Default value if brandname is empty or undefined
  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>

      <title>{`${formattedBrandName} AC SERVICE CENTER: Fast Service | 1800-202-2413 | Trusted Experts`}</title>
      <meta
        name="description"
        content={`Need ${formattedBrandName}AC repair now? Call 1800-202-2413 for quick, reliable service. Certified technicians, genuine parts, and guaranteed satisfaction.`}
      />
      <meta
        name="keywords"
        content={`${formattedBrandName} AC Service Center In Mumbai, ${formattedBrandName} Air Conditioner Service Center, ${formattedBrandName} Service Center, ${formattedBrandName} AC Service Center Near Me, ${formattedBrandName} Call Center, ${formattedBrandName} Service Centre Number, ${formattedBrandName} Authorised Service Centre, ${formattedBrandName} AC Service Centre Near Me, ${formattedBrandName} AC Service Centre Number, ${formattedBrandName} Service Centre Near Me, ${formattedBrandName} AC Call Centre, ${formattedBrandName} AC Help Center, ${formattedBrandName} AC Authorised Service Centre, ${formattedBrandName} AC Service Center No, Service Center Of ${formattedBrandName} AC, ${formattedBrandName} Call Center Number, AC ${formattedBrandName} Service Centre, ${formattedBrandName} Authorised Service Center, ${formattedBrandName} Service Centre Contact Number, ${formattedBrandName} Service Centre Phone Number, ${formattedBrandName} Service Center No, ${formattedBrandName} AC Service Call Center, ${formattedBrandName} AC Service Center Phone Number, ${formattedBrandName} AC Call Center, ${formattedBrandName} Authorized Service Centre, ${formattedBrandName} AC Service Center Contact Number, ${formattedBrandName} Authorised Service Centre Near Me, ${formattedBrandName} AC Service Center Near Me Contact Number, ${formattedBrandName} Company Service Centre, ${formattedBrandName} AC Authorised Service Centre Near Me, ${formattedBrandName} Service Centre AC, ${formattedBrandName} Authorised Service Center Near Me, ${formattedBrandName} AC Service Centre Phone Number, ${formattedBrandName} Inverter AC Service Centre, ${formattedBrandName} AC Customer Care, ${formattedBrandName} AC Installation Customer Care, ${formattedBrandName} AC Toll Free No, ${formattedBrandName} AC Service Customer Care, ${formattedBrandName} AC Customer Care No, Customer Care ${formattedBrandName} AC, ${formattedBrandName} Customer Care AC, ${formattedBrandName} Customer Care Service, ${formattedBrandName} Freezer Customer Care, ${formattedBrandName} AC Toll Free, Customer Care No Of ${formattedBrandName} AC, ${formattedBrandName} AC Customer Care Service, AC ${formattedBrandName} Customer Care, ${formattedBrandName} Customer No, ${formattedBrandName} AC Helpline No, Customer Care Of ${formattedBrandName} AC, ${formattedBrandName} Window AC Customer Care, ${formattedBrandName} AC Repair Near Me, ${formattedBrandName} AC Service Near Me`}
      />
      <meta name="robots" content="index, follow" />

      {/* Beautiful Brand Name */}
      <h1 style={{ textAlign: "center", fontSize: "36px", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
        {formattedBrandName} AC Service Center
      </h1>

      {/* Header Section with Logo and Call Now Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",  // Allows items to wrap on smaller screens
          textAlign: "center"
        }}
      >
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${brandname} Logo`}
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto"
            }}
          />
        ) : (
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>Brand logo not available</p>
        )}

        <a
          href="tel:18002022413"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "15px 25px",
            fontSize: "24px",
            fontWeight: "bold",
            textDecoration: "none",
            borderRadius: "8px",
            marginTop: "10px",  // Adds spacing between logo and button
            display: "inline-block"  // Ensures proper button alignment
          }}
        >
          Call Now 18002022413
        </a>
      </div>
      <div className='text-base'>
        <br />
      {formattedBrandName} air conditioners are known for their advanced technology, energy efficiency, and reliable cooling performance. However, like any home appliance, regular servicing is essential to maintain their efficiency and longevity. Dust buildup, refrigerant leaks, and worn-out components can reduce the effectiveness of your AC, leading to higher electricity bills and potential breakdowns. Routine maintenance helps in improving cooling efficiency, extending the unit’s lifespan, and ensuring a healthy indoor environment by preventing the circulation of dust and allergens.

<br/><br />Common issues faced by {formattedBrandName} AC owners include inadequate cooling, unusual noises, water leakage, foul odors, and electrical faults. These problems can arise due to clogged filters, low refrigerant levels, loose components, or blocked drainage pipes. Regular servicing resolves these issues by cleaning essential parts, checking for gas leaks, and ensuring optimal performance. Simple preventive measures such as cleaning air filters, maintaining proper ventilation, and keeping the outdoor unit free from dust can also contribute to your AC’s longevity and efficiency.

<br/><br/>If your {formattedBrandName} AC isn’t functioning as expected, it’s time for a professional check-up. Our expert technicians provide quick, reliable, and affordable {formattedBrandName} AC repair, gas refilling, maintenance, and installation services. We ensure your cooling system operates at peak efficiency, helping you stay comfortable all year round. 

        </div>
      <div className="mt-8">
        <div className="mt-8 font-2">
          {[
            `${formattedBrandName} AC Service Center In Mumbai`,
            `${formattedBrandName} Air Conditioner Service Center`,
            `${formattedBrandName} Service Center`,
            `${formattedBrandName} AC Service Center Near Me`,
            `${formattedBrandName} Call Center`,
            `${formattedBrandName} Service Centre Number`,
            `${formattedBrandName} Authorised Service Centre`,
            `${formattedBrandName} AC Service Centre Near Me`,
            `${formattedBrandName} AC Service Centre Number`,
            `${formattedBrandName} Service Centre Near Me`,
            `${formattedBrandName} AC Call Centre`,
            `${formattedBrandName} AC Help Center`,
            `${formattedBrandName} AC Authorised Service Centre`,
            `${formattedBrandName} AC Service Center No`,
            `Service Center Of ${formattedBrandName} AC`,
            `${formattedBrandName} Call Center Number`,
            `AC ${formattedBrandName} Service Centre`,
            `${formattedBrandName} Authorised Service Center`,
            `${formattedBrandName} Service Centre Contact Number`,
            `${formattedBrandName} Service Centre Phone Number`,
            `${formattedBrandName} Service Center No`,
            `${formattedBrandName} AC Service Call Center`,
            `${formattedBrandName} AC Service Center Phone Number`,
            `${formattedBrandName} AC Call Center`,
            `${formattedBrandName} Authorized Service Centre`,
            `${formattedBrandName} AC Service Center Contact Number`,
            `${formattedBrandName} Authorised Service Centre Near Me`,
            `${formattedBrandName} AC Service Center Near Me Contact Number`,
            `${formattedBrandName} Company Service Centre`,
            `${formattedBrandName} AC Authorised Service Centre Near Me`,
            `${formattedBrandName} Service Centre AC`,
            `${formattedBrandName} Authorised Service Center Near Me`,
            `${formattedBrandName} AC Service Centre Phone Number`,
            `${formattedBrandName} Inverter AC Service Centre`,
            `${formattedBrandName} AC Customer Care`,
            `${formattedBrandName} AC Installation Customer Care`,
            `${formattedBrandName} AC Toll Free No`,
            `${formattedBrandName} AC Service Customer Care`,
            `${formattedBrandName} AC Customer Care No`,
            `Customer Care ${formattedBrandName} AC`,
            `${formattedBrandName} Customer Care AC`,
            `${formattedBrandName} Customer Care Service`,
            `${formattedBrandName} Freezer Customer Care`,
            `${formattedBrandName} AC Toll Free`,
            `Customer Care No Of ${formattedBrandName} AC`,
            `${formattedBrandName} AC Customer Care Service`,
            `AC ${formattedBrandName} Customer Care`,
            `${formattedBrandName} Customer No`,
            `${formattedBrandName} AC Helpline No`,
            `Customer Care Of ${formattedBrandName} AC`,
            `${formattedBrandName} Window AC Customer Care`,
            `${formattedBrandName} AC Repair Near Me`,
            `${formattedBrandName} AC Service Near Me`,
          ].map((text, index) => (
            <p key={index} className="mb-2">{text}</p>
          ))}
          <div>
          </div>

        </div>
        <div className="  mt-5">
        Disclaimer: Any product names, logos, brands, and other trademarks or images featured or referred to within at your service support website are the property of their respective trademark holders. Moreover at your service support is neither associated nor affiliated with any Companies, logos and images are being used only for representation purpose of post warranty repair and service. At your service support is an independent organization.
        </div>
      </div>
    </div>
  );
};

export default Brand;
