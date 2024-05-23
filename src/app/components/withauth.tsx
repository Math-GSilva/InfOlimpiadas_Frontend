import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import auth from '../../services/authService';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthHOC: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const verifyToken = async () => {
        const token = localStorage.getItem('token');
        if (!token || !await auth.veirifyToken(token)) {
          router.push('/login');
        }
      };

      verifyToken();
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;