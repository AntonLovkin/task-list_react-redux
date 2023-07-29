function NotesHeader() {
  return (
    <div className="table-header">
            <span className="name">Name</span>
            <span className="created">Created</span>
            <span className="category">Category</span>
            <span className="content">Content</span>
            <span className="dates">Dates</span>
            {/* <span className="edit"><img src="./icons/edit.svg" alt="edit button"/></span>
            <span className="archive"><img src="./icons/archive.svg" alt="archive button"/></span>
            <span className="delete"><img src="./icons/delete.png" alt="delete button"/></span> */}
      </div>
  )
}

export default NotesHeader