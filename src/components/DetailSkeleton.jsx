function DetailSkeleton() {
    return (
      <div className="flex flex-col items-center p-6 animate-pulse">
        <div className="bg-zinc-800 w-1/2 h-[500px] rounded-lg" />
        <div className="bg-zinc-700 h-8 w-1/3 mt-6 rounded" />
        <div className="bg-zinc-700 h-4 w-2/3 mt-4 rounded" />
        <div className="flex gap-2 mt-4 flex-wrap justify-center">
          {new Array(4).fill(0).map((_, idx) => (
            <div key={idx} className="bg-zinc-700 w-16 h-6 rounded" />
          ))}
        </div>
      </div>
    );
  }
  
  export default DetailSkeleton;
  