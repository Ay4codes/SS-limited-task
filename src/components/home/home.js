import Header from "./header";
import SideNav from "./side-nav";
import { Icon } from '@iconify/react';

export default function Home({isClicked, setIsClicked}) {
    return (
        <div>
            {<div style={{transform: isClicked ? 'translateX(0%)' : 'translateX(100%)'}} className="fixed top-0 w-full h-full overflow-y-auto bg-[#00000052] z-[1000]">
                <div style={{transform: isClicked ? 'translateX(0%)' : 'translateX(100%)'}} className="flex justify-end mobile-nav-wrapper">
                    <div className="bg-white w-[70%] mt-20 pb-5">
                        <SideNav />
                    </div>
                </div>
            </div>}
            <div className="w-full flex fixed justify-between h-[100%] overall-padding mt-8 gap-5 mb-11">
                <div className="w-[20%] border-right h-[100vh] md:hidden">
                    <SideNav />
                </div>
                <div className="w-full overflow-y-auto">
                    <Header title={'Edit profile'} />

                    <div className="dashboard-contents px-11 md:px-5 py-5 overflow-y-auto mb-24">
                        <div className="flex items-center justify-between">
                            <div className="relative group">
                                <img className="w-[130px] bmss:w-[170px] bgs:w-[180px]" src="/founder1.png" alt="" />
                                <div className="absolute top-0 left-0 right-0 bottom-0 my-auto flex items-center justify-center">
                                    <span className=""><Icon className="hidden group-hover:block cursor-pointer" color="#fff" width={30} icon="material-symbols:cloud-upload" /></span>
                                </div>
                            </div>
                            <button className='py-1 px-3 bmss:py-2 bg-[#16166c] text-[#fff] flex gap-2 justify-center items-center rounded-md'>
                                <span style={{color: '#fff'}} className='side-bar-paragraph'>Upload photo</span><Icon color="#fff" icon="material-symbols:cloud-upload" />
                            </button>
                        </div>
                        <div className="1st-content w-full mt-14 mb-24">
                            <div className="flex justify-between md:flex-col md:gap-14">
                                <div className="w-[47%] md:w-full">
                                    <div className="flex items-center justify-between">
                                        <h3 style={{color: '#331a4b'}} className="sm-title-bg">Bio data information</h3>
                                        <img className='w-[20px]' src="/toggler.png" alt="" />
                                    </div>
                                    <table className="w-full table-auto mt-3" width={'100%'}>
                                        <tr>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Title</h3>
                                                <p className="paragraph mt-2">Mr.</p>
                                            </td>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">First name</h3>
                                                <p className="paragraph mt-2">Ayomide</p>
                                            </td>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Other names</h3>
                                                <p className="paragraph mt-2">Ay4codes</p>
                                            </td>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Last name</h3>
                                                <p className="paragraph mt-2">Ishola</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">L.G.A</h3>
                                                <p className="paragraph mt-2">Ona-ara</p>
                                            </td>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">State of origin</h3>
                                                <p className="paragraph mt-2">Oyo</p>
                                            </td>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Country</h3>
                                                <p className="paragraph mt-2">Nigeria</p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="w-[47%] md:w-full">
                                    <div className="flex items-center justify-between">
                                        <h3 style={{color: '#331a4b'}} className="sm-title-bg">Employee information</h3>
                                        <img className='w-[20px]' src="/toggler.png" alt="" />
                                    </div>
                                    <table className="w-full table-auto mt-3" width={'100%'}>
                                        <tr>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Employee number</h3>
                                                <p className="paragraph mt-2">091-610</p>
                                            </td>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Employee type</h3>
                                                <p className="paragraph mt-2">Full-Time</p>
                                            </td>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Resumption date</h3>
                                                <p className="paragraph mt-2">2023-06-01</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Designation</h3>
                                                <p className="paragraph mt-2">Frontend</p>
                                            </td>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Department</h3>
                                                <p className="paragraph mt-2">Enterprise unit</p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="w-[47%] mt-14 md:w-full">
                                    <div className="flex items-center justify-between">
                                        <h3 style={{color: '#331a4b'}} className="sm-title-bg">Contact information</h3>
                                        <img className='w-[20px]' src="/toggler.png" alt="" />
                                    </div>
                                    <table className="w-full table-auto mt-3" width={'100%'}>
                                        <tr>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Mobile number</h3>
                                                <p className="paragraph mt-2">ay4codes</p>
                                            </td>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Phone number</h3>
                                                <p className="paragraph mt-2">09161050849</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Primary email</h3>
                                                <p className="paragraph mt-2">ay4codes@gmail.com</p>
                                            </td>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Secondary email</h3>
                                                <p className="paragraph mt-2">isholaolawale256@gmail.com</p>
                                            </td>
                                        </tr>
                                    </table>
                            </div>
                            <div className="w-[47%] mt-14 md:w-full">
                                    <div className="flex items-center justify-between">
                                        <h3 style={{color: '#331a4b'}} className="sm-title-bg">Others</h3>
                                        <img className='w-[20px]' src="/toggler.png" alt="" />
                                    </div>
                                    <table className="w-full table-auto mt-3" width={'100%'}>
                                        <tr>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Signature</h3>
                                                <p className="paragraph mt-2">lorem</p>
                                            </td>
                                            <td className="py-2 px-2 w-[80px]">
                                                <h3 style={{color: '#331a4b'}} className="side-bar-paragraph">Fingerprint</h3>
                                                <p className="paragraph mt-2">lorem</p>
                                            </td>
                                        </tr>
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}