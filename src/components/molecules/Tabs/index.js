import React, { useState, Children } from 'react';
import TabOption from './TabOption';
import { ContentTab } from './tabStyle';

function Tabs({ children }) {
  const [selectTab, setSelectTab] = useState(children[0].props.label);

  let content = null;
  const tabs = [];

  const handleClick = (tab) => {
    setSelectTab(tab);
  };

  const buildTabs = () => {
    Children.forEach(children, (child) => {
      tabs.push(child.props.label);
      if (child.props.label === selectTab) content = child.props.children;
    });

    return (
      <>
        <ContentTab>
          {tabs.map((text, id) => (
            <TabOption
              key={id}
              isActive={selectTab === text}
              text={text}
              onClick={() => handleClick(text)}
            />
          ))}
        </ContentTab>
        <div>{content}</div>
      </>
    );
  };
  return buildTabs();
}

export default Tabs;
