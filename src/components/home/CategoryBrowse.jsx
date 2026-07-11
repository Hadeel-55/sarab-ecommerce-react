import { useTranslation } from "react-i18next";
import productsList from "../../data/products.json";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const CategoryBrowse = () => {
  const navigate=useNavigate()
const {t}=useTranslation()
  const getCategoryCount = (categorySlug) => {
    if (!Array.isArray(productsList)) return "0 items";

    if (categorySlug === "all" || categorySlug.en === "all") {
      return `${productsList.length} items`;
    }

    const count = productsList.filter((item) => {
      const itemEn = item.category?.en.toLocaleLowerCase() || "";
      const itemAr = item.category?.ar || "";

      const searchEn = categorySlug.en?.toLocaleLowerCase();
      const searchAr = categorySlug.ar || "";

      return itemEn === searchEn || itemAr === searchAr;
    }).length;
    return `${count} items`;
  };

  const categories = [
{
    id: 1,
    src: "/images/products/work1.jpg",
    alt: t('menu_section.all','all'),
    slug: { en: "all", ar: "الكل" },
    description: getCategoryCount({ en: "all", ar: "الكل" }), 
  },
{
    id: 2,
    src: "/images/products/work1.jpg",
    alt: t('menu_section.breakfast','breakfast'),
    slug: { en:"breakfast", ar: "فطور" },
    description: getCategoryCount({ en: "breakfast", ar: "فطور" }),
  },
    {
      id: 3,
      src: "/images/products/work3.jpg",
      alt: t('menu_section.main_courses','Main Course'),
      slug: { en:  "main-course", ar: "وجبة اساسية" },
      description: getCategoryCount({en:"main-course", ar:'وجبة اساسية'}),
    },
    {
      id: 4,
      src: "/images/products/work4.jpg",
      alt: t('menu_section.desserts','Dessert'),
      slug: { en: "dessert",   ar: "حلوى" },
      description: getCategoryCount({en:"dessert",ar:'حلوى'}),
    },
{
    id: 5,
    src: "/images/products/work5.jpg",
    alt: t('menu_section.drinks','drinks'),
    slug: { en: "drinks", ar: "مشروبات" },
    description: getCategoryCount({ en: "drinks", ar: "مشروبات" }),
  }
  ];

  return (
    <section className="category-section p-5">
<div className=" text-center">
  <h6 style={{color:'var(--primary-color)'}}>What We Offer</h6>
  <h1 className="fw-bold">Browse by <span style={{color:'var(--primary-color)'}}>Category</span></h1>
  <p className="text-secondary fs-5 pb-5">From sizzling burgers to exotic world cuisines - find your favourite in our menu</p>
</div>
      <Row className="d-flex gap-3 justify-content-center">
        {categories.map((item) => (
          <Col key={item.id} className="category-card text-center"
          onClick={()=>navigate(`/menu?category=${item.slug}`)}
          style={{cursor:'pointer'}}
          >
            <div className="img-container mb-2">
              <img
                src={item.src}
                alt={item.alt}
                className="img-fluid rounded-circle category-img"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
            </div>
            <p className="fw-bold m-0">{item.alt}</p>
            <small className="text-muted">{item.description}</small>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CategoryBrowse;
