import NewTask from "./NewTask";
export default function Task() {

  return (
    <section>
      <h2
        className=" mt-8 mb-3  text-stone-700 font-bold  text-2xl
            "
      >
        Task
      </h2>
      {/* i will conditionaly show this para */}
   <NewTask/>
      <p className=" mb-4  text-stone-800">
        This project does not have any Task yet!
      </p>
      <ul></ul>
    </section>
  );
}
