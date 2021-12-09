/* eslint-disable jsx-a11y/anchor-is-valid */

import cx from 'classnames';

interface ButtonTabProps {
    title: string;
    active: boolean
}

export default function ButtonTab(props: ButtonTabProps) {
  const { title, active } = props;
  const btnClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });
  return (
    <a data-filter="/#*" href="#" className={btnClass}>
        {title}
    </a>
  );
}
