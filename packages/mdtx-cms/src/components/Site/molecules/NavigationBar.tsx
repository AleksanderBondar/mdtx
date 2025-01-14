import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MDtxLogo } from '@/src/assets';
import { GithubStars } from '@/src/components/Site/atoms/';
import { useAuthState } from '@/src/containers';
import { useRouter } from 'next/router';
import { useMDTXBackend } from '@/src/utils/useMDTXBackend';

const getRepositoryMDtx = async () => {
    const response = await fetch('https://api.github.com/repos/aexol-studio/mdtx', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const responseParse = await response.json();
    return responseParse;
};

export const NavigationBar = () => {
    const router = useRouter();
    const { handleModal, token, setIntegrations, handleSearchInService, logOut } = useAuthState();
    const { getConnections } = useMDTXBackend();
    const [stars, setStars] = useState<number>();
    const [hideNavbar, setHideNavbar] = useState(false);

    useEffect(() => {
        if (!stars)
            getRepositoryMDtx().then(response => {
                const { stargazers_count } = response;
                setStars(stargazers_count);
            });
    }, []);

    useEffect(() => {
        const scrollHandler = () => {
            const thisWindow: typeof window & {
                oldScroll?: number;
                scrollY?: number;
            } = window;
            if (thisWindow.innerWidth < 768) return;
            const scrolledTop = thisWindow.scrollY < 128 || (thisWindow.oldScroll || 0) > thisWindow.scrollY;
            scrolledTop ? setHideNavbar(false) : setHideNavbar(true);
            thisWindow.oldScroll = thisWindow.scrollY;
        };
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <nav
            className={`
        z-[99] top-0 w-[90%] lg:max-w-[1024px] lg:w-full left-[50%] translate-x-[-50%] flex justify-center items-center h-[6.4rem] bg-landing-background fixed transition-all duration-300'
        ${hideNavbar ? 'opacity-0' : 'opacity-1'}
      `}>
            <div className="mx-auto w-full lg:max-w-[976px] flex justify-between items-center relative">
                <div className="z-[99] min-w-[8.4rem] min-h-[3.4rem] flex items-center justify-center">
                    <Link aria-label="MDtx" href={'/'}>
                        <MDtxLogo />
                    </Link>
                </div>
                <div className="z-[99] gap-[0.8rem] flex items-center justify-center">
                    <Link
                        className="z-[99] hover:no-underline"
                        href={'https://github.com/aexol-studio/mdtx/stargazers'}>
                        <GithubStars stars={stars} />
                    </Link>
                    <div className="flex items-center gap-[0.4rem]">
                        <div
                            className="group cursor-pointer flex w-fit select-none [font-[400] text-[1.6rem] leading-[2.4rem] text-landing-gray0"
                            onClick={async () => {
                                if (token) {
                                    const conns = await getConnections();
                                    setIntegrations(conns);
                                    if (!conns) {
                                        logOut();
                                        return;
                                    }
                                    handleSearchInService(conns[0]);
                                    router.push('/editor');
                                } else {
                                    handleModal('login');
                                }
                            }}>
                            <p className="group-hover:underline">Login to MDTX</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
