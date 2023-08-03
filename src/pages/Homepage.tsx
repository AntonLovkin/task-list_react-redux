import { NotesList, Summary } from "../components";

function Homepage() {
  return (
    <div className=" text-xs md:text-base pb-8">
      <NotesList />
      <Summary />
    </div>
  )
}

export default Homepage