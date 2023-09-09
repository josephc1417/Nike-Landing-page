
const Button = ({label,iconURL, backgroundColor,textColor,borderColor}) => {
  return (
    //**Going to make the className Dynamic({`template String`})
    //**This will allow us to apply addition classNames depending on specific conditions :) Yey!! */
    //**Open up a new dynamic block of code>> use a Ternary conditional statement */
    //**${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}:  bg-coral-red rounded-full text-white border-coral-red`} */
    <button className="{`flex justify-center items-center gap-2 px-7 py-4 border 
    font-montserrat text-lg leading-none ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}: bg-coral-red rounded-full text-white border-coral-red`}">
        {label}
    {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button