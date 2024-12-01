interface SkeletonProps {
  repeat: number;
}

export default function Skeleton({ repeat }: SkeletonProps) {
  const skeletons = new Array(repeat).fill(0).map((_, index) => {
    return (
      <div
        key={index}
        className='flex justify-between items-center w-full p-5 animate-pulse bg-gray-300 mt-2'
      ></div>
    );
  });
  return <>{skeletons}</>;
}
