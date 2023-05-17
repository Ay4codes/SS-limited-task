import { Icon } from '@iconify/react';


export default function SideNav() {

    function SideBarLink({title, isfirstchild}) {
        return (
            <div className='px-5 bmss:px-5 flex justify-between items-center mt-4 bmss:mt-8 md:mt-9'>
                <span style={{color: '#070707'}} className='side-bar-paragraph'>{title}</span>
                {isfirstchild ? <img className='w-[20px]' src="/toggler.png" alt="" /> : <img className='w-[20px]' src="/toggler2.png" alt="" />}
            </div>
        )
    }
    return (
        <div className="">
            <div className="side-nav-header bg-[#8d8d8d66] px-5 py-5 bmss:py-11 flex justify-between items-center">
                <span style={{color: '#331a4b'}} className="side-bar-paragraph">Home</span>
                <Icon icon="streamline:interface-setting-menu-parallel-hamburger-circle-navigation-parallel-hamburger-buttonmenu-circle" />
            </div>
            <div>
                <SideBarLink title={'Edit profile'} isfirstchild={true} />
                <SideBarLink title={'Medical'} isfirstchild={false} />
                <SideBarLink title={'Next of kin'} isfirstchild={false} />
                <SideBarLink title={'Dependants'} isfirstchild={false} />
                <SideBarLink title={'Education history'} isfirstchild={false} />
                <SideBarLink title={'Employment history'} isfirstchild={false} />
                <SideBarLink title={'Documents'} isfirstchild={false} />
            </div>
        </div>
    )
}