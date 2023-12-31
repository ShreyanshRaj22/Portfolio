import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, siteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={siteUrl} className="proj-imgbx">
        <img src={imgUrl} className="img-fluid" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
    </Col>
  );
};
