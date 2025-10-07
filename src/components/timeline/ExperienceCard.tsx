import { EnvironmentOutlined } from '@ant-design/icons';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

interface Props {
  company: string;
  location: string;
  description: string;
}
const ExperienceCard = ({ company, location, description }: Props) => {
  const items = description
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('-'))
    .map((line) => line.replace(/^-+\s*/, ''));

  return (
    <Card className="exp-right-container">
      <div className="title-container">
        <Title level={4} className="company-name">
          {company}
        </Title>
        <div className="location-container">
          <EnvironmentOutlined className="location-icon" />
          <Text className="location">{location}</Text>
        </div>
      </div>
      {items.length > 0 ? (
        <ul className="list-disc pl-5">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <ul className="list-disc pl-5">
          <li>{description}</li>
        </ul>
      )}
    </Card>
  );
};

export default ExperienceCard;
