import { Card, Col, Row, Typography } from 'antd';
import { educationData } from '../constants/education';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const EducationPart = () => {
  return (
    <div className="educations">
      <Title level={2}>Education</Title>
      <Row gutter={[24, 24]} className="cards-container">
        {educationData.map((edu, index) => (
          <Col xs={24} md={12} key={index}>
            <Card hoverable className="education-card">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.25 }}
                viewport={{ once: true }}>
                {edu.type === 'summary' && (
                  <div className="education-header">
                    <img src={edu.logo} alt={`${edu.school} Logo`} className="logo" />
                    <div>
                      <Title level={3}>{edu.degree}</Title>
                      <Paragraph className="sub">
                        {edu.school} • {edu.program}
                      </Paragraph>
                      <Paragraph className="date">{edu.date}</Paragraph>
                    </div>
                  </div>
                )}

                {edu.type === 'details' && (
                  <div className="education-body">
                    <Paragraph strong>Key Highlights:</Paragraph>
                    <ul>
                      {edu.highlights?.map((item, i) => (
                        <li key={i}>
                          <b>{item.title}:</b> {item.description}
                        </li>
                      ))}
                    </ul>

                    <Paragraph>
                      <b>Relevant coursework:</b> {edu.coursework}
                    </Paragraph>
                    <Paragraph>
                      <b>GPA:</b> {edu.gpa}
                    </Paragraph>
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

export default EducationPart;
