import { useState, useEffect } from 'react';
import { UpOutlined, RocketOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

interface BackToTopProps {
  showAfter?: number;
  scrollDuration?: number;
  showProgress?: boolean;
  style?: 'default' | 'minimal' | 'glow' | 'rocket' | 'gradient-border';
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
  hideOnFooter?: boolean;
  showTooltip?: boolean;
  customIcon?: React.ReactNode;
  onScrollStart?: () => void;
  onScrollEnd?: () => void;
}

const BackToTop = ({
  showAfter = 300,
  scrollDuration = 800,
  showProgress = true,
  style = 'default',
  position = 'bottom-right',
  hideOnFooter = false,
  showTooltip = true,
  customIcon,
  onScrollStart,
  onScrollEnd
}: BackToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(scrollTop > showAfter);

      if (hideOnFooter) {
        const footer = document.getElementById('footer');
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          const isFooterInView = footerRect.top < window.innerHeight;
          setIsFooterVisible(isFooterInView);
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter, hideOnFooter]);

  const scrollToTop = () => {
    onScrollStart?.();

    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        onScrollEnd?.();
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const getIcon = () => {
    if (customIcon) return customIcon;

    switch (style) {
      case 'rocket':
        return <RocketOutlined />;
      case 'minimal':
        return <ArrowUpOutlined />;
      default:
        return <UpOutlined />;
    }
  };

  const getPositionClass = () => {
    switch (position) {
      case 'bottom-left':
        return 'position-left';
      case 'bottom-center':
        return 'position-center';
      default:
        return 'position-right';
    }
  };

  const shouldHide = hideOnFooter && isFooterVisible;

  const button = (
    <div
      className={`
        back-to-top 
        ${isVisible && !shouldHide ? 'visible' : ''} 
        ${style}-style
        ${getPositionClass()}
      `}>
      <Button
        className="back-to-top-button"
        shape="circle"
        size="large"
        icon={getIcon()}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      />

      {showProgress && style !== 'minimal' && (
        <svg className="progress-ring" width="60" height="60">
          <circle
            className="progress-ring-circle"
            stroke="#f97316"
            strokeWidth="3"
            fill="transparent"
            r="26"
            cx="30"
            cy="30"
            style={{
              strokeDasharray: `${2 * Math.PI * 26}`,
              strokeDashoffset: `${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`
            }}
          />
        </svg>
      )}
      {showProgress && <div className="scroll-percentage">{Math.round(scrollProgress)}%</div>}
    </div>
  );

  return showTooltip ? (
    <Tooltip title="Back to Top" placement="left">
      {button}
    </Tooltip>
  ) : (
    button
  );
};

export default BackToTop;

const additionalStyles = `
.back-to-top.position-left {
  left: 40px;
  right: auto;
}

.back-to-top.position-center {
  left: 50%;
  right: auto;
  transform: translateX(-50%);
}

.back-to-top.position-center.visible {
  transform: translateX(-50%) translateY(0) scale(1);
}

.scroll-percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  font-weight: bold;
  color: white;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.back-to-top:hover .scroll-percentage {
  opacity: 1;
}

@media (max-width: 768px) {
  .back-to-top.position-left {
    left: 20px;
  }
  
  .scroll-percentage {
    font-size: 8px;
  }
}
`;

export const BackToTopStyles = () => <style>{additionalStyles}</style>;
