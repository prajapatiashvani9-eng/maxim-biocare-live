function ResultCount({ count }) {
  return (
    <div className="max-w-7xl mx-auto mb-5">
      <p className="text-gray-600">
        Showing{" "}
        <span className="font-bold text-gray-800">{count}</span>{" "}
        products
      </p>
    </div>
  );
}
 
export default ResultCount;