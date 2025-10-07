import { BookOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import CertificationPart from '../CertificationPart';
import EducationPart from '../EducationPart';

const { Title } = Typography;

const EducationSection = () => {
  return (
    <div id="education">
      <div className="education-title">
        <BookOutlined className="title-icon" />
        <Title level={2} className="title-txt">
          Education & Certifications
        </Title>
      </div>
      <EducationPart />
      <CertificationPart />
    </div>
  );
};

export default EducationSection;
