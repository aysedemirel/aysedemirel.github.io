import { Card, Typography } from 'antd';
import { educationData } from '../constants/education';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const EducationPart = () => {
  return (
    <div className="educations">
      <Title level={2}>Education</Title>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.08,
              ease: 'easeOut'
            }}
            viewport={{ once: true, margin: '-50px' }}
            className="education-grid-item"
            style={{ height: '100%' }}>
            <Card hoverable className="education-card">
              {edu.type === 'summary' && (
                <div className="education-header">
                  <img src={edu.logo} alt={`${edu.school} Logo`} className="logo" loading="lazy" />
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
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationPart;
