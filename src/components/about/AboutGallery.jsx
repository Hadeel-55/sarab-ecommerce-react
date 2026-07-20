import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import CustomModal from "../modals/CustomModal";
import { useState } from "react";

const AboutGallery = () => {
  const { t } = useTranslation();
  const galleryImages = [
    { id: 1, src: "/images/productsImg/burger.jpg" },
    { id: 2, src: "/images/productsImg/cake.jpg" },
    { id: 3, src: "/images/productsImg/iced-latte.jpg" },
    { id: 4, src: "/images/productsImg/pasta.jpg" },
    { id: 5, src: "/images/productsImg/pizza.jpg" },
  ];
  const [showVideo, setShowVideo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightBox = (index) => {
    setCurrentIndex(index);
    setShowVideo(true);
  };

  const handleNext = () => {
    setCurrentIndex((pervIndex) => (pervIndex + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <div className="bg-white">
    <Container className="mt-5 pt-5 pb-5">
      <div className=" text-center">
        <h6 style={{ color: "var(--primary-color)" }}>
          {t("about.gallery.subtitle")}
        </h6>
        <h1 className="fw-bold">
          {t("about.gallery.title1")}
          <span style={{ color: "var(--primary-color)" }}>
            {t("about.gallery.title2")}
          </span>
        </h1>
      </div>

      <Row className="g-3 mt-4">
        <Col md={4}>
          <div
            className="gallery-img-wrapper h-100"
            onClick={() => openLightBox(0)}
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].title}
              className="w-100 h-100 object-fit-cover rounded-4 shadow-sm"
              style={{ cursor: "pointer", minHeight: "415px" }}
            />
          </div>
        </Col>

        <Col md={4}>
          <Row className="g-3">
            <Col xs={12}>
              <div
                className="gallery-img-wrapper"
                onClick={() => openLightBox(1)}
              >
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].title}
                  className="w-100 object-fit-cover rounded-4 shadow-sm"
                  style={{ cursor: "pointer", height: "200px" }}
                />
              </div>
            </Col>
            <Col xs={12}>
              <div
                className="gallery-img-wrapper"
                onClick={() => openLightBox(2)}
              >
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].title}
                  className="w-100 object-fit-cover rounded-4 shadow-sm"
                  style={{ cursor: "pointer", height: "200px" }}
                />
              </div>
            </Col>
          </Row>
        </Col>

        <Col md={4}>
          <Row className="g-3">
            <Col xs={12}>
              <div
                className="gallery-img-wrapper"
                onClick={() => openLightBox(3)}
              >
                <img
                  src={galleryImages[3].src}
                  alt={galleryImages[3].title}
                  className="w-100 object-fit-cover rounded-4 shadow-sm"
                  style={{ cursor: "pointer", height: "200px" }}
                />
              </div>
            </Col>
            <Col xs={12}>
              <div
                className="gallery-img-wrapper"
                onClick={() => openLightBox(4)}
              >
                <img
                  src={galleryImages[4].src}
                  alt={galleryImages[4].title}
                  className="w-100 object-fit-cover rounded-4 shadow-sm"
                  style={{ cursor: "pointer", height: "200px" }}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

 <CustomModal
        show={showVideo}
        onHide={() => setShowVideo(false)}
        size="lg"
        contentClassName="bg-transparent border-0"
      >
        <div className="text-center position-relative text-white p-3">
          
          <Button 
            onClick={() => setShowVideo(false)} 
            className="btn-close btn-close-light bg-light position-absolute top-0 end-0 m-3"
            aria-label="Close"
            
          ></Button>

          
          <img
            src={galleryImages[currentIndex].src}
            alt={galleryImages[currentIndex].title}
            className="img-fluid rounded-4 shadow-lg mb-3"
            style={{ maxHeight: '70vh', objectFit: 'contain' }}
          />

          
          <h4 className="fw-bold mt-2">{galleryImages[currentIndex].title}</h4>
          <p className="text-light opacity-75">{galleryImages[currentIndex].desc}</p>

          
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Button className="px-4 rounded-pill " style={{backgroundColor:'var(--primary-color)',border:'none'}} onClick={handlePrev}>
              &lt; Prev
            </Button>
            <Button className="px-4 rounded-pill " style={{backgroundColor:'var(--primary-color)',border:'none'}} onClick={handleNext}>
              Next &gt;
            </Button>
          </div>
        </div>
      </CustomModal>
    </Container>
        </div>
  );
};
export default AboutGallery;
