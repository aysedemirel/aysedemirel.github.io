import opps from '../assets/img/opps.jpg';
import { Button } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

interface Props {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const NotFound = ({ activeSection, scrollToSection }: Props) => {
  return (
    <div className="container">
      <HeaderComponent activeSection={activeSection} scrollToSection={scrollToSection} />
      <div className="not-found-container">
        <div className="not-found-txt">
          <h1>{'Oooppss!!!'}</h1>
          <p>{'The page you are looking for does not exists or an other error occured'}</p>
          <Button className="not-found-btn" onClick={() => window.open('/', '_self')}>
            {'Go Back To Home'}
          </Button>
        </div>
        <img src={opps} className="not-found-img" loading="lazy" />
      </div>
      <FooterComponent scrollToSection={scrollToSection} />
    </div>
  );
};

export default NotFound;
