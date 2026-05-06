import { FaBars } from "react-icons/fa";
import logo from '../../assets/logo_en.webp'
export default function Navbar() {
    const MENUDATA =[
        {icons:'https://naruto-official.com/common/header/icon/news_wh.svg',name:'News',link:'/'},
        {icons:'https://naruto-official.com/common/header/icon/comics_wh.svg',name:'Comics',link:'/about'},
        {icons:'https://naruto-official.com/common/header/icon/anime_wh.svg',name:'Anime',link:'/contact_us'},
        {icons:'https://naruto-official.com/common/header/icon/game_wh.svg',name:'Games',link:'/contact_us'},
        {icons:'https://naruto-official.com/common/header/icon/goods_wh.svg',name:'MeRCh',link:'/contact_us'},
        {icons:'https://naruto-official.com/common/header/icon/event_wh.svg',name:'EVENT',link:'/contact_us'},
        {icons:'https://naruto-official.com/common/header/icon/special_wh.svg',name:'Special',link:'/contact_us'},
    ]
  return (
    <div>
      <nav className="flex fixed w-full justify-between items-center  px-10 z-10">
        <img className="lg:h-25 md:h-20 sm:h-20 h-15 " src={logo} alt="logo" />

        <ul className="lg:flex gap-20 hidden">
           {
            MENUDATA.map((v,i)=>(
                 <a key={i} href={v.link}>
                <li className="text-white flex flex-col items-center">
                    <img src={v.icons} alt="" />
                    <h1>{v.name}</h1>
                </li>
            </a>
            ))
           }
        </ul>

        <div className="bg-black">
            <FaBars className="text-white"/>
        </div>
      </nav>
    </div>
  )
}
