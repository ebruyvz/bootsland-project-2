export default function Benefits() {
  return (
    <ul className="pt-16 px-[50px] md:grid md:grid-cols-2 md:max-lg:w-[720px] md:max-lg:mx-auto lg:mx-auto xl:w-[1270px] lg:grid-cols-3 lg:w-[1000px] xl:mx-auto">
      <li className="bg-white w-[400px] min-[577px]:w-[450px] p-12 mb-14 sm:max-md:mx-auto md:w-[280px] lg:w-[250px] xl:w-[350px]">
          <img src="https://i.pinimg.com/originals/8b/5c/49/8b5c498ed69a64d629249d9abe4f44a6.png" className="w-12 my-4" />
          <h1 className="text-2xl font-semibold">Creative Design</h1>
          <p className="text-gray-400 pt-4">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
      </li>
      <li className="mb-7 hover:bg-white hover-effect mt-[90px] w-[400px] min-[577px]:w-[450px] p-12 text-center sm:max-md:mx-auto md:w-[280px] md:mt-8 lg:w-[250px] xl:w-[350px]">
          <img src="https://cdn0.iconfinder.com/data/icons/business-mix/512/check-512.png" className="w-12 my-4 mx-auto" />
          <h1 className="text-2xl font-semibold">Easy To Start</h1>
          <p className="text-gray-400 pt-4">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
      </li>
      <li className="bg-white w-[400px] min-[577px]:w-[450px] p-12 text-right mb-12 sm:max-md:mx-auto md:w-[280px] lg:w-[250px] xl:w-[280px]">
          <img src="https://purepng.com/public/uploads/large/purepng.com-wifi-icon-redwifi-iconwifiiconwireless-connection-17015284362073buci.png" className="w-12 my-4 ml-[85%]" />
          <h1 className="text-2xl font-semibold">Management</h1>
          <p className="text-gray-400 pt-4">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
      </li>
    </ul>
  );
};
