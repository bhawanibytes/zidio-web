export default function Stats({ logo, heading, text, onButtonClick }) {
  return (
    <div className="h-60 w-60 bg-red-50 m-8 p-10 flex flex-col items-center justify-center space-y-4 hover:bg-blue-100 transition-colors duration-300">
      {logo && (
        <img
          src={logo}
          alt={heading}
          className="w-16 h-16 object-contain" 
        />
      )}
      <h1 className="text-center font-bold">{heading}</h1>
      <p className="text-center">{text}</p>
      <button 
        onClick={onButtonClick} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Learn More
      </button>
    </div>
  );
}
