import clsx from 'clsx';
import { ReactElement, SVGProps } from 'react';
import * as Icons from './icons';
import styles from './Icon.module.css';

type Props = SVGProps<SVGSVGElement> & {
  name: keyof typeof Icons;
  size?: number;
};

export default function Icon({
  name,
  className = '',
  ...rest
}: Props): ReactElement {
  const IconComponent = Icons[name] || Icons.sticker;

  return (
    <IconComponent
      className={clsx(styles.icon, className)}
      {...rest}
    />
  );
}
