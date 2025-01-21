import { getTypeOfDevice } from '@/entities/user/getTypeOfDevice';

export const setShowedWorks = () => {
  const device = getTypeOfDevice();
  console.log(device)
  if (device === 'Desktop') {
    return { showedDefault: 12, addItemsOnClick: 6 };
  } else if (device === 'Tablet') {
    return { showedDefault: 6, addItemsOnClick: 3 };
  } else return { showedDefault: 4, addItemsOnClick: 2 };
};
