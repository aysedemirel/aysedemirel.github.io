import { Input, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getTopicColor } from '../../utils/blogHelper';
import type { TopicData } from '../../types/blog.types';

interface BlogFiltersProps {
  searchTerm: string;
  selectedTopic: string | null;
  topicData: TopicData[];
  onSearchChange: (value: string) => void;
  onTopicSelect: (topic: string | null) => void;
}

const BlogFilters = ({
  searchTerm,
  selectedTopic,
  topicData,
  onSearchChange,
  onTopicSelect
}: BlogFiltersProps) => {
  const handleTopicClick = (topicName: string) => {
    onTopicSelect(topicName === selectedTopic ? null : topicName);
  };

  return (
    <div className="filter-section">
      <Input
        placeholder="Search articles by title or description..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        allowClear
        size="large"
        prefix={<SearchOutlined />}
        className="search-input"
      />

      <div className="topic-filters">
        <Tag
          className={`topic-tag ${!selectedTopic ? 'active' : ''}`}
          color={!selectedTopic ? 'orange' : 'default'}
          onClick={() => onTopicSelect(null)}>
          All Topics
        </Tag>
        {topicData.map((topic) => (
          <Tag
            key={topic.name}
            color={selectedTopic === topic.name ? getTopicColor(topic.name) : 'default'}
            className={`topic-tag ${selectedTopic === topic.name ? 'active' : ''}`}
            onClick={() => handleTopicClick(topic.name)}>
            {topic.name} ({topic.value})
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default BlogFilters;
