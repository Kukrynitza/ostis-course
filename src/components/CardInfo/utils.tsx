import React from 'react';
import DynamicallyInstalledComponent from '@assets/images/DynamicallyInstalledComponent.svg';
import ReusableComponent from '@assets/images/ReusableComponent.svg';
import { InstallMethodType } from './types';

export const getInstallationMethodType = (type: InstallMethodType): React.ReactNode => {
  switch (type) {
    case InstallMethodType.DynamicallyInstalledComponent:
      return <DynamicallyInstalledComponent />;
    case InstallMethodType.ReusableComponent:
      return <ReusableComponent />;
    default:
      return null;
  }
};
