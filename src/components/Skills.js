import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter from "../assets/img/meter.svg";
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobiile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-sider">
                                <div className="item">
                                    <img src={meter} alt="Image" /> 
                                    <h5>Project</h5>
                                </div>
                                <div className="item">
                                    <img src={meter} alt="Image" /> 
                                    <h5>Project</h5>
                                </div>
                                <div className="item">
                                    <img src={meter} alt="Image" /> 
                                    <h5>Project</h5>
                                </div>
                                <div className="item">
                                    <img src={meter} alt="Image" /> 
                                    <h5>Project</h5>
                                </div>
                                <div className="item">
                                    <img src={meter} alt="Image" /> 
                                    <h5>Project</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}