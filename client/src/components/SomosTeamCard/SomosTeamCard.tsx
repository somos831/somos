import styles from './SomosTeamCard.module.css';

interface SomosMember {
  firstName: string;
  lastName: string;
  imageUri: string;
  title: string;
}

export default function SomosTeamCard({
  firstName,
  lastName,
  imageUri,
  title,
}: SomosMember) {
  return (
    <div className={styles.container}>
      <img src={imageUri} alt='Profile' className={styles.somosMemberPicture} />
      <div className={styles.somosNameText}>
        {firstName} {lastName}
      </div>
      <div className={styles.jobTitleText}>{title}</div>
    </div>
  );
}
