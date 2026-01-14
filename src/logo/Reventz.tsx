export default function Reventz() {
  const size = 'w-[600px] h-[400px]';
  return (
    <div className='relative'>
      <svg
        className={`${size}`}
        id='visual'
        viewBox='0 0 400 200'
        xmlns='http://www.w3.org/2000/svg'
      >
        <title>Reventz</title>
        <polygon
          points='10,20 130,20 170,100 50,100'
          fill='#6EF64C'
          //   stroke='#111827'
          //   strokeWidth='4'
        />
      </svg>

      <svg
        className={`${size} scale-y-[-1] absolute top-1 left-0`}
        id='visual'
        viewBox='0 0 400 200'
        xmlns='http://www.w3.org/2000/svg'
      >
        <title>Reventz</title>
        <polygon
          points='10,20 130,20 170,100 50,100'
          fill='#F6D44C'
          //   stroke='#111827'
          //   strokeWidth='4'
        />
      </svg>
    </div>
  );
}
