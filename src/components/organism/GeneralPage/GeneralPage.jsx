import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { MdArrowBack } from 'react-icons/md';
import { PageStyle, Content } from './generalPageStyle';

const GeneralPage = ({ title, children, goBack }) => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <PageStyle>
      <div className='header'>
        {title && (
          <div className='title'>
            {title}
            <AiOutlineExclamationCircle />
          </div>
        )}

        <div className='go-back'>{goBack && <MdArrowBack onClick={() => handleClick()} />}</div>
      </div>

      <Content>{children}</Content>
    </PageStyle>
  );
};

GeneralPage.defaultProps = { title: '', children: <></>, goBack: false };

export default GeneralPage;
