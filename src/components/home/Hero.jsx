import { FaStar, FaRegClock, FaPlay, FaFire, FaUtensils } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "../common/Button";
import { BiBorderRadius } from "react-icons/bi";
import burger from "../../assets/images/burger.jpg";
import WatchStoryModal from "../modals/WatchStoryModal";
import { useState } from "react";
import HeroMarquee from "./HeroMarquee";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);
const navigate=useNavigate();
  const youtubeVideoId =
    "https://youtube.com/shorts/OiAoQBTEfhM?si=Oe38mPJ2xGp1e35a";

  return (
    <section className="hero-section p-5">
      <Container>
        <Row>
          <Col md="6">
            <div className="d-flex gap-3 p-1 bg-white rounded-5 align-items-center ">
              <div
                className="sarab-brand "
                style={{ width: "30px", height: "30px" }}
              >
                <FaStar className="fs-5" />
              </div>
              <span>{t("hero.welcome")}</span>
            </div>
            <div style={{ maxWidth: "589px" }}>
              <h1 className=" fw-bold mt-4 " style={{ fontSize: "70px" }}>
                {t("hero.title.before")} <span className="sarab-brand-name">{t("hero.title.highlight")} </span>
               {t("hero.title.after")}
              </h1>
            </div>
            <p className="sarab-navbar-text fs-6">{t("hero.subtitle")}</p>
            <div className="d-flex gap-5 align-items-center">
              <div>
                <CustomButton
                  size={"lg"}
                  style={{ borderRadius: "40px" }}
                  icon={<FaUtensils />}
                  title={t("hero.menu_btn")}
                 onClick={()=>navigate("/menu")}
                />
              </div>
              <WatchStoryModal
                show={showVideo}
                onHide={() => setShowVideo(false)}
                size="lg"
                contentClassName="bg-transparent border-0"
              >
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${"https://www.youtube.com/shorts/OiAoQBTEfhM"}?autoplay=1`}
                    title="video"
                  ></iframe>
                </div>
              </WatchStoryModal>
            </div>

            <div className="hero-stats-container d-flex flex-wrap mt-5 pt-3">
              <div className="stat-item pe-4 me-4 border-end border-secondary border-opacity-25">
                <h2 className="fw-bold stat-number m-0">
                  {t("hero.stats.customers_count")}
                </h2>
                <span className="stat-label text-uppercase text-secondary fs-7">
                  {t("hero.stats.customers_text")}
                </span>
              </div>

              <div className="stat-item pe-4 me-4 border-end border-secondary border-opacity-25">
                <h2 className="fw-bold stat-number m-0">
                  {t("hero.stats.items_count")}
                </h2>
                <span className="stat-label text-uppercase text-secondary fs-7">
                  {t("hero.stats.items_text")}
                </span>
              </div>

              <div className="stat-item pe-4 me-4 border-end border-secondary border-opacity-25">
                <h2 className="fw-bold stat-number m-0">
                  {t("hero.stats.chefs_count")}
                </h2>
                <span className="stat-label text-uppercase text-secondary fs-7">
                  {t("hero.stats.chefs_text")}
                </span>
              </div>

              <div className="stat-item pe-4 me-4 border-end border-secondary border-opacity-25">
                <h2 className="fw-bold stat-number m-0">
                  {t("hero.stats.exp_count")}
                </h2>
                <span className="stat-label text-uppercase text-secondary fs-7">
                  {t("hero.stats.exp_text")}
                </span>
              </div>
            </div>
          </Col>

          <Col
            md="6"
            className="position-relative d-flex align-items-center justify-content-center mt-5 mt-md-0"
          >
            <div className="hero-image-wrapper position-relative">
              <div className="hero-circle-bg"></div>
              <img
                src={burger}
                alt="Delicious Burger"
                className="hero-main-img img-fluid"
              />
            </div>

            <div className="floating-card card-hot-deal d-flex align-items-center gap-2 p-3 bg-white shadow-sm rounded-4">
              <div className="card-icon-box bg-danger bg-opacity-10 text-danger p-2 rounded-3">
                <FaFire />
              </div>
              <div>
                <h6 className="fw-bold m-0 fs-7">{t("hero.hot_deal")}</h6>
                <small className="text-muted fs-8">{t("hero.discount")}</small>
              </div>
            </div>

            <div className="floating-card card-delivery d-flex align-items-center gap-2 p-3 bg-white shadow-sm rounded-4">
              <div className="card-icon-box bg-success bg-opacity-10 text-success p-2 rounded-3">
                <FaRegClock />
              </div>
              <div>
                <h6 className="fw-bold m-0 fs-7">{t("hero.delivery_time")}</h6>
                <small className="text-muted fs-8">
                  {t("hero.fast_delivery")}
                </small>
              </div>
            </div>

            <div className="floating-card card-rating d-flex align-items-center gap-2 p-3 bg-white shadow-sm rounded-4">
              <div className="card-icon-box bg-warning bg-opacity-10 text-warning p-2 rounded-3">
                <FaStar />
              </div>
              <div>
                <h6 className="fw-bold m-0 fs-7">{t("hero.rating")}</h6>
                <small className="text-muted fs-8">{t("hero.reviews")} </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <HeroMarquee />
    </section>
  );
};
export default Hero;
