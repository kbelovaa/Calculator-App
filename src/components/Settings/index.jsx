import React from 'react';
import ThemeSelector from 'Components/ThemeSelector';
import ClearButton from 'Components/ClearButton';
import { SettingsWrapper, StyledTitle, StyledLabel } from './styled';

export default function Settings() {
  return (
    <SettingsWrapper>
      <StyledTitle>Settings</StyledTitle>
      <StyledLabel>Switch Theme</StyledLabel>
      <ThemeSelector />
      <ClearButton />
    </SettingsWrapper>
  );
}
