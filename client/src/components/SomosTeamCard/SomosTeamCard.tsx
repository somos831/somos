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
    <div className='somosImageCard'>
      <img src={imageUri} alt='Profile' className='somosMemberImage' />
      <div className='somosMemberName'>
        {firstName} {lastName}
      </div>
      <div className='somosTitle'>{title}</div>
    </div>
  );
}
