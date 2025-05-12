import React from "react";
import { useParams } from "react-router-dom";
const Brand = () => {
  let { brandname } = useParams();
  brandname = brandname?.split("-")[0];
  console.log(brandname);
  const brandLogos = {
    samsung: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png",
    lg: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png",
    voltas: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png",
    daikin: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png",
    ogeneral: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png",
    hitachi: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png",
    carrier: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png",
    mitsubishi: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png",
    bluestar: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png",
    whirlpool: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png",
    lloyd: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png",
    godrej: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png",
    ifb: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png",
    haier: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png",
    panasonic: "https://static.vecteezy.com/system/resources/previews/012/909/769/non_2x/air-conditioner-appliance-free-png.png"
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
      <h1  style={{ textAlign: "center", fontSize: "36px", fontWeight: "bold", marginBottom: "40px", marginTop:"10px",color: "#333" }}>
        {formattedBrandName} AC Repair & Services
      </h1>

      {/* Header Section with Logo and Call Now Button */}
      <div
        style={{
          display: "flex",
           marginBottom: "40px",
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

        {/* <a
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
        </a> */}
      </div>
      <div className='text-base'>
        <br />

        Are you searching for a {formattedBrandName} AC repair service near you?<br />
        We are an independent air conditioner service provider specializing in  {formattedBrandName}  AC repair, installation, and maintenance. <br />Whether you own a split AC, window AC, inverter AC, or a central cooling system, we provide expert solutions at your doorstep.
        <div>
          Common AC Problems We Fix:

          <div className="ml-6 p-2">
            •	AC not cooling or low cooling <br />
            •	AC making unusual noises <br />
            •	Water leakage from indoor unit <br />
            •	AC not turning on <br />
            •	Foul smell from AC vents <br />
            •	AC gas leak and refill <br />
            •	PCB or electrical component failure <br />
          </div>
          Our Services
          <div className="ml-6 p-2">
            •	Routine maintenance & annual servicing <br />
            •	Gas refilling & leak repair <br />
            •	PCB board repair & replacement <br />
            •	Compressor and fan motor service <br />
            •	AC installation & uninstallation <br />
            •	Deep cleaning & filter sanitization <br />
          </div>

        </div>
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
        <div className=" mt-5">
          Disclaimer: Any product names, logos, brands, and other trademarks or images featured or referred to within at your service support website are the property of their respective trademark holders. Moreover at your service support is neither associated nor affiliated with any Companies, logos and images are being used only for representation purpose of post warranty repair and service. At your service support is an independent organization.
        </div>
      </div>
    </div>
  );
};

export default Brand;
