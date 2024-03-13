import { Link, useLocation } from 'react-router-dom';

import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className={styles.container}>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isFirst = index === 0;
        const isLast = index === pathnames.length - 1;
        return (
          <span
            key={name}
            className={`${styles['breadcrumb-link']} ${
              isLast ? styles.active : ''
            }`}
          >
            {(!isFirst || pathnames.length === 1) && ' / '}
            <Link
              to={routeTo}
              className={`${styles['link']} ${isLast ? styles.active : ''}`}
            >
              {name[0].toUpperCase() + name.slice(1)}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
