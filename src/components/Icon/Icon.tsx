import { forwardRef } from 'react';
import externalLink from '../../assets/icons/external-link';
import github from '../../assets/icons/github';

const ICON_LIST = {
  externalLink,
  github,
};

interface IProps {
  name: keyof typeof ICON_LIST;
}

const Icon = forwardRef<SVGAElement, IProps>(({ name, ...props }, ref) => {
  const Component = ICON_LIST[name];

  return <Component {...props} />;
});

export default Icon;
