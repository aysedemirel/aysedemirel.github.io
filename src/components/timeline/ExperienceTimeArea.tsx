import { Typography } from 'antd';

const { Text } = Typography;

interface Props {
  time: string;
  position: string;
}

const ExperienceTimeArea = ({ time, position }: Props) => {
  return (
    <div className="exp-left-container">
      <Text className="title">{position}</Text>
      <Text className="time">{time}</Text>
    </div>
  );
};

export default ExperienceTimeArea;
