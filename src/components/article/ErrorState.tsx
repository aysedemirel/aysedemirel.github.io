import { Button, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

interface ErrorStateProps {
  error: string | null;
  onBack: () => void;
}

const ErrorState = ({ error, onBack }: ErrorStateProps) => {
  return (
    <div className="article-not-found">
      <div className="error-icon">404</div>
      <Title level={2}>{error || 'Article Not Found'}</Title>
      <Paragraph type="secondary">
        {error || 'The article you are looking for does not exist or has been moved.'}
      </Paragraph>
      <Button type="primary" icon={<ArrowLeftOutlined />} onClick={onBack} size="large">
        Back to Blog
      </Button>
    </div>
  );
};

export default ErrorState;
