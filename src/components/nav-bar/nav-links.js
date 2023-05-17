import { Icon } from '@iconify/react';
import NavLinksBtns from '../shared/nav-btns';

export default function NavLinks() {
    return (
        <div className='overall-padding'>
            <div className='mt-2 px-5 md:px-0 md:w-full'>
                <div className='bg-[#8d8d8d66] rounded-xl px-2 py-2 flex gap-2 justify-between md:justify-center overflow-x-auto'>
                    <div className='flex gap-2 w-[100%] md:w-full md:w-none justify-between'>
                        <NavLinksBtns href={'/'} title={'Home'} bgCol={'#fff'} />
                        <NavLinksBtns href={'/'} title={'Payroll'} txtCol={'#fff'} bgCol={'#16166c'} />
                        <NavLinksBtns href={'/'} title={'Leave'} txtCol={'#fff'} bgCol={'#16166c'} />
                        <NavLinksBtns href={'/'} title={'Loan'} txtCol={'#fff'} bgCol={'#16166c'} />
                        <NavLinksBtns href={'/'} title={'Appraisal'} txtCol={'#fff'} bgCol={'#16166c'} />
                        <NavLinksBtns href={'/'} title={'Suscriptions'} txtCol={'#fff'} bgCol={'#16166c'} />
                        <div className='flex gap-2 justify-between'>
                            <button className='w-[90px] bmss:w-[120px] bmss:py-2 bg-[#16166c] text-[#fff] flex gap-2 justify-center items-center rounded-md'>
                                <span style={{color: '#fff'}} className='side-bar-paragraph'>Profile</span><Icon icon="iconamoon:profile-circle-fill" />
                            </button>
                            <button className='w-[90px] bmss:w-[120px] bmss:py-2 bg-[#16166c] text-[#fff] flex gap-2 justify-center items-center rounded-md'>
                                <span style={{color: '#fff'}} className='side-bar-paragraph'>Settings</span><Icon icon="material-symbols:settings-applications-rounded" />
                            </button>
                            <button className='w-[90px] bmss:w-[120px] bmss:py-2 bg-[#16166c] text-[#fff] flex gap-2 justify-center items-center rounded-md'>
                                <span style={{color: '#fff'}} className='side-bar-paragraph'>Logout</span><Icon icon="ri:logout-circle-line" />
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}