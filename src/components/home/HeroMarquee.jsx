const HeroMarquee = () => {
  const items = [
    "Loaded Fries",
    "Ice Cream Shakes",
    "Grilled Sandwiches",
    "Crispy Fried Chicken",
    "Gourmet Burgers",
    "Artisan Pizza",
  ];
  const duplicatedItems = [...items, ...items, ...items,...items];
  return (
    <div className="sarab-marquee-container bg-danger text-white py-3 mt-4">
      <div className="sarab-marquee-content">
        {duplicatedItems.map((item, index) => (
          <span key={index}>. {item}</span>
        ))}
      </div>
    </div>
  );
};
export default HeroMarquee;
