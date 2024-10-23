export default function Stats({ logo, heading, text }) {
    return (
      <div>
        <div className="h-60 w-60 bg-red-50 m-8 p-10 flex flex-col items-center justify-center space-y-4">
          {logo && (
            <img
              src={logo}
              alt={heading}
              className="w-16 h-16 object-contain" 
            />
          )}
          <h1 className="text-center font-bold">{heading}</h1>
          <p className="text-center">{text}</p>
        </div>
      </div>
    );
  }