import { ComponentType } from 'react';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

declare const CustomButton: ComponentType<CustomButtonProps>;
export default CustomButton;
