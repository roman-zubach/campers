import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { setSelectCamperAction } from '@/features/camper/redux/camperSlice';

export const useModalClose = () => {
  const dispatch = useDispatch<AppDispatch>();

  return useCallback(() => {
    dispatch(setSelectCamperAction(null));
  }, [dispatch]);
};
