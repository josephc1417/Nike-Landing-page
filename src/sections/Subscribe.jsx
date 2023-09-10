/**
 * Renders a subscription section with a sign-up form and a button.
 * @returns {JSX.Element} - The rendered subscription section.
 */



import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-center items-center 
    max-lg:flex-col  gap-10"  id="contact-us">
      <h3 className=" flex justify-center items-center flex-col text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up from
      <span className="text-coral-red">  Updates </span> & Newsletter
      </h3>

      <div className="lg:max-w-[40%] w-full
      flex items-center max-sm:flex-col gap-5 p-2.5
      sm:border sm:border-slate-gray rounded-full bg-white" style={{boxShadow:'5px 10px 35px black'}}>
        <input className="input" type="text" placeholder="Subscribe@nike.com"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe