/**
 * Renders a button component with customizable properties such as label, icon URL, background color,
 * text color, and border color.
 * @param {string} label - The text to display on the button.
 * @param {string} iconURL - The URL of the icon to display next to the label.
 * @param {string} backgroundColor - The background color of the button.
 * @param {string} textColor - The text color of the button.
 * @param {string} borderColor - The border color of the button.
 * @returns The rendered button component.
 */




const Button = ({label,iconURL, backgroundColor,textColor,borderColor, fullWidth}) => {
  return (
    //**Going to make the className Dynamic({`template String`})
    //**This will allow us to apply addition classNames depending on specific conditions :) Yey!! */
    //**Open up a new dynamic block of code>> use a Ternary conditional statement */
    //**${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}:  bg-coral-red rounded-full text-white border-coral-red`} */
     <button className={`flex justify-center items-center gap-2 px-3 py-4 border font-montserrat text-lg leading-none ${backgroundColor ? 
      `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red rounded-full text-white border-coral-red"} rounded-full
      ${fullWidth &&'w-full'} border-none`}>

        {label}
    {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button