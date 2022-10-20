import Icon from "./icon";
import google from '../../../assets/logo/google.svg';
import insta from '../../../assets/logo/insta.svg';
import facebook from '../../../assets/logo/facebook.svg';
import twitter from '../../../assets/logo/twitter.svg';

export default function Footer() {
    return (
        <>
            <div className="w-full flex bg-[#000000] text-[#ffffff] pt-10 pb-6 justify-around" style={{fontFamily: ["Open Sans Condensed", "sans-serif",],}}>
                <div className="flex gap-4" >
                    <div className="w-9 h-9 bg-slate-500"></div>
                    <div>
                        <h3 className="text-2xl font-bold">
                            Lost&Found IIITA
                        </h3>
                        <p className="text-l font-light">
                            World's Greatest Collection of Lost Items
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-xl mb-1.5 font-bold">Follow Us On</h5>
                    <div className="flex justify-between gap-10">
                        <Icon src={google}></Icon>
                        <Icon src={twitter}></Icon>
                        <Icon src={facebook}></Icon>
                        <Icon src={insta}></Icon>
                    </div>
                </div>
            </div>
            <div className="w-full flex bg-[#000000] text-[#ffffff] justify-center font-light">
                &#169; Copyright&thinsp;&thinsp;<strong className="font-bold">&#183; Team Geekhaven</strong>
            </div>
        </>
    );
}
