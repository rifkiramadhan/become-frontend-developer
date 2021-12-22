/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { setLogin } from '../../../services/auth';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };

    if (!email || !password) {
      toast.error('Email dan password Anda wajib diisi!');
    } else {
      const response = await setLogin(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success('Login Berhasil');
        const { token } = response.data;
        const tokenBase64 = btoa(token);
        Cookies.set('token', tokenBase64, { expires: 1 });
        router.push('/');
      }
    }
  };

  return (
        <>
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
            <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
            <div className="pt-50">
                <label className="form-label text-lg fw-medium color-palette-1 mb-10">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control rounded-pill text-lg"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="pt-30">
                <label
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >Password
                </label>
                <input
                  type="password"
                  className="form-control rounded-pill text-lg"
                  placeholder="Your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div className="button-group d-flex flex-column mx-auto pt-50">
                <button
                  type="button"
                  className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                  onClick={onSubmit}
                >Continue to Sign In
                </button>
                <Link href="/sign-up">
                  <a
                    className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
                  >Sign Up
                  </a>
                </Link>
            </div>
        </>
  );
}
