import { Card, Col, Row, Tag, Typography } from 'antd';
import { certifications } from '../constants/certifications';
import { motion } from 'framer-motion';

const { Title, Paragraph, Link } = Typography;
const CertificationPart = () => {
  return (
    <div className="certificates">
      <Title level={2}>Certifications</Title>
      <Row gutter={[24, 24]} className="certificates-container">
        {certifications.map((cert, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card hoverable className="certificate-card">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.25 }}
                viewport={{ once: true }}>
                <Title level={5}>{cert.title}</Title>
                <Paragraph>
                  {cert.issuer} • {cert.year}
                </Paragraph>
                {cert.certificateUrl && (
                  <Link href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </Link>
                )}
                {cert.projects && (
                  <div className="tags">
                    {cert.projects.map((proj, idx) => (
                      <Tag color="green" key={idx}>
                        <Link href={proj.url} target="_blank" rel="noopener noreferrer">
                          {proj.name}
                        </Link>
                      </Tag>
                    ))}
                  </div>
                )}
              </motion.div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CertificationPart;
