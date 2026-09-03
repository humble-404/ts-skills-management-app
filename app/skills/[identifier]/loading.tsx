export default function SkillLoading() {
  return (
    <div className="grid md:grid-cols-3 gap-6  mt-4">
      <div className="card bg-base-200">
        <div>
          <div className="card-body">
            <h2 className="skeleton h-6 w-3/4"></h2>
            <div className="skeleton h-4  w-full mt-2"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}