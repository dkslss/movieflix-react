import Skeleton from "./Skeleton";

function SkeletonList() {
  return (
    <div className="pt-10 px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {new Array(8).fill(0).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
}

export default SkeletonList;
