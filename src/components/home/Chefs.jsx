import { Container, Card, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
const Chefs = () => {
  const { t } = useTranslation();
  const chefs = [
    {
      id: "alice",
      image: "/images/chefs/chefs 1.jpg",
      name: t("chefs.alice.name"),
      rol: t("chefs.alice.role"),
      experience: t("chefs.alice.experience"),
    },
    {
      id: "michael",
      image: "/images/chefs/chefs 2.jpg",
      name: t("chefs.michael.name"),
      rol: t("chefs.michael.role"),
      experience: t("chefs.michael.experience"),
    },
    {
      id: "faz",
      image: "/images/chefs/chefs 3.jpg",
      name: t("chefs.faz.name"),
      rol: t("chefs.faz.role"),
      experience: t("chefs.faz.experience"),
    },
    {
      id: "william",
      image: "/images/chefs/chefs 4.jpg",
      name: t("chefs.william.name"),
      rol: t("chefs.william.role"),
      experience: t("chefs.william.experience"),
    },
  ];
  return (
    <Container>
      <div className=" text-center mt-5 pt-5">
        <h6 style={{ color: "var(--primary-color)" }}>{t("chefs.title")}</h6>
        <h1 className="fw-bold">
          {t("chefs.subtitle1")}{" "}
          <span style={{ color: "var(--primary-color)" }}>
            {t("chefs.subtitle2")}
          </span>
        </h1>
        <div className="title-divider mx-auto my-3"></div>
      </div>

      <Row className="g-4 p-5 justify-content-center">
        {chefs.map((chef) => (
          <Col key={chef.id} xs={10} sm={6} md={4} lg={3} className="d-flex">
            <Card className="w-100 h-100 d-flex flex-column border-0 shadow-sm">
              <Card.Img
                variant="top"
                className="w-100 h-100 object-cover"
                style={{
                  height: "320px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
                src={chef.image}
                alt={chef.name}
              ></Card.Img>
              <Card.Body className="text-center">
                <Card.Title className=" fw-bold">{chef.name}</Card.Title>
                <Card.Text className="text-danger mb-0">{chef.rol}</Card.Text>
                <small className="text-secondary ">{chef.experience}</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Chefs;
