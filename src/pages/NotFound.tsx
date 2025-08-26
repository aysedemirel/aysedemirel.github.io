import opps from '../assets/img/opps.jpg';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import HeaderComponent from '../components/HeaderComponent';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <HeaderComponent />
      <div className="not-found-container">
        <div className="not-found-txt">
          <h1>{t('oooppss')}</h1>
          <p>{t('oooppss-txt')}</p>
          <Button className="not-found-btn" onClick={() => window.open('/', '_self')}>
            {t('go-back-to-home')}
          </Button>
        </div>
        <img src={opps} className="not-found-img" />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
