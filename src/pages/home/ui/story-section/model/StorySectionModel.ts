import { useEffect, useRef, useState } from 'react';

export const storySectionModel = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isScrollDisabled = useRef(false);

  const disableScroll = () => {
    if (isScrollDisabled.current) return;
    document.body.style.overflowY = 'hidden';
    isScrollDisabled.current = true;
  };

  const enableScroll = () => {
    if (!isScrollDisabled.current) return;
    document.body.style.overflowY = '';
    isScrollDisabled.current = false;
  };
  const onButtonClick = () => {
    disableScroll();
    setIsOpen(true);
  };

  const closePopUp = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      enableScroll();
    }
  }, [isOpen]);

  return {
    closePopUp,
    isOpen,
    onButtonClick,
  };
};
