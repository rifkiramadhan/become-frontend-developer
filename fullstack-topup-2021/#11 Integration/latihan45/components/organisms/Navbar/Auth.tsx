/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: '',
  });
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      // user Bisa Diganti Dengan userFromPayload
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.avatar = `${IMG}/${userFromPayload.avatar}`;
      setIsLogin(true);
      setUser(user);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/');
    setIsLogin(false);
  };

  if (isLogin) {
    return (
        <li className="nav-item my-auto dropdown d-flex">
            <div className="vertical-line d-lg-block d-none" />
            <div>
                <a
                  className="dropdown-toggle ms-lg-40"
                  href="/#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    <img
                      src={user.avatar}
                      className="rounded-circle"
                      width="40"
                      height="40"
                      alt=""
                    />
                </a>

                <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                    <li><Link href="/member"><a className="dropdown-item text-lg color-palette-2">My Profile</a></Link></li>
                    <li><Link href="/#"><a className="dropdown-item text-lg color-palette-2">Wallet</a></Link></li>
                    <li><Link href="/member/edit-profile"><a className="dropdown-item text-lg color-palette-2">Account Settings</a></Link></li>
                    <li><a onClick={onLogout} className="dropdown-item text-lg color-palette-2" href="/#">Log Out</a></li>
                </ul>
            </div>
        </li>
    );
  }
  return (
        <li className="nav-item my-auto">
            <Link href="/sign-in">
                <a
                  className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                  role="button"
                >
                      Sign In
                </a>
            </Link>
        </li>
  );
}
