import { Spin, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const LoadingState = () => {
  return (
    <div className="article-loading">
      <div className="loading-spinner">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 64 }} spin />} />
      </div>
      <Title level={3} className="loading-title">
        Loading article...
      </Title>
      <Text type="secondary">Please wait while we fetch the content</Text>
    </div>
  );
};

export default LoadingState;
