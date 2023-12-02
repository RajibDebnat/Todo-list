export default function Button({ children,isClicked,...props }) {
  // here i am using children for inner content of button
  return (
    <button onClick={()=>isClicked()} className=" px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-200 font-semibold" {...props}>
    {children}
  </button>
  );
}
