import React from "react";

export default function Header() {

  const [isOpen, setIsOpen] = React.useState(false);
  const [isHomeOpen, setIsHomeOpen] = React.useState(false);
  const [isPagesOpen, setIsPagesOpen] = React.useState(false);
  const [isServOpen, setIsServOpen] = React.useState(false);
  const [isPortOpen, setIsPortOpen] = React.useState(false);
  const [isBlogOpen, setIsBlogOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

    return (
        <>
            <div className="mt-[56px] bg-white w-[100%] h-[55px]">
                <div className="flex flex-wrap items-center justify-between py-2.5 pl-5 min-[577px]:w-[570px] min-[577px]:mx-auto md:w-[700px] lg:w-[1000px] lg:mx-auto xl:w-[1250px]">
                    <a href="https://bootsland.themeht.com/">
                        <img src="https://bootsland.themeht.com/wp-content/uploads/2023/03/logo.svg" className="w-fit h-8 xl:-mt-2" />
                    </a>
                <div>
                <button onClick={() => setIsOpen(!isOpen)} className='w-10 ml-48 md:ml-[150px] md:-mr-[90px] lg:hidden'>
                    {isOpen ? <img src="data:image/png;base64,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" /> : <img src="https://cdn.icon-icons.com/icons2/1129/PNG/512/menuthreelinesbuttoninterfacesymbol_79952.png" /> }
                </button>
                {isOpen && (
                <div className="block fixed text-[20px] bg-white border-none min-[577px]:w-[500px] min-[577px]:-ml-[265px] -ml-[230px] w-[470px] md:w-[685px] md:-ml-[245px] lg:hidden">
                    <button onClick={() => setIsHomeOpen(!isHomeOpen)} className="py-[8px] bg-blue-700 w-full text-left pl-[7px] text-white">Home</button>
                    {isHomeOpen && (
                        <div>
                            <a href="https://bootsland.themeht.com/"><p className="text-[17px] pl-[10px] py-2 text-blue-700">Home</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/home-two/"><p className='text-[17px] pl-[10px] py-2'>Home Two</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/home-three/"><p className='text-[17px] pl-[10px] py-2'>Home Three</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/home-four/"><p className='text-[17px] pl-[10px] py-2'>Home Four</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/home-five/"><p className='text-[17px] pl-[10px] py-2'>Home Five</p></a>
                        </div>
                    )}
                    <button onClick={() => setIsPagesOpen(!isPagesOpen)} className="py-[8px] w-full text-left pl-[7px]">Pages</button>
                    {isPagesOpen && (
                        <div>
                            <a href="https://bootsland.themeht.com/about-us/"><p className='text-[17px] pl-[10px] py-2'>About Us</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/team-member/"><p className='text-[17px] pl-[10px] py-2'>Team Member</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/team/biton-leeny/"><p className='text-[17px] pl-[10px] py-2'>Team Single</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/faq/"><p className='text-[17px] pl-[10px] py-2'>Faq</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/price-table/"><p className='text-[17px] pl-[10px] py-2'>Price Table</p></a>
                        </div>
                    )}
                    <button onClick={() => setIsServOpen(!isServOpen)} className="py-[8px] w-full text-left pl-[7px]">Services</button>
                    {isServOpen && (
                        <div>
                            <a href="https://bootsland.themeht.com/services/app-development/"><p className='text-[17px] pl-[10px] py-2'>App Development</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/services/creative-ui-ux/"><p className='text-[17px] pl-[10px] py-2'>Creative UI/UX</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/services/digital-marketing/"><p className='text-[17px] pl-[10px] py-2'>Digital Marketing</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/services/software-development/"><p className='text-[17px] pl-[10px] py-2'>Software Development</p></a>
                        </div>
                    )}
                    <button onClick={() => setIsPortOpen(!isPortOpen)} className="py-[8px] w-full text-left pl-[7px]">Portfolio</button>
                    {isPortOpen && (
                        <div>
                            <a href="https://bootsland.themeht.com/portfolio-grid/"><p className='text-[17px] pl-[10px] py-2'>Portfolio Grid</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/portfolio/web-development/"><p className='text-[17px] pl-[10px] py-2'>Portfolio Single</p></a>
                        </div>
                    )}
                    <button onClick={() => setIsBlogOpen(!isBlogOpen)} className="py-[8px] w-full text-left pl-[7px]">Blog</button>
                    {isBlogOpen && (
                        <div>
                            <a href="https://bootsland.themeht.com/blog-grid-2/"><p className='text-[17px] pl-[10px] py-2'>Blog Grid 2</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/blog-grid-3/"><p className='text-[17px] pl-[10px] py-2'>Blog Grid 3</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/blog-right-sidebar/"><p className='text-[17px] pl-[10px] py-2'>Blog Right Sidebar</p></a>
                            <hr className='border-dashed border-gray-300' />
                            <a href="https://bootsland.themeht.com/bootsland-perfect-performance-landing-page/"><p className='text-[17px] pl-[10px] py-2'>Blog Single</p></a>
                        </div>
                    )}
                    <a href="https://bootsland.themeht.com/contact-us/"><button className="py-[8px] w-full text-left pl-[7px]">Contact Us</button></a>
                </div>
            )}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className='lg:-mt-5 md:ml-48 md:mt-3 lg:ml-[600px] xl:ml-[850px]'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hidden md:block md:-mt-8 lg:mt-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </button>
          <div className={`transition-all duration-500 ease-in-out ${isSearchOpen ? 'h-48' : 'h-0'} overflow-hidden bg-[#000435] flex items-center fixed top-[56px] left-0 right-0 z-10`}>
            <div className='w-[450px] min-[577px]:w-[525px] md:w-[705px] lg:w-[450px] mx-auto mb-5 xl:w-[550px]'>
              <button onClick={() => setIsSearchOpen(false)} className="bg-white w-[25px] h-[25px] float-right mb-2 rounded-full hover:bg-blue-700 transition ease-in-out delay-150 duration-300">X</button>
              <div className="inline-flex">
                <input placeholder="Search Here" className='w-[450px] min-[577px]:w-[525px] md:w-[705px] lg:w-[450px] mx-auto xl:w-[550px] p-5 rounded-xl' />
                <button formTarget="https://preview.themeforest.net/item/bootsland-multipurpose-wordpress-theme/full_screen_preview/44853147?_ga=2.239279811.1391717296.1708427929-1944214505.1708427929&_gac=149906260.1708427929.CjwKCAiAuNGuBhAkEiwAGld4ar2APHL-lhM0fVUSrBB3SEeWmlC-HqPYEByMnfOtT0rZzvgYFnlxWBoCKGgQAvD_BwEhttps://preview.themeforest.net/item/bootsland-multipurpose-wordpress-theme/full_screen_preview/44853147?_ga=2.239279811.1391717296.1708427929-1944214505.1708427929&_gac=149906260.1708427929.CjwKCAiAuNGuBhAkEiwAGld4ar2APHL-lhM0fVUSrBB3SEeWmlC-HqPYEByMnfOtT0rZzvgYFnlxWBoCKGgQAvD_BwE">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 -mt-1 -ml-12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex flex-col lg:flex-row lg:-mt-4 lg:text-md block lg:-ml-[700px] xl:-ml-[900px]">
                <div className="ml-[70px] xl:ml-[100px] absolute">
                  <ul className="group text-red-500 bg-white">
                    <div className="inline-flex">
                      <p>Home</p>
                      <svg className="w-2.5 h-2.5 ms-2 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </div>
                    <ul className="w-[200px]">
                      <li className="hidden group-hover:block text-white bg-blue-500">
                        <div className="inline-flex p-1 border-b w-[200px] border-dashed">
                          <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 animate-spin" />
                          <a href="https://bootsland.themeht.com/">Home</a>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/home-two/">Home Two</a>
                          </div>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/home-three/">Home Three</a>
                          </div>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/home-four/">Home Four</a>
                          </div>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/home-five/">Home Five</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="ml-[150px] xl:ml-[200px] absolute">
                  <ul className="group bg-white transition ease-in-out delay-150 duration-300 hover:text-red-500">
                    <div className="inline-flex">
                      <p>Pages</p>
                      <svg className="w-2.5 h-2.5 ms-2 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </div>
                    <ul className="w-[200px]">
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/about-us/">About Us</a>
                          </div>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/team-member/">Team Member</a>
                          </div>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/team/biton-leeny/">Team Single</a>
                          </div>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/faq/">Faq</a>
                          </div>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/price-table/">Price Table</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="ml-[230px] xl:ml-[300px] absolute">
                  <ul className="group bg-white transition ease-in-out delay-150 duration-300 hover:text-red-500">
                    <div className="inline-flex">
                      <p>Services</p>
                      <svg className="w-2.5 h-2.5 ms-2 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </div>
                    <ul className="w-[220px]">
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[220px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/services/app-development/">App Development</a>
                          </div>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[220px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/services/creative-ui-ux/">Creative UI/UX</a>
                          </div>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[220px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/services/digital-marketing/">Digital Marketing</a>
                          </div>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[220px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/services/software-development/">Software Development</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="ml-[325px] xl:ml-[415px] absolute">
                  <ul className="group bg-white transition ease-in-out delay-150 duration-300 hover:text-red-500">
                    <div className="inline-flex">
                      <p>Portfolio</p>
                      <svg className="w-2.5 h-2.5 ms-2 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </div>
                    <ul className="w-[200px]">
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/portfolio-grid/">Portfolio Grid</a>
                          </div>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/portfolio/web-development/">Portfolio Single</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="ml-[420px] xl:ml-[525px] absolute">
                  <ul className="group bg-white transition ease-in-out delay-150 duration-300 hover:text-red-500">
                  <div className="inline-flex">
                      <p>Blog</p>
                      <svg className="w-2.5 h-2.5 ms-2 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </div>
                    <ul className="w-[200px]">
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/blog-grid-2/">Blog Grid 2</a>
                          </div>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/blog-grid-3/">Blog Grid 3</a>
                          </div>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/blog-right-sidebar/">Blog Right Sidebar</a>
                          </div>
                        </div>
                      </li>
                      <li className="hidden group-hover:block text-black hover:bg-blue-500 hover:text-white">
                        <div className="border-b w-[200px] border-dashed group/flower">
                          <div className="hover-right inline-flex hover-right p-1">
                            <img src="https://clipart-library.com/img/1943102.png" className="w-4 h-fit mt-1 mr-2 hidden group-hover/flower:block animate-spin" />
                            <a href="https://bootsland.themeht.com/bootsland-perfect-performance-landing-page/">Blog Single</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </ul>
                </div>
                <a href="https://bootsland.themeht.com/contact-us/" className="ml-[490px] xl:ml-[620px] w-[100px] absolute transition ease-in-out delay-150 duration-300 hover:text-red-500">Contact Us</a>
              </div>
            </div>
            <a href="https://bootsland.themeht.com/#">
              <button className="bg-blue-700 p-3 rounded-md text-white transition ease-in-out delay-150 hover:bg-orange-500 duration-300 hover:text-white hover:border-white active:text-orange-500 hidden md:block md:-mt-2.5 lg:-mt-1.5 xl:-mt-1.5 right-[20px] top-[62px]">Buy Now</button>
            </a>
          </div>
        </div>
            <div className="lg:grid lg:grid-cols-2">
                <div className="md:max-lg:w-[700px] md:max-lg:mx-auto sm:max-md:w-[512px] sm:max-md:mx-auto lg:mb-12 ml-8 -mt-[100px]">
                    <div className="border border-gray-300 bg-white rounded-3xl w-fit p-2 mt-64 mb-4 lg:mt-[304px]">
                        <h1 className="text-lg"><span className="bg-blue-700 mx-2 rounded-3xl text-white p-2 text-sm">New</span>Say Hello To All Bootsland</h1>
                    </div>
                    <h1 className="text-[50px] min-[577px]:text-[75px] lg:leading-[75px]">Let's Work With</h1>
                    <p className="text-blue-700 font-bold text-[50px] min-[577px]:text-[75px] -mt-4">Bootsland</p>
                    <p className="w-fit my-8 text-gray-400 text-[23px] w-[50px] font-light md:w-[90%]">Build a Beautiful, Clean & Modern Design website with Elementor Drag and Drop Page Builder.</p>
                    <div className="flex justify-center w-fit">
                        <a href="https://bootsland.themeht.com/#">
                            <button className="bg-blue-700 p-3 rounded-md text-white transition ease-in-out delay-150 hover:bg-orange-500 duration-300 hover:text-white hover:border-white active:text-orange-500">Learn More</button>
                        </a>
                        <a href="https://bootsland.themeht.com/#" className="ml-4">
                            <button className="border p-3 text-blue-700 border-blue-700 rounded-md transition ease-in-out delay-150 hover:bg-orange-500 duration-300 hover:text-white hover:border-white active:text-orange-500">Get Started</button>
                        </a>
                    </div>
                </div>
                <img src="https://bootsland.themeht.com/wp-content/uploads/2023/03/08.png" className="-ml-5 mt-20 lg:mt-[352px]" />
            </div>
            <div className="h-[80px] bg-black py-3">
                <div className="mb-12 w-[5000px] bg-black animate-[my-animation-xlarge_25s_ease-in-out_forwards_infinite] text-white text-5xl">
                    <span className="bg-black after:content-['✨'] after:p-4 pl-3">Creativie</span>
                    <span className="bg-black after:content-['✨'] after:p-4">Saas</span>
                    <span className="bg-black after:content-['✨'] after:p-4">Software</span>
                    <span className="bg-black after:content-['✨'] after:p-4">Agency</span>
                    <span className="bg-black after:content-['✨'] after:p-4">Marketing</span>
                    <span className="bg-black after:content-['✨'] after:p-4">Design</span>
                    <span className="bg-black after:content-['✨'] after:p-4">Mobil App</span>
                    <span className="bg-black after:content-['✨'] after:p-4">Digital</span>
                    <span className="bg-black after:content-['✨'] after:p-4">Landing Page</span>
                    <span className="bg-black after:content-['✨'] after:p-4">Creative</span>
                </div>
            </div>
        </>
    );
};
