import Stairs from '../assets/img/SY (75).png'
import Sphere from '../assets/img/SY (27).png'

function Main(product) {
  return (
    <section className="flex container h-[861px]">
      <div className="flex flex-col gap-32 z-20 w-[1151px]">
        <h1 className="text-[256px] leading-[192px]">студия баранова</h1>
        <div className="flex text-5xl">
          <button className="px-12 py-6 rounded-[96px] border-2 flex items-center hover:bg-[#878787]/10 duration-300">Студия веб-дизайна и разработки</button>
          <button className="px-12 py-6 rounded-[96px] border-2 flex items-center hover:bg-[#878787]/10 duration-300">Кейсы</button>
        </div>
      </div>
      <img src={Sphere} alt="" className='absolute z-0 ml-[150px] mt-[-260px]'/>
      <img src={Stairs} alt="" className='stairs absolute z-10 ml-[950px] mt-[-80px]'/>
    </section>
  );
}

export default Main;