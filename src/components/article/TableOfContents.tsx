import { Anchor, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import type { TOCItem } from '../../hooks/useTableOfContents';

const { Text } = Typography;

interface TableOfContentsProps {
  items: TOCItem[];
  isMobile?: boolean;
}

const TableOfContents = ({ items, isMobile = false }: TableOfContentsProps) => {
  if (items.length === 0) return null;

  return (
    <aside className={`table-of-contents ${isMobile ? 'mobile' : 'desktop-toc'}`}>
      <div className="toc-header">
        <MenuOutlined />
        <Text strong>Table of Contents</Text>
      </div>
      <Anchor
        offsetTop={isMobile ? 80 : 100}
        items={items.map((item) => ({
          key: item.id,
          href: `#${item.id}`,
          title: item.text,
          className: `toc-level-${item.level}`
        }))}
      />
    </aside>
  );
};

export default TableOfContents;
