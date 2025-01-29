import Button from './Button';

export default function Divider() {
  const backgroundImage = './divider/divider1.png';
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-full h-[250px] md:h-[350px] flex flex-col justify-center items-center shadow-lg"
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg"></div>
      <div className="relative text-center md:text-left text-[#6F432A]">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md mb-4">
          Check out our best <br />
          coffee beans
        </h1>
        <Button title="Explore our products" />
      </div>
    </div>
  );
}
