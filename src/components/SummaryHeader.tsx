
function SummaryHeader() {
  return (
    <div className="flex gap-2 align-center justify-around p-2 m-2 border-2 
    border-black rounded-md shadow-md font-bold bg-gradient-to-r from-blue-light to-green">
            <span >Category</span>
            <span >Active</span>
            <span >Archived</span>
      </div>
  )
}

export default SummaryHeader