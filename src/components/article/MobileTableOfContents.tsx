import { Button, Card } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import TableOfContents from './TableOfContents';
import type { TOCItem } from '../../hooks/useTableOfContents';

interface MobileTableOfContentsProps {
  items: TOCItem[];
  show: boolean;
  onToggle: () => void;
}

const MobileTableOfContents = ({ items, show, onToggle }: MobileTableOfContentsProps) => {
  if (items.length === 0) return null;

  return (
    <>
      <Button className="mobile-toc-toggle" icon={<MenuOutlined />} onClick={onToggle}>
        {show ? 'Hide' : 'Show'} Table of Contents
      </Button>

      {show && (
        <Card className="mobile-toc-card">
          <TableOfContents items={items} isMobile={true} />
        </Card>
      )}
    </>
  );
};

export default MobileTableOfContents;
